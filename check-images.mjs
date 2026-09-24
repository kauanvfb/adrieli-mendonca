import fs from "fs";
import path from "path";
import sharp from "sharp";

const dir = "./src/assets/webp";

const files = fs
  .readdirSync(dir)
  .filter((file) => file.endsWith(".webp"));

const results = [];

for (const file of files) {
  const filePath = path.join(dir, file);

  const metadata = await sharp(filePath).metadata();

  results.push({
    file,
    width: metadata.width,
    height: metadata.height,
    megapixels:
      ((metadata.width * metadata.height) / 1_000_000).toFixed(1),
  });
}

results
  .sort((a, b) => b.width * b.height - a.width * a.height)
  .forEach((img) => {
    console.log(
      `${img.file.padEnd(40)} ${img.width}x${img.height}   ${img.megapixels} MP`
    );
  });