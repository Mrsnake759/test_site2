# Альфа — витрина бренда на Nuxt 3 (SSG)

Nuxt 3 проект с pages router и статической генерацией для деплоя на обычный хостинг (Reg.ru).

## Команды
```bash
npm i
npm run dev
npm run build
npm run generate
```

## Статический деплой на Reg.ru
После `npm run generate` итоговые файлы находятся в `.output/public`.

1. Выполните `npm run generate`.
2. Скопируйте **содержимое** `.output/public` в `public_html`.
3. Проверьте наличие `public_html/index.html`.

## Структура страниц
- `/` — главная (новая структура из 8 секций)
- `/about` — «О компании» (перенесённый контент, который раньше был на главной)
- `/catalog` — заглушка
- `/services` — контентная страница услуг
- `/delivery-payment` — контентная страница «Оплата и доставка»
- `/contacts` — контактная страница

## Важно
Формы и действия работают в демо-режиме: показывают сообщение «Заявка отправлена (демо)» без отправки на backend.

## TODO по изображениям (временные заглушки)
Сеть для скачивания внешних фото была недоступна, поэтому добавлены локальные SVG placeholders.

- `public/images/alpha/hero-1.svg` → 2200x1200 → Главная / Hero
- `public/images/alpha/catalog-tiles.svg` → 1400x900 → Главная / Каталог решений / «Плитка и брусчатка»
- `public/images/alpha/catalog-curbs.svg` → 1400x900 → Главная / Каталог решений / «Бордюры и ограждения»
- `public/images/alpha/surface-colormix.svg` → 1200x900 → Главная / Эстетика / ColorMix
- `public/images/alpha/surface-wash.svg` → 1200x900 → Главная / Эстетика / Отмыв
- `public/images/alpha/surface-smooth.svg` → 1200x900 → Главная / Эстетика / Заглаживание
- `public/images/alpha/brand-factory.svg` → 1600x1000 → Главная / Бренд «Альфа»
