import User from "../models/user.js";
import Notification from "../models/notification.js";
import { uploadImg } from "../util/featues.js";
import z from "zod/v4";
import { loginSchema, registerSchema } from "../validators/authSchema.js";

export const Login = async (req, res) => {
  const { success, data, error } = loginSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({ error: z.flattenError(error) });
  }
  const { email, password } = data;
  const user = await User.findOne({ email });

  try {
    if (!user) {
      return res.status(404).json({ error: "Invalid Credentials" });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(404).json({ error: "Invalid Credentials" });
    }

    res.cookie("sid", user._id, {
      httpOnly: true,
      signed: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.json({ message: "logged in" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

export const Profile = async (req, res) => {
  const userId = req.user._id.toString();
  const user = await User.findById(userId).lean();

  res.status(200).json({
    id: user._id,
    email: user.email,
    name: user.name,
    picture: user.picture,
    bio: user.bio,
    skills: user.skills,
    nickname: user.nickName,
  });
};

export const Register = async (req, res) => {
  const { success, data, error } = registerSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({ error: z.flattenError(error) });
  }
  const { name, email, password, bio, skills } = data;

  const img = await uploadImg("users", req.file.buffer);
  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ message: "you alredy have an account" });
  }

  const Newuser = await User.create({
    name,
    email,
    password,
    bio,
    picture: img.secure_url,
    publicId: img.public_id,
    skills,
  });

  res.cookie("sid", Newuser._id, {
    httpOnly: true,
    signed: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({ message: "your account has been created!!" });
};

export const SendNotification = async (req, res) => {
  const { receiver } = req.body;

  const sender = req.user._id.toString();
  const existingRequest = await Notification.findOne({ sender, receiver });

  if (existingRequest) {
    return res.status(400).json({ message: "friend request already sent" });
  }

  if (sender == receiver) {
    return res
      .status(400)
      .json({ message: "can not send request to yourself" });
  }

  const newNotification = await Notification.create({
    sender,
    receiver,
  });

  if (!newNotification) {
    return res.status(500).json({ message: "could not send friend request" });
  }

  res.status(200).json({ message: "friend request sent" });
};

export const getNotification = async (req, res) => {
  try {
    const requesjs = await Notification.find({
      status: "pending",
      receiver: req.user._id,
    }).populate("sender", "nickName picture name");

    const users = requesjs.map((req) => req.sender);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
