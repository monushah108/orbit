import Message from "../models/message.js";
import Chat from "../models/chat.js";
import User from "../models/user.js";
import Servers from "../models/servers.js";
import ChatMember from "../models/chatMember.js";

/*

getAllChatMsgs what it will have 

what -

*first when someone is chatting with his friend than other user's details will be shown on the chat header and user panel 

*second when user does chat in chatroom in server channel than channel details will be given like memeber details ect.

how - 

get the type of chat like it's dm or public & priviate than fetch the details according to the chat type 
-if chat is dm than fetch the details of users who were conntted by that chat room 
- and when we will have the chat members than show the details of that private chat (dm) 



*/

//chatRoom methods

export const Getchats = async (req, res) => {
  const ChatId = req.params.id;
  const userId = req.user._id;

  const chatDetails = await Chat.findById(ChatId);

  try {
    // if chat is dm
    if (chatDetails.type == "DM") {
      const members = await ChatMember.find({
        userId: { $ne: userId },
      })
        .populate("userId", "name picture nickName skills bio")
        .lean();

      const formated = {
        chatDetails: members.map(({ userId }) => ({ ...userId })),
      };

      if (!formated) {
        return res.status(403).json({ message: "got nothing!!" });
      }

      return res.status(200).json(formated);
    }

    // if chat is public or private

    const chatRoom = await Chat.find({ _id: ChatId });

    const isMember = await ChatMember.findById(ChatId);

    if (!isMember) {
      return res
        .status(403)
        .json({ message: "you are not connected to this room" });
    }

    const formated = {
      chatDetails: chatRoom.map(({ desc, category, name }) => ({
        desc,
        category,
        name,
      })),
    };

    return res.status(200).json(formated);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to fetch messages",
    });
  }
};

// create new Channel chat
export const Createchat = async (req, res) => {
  const userId = req.user._id;
  const channelId = req.params.id;
  const { name, type } = req.body;

  const CheckOwner = await User.findOne({ ownerId: userId });

  if (!CheckOwner) {
    return res
      .status(400)
      .json({ message: "you don't have permision to create " });
  }

  try {
    const chats = await Chat.find({ channelId }).lean();

    if (chats.length > 5) {
      return res
        .status(400)
        .json({ message: "you can not create more than 5 chat room" });
    }

    const chat = await Chat.create({
      name,
      channelId,
      type,
    });

    return res.status(201).json({ message: "chat created " });
  } catch (err) {
    return res.status(500).json(err);
  }
};

//  delete channel chat
export const Deletechat = async (req, res) => {
  const user = req.user._id;
  const chatId = req.params.id;

  const checkOwner = await Servers.find({ ownerId: user, serverId });

  if (!checkOwner) {
    return res.status(400).json({ message: "you can not delete this chat" });
  }

  try {
    await Chat.findByIdAndDelete(chatId);
    await ChatMember.deleteMany({ chatId, user });
    await Message.deleteMany({ chatId });

    return res.status(201).json({ message: "delete succesfully" });
  } catch (err) {
    return res.status(500).json(err);
  }
};
