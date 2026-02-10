# Альфа — сайт-витрина на Nuxt 3 (SSG)

Проект подготовлен как статический сайт (без Node.js на сервере) для загрузки на обычный хостинг, включая reg.ru.

## Требования
- Node.js 18+
- npm

## Установка и запуск
```bash
npm i
npm run dev
```

## Сборка и генерация статики
```bash
npm run build
npm run generate
```

После `npm run generate` статические файлы находятся в каталоге `.output/public`.

## Деплой на reg.ru (public_html)
1. Выполните локально:
   ```bash
   npm i
   npm run generate
   ```
2. Откройте содержимое папки `.output/public`.
3. Скопируйте все файлы и директории из `.output/public` в `public_html` на хостинге reg.ru.
4. Убедитесь, что `index.html` лежит в корне `public_html`.

## Структура
- Главная: `/`
- Заглушки (готовы роуты и SEO):
  - `/about`
  - `/catalog`
  - `/services`
  - `/delivery`
  - `/contacts`

## Контентные изображения
Временные изображения находятся в `public/images/` как placeholder-файлы. Их можно заменить своими файлами без изменения компонентов.
