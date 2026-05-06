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

This project uses **Tailwind CSS v4** with Vite and React.

- Install (npm):

```bash
npm install -D tailwindcss postcss @tailwindcss/postcss
```

- Files added/updated:

- `tailwind.config.cjs`: Tailwind content paths and configuration.
- `postcss.config.cjs`: Uses `@tailwindcss/postcss` plugin (v4).
- `src/index.css`: Imports Tailwind v4 using `@import "tailwindcss";`

- Run dev server:

```bash
npm run dev
```

Tailwind CSS will be automatically applied to your project.

## MUI (Material UI)

- Install

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```