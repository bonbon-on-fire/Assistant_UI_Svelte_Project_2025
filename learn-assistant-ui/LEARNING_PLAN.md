# Svelte v5 Learning Plan

## Goal

Learn Svelte v5 step by step by building an assistant UI application from the ground up. Keep the project in a buildable state at all times so changes are visible immediately in the browser.

## Learning Phases

### Phase 1: Foundation (Completed)

- [x] Initialize Svelte v5 project with TypeScript
- [x] Set up development environment (PowerShell, Node LTS)
- [x] Verify basic project structure and dev server
- [x] Establish learning plan

### Phase 2: Components & Styling (Start Here)

- [ ] Build minimal chat UI skeleton in `src/routes/+page.svelte` (message list, input, send)
- [ ] Create first custom component(s) in `src/lib/` (e.g., `MessageBubble`)
- [ ] Install and use Less for styles (`npm i -D less`); add `chat.less`
- [ ] Implement basic responsive layout

### Phase 3: State Management & Interactions

- [ ] Introduce a conversation store (messages array, roles: user/assistant)
- [ ] On send: append user message; show typing indicator
- [ ] Mock assistant reply with a short delay; append assistant message
- [ ] Learn Svelte v5 runes (`$state`, `$derived`, `$effect`) through these interactions

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
✅ Learning plan updated to reflect chat-first milestones

## Next Steps (actionable)

1. Start the dev server: `npm run dev -- --open`
2. Implement the chat UI skeleton in `src/routes/+page.svelte`
3. Create a `MessageBubble` component in `src/lib/`
4. Install Less (`npm i -D less`) and scaffold `chat.less`
5. Add a simple conversation store and mock assistant response with delay

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
