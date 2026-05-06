# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Tailwind CSS

To add Tailwind CSS to this Vite + React project, install the dev dependencies and then start the dev server.

- Install (npm):

```bash
npm install -D tailwindcss postcss autoprefixer
```

- Generate configs (optional, already included here):

```bash
npx tailwindcss init -p
```

- Files added/updated:

- `tailwind.config.cjs`: Tailwind content paths and basic config.
- `postcss.config.cjs`: Loads `tailwindcss` and `autoprefixer`.
- `src/index.css`: Tailwind directives `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` were added.

- Run dev server:

```bash
npm run dev
```

After installing the dependencies, Tailwind will be applied automatically to the project files matched by the `content` paths.

## MUI (Material UI)

- Install

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```