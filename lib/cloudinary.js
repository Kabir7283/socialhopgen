import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dedqkvj2j",
  api_key:"949945428923168",
  api_secret:"01EVamgia16ccrLns8h3pNBan8o",
});

export const cld = globalThis.cloudinary || cloudinary;

if (process.env.NODE_ENV !== "production") globalThis.cloudinary = cld;