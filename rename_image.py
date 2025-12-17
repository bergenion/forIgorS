import os
import sys

# Получаем директорию, где находится скрипт
script_dir = os.path.dirname(os.path.abspath(__file__))
old_path = os.path.join(script_dir, "src", "assets", "images", "image_1.jpg")
new_path = os.path.join(script_dir, "src", "assets", "images", "icon-email-red.jpg")

try:
    os.rename(old_path, new_path)
    print(f"Файл успешно переименован: {old_path} -> {new_path}")
except Exception as e:
    print(f"Ошибка: {e}")
    sys.exit(1)

