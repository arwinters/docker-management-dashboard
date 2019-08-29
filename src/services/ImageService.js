import { docker } from "./config";

export const allImages = async function() {
  console.log("Querying all images...");
  const images = await docker.listImages({ all: false });
  console.log("Images: ", images);
  return images;
};
