# Portfolio Showcase Website

This repository hosts the source code for a lightweight, static portfolio showcase website. The site is engineered to deliver high performance, clean academic typography, and zero-JavaScript-by-default rendering.

- **Deployment Status:** Offline / Inactive

---

## Website Purpose

This website operates as a public digital showcase. It presents structured content collections, formal writing, and curriculum vitae documentation through a distraction-free, high-contrast reading interface. The design prioritizes content legibility, fast page delivery, and strict data isolation.

---

## Technical Specifications

| Component | Specification |
|---|---|
| **Framework** | [Astro](https://astro.build/) (Static Output, `output: 'static'`) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) with `@tailwindcss/typography` |
| **Runtime Performance** | Zero client-side JavaScript by default |
| **Content Layer** | Astro Content Collections with strict [Zod](https://zod.dev/) schemas |
| **Navigation** | Sticky Section Navigator with automatic heading anchors and smooth scrolling |
| **Source Isolation** | Reference materials isolated in untracked `./context/` via `.gitignore` |
| **CI/CD Pipeline** | GitHub Actions using `actions/checkout@v7`, `withastro/action@v6`, and `actions/deploy-pages@v5` |
| **Hosting Target** | GitHub Pages |

---

## Architectural Highlights

- **Zero-JavaScript Performance:** Pages compile directly to pure static HTML and CSS, minimizing payload size, optimizing accessibility, and eliminating dynamic server attack surfaces.
- **Content Collection Architecture:** Source markdown entries are validated against strict Zod type schemas during static build time.
- **Full-Text Reader View:** Long-form documents render in a dedicated typography view featuring a dynamic Section Navigator sidebar on desktop and an expandable jump menu on mobile viewports.
- **Strict Data Isolation:** Working context, reference materials, and raw drafts reside in `./context/`, which remains permanently untracked and excluded from version control.

---

## Local Development and Build Commands

Use Bun to install dependencies and manage the build pipeline:

```bash
# Install dependencies
bun install

# Start local development server
bun run dev

# Build static production bundle with verbose logging
bun run build --verbose

# Preview static distribution on port 4321
bun run preview -- --port 4321 --host
```
