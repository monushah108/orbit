import mongoose, { Schema, model } from "mongoose";
import { required } from "zod/mini";

const Chatschema = new Schema(
  {
    type: {
      type: String,
      enum: ["DM", "GROUP", "PRIVATE"],
      default: "GROUP",
    },
    name: {
      type: String,
      trim: true,
      required: function () {
        return this.type === "GROUP" || this.type === "PRIVATE";
      },
    },
    channelId: {
      type: Schema.Types.ObjectId,
      ref: "Channel",
      required: function () {
        return this.type === "GROUP" || this.type === "PRIVATE";
      },
    },
    desc: {
      type: String,
      required: function () {
        return this.type === "GROUP" || this.type === "PRIVATE";
      },
    },
    category: {
      type: String,
      enum: ["TEXT", "VOICE"],
      default: "TEXT",
    },
  },
  { timestamps: true },
);

const Chat = mongoose.models.Chat || model("Chat", Chatschema);

export default Chat;
