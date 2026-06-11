import { model } from "mongoose";
import { Schema } from "mongoose";

const serverMemberSchema = new Schema(
  {
    serverId: {
      type: Schema.Types.ObjectId,
      ref: "Server",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "MODERATOR", "MEMBER"],
      default: "MEMBER",
    },
  },
  { timestamps: true }
);

const ServerMember = model("ServerMember", serverMemberSchema);
export default ServerMember;
