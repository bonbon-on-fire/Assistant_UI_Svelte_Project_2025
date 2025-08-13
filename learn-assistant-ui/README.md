# Assistant UI Svelte Project 2025

## Quick Start

### Prerequisites

- Node.js 20.x LTS (use the Windows ARM64 build on ARM machines)
- npm 10+
- Git 2.40+
- Optional: pnpm 9+

### 1. Install and run

```powershell
git clone <your-repo-url>
cd learn-assistant-ui
npm i
npm run dev
```

- Open the local URL (default `http://localhost:5173/`).

### Any Notes

- If you hit a Rollup optional dependency error on Windows ARM64:
  1) Delete `node_modules` and `package-lock.json`
  2) `npm cache clean --force`
  3) `npm i`

- Global styles are Less and loaded in `src/routes/+layout.svelte`:

```ts
import '$lib/styles/chat.less';
```

## Project Overview

### What I Built

- Minimal assistant chat UI:
  - Empty-state hero (“Ready when you are.”) with centered pill-shaped composer
  - Chat view with the same pill composer at the bottom (sticky)
  - User/assistant roles with alignment and soft bubble styling
  - Auto-scroll to the latest message
  - Disabled Send button when input is empty

### Why It Matters

- Provides a clean, accessible Svelte 5 foundation to add real agent backends, streaming, and persistence while keeping the app lightweight and fast to iterate on.

## Technical Overview

- Svelte 5 runes: `$state` for local state; `$effect` for auto-scroll to bottom on new messages
- SvelteKit 2 + Vite 7 build tooling
- TypeScript-first; `svelte-check` for type/lint checks
- Less with simple tokens (typography/colors/spacing)
- Accessibility: `aria-live="polite"` for message updates
- Layout: CSS Grid with sticky bottom composer and scrollable message area (`min-height: 0; overflow: auto`)

## Project Structure & File Guide

### Directory Overview

```text
learn-assistant-ui/
  LEARNING_PLAN.md
  package.json
  svelte.config.js
  tsconfig.json
  vite.config.ts
  src/
    app.d.ts
    app.html
    lib/
      assets/
        favicon.svg
      components/
        message-list.svelte
      styles/
        chat.less
    routes/
      +layout.svelte
      +page.svelte
  static/
    robots.txt
```

- `src/routes/+page.svelte`: Main page with message state, input, and simple mock assistant echo.
- `src/lib/components/message-list.svelte`: Scrollable message list with `$effect` auto-scroll.
- `src/lib/styles/chat.less`: Global typography, layout grid, composer, and message bubble styles.
- `src/routes/+layout.svelte`: Loads global styles and favicon.
- `vite.config.ts` / `svelte.config.js`: Build tooling and Svelte configuration.

## Current Status

- Local development works via `npm run dev`.
- No backend integration yet (assistant responses are mocked).
- No tests yet; project is set up to add tests later.

## Challenges and How I Solved Them

- Sticky composer with scrollable content: Used a two-row CSS Grid and a `position: sticky` shell for the bottom composer.
- Auto-scroll on new messages: `$effect` updates `scrollTop` to `scrollHeight` when `messages` change.
- Windows ARM64 optional dependency warnings (Rollup): Documented a clean reinstall flow in Notes.

## Future Possibilities

- Connect to a real LLM/agent backend with streaming responses.
- Persistent conversations (LocalStorage/IndexedDB/Server DB).
- Rich message rendering (markdown, code blocks, citations, attachments).
- Keyboard UX (shortcuts, multi-line input, edit-resend).
- Theming (dark mode, high contrast) and customization tokens.
- Testing setup (Vitest/Playwright) and CI.

## TL;DR

Svelte 5 + SvelteKit 2 minimal chat UI with sticky composer and auto-scroll. Install dependencies and run `npm run dev` to try it locally.

---

**Project Duration**: Summer 2025  
**Technologies**: Svelte 5, SvelteKit 2, Vite 7, TypeScript, Less, Node.js, npm, Git  
**Lines of Code**: <1,000 (Svelte/TS + Less + Config)
