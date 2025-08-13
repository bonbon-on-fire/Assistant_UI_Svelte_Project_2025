# Assistant UI Svelte Project 2025

## Project Overview

## What I Built

I built a Svelte 5 + SvelteKit 2 scaffold for a ChatGPT-style chat interface: sticky, pill-shaped composer; a scrollable message thread with clear user/assistant alignment; smooth auto-scroll to the latest message; and accessible, keyboard-friendly interaction. The experience mirrors ChatGPT’s proven UX so it feels familiar and intuitive.

Beyond the surface UI, it is intentionally designed as a standalone, reusable foundation that can plug into any conversational AI or agent backend. The layout and component architecture are structured for streaming APIs, richer message rendering, and multi-turn state. It draws heavy inspiration from [assistant-ui](https://github.com/assistant-ui/assistant-ui) and is tailored for reuse in my other work, notably [DOC_Project_2025](https://github.com/bonbon-on-fire/DOC_Project_2025).

## Why I Built It

- **Skill goal:** Learn Svelte while creating a production-ready chat UI scaffold.  
- **Practical goal:** Build a reusable, well-structured component library for future LLM-powered tools.

## Current Status

The ChatGPT-style framework is complete and running locally, with:  

- Scrollable message list and sticky-bottom composer  
- Auto-scroll on new messages  
- Accessible, keyboard-friendly input  
- Visual consistency between empty and active states  

Responses are currently mocked—the architecture is ready for a streaming LLM backend.  

## Challenges and How I Solved Them

- **Keeping the composer fixed while allowing scrollable content:** Solved with a two-row CSS Grid and `position: sticky` shell.  
- **Reliable auto-scroll to latest message:** Used Svelte runes (`$effect`) to update `scrollTop` on `messages` change.
- **Preventing empty sends & ensuring keyboard focus:** Added a conditional disabled state and explicit focus handling.  
- **Maintaining visual consistency between empty and chat views:** Reused composer styles across both UI states.  
- **ARM64 Windows dependency warnings:** Implemented a clean reinstall flow (clear cache, remove lockfile and `node_modules`, reinstall).  

## Future Possibilities

- Real LLM/agent backend with streaming  
- Theme system (dark mode, high-contrast mode)  
- Persistent conversations (LocalStorage, IndexedDB, or server DB)  
- Rich message rendering (Markdown, syntax highlighting, file attachments)  
- Advanced keyboard UX (shortcuts, multi-line editing, resend)  
- Testing suite (Vitest, Playwright) + CI/CD pipeline  

## TL;DR

A reusable Svelte 5 + SvelteKit 2 ChatGPT-style chat UI (sticky composer, scrollable aligned thread, auto-scroll, a11y) designed to plug into real LLM/agent backends; currently mocked but architected for streaming, richer messages, and multi-turn state—ready to reuse across projects like DOC_Project_2025.

---

**Project Duration:** August 2025  
**Technologies:** Svelte 5, SvelteKit 2, Vite 7, TypeScript, Less, Node.js, npm, Git  
**Lines of Code:** ~2,500 lines C++, ~500 lines Python, ~1,000 lines tests/config  
