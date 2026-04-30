const sharp = require("sharp");
const path = require("path");

async function createFavicon() {
  try {
    // Use stephana-portrait-6.jpeg as the source (tight portrait)
    const inputPath = path.join(__dirname, "../public/stephana-portrait-6.jpeg");
    const outputPath = path.join(__dirname, "../public/favicon.ico");

    // Load image, crop to face area, and generate favicon
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Calculate crop dimensions (center crop for headshot)
    // Assuming portrait orientation, crop width x height from center
    const size = Math.min(metadata.width, metadata.height);
    const left = Math.max(0, (metadata.width - size) / 2);
    const top = Math.max(0, (metadata.height - size * 0.7) / 2); // Adjust ratio for face positioning

    // Crop, resize to favicon size, and save
    await sharp(inputPath)
      .extract({
        left: Math.round(left),
        top: Math.round(top),
        width: Math.round(size),
        height: Math.round(size),
      })
      .resize(256, 256, { fit: "cover" })
      .toFile(outputPath.replace(".ico", "-256.png"));

    await sharp(inputPath)
      .extract({
        left: Math.round(left),
        top: Math.round(top),
        width: Math.round(size),
        height: Math.round(size),
      })
      .resize(64, 64, { fit: "cover" })
      .toFile(path.join(__dirname, "../public/favicon-64.png"));

    await sharp(inputPath)
      .extract({
        left: Math.round(left),
        top: Math.round(top),
        width: Math.round(size),
        height: Math.round(size),
      })
      .resize(32, 32, { fit: "cover" })
      .toFile(path.join(__dirname, "../public/favicon-32.png"));

    console.log("✓ Favicons created successfully");
    console.log("  - public/favicon-256.png (256x256)");
    console.log("  - public/favicon-64.png (64x64)");
    console.log("  - public/favicon-32.png (32x32)");
  } catch (error) {
    console.error("Error creating favicon:", error);
    process.exit(1);
  }
}

createFavicon();
