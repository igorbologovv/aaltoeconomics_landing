import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const INPUT_DIR = path.resolve("../frontend/public/images");
const OUTPUT_DIR = path.resolve("../frontend/public/images_optimized");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...(await walk(fullPath)));
    } else {
      results.push(fullPath);
    }
  }

  return results;
}

function shouldProcess(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return IMAGE_EXTENSIONS.has(ext);
}

async function processImage(inputPath) {
  const relativePath = path.relative(INPUT_DIR, inputPath);
  const parsed = path.parse(relativePath);

  const outputDir = path.join(OUTPUT_DIR, parsed.dir);
  await ensureDir(outputDir);

  const outputPath = path.join(outputDir, `${parsed.name}.jpg`);

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const hasAlpha = Boolean(metadata.hasAlpha);

  if (hasAlpha) {
    const webpPath = path.join(outputDir, `${parsed.name}.webp`);

    await image
      .rotate()
      .resize({
        width: 2400,
        height: 2400,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 95 })
      .toFile(webpPath);

    return { inputPath, outputPath: webpPath, format: "webp" };
  }

  await image
    .rotate()
    .resize({
      width: 2400,
      height: 2400,
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({
      quality: 94,
      mozjpeg: true,
    })
    .toFile(outputPath);

  return { inputPath, outputPath, format: "jpg" };
}

async function main() {
  await ensureDir(OUTPUT_DIR);

  const allFiles = await walk(INPUT_DIR);
  const imageFiles = allFiles.filter(shouldProcess);

  console.log(`Found ${imageFiles.length} image(s).`);

  for (const file of imageFiles) {
    try {
      const result = await processImage(file);
      console.log(`OK: ${result.inputPath} -> ${result.outputPath}`);
    } catch (error) {
      console.error(`FAIL: ${file}`, error);
    }
  }

  console.log("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});