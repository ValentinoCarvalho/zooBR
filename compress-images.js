import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT_DIR = './public/images'; // 👈 muda para o caminho da sua pasta
const OUTPUT_DIR = './src/assets/images-compressed';
const QUALITY = 80;

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];

const files = fs.readdirSync(INPUT_DIR).filter(file =>
  extensions.includes(path.extname(file).toLowerCase())
);

console.log(`🔍 ${files.length} imagem(ns) encontrada(s) em ${INPUT_DIR}\n`);

for (const file of files) {
  const inputPath = path.join(INPUT_DIR, file);
  const outputName = path.parse(file).name + '.webp';
  const outputPath = path.join(OUTPUT_DIR, outputName);

  try {
    const info = await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const original = fs.statSync(inputPath).size;
    const compressed = info.size;
    const reduction = (((original - compressed) / original) * 100).toFixed(1);
    const originalKB = (original / 1024).toFixed(0);
    const compressedKB = (compressed / 1024).toFixed(0);

    console.log(`✅ ${file} → ${outputName}`);
    console.log(`   ${originalKB}KB → ${compressedKB}KB (${reduction}% menor)\n`);
  } catch (err) {
    console.error(`❌ Erro em ${file}:`, err.message);
  }
}

console.log('✨ Concluído!');
