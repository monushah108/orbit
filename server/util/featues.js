import { v2 as cloudinary } from "cloudinary";
// import dotenv from "dotenv";

// dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

// uplaod img

export const uploadImg = async (folder, file) => {
  const uploadResult = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,
          resource_type: "image",
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      )
      .end(file);
  });

  return uploadResult;
};
