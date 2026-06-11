import { Schema, model } from "mongoose";

const MessageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    ChatId: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },

    content: {
      type: String,
      default: " ",
      trim: true,
    },

    repliedId: {
      type: Schema.Types.ObjectId,
      ref: "Message",
      default: null,
    },

    isEdited: {
      type: Boolean,
      default: false,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Message = model("Message", MessageSchema);
export default Message;
