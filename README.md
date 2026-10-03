# Furni — платформа 3D-конфигураторов

Готовая оболочка на React + TypeScript + Vite + SCSS Modules.

## Запуск

```bash
yarn
yarn dev
```

Production:

```bash
yarn build
yarn preview
```

## Структура

- `/` — главная
- `/catalog` — каталог конфигураторов
- `/catalog/:category` — категория
- `/configurator/:slug` — интеграционная страница 3D-конфигуратора
- `/projects` — локально сохранённые проекты
- `/favorites` — избранное

Существующие конфигураторы находятся в `public/configurators/` и подключаются через iframe. Это позволяет не смешивать оболочку с их Three.js-реализацией и позднее заменить iframe на React-интеграцию без переделки каталога.

## Сохранённые проекты

Пока используется `localStorage`, без авторизации и backend. Данные вынесены в `src/data/projects.ts`, поэтому подключение API в дальнейшем не потребует менять UI.

## Добавление нового конфигуратора

Добавьте запись в `src/data/configurators.ts` и HTML/приложение в `public/configurators/`. Для будущих конфигураторов достаточно поменять `status` на `available` и указать `path`.
