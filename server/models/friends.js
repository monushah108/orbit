import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const Friendschema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  friendId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["block", "accept", "mute"],
    default: "accept",
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

const Friend = model("Friend", Friendschema);

export default Friend;
