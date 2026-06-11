import { model, Schema } from "mongoose";

const NotifySchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected", "seen"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    expires: 7 * 24 * 60 * 60,
    default: Date.now,
  },
});

const Notification = model("Notification", NotifySchema);
export default Notification;
