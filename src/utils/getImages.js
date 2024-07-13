// src/utils/getImages.js
import fs from 'fs';
import path from 'path';

export function getImages() {
  const imageDir = path.join(process.cwd(), 'public', 'image');
  return fs.readdirSync(imageDir)
    .filter(file => file.endsWith('.jpg'))
    .map(file => `/image/${file}`);
}
