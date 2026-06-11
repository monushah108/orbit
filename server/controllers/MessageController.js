import mongoose from "mongoose";
import Chat from "../models/chat.js";
import Message from "../models/message.js";
import ChatMember from "../models/chatMember.js";
import { Getrtm, Sendrtm } from "../util/methods.js";

export const getMessages = async (req, res) => {
  const userId = req.user._id;
  const ChatId = req.params.id;

  try {
    const isMember = await ChatMember.findOne({ userId });

    if (!isMember) {
      return res
        .status(403)
        .json({ message: "you are forbiben to see these messages" });
    }

    const Msgs = await Message.find({
      ChatId,
    })
      .populate("repliedId")
      .lean();

    const formated = {
      messages: Msgs.map((m) => ({
        msgId: m._id,
        message: m.content,
        sender: m.senderId,
        repliedMsg: m.repliedId?.content,
        isDeleted: m.isDeleted,
        isEdited: m.isEdited,
      })),
    };

    return res.status(200).json(formated);
  } catch (err) {
    return res.status(500).json({
      message: "Failed to fetch messages",
    });
  }
};

/*
sendMessage < user can send message it wil take userId  and make chat 
> existing chat 
 */

export const sendMessage = async (req, res) => {
  const userId = req.user._id;
  const ChatId = req.params.id; // it does not exists
  const { content, repliedId, type, channelId, reciverId } = req.body; // channelId does not exists

  const existingChat = await Chat.findById(ChatId); // if it does not exists

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const stream = Getrtm((msg) => msg);

    console.log(stream);

    if (existingChat) {
      // create new message
      const msg = await Message.insertOne({
        ChatId,
        senderId: userId,
        content,
        repliedId,
      });

      return res.status(201).json(msg);
    }

    // send message to non existing chat

    const newChat = await Chat.insertOne(
      {
        type,
        channelId,
      },
      { session },
    );

    await ChatMember.insertOne(
      {
        ChatId: newChat._id,
        userId,
      },
      { session },
    );

    const msg = await Message.insertOne(
      {
        content,
        senderId,
        ChatId,
        repliedId,
      },
      { session },
    );

    await session.commitTransaction();

    const formated = {
      messages: msg.map((m) => ({
        msgId: m._id,
        message: m.content,
        sender: m.senderId,
        repliedMsg: m.repliedId?.content,
        isDeleted: m.isDeleted,
        isEdited: m.isEdited,
      })),
    };

    return res.status(201).json(formated);
  } catch (err) {
    session.abortTransaction();
    return res.status(500).json(err);
  }
};

/* 
update messsage text 
*/

export const updateMessage = async (req, res) => {
  const chatId = req.params.id;

  const { content, msgId, reciverId } = req.body;

  try {
    const updateMsg = await Message.findByIdAndUpdate({ msgId, content });
    // Sendrtm(updateMsg, reciverId, null, "update:message");
    if (!updateMsg) {
      return res.status(409).json({ message: "update failed" });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

// delete message

export const deleteMessage = async (req, res) => {
  const msgId = req.params.id;
  try {
    await Message.findByIdAndDelete(msgId);
  } catch (err) {
    return res.status(500).json(err);
  }
};
