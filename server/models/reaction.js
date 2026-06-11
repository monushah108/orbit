import { Schema, model } from "mongoose";

const reactionSchema = new Schema(
  {
    emoji: {
      type: String,
      required: true,
    },
    messageId: {
      type: Schema.Types.ObjectId,
      ref: "Message",
      required: true,
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Reaction = model("Reaction", reactionSchema);

export default Reaction;
