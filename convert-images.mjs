import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./src/assets";
const outputDir = "./src/assets/webp";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();

  if (![".png", ".jpg", ".jpeg"].includes(ext)) {
    continue;
  }

  const inputPath = path.join(inputDir, file);
  const outputName = path.basename(file, ext) + ".webp";
  const outputPath = path.join(outputDir, outputName);

  await sharp(inputPath)
    .webp({ quality: 82 })
    .toFile(outputPath);

  console.log(`Convertido: ${file} -> ${outputName}`);
}

console.log("Conversão concluída.");