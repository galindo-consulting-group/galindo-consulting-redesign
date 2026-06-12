# Galindo Consulting Group Inc. — Redesign Project

A professional corporate website remake for **Galindo Consulting Group Inc.**, designed to modernize the digital interface while showcasing scalable front-end engineering, semantic layout architecture, and performance-driven UI.

---

## Project Scope

Single Page Application (SPA) with continuous scroll. Each section is anchor-linked for smooth navigation. Four sections:

| Section | Owner | Status |
|---|---|---|
| About Us | — | In progress |
| Services | Rodrigo | PR open — awaiting review |
| Projects | Ruan Victor | Completed |
| Contact Us | Hiran | In progress |

---

## Architecture & Tech Stack

* **React 19** — component-based UI, one file per section in `src/components/`
* **TypeScript** — type safety across all components
* **Tailwind CSS v4** — utility classes via `@tailwindcss/vite` plugin (no config file required); `@import "tailwindcss"` declared in `src/index.css`
* **Vite** — dev server with HMR

### Structure

```
src/
├── index.css          # Tailwind import + global reset
├── main.tsx           # Entry point
├── App.tsx            # Assembles all sections in scroll order
└── components/
    ├── AboutUs.tsx
    ├── Services.tsx
    ├── Projects.tsx
    └── ContactUs.tsx  # pending
```

Each section component uses `id="<section-name>"` for anchor navigation.

---

## Branch Strategy

Each developer works on their own feature branch and opens a PR to `main`.

```
main
├── feat/services   (Rodrigo)
├── feat/projects   (Ruan Victor)
└── feat/contact    (Hiran)
```

---

## How to Run

```bash
npm i
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
npm run lint     # ESLint
```
