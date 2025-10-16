import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, 'public');

async function optimizeImage(inputPath, outputPath, quality = 80) {
  try {
    const info = await sharp(inputPath)
      .jpeg({ quality, progressive: true, mozjpeg: true })
      .toFile(outputPath);

    const originalSize = (await sharp(inputPath).metadata()).size;
    const reduction = ((1 - info.size / originalSize) * 100).toFixed(1);

    console.log(`✓ Optimized ${inputPath}`);
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  Optimized: ${(info.size / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  Reduction: ${reduction}%\n`);

    return info;
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('Starting image optimization...\n');

  const images = [
    {
      input: join(publicDir, 'hero-background.jpg'),
      output: join(publicDir, 'hero-background-optimized.jpg'),
      quality: 75
    },
    {
      input: join(publicDir, 'trust-background.jpg'),
      output: join(publicDir, 'trust-background-optimized.jpg'),
      quality: 75
    }
  ];

  for (const img of images) {
    if (existsSync(img.input)) {
      await optimizeImage(img.input, img.output, img.quality);
    } else {
      console.log(`⚠ File not found: ${img.input}`);
    }
  }

  console.log('Image optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Review the optimized images in the public folder');
  console.log('2. If satisfied, rename them to replace the originals');
  console.log('3. Delete this script if no longer needed');
}

main();
