import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const ChatMemberSchema = new Schema({
  ChatId: {
    type: Schema.Types.ObjectId,
    ref: "Chat",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

const ChatMember =
  mongoose.models.ChatMember || model("ChatMember", ChatMemberSchema);

export default ChatMember;
