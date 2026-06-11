import { model, Schema } from "mongoose";

const MediaSchema = new Schema({
  fileUrl: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: function () {
      return this.fileType === "image" || this.fileType === "video";
    },
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  fileSize: {
    type: Number,
    required: true,
  },
});

const Media = model("Media", MediaSchema);
export default Media;
