# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm i          # install dependencies
npm run dev    # start dev server (Vite HMR)
npm run build  # type-check (tsc -b) then Vite build
npm run lint   # ESLint
npm run preview # preview production build locally
```

No test runner is configured.

## Architecture

Single-page React + TypeScript site built with Vite and Tailwind CSS v4.

- `src/App.tsx` — root component; assembles the four page sections in order: **AboutUs → Services → Projects → ContactUs**. Services, Projects, and ContactUs are stubbed out (commented imports) pending team members creating those files.
- `src/components/` — one file per section. Each section is a self-contained component with no shared state. Currently only `AboutUs.tsx` exists.
- `src/index.css` — global CSS variables and base typography (light/dark mode via `prefers-color-scheme`). Tailwind v4 is processed via the `@tailwindcss/vite` plugin (no `tailwind.config.js` needed).
- `public/icons.svg` — SVG sprite for icons used across the site.

**Tailwind note:** v4 is configured entirely through the Vite plugin (`vite.config.ts`). PostCSS is explicitly set to an empty plugin list to avoid picking up any system-level PostCSS config.

## Team task split

Each section is owned by a separate developer:
- AboutUs — in progress
- Services — Rodrigo
- Projects (Case Studies) — Ruan Victor
- ContactUs — Hiran

When adding a new section component, also uncomment its import and JSX in `App.tsx`.
