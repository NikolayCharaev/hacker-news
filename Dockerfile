# Используем легковесный Node.js образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только package.json и package-lock.json на первом этапе для оптимизации кэширования
COPY ./package.json ./package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем проект
RUN npm run build

# Указываем порт, который будет прослушиваться приложением
EXPOSE 3005

# Команда для запуска сервера
CMD ["npm", "run", "dev"]
