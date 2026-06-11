import mongoose from "mongoose";
import z from "zod/v4";

export const messageSchema = z.object({
  content: z.string(),
  type: z.boolean(),
  channelId: z.instanceof(mongoose.Types.ObjectId).optional(),
  receiverId: z.instanceof(mongoose.Types.ObjectId).optional(),
  repliedId: z.instanceof(mongoose.Types.ObjectId),
});
