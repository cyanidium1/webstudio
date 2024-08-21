import path from 'path';
import fs from 'fs';
import { createHash } from 'crypto';

export async function generateOgImage(props) {
  const params = new URLSearchParams(props);
  const url = `file:${path.join(
    process.cwd(),
    `src/pages/articles/og-image.html?${params}`
  )}`;

  const hash = createHash('md5').update(url).digest('hex');
  const ogImageDir = path.join(process.cwd(), `public/og`);
  const imageName = `${hash}.png`;
  const imagePath = `${ogImageDir}/${imageName}`;
  const publicPath = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/og/${imageName}`;

  try {
    fs.statSync(imagePath);
    return publicPath;
  } catch (error) {
    // файл не существует, так что его нужно создать
  }

  // Здесь должен был быть код для генерации изображения с использованием Puppeteer
  // Но его больше нет, и вы можете либо заменить его другим методом, либо убрать эту функцию

  // Если генерация изображения нужна, рассмотрите использование других инструментов, таких как
  // генерация изображения на сервере с помощью Node.js, Canvas API, или внешних API для генерации изображений.

  return publicPath; // Возвращаем путь, даже если изображение не создано (может требовать доработки)
}
