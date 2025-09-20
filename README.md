# Artem Sadomtsev — Portfolio

Полностью статическое портфолио на Vue 3 + Vite + TypeScript. Подходит для деплоя на GitHub Pages, Netlify или любой статику.

## Быстрый старт

```bash
npm install
npm run dev
```

После установки скрипт автоматически генерирует плейсхолдеры изображений и CV в `public/assets/`. Они добавлены в `.gitignore`, поэтому замените их своими материалами перед публикацией.

## Скрипты

| Команда | Назначение |
| --- | --- |
| `npm run dev` | Локальная разработка (http://localhost:5173). |
| `npm run build` | Продакшен-сборка (`dist/`). |
| `npm run preview` | Предпросмотр собранного проекта. |
| `npm run lint` | ESLint (Vue + TypeScript). |
| `npm run typecheck` | Проверка типов `vue-tsc`. |
| `npm run generate:sitemap` | Перегенерация `public/sitemap.xml` (использует `SITE_URL`, по умолчанию `https://example.com`). |

## Структура контента

- `/content/profile.json` — имя, роль, контакты, ключевые навыки.
- `/content/about.json` — био, подход, опыт и сертификаты.
- `/content/testimonials.json` — отзывы.
- `/content/cases/index.json` — список карточек для страницы "Кейсы".
- `/content/cases/*.json` — детальные описания проектов.

### Как обновлять

1. Обновите соответствующие JSON-файлы в `/content`.
2. При необходимости добавьте изображения в `public/assets/...` (замените существующие плейсхолдеры).
3. Запустите `npm run generate:sitemap`, чтобы обновить карту сайта.

## Работа с ассетами

- После `npm install` автоматически создаются заглушки для:
  - `/public/assets/cases/**/{cover,s1,s2}.{webp,jpg}`
  - `/public/assets/images/profile-portrait.{webp,jpg}`
  - `/public/assets/cv/Artem_Sadomtsev_CV.pdf`
- Там же генерируются локальные шрифты в `public/assets/fonts/`.
- Замените их на реальные файлы, сохранив те же пути.
- Для собственной генерации можно повторно запустить `node scripts/generate-placeholders.mjs`.

## Темы и настройки

- Тёмная и светлая темы переключаются в шапке и сохраняются в `localStorage`.
- Цветовая палитра и радиусы лежат в `src/styles/variables.scss` и `src/styles/themes.scss`.
- Локальные шрифты Inter и Rubik (woff2) генерируются скриптом `generate-placeholders` и лежат в `public/assets/fonts/`.

## Деплой

### GitHub Pages

1. Выполните `npm run build`.
2. Загрузите содержимое папки `dist/` на ветку `gh-pages` (используйте `git subtree` или GitHub Actions).
3. В настройках репозитория укажите Source → `gh-pages`.

### Netlify / Vercel

1. Укажите команду сборки `npm run build` и директорию публикации `dist`.
2. Для корректного роутинга добавьте правило "Redirect all requests to /index.html" (Netlify: файл `_redirects` с `/* /index.html 200`).

## Разработка и качество

- ESLint и строгий TypeScript (`strict: true`).
- Ленивые роуты, прогресс-бар при навигации, lazy-loading изображений.
- SEO: компонент `<SeoHead>`, `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, Open Graph.
- Производительность: маршруты разбиваются на чанки, изображения оптимизированы (webp/jpg), IntersectionObserver для анимаций.

## Замена CV

Положите обновлённый файл PDF в `public/assets/cv/Artem_Sadomtsev_CV.pdf`. Путь прописан в `profile.json` и используется на главной и в разделе контактов.

---
Сайт создан специально для Artem Sadomtsev. Обновляйте контент и деплойте на вашу любимую платформу!
