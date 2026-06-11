import Channel from "../models/channel.js";
import Chat from "../models/chat.js";
import Media from "../models/Media.js";
import Message from "../models/message.js";
import mongoose from "mongoose";
import ServerMember from "../models/serverMember.js";

// get the channels
export const getChannels = async (req, res) => {
  const userId = req.user._id;
  const serverId = req.params.id;

  try {
    const channel = await Channel.find({ serverId }).lean();
    const members = await ServerMember.find({ serverId })
      .populate("userId", "name picture")
      .lean();

    const Ids = channel.map((channelId) => channelId._id);

    const Chatrooms = await Chat.find({
      channelId: { $in: Ids },
    }).lean();

    const formated = {
      channel,
      members: members.map((m) => ({
        ...m.userId,
        role: m.role,
        joinedAt: m.joinedAt,
      })),
      Chatrooms,
    };

    return res.status(201).json(formated);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

// make channel in specific server
export const createChannel = async (req, res) => {
  const { type, name, serverId } = req.body;

  try {
    const channel = await Channel.create({
      type,
      name,
      serverId,
    });
    if (!channel) {
      return res.status(400).json({ error: "Channel creation failed" });
    }
    return res.status(201).json({ message: "Channel created successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Server Error" });
  }
};

// delete specific Channel
export const deletedChannel = async (req, res) => {
  const channelId = req.params.channelId;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const chat = await Chat.findOne({ channelId });

    await Channel.deleteOne({ _id: channelId }, { session });
    await Chat.deleteMany({ chatId: chat._id }, { session });
    await Message.deleteMany({ channelId }, { session }); // this has some ever
    await Media.deleteMany({ channelId }, { session }); // this has some ever

    session.commitTransaction();

    return res.status(200).json({ message: "Channel deleted successfully" });
  } catch (err) {
    session.abortTransaction();
    return res.status(500).json({ error: "Server Error" });
  }
};

// update channel
export const updateChannel = async (req, res) => {
  const channelId = req.params.channelId;
  const { name } = req.body;

  try {
    const channel = await Channel.findByIdAndUpdate(
      channelId,
      { name },
      { new: true },
    );

    if (!channel) {
      return res.status(404).json({ error: "Channel not found" });
    }

    return res.status(200).json({ message: "Channel updated successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Server Error" });
  }
};
