# Assistant UI Svelte Project 2025

## Project Overview

### What I Built

I built a minimal, polished chat interface that replicates the ChatGPT UX: an empty-state hero ("Ready when you are."), a pill-shaped composer, a scrollable message thread with user/assistant alignment, auto-scroll to the latest message, and a disabled Send state when the input is empty. It is heavily inspired by the open-source assistant-ui project and closely mirrors GPT’s conversational layout.

See reference: [assistant-ui](https://github.com/assistant-ui/assistant-ui).

### Why I Built It

I wanted to learn Svelte and practice building a reusable chat UI for another project, [DOC_Project_2025](https://github.com/bonbon-on-fire/DOC_Project_2025). This lets me refine the chat UX separately and then bring the components and patterns into that project.

## Current Status

The framework for a ChatGPT-like chat interface has been set up and runs locally. The message list, input composer, auto-scroll behavior, and accessibility affordances are in place. Responses are mocked for now; the code is structured to plug in a real streaming backend next.

## Challenges and How I Solved Them

- Sticky bottom composer while keeping content scrollable: solved with a two-row CSS Grid and a `position: sticky` shell.
- Reliable auto-scroll on new messages: used Svelte runes (`$effect`) to update `scrollTop` to `scrollHeight` when `messages` change.
- Input ergonomics and disabled states: keyboard-friendly focus and disabled Send on empty text.
- Visual consistency between empty and chat views: reused the same composer styles in both states.
- Windows ARM64 optional dependency warnings: added a clean reinstall flow (clear cache, remove lockfile/`node_modules`, reinstall).

## Future Possibilities

- Real LLM/agent backend with streaming and tool-call rendering
- Dark mode and theme tokens; high-contrast accessibility mode
- Persistent conversations (LocalStorage/IndexedDB/Server DB)
- Rich message rendering (markdown, syntax highlighting, attachments)
- Keyboard UX (shortcuts, multi-line input, edit/resend)
- Testing (Vitest/Playwright) and CI pipeline

## TL;DR

Svelte 5 + SvelteKit 2 ChatGPT-style UI scaffold: sticky composer, scrollable thread, auto-scroll — ready to connect to a real LLM/agent backend.

---

**Project Duration**: August 2025  
**Technologies**: Svelte 5, SvelteKit 2, Vite 7, TypeScript, Less, Node.js, npm, Git  
**Lines of Code**: ~2,500 (C++), ~500 (Python), ~1,000 (Tests & Config)
