import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./src/assets/webp";
const outputDir = "./src/assets/webp-optimized";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs
  .readdirSync(inputDir)
  .filter((file) => file.endsWith(".webp"));

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  const isHero = file === "adrieli-capa.webp";
  const maxWidth = isHero ? 1400 : 1200;

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const shouldResize =
    metadata.width && metadata.width > maxWidth;

  let pipeline = sharp(inputPath);

  if (shouldResize) {
    pipeline = pipeline.resize({
      width: maxWidth,
      withoutEnlargement: true,
    });
  }

  await pipeline
    .webp({ quality: 82 })
    .toFile(outputPath);

  console.log(
    `${file} -> ${
      shouldResize ? `redimensionada para até ${maxWidth}px` : "mantida"
    }`
  );
}

console.log("Otimização concluída.");