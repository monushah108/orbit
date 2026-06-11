import { model, Schema } from "mongoose";

const ServerSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    pictureId: {
      type: String,
      required: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Servers = model("Server", ServerSchema);

export default Servers;
