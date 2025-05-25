// sanityClient.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "YOUR_SANITY_PROJECT_ID", // Replace with your actual Sanity Project ID
  dataset: "production", // Or your dataset name
  apiVersion: "2023-10-05", // Or the API version you're using
  useCdn: process.env.NODE_ENV === "production", // Enable CDN in production
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
