# Mithan's Folio — Next.js conversion

This repository contains a Next.js conversion of the provided single-page HTML portfolio. The page preserves the original styles and JavaScript behavior.

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Notes

- Tailwind and Font Awesome are loaded via CDN in the page Head, matching the original.
- The original <style> content is placed in `styles/globals.css`.
- The page JavaScript is executed inside a React `useEffect` to preserve the same behavior.
