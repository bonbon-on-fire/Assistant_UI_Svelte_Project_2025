# Svelte v5 Learning Plan

## Goal

Learn Svelte v5 step by step by building an assistant UI application from the ground up. Keep the project in a buildable state at all times so changes are visible immediately in the browser.

## Learning Phases

### Phase 1: Foundation (Completed)

- [x] Initialize Svelte v5 project with TypeScript
- [x] Set up development environment (PowerShell, Node LTS)
- [x] Verify basic project structure and dev server
- [x] Establish learning plan

### Phase 2: Components & Styling (In Progress)

- [x] Build minimal chat UI skeleton in `src/routes/+page.svelte` (message list, input, send)
- [x] Create first component in `src/lib/` → `MessageList.svelte`
- [x] Install and use Less for styles (`npm i -D less`); add `chat.less`
- [x] Implement basic responsive layout (grid with sticky composer)
- [x] Global font (Inter) and color tokens; centralized styles via `+layout.svelte` import
- [x] Empty-state hero UI with centered heading and unified composer pill
- [x] Bubble alignment and colors (user right → now soft gray; assistant plain text)
- [x] Disabled Send button styling and behavior

### Phase 3: State Management & Interactions

- [x] Local component state with Svelte 5 runes (`$state`)
- [x] On submit: append user message
- [x] Mock assistant reply with short delay
- [x] Auto-scroll to bottom via `$effect` and `requestAnimationFrame`
- [ ] Extract state to a store (persistable) and hydrate from `localStorage`
- [ ] Typing indicator and submit debouncing
- [ ] Explore `$derived` for computed UI state (e.g., `isComposerDisabled`)

### Phase 4: Agent Abstraction (Mock First)

- [ ] Define an Agent interface in `src/lib/agent/agent.ts`
- [ ] Implement `MockAgent` that returns canned or rule-based replies
- [ ] Wire UI to depend on the Agent interface (not a concrete implementation)
- [ ] Add a model dropdown with "Mock" as the only option for now

### Phase 5: Server & Real Models (Later)

- [ ] Create `+server.ts` endpoints to proxy model calls securely
- [ ] Add provider adapters (e.g., OpenAI, local, others) behind the Agent interface
- [ ] Support selecting providers/models from the UI
- [ ] Handle streaming responses and basic error states

### Phase 6: Assistant UI Enhancements

- [ ] Chat message components (user/assistant variants)
- [ ] Markdown rendering and code block formatting
- [ ] Auto-scroll and "scroll to latest" behavior
- [ ] Retry/regenerate message action; stop generation control

## Current Status

✅ Project initialized with Svelte v5 and TypeScript
✅ Dev server and build run with 0 errors and 0 warnings
✅ Chat UI functional with echo flow and polished UX
✅ Styles loaded via Less with `$lib` import in `+layout.svelte`
✅ Empty-state centered hero; unified composer design (center and bottom)
✅ Auto-scroll on new messages; accessible `aria-live`

## Next Steps (actionable)

1. Extract a `Composer.svelte` component; keep `+page.svelte` lean
2. Persist `messages` to `localStorage` (load on mount, save on change)
3. Add "near bottom" scroll logic; show a "Jump to latest" button when scrolled up
4. Replace echo with a simple `MockAgent` service and interface
5. Add basic message timestamp and subtle grouping
6. Add lightweight component tests for `MessageList` scrolling behavior

## Progress log

- Implemented chat skeleton with `$state` and echo reply
- Moved styles to Less; fixed stylesheet loading via script import in `+layout.svelte`
- Added Inter font and color tokens; refined bubbles and spacing
- Built `MessageList.svelte`; added auto-scroll-on-update
- Designed empty-state hero; unified composer look; disabled send when input empty

## Skill Tracks (Foundational)

### Styling

- [ ] Less setup and project conventions (`.less` over `.css`)
- [ ] Component-scoped vs global styles
- [ ] Responsive layout (flex/grid, mobile-first)
- [ ] Theming and variables (colors, spacing, typography)
- [ ] Dark mode readiness

### Components

- [ ] Building reusable components (`src/lib/`)
- [ ] Props, slots, events; composition patterns
- [ ] Handling lists, keys, and empty/error states
- [ ] Accessibility (ARIA roles, focus, tab order)

### Store (State Management)

- [ ] Svelte v5 runes: `$state`, `$derived`, `$effect`
- [ ] Writable/derived store patterns for chat history
- [ ] Persistence strategy (session/local storage) when needed
- [ ] Separation of view state vs domain state

### Services (Agents & APIs)

- [ ] Agent interface design and adapters
- [ ] Mock service implementation for local development
- [ ] Server endpoints with `+server.ts` and fetch usage
- [ ] Error handling and retries; timeouts and cancellation

### Routing

- [ ] SvelteKit routing conventions (`+page.svelte`, `+layout.svelte`, `+server.ts`)
- [ ] Layout hierarchy and shared UI
- [ ] Route data loading on client/server
- [ ] 404/error boundaries (`+error.svelte`)

### Forms & Validation

- [ ] Controlled inputs and form submission
- [ ] Basic validation and user feedback
- [ ] Preventing duplicate submits; disabled states

### Testing & Quality

- [ ] Unit tests for stores and services (fast, milliseconds)
- [ ] Component tests for critical UI behaviors
- [ ] Linting and formatting discipline (0 errors/warnings)

### Performance & DX

- [ ] Avoid unnecessary reactivity; derived values
- [ ] Code-splitting where appropriate
- [ ] Dev ergonomics (scripts, type-checks, previews)
