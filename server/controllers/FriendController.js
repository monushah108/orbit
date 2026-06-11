import mongoose from "mongoose";
import Friend from "../models/friends.js";
import Message from "../models/message.js";
import Notification from "../models/notification.js";
import User from "../models/user.js";
import ChatMember from "../models/chatMember.js";
import Chat from "../models/chat.js";

// get all of your friends
// it has bug
export const getFriends = async (req, res) => {
  const user = req.user._id;

  try {
    const chat = await ChatMember.find({
      userId: user,
    })
      .select("userId ChatId _id")
      .lean();

    const chatMap = new Map(chat.map((c) => [c.userId.toString(), c.ChatId]));

    const chatUserIds = chat.map((c) => c.userId);
    const Friends = await Friend.find({
      userId: { $in: chatUserIds },
    })
      .populate("friendId", "name picture nickName")
      .lean();

    const pending = await Notification.find({
      $or: [{ receiver: user }, { sender: user }],
      status: "pending",
    })
      .populate("receiver", "picture name id")
      .lean();

    if (!Friends.length && !pending.length) {
      return res.status(404).json({ message: "you have no friens" });
    }

    const AllFriends = {
      Friend: Friends.map(({ friendId, userId }) => ({
        ...friendId,
        chatId: chatMap.get(userId.toString()),
      })),
      pendings: pending.map(({ _id, sender, receiver, createdAt }) => ({
        ...receiver,
        requestId: _id,
        sender,
        Isreceiver: receiver._id.toString() == user,
        createdAt,
      })),
    };

    return res.status(200).json({ AllFriends });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
};

// remove friend (delete)

export const removeFriend = async (req, res) => {
  const userId = req.user._id;
  const friendId = req.params.id;

  const session = await mongoose.startSession();

  session.startTransaction();

  try {
    await Friend.deleteMany({ userId, friendId }, { session });

    await Message.deleteMany({ senderId: friendId }, { session });

    session.commitTransaction();

    res.status(200).json({ message: "deleted successfully" });
  } catch (err) {
    console.log(err);
    session.abortTransaction();
    return res.status(500).json({ err });
  }
};

// search user

export const sendFriendRequest = async (req, res) => {
  const nickName = req.query.nickName;
  const sender = req.user._id;

  const receiver = await User.findOne({ nickName });

  try {
    if (!receiver) {
      return res
        .status(404)
        .json({ message: "there is no user with this user nickname" });
    }

    const existingRequest = await Notification.findOne({
      sender,
      receiver: receiver._id,
      status: "pending",
    });

    if (existingRequest) {
      return res.status(400).json({ message: "request alredy sent!!" });
    }

    await Notification.create({
      sender,
      receiver: receiver._id,
    });

    return res.status(201).json({ message: "request sent!!" });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

// accept friend request

export const acceptRequest = async (req, res) => {
  const userId = req.user._id;
  const { status } = req.query;
  const id = req.params.id;

  const session = await mongoose.startSession();

  session.startTransaction();

  try {
    const request = await Notification.findById(id).session(session);

    await Notification.updateOne({ _id: id }, { status }, { session });

    if (status == "accept" && request) {
      const chat = await Chat.insertOne(
        {
          type: "DM",
        },
        { session },
      );

      await Friend.insertMany(
        [
          {
            userId,
            friendId: request.sender,
          },
          {
            userId: request.sender,
            friendId: userId,
          },
        ],
        { session },
      );

      await ChatMember.insertMany(
        [
          {
            ChatId: chat._id,
            userId,
          },
          {
            ChatId: chat._id,
            userId: request.sender,
          },
        ],
        { session },
      );
      await session.commitTransaction();
      session.endSession();
      return res
        .status(201)
        .json({ message: `your friend request got ${status}ed` });
    } else {
      return res
        .status(400)
        .json({ message: `your friend request got ${status}ed` });
    }
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.log(err);
    return res.status(500).json({ err });
  }
};
