import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, 'public');

async function optimizeImage(inputPath, outputPath, quality = 60, maxWidth = 1920) {
  try {
    const originalStats = statSync(inputPath);
    const originalSize = originalStats.size;

    const metadata = await sharp(inputPath).metadata();

    // Resize if image is larger than maxWidth
    let pipeline = sharp(inputPath);
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    const info = await pipeline
      .jpeg({ quality, progressive: true, mozjpeg: true })
      .toFile(outputPath);

    const reduction = ((1 - info.size / originalSize) * 100).toFixed(1);

    console.log(`✓ Optimized ${inputPath}`);
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB (${metadata.width}x${metadata.height})`);
    console.log(`  Optimized: ${(info.size / 1024 / 1024).toFixed(2)}MB (${info.width}x${info.height})`);
    console.log(`  Reduction: ${reduction}%\n`);

    return info;
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('Starting aggressive image optimization...\n');

  const images = [
    {
      input: join(publicDir, 'hero-background.jpg'),
      output: join(publicDir, 'hero-background-optimized.jpg'),
      quality: 60,
      maxWidth: 1920
    },
    {
      input: join(publicDir, 'trust-background.jpg'),
      output: join(publicDir, 'trust-background-optimized.jpg'),
      quality: 60,
      maxWidth: 1920
    }
  ];

  for (const img of images) {
    if (existsSync(img.input)) {
      await optimizeImage(img.input, img.output, img.quality, img.maxWidth);
    } else {
      console.log(`⚠ File not found: ${img.input}`);
    }
  }

  console.log('Image optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Review the optimized images in your browser');
  console.log('2. If quality is acceptable, run the replacement script');
}

main();
