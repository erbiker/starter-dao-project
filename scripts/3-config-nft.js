import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x8E448b7bf9Ab87c18eD660e2B404d434c337B0C7",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Librarian Batch",
        description: "This NFT will give you access to DA'Library!",
        image: readFileSync("scripts/assets/librarycard.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()