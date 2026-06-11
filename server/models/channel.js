import { model, Schema } from "mongoose";

const ChannelSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["GROUP", "PRIVATE"],
      default: "GROUP",
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["TEXT", "VOICE"],
      default: "TEXT",
    },
    serverId: {
      type: Schema.Types.ObjectId,
      ref: "Server",
      required: true,
    },
  },
  { timestamps: true }
);

const Channel = model("Channel", ChannelSchema);

export default Channel;
