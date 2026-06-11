import { z } from "zod/v4";

export const createSchema = z.object({
  name: z
    .string("please enter server name")
    .min(5, "server name should be min at 5 digits")
    .max(8, "server can be max at 8 digits"),
});
