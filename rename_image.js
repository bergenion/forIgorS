const fs = require('fs');
const path = require('path');

// Используем текущую рабочую директорию (где находится скрипт)
const basePath = __dirname;
const oldPath = path.join(basePath, 'src', 'assets', 'images', 'image_1.jpg');
const newPath = path.join(basePath, 'src', 'assets', 'images', 'icon-email-red.jpg');

try {
  fs.renameSync(oldPath, newPath);
  console.log('Файл успешно переименован:', oldPath, '->', newPath);
} catch (error) {
  console.error('Ошибка:', error.message);
  process.exit(1);
}

