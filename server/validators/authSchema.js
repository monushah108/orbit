import { z } from "zod/v4";
import { ObjectId } from "mongodb";

export const loginSchema = z.object({
  email: z.email("please enter email"),
  password: z
    .string("please enter password")
    .min(5, "password should be at min 5 digit")
    .max(8, "password can be at max 8 digits"),
});

export const registerSchema = loginSchema.extend({
  name: z.string("please").min(4).max(6),
});

export const notification = z.object({
  receiver: z.instanceof(ObjectId),
});
