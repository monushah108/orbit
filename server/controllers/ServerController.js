import mongoose from "mongoose";
import Channel from "../models/channel.js";
import ServerMember from "../models/serverMember.js";
import Servers from "../models/servers.js";
import Chat from "../models/chat.js";
import { uploadImg } from "../util/featues.js";
import { createSchema } from "../validators/serverSchema.js";

export const getAllserver = async (req, res) => {
  const userId = req.user._id;

  try {
    const serverMember = await ServerMember.find({
      userId,
      role: { $ne: "ADMIN" },
    })
      .populate("serverId", "name picture updatedAt ownerId id")
      .lean();
    const server = await Servers.find({ ownerId: userId }).lean();

    const serverFormate = [...serverMember, ...server];

    res.status(200).json(serverFormate);
  } catch (err) {
    return res.status(500).json({ err });
  }
};

export const createServer = async (req, res) => {
  const { success, data, error } = createSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({ error: z.flattenError(error) });
  }

  const { name } = body;
  const ownerId = req.user._id;

  const picture = await uploadImg("servers", req.file.buffer);
  const session = await mongoose.startSession();

  session.startTransaction();

  try {
    const Newserver = await Servers.insertOne(
      {
        picture: picture.secure_url,
        pictureId: picture.public_id,
        name,
        ownerId,
      },
      { session },
    );

    const NewserverMember = await ServerMember.insertOne(
      {
        serverId: Newserver._id,
        userId: ownerId,
        role: "ADMIN",
      },
      { session },
    );

    const NewChannels = await Channel.insertMany(
      [
        {
          name: "general",
          serverId: Newserver._id,
          category: "TEXT",
        },
        {
          name: "voice-chat",
          serverId: Newserver._id,
          category: "VOICE",
        },
      ],
      { session },
    );

    const chatRooms = await Chat.insertMany(
      [
        {
          name: "Time Waste room",
          channelId: NewChannels[0]._id,
          category: "TEXT",
        },
        {
          name: "Serious room",
          channelId: NewChannels[0]._id,
          category: "TEXT",
        },
        {
          name: "Fun Voice room",
          channelId: NewChannels[1]._id,
          category: "VOICE",
        },
        {
          name: "Code Voice room",
          channelId: NewChannels[1]._id,
          category: "VOICE",
        },
      ],
      { session },
    );

    session.commitTransaction();

    res.status(201).json({ message: "Server created successfully" });
  } catch (err) {
    console.log(err);
    session.abortTransaction();
    return res.status(500).json({ err });
  }
};

export const deleteServer = async (req, res) => {
  const serverId = req.params.serverId;
  const ownerId = req.user._id;

  const server = await Servers.findById(ownerId);

  try {
    await Servers.findByIdAndDelete(serverId);
    await ServerMember.deleteMany({ serverId });
    await Channel.deleteMany({ serverId });

    return res.status(200).json({ message: "Server deleted successfully" });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

export const updateServer = async (req, res) => {
  const serverId = req.params.id;
  const { name, picture } = req.body;

  const isvalidPicture = Buffer.isBuffer(picture);

  if (!isvalidPicture) {
    return res.status(400).json({ error: "picture is not valid" });
  }

  try {
    const updatedServer = await Servers.findByIdAndUpdate(
      serverId,
      { name, picture },
      { new: true },
    );

    if (!updatedServer) {
      return res.status(404).json({ message: "Server not found" });
    }
    return res.status(200).json({ updatedServer });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

export const AddMemberToServer = async (req, res) => {
  const serverId = req.params.serverId;
  const userId = req.params.userId;

  try {
    const newMember = await ServerMember.insertOne({
      serverId,
      userId,
      role: "MEMBER",
    });
    if (!newMember) {
      return res
        .status(400)
        .json({ message: "Unable to add member to server" });
    }
    return res
      .status(201)
      .json({ message: "Member added to server successfully" });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

export const RemoveMemberFromServer = async (req, res) => {
  const serverId = req.params.serverId;
  const userId = req.params.userId;

  try {
    const removedMember = await ServerMember.deleteOne({
      serverId,
      userId,
    });
    if (!removedMember) {
      return res
        .status(400)
        .json({ message: "Unable to remove member from server" });
    }
    return res
      .status(200)
      .json({ message: "Member removed from server successfully" });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

export const getserverMembers = async (req, res) => {
  const serverId = req.params.serverId;

  try {
    const serverMembers = await ServerMember.find({ serverId })
      .populate("userId", "name", "nickname")
      .lean();
    return res.status(200).json({ serverMembers });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

export const LeaveServer = async (req, res) => {
  const serverId = req.params.serverId;
  const userId = req.params.userId;

  try {
    const leftMember = await ServerMember.deleteOne({
      serverId,
      userId,
    });
    if (!leftMember) {
      return res.status(400).json({ message: "Unable to leave server" });
    }
    return res.status(200).json({ message: "Left server successfully" });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
