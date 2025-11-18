**Project Overview**
- **Type/Stack:** Vite + React (TSX) app with TypeScript, Tailwind, Framer Motion and Locomotive Scroll.
- **Entry points:** `src/index.tsx` mounts `AppRouter` which composes `App` and page routes in `src/AppRouter.tsx`.

**Architecture & Data Flow**
- **Routing:** Routes are defined in `src/AppRouter.tsx`. The main pages live under `src/pages/` (e.g. `Projects`, `AboutMe`, `ProjectDetail`).
- **Layout:** `App` (`src/App.tsx`) wraps pages, conditionally hides `Header` for paths starting with `/project/`, and scrolls to top on general navigation (it checks `location.state?.fromProjectDetail`).
- **Project data:** Project metadata and detail content live in `src/projects/*`. See `src/projects/index.ts` for how projects are exported as a `Record<string, ProjectData>` — keys (like `docai`, `binomi`, `king-solar`) are used as `projectId` route params.

**Key Conventions & Patterns**
- **Pages vs Components:** Put route pages in `src/pages/` and reusable UI in `src/components/`.
- **Project entries:** Add a new project by creating a file in `src/projects/` that exports a `ProjectData` object and then export it from `src/projects/index.ts`.
- **Scroll wrapper:** `src/components/SmoothScrollWrapper.tsx` initializes `locomotive-scroll` and imports its CSS. If you modify scrolling behavior, ensure the wrapper still provides `data-scroll-container` and destroys the instance on unmount.
- **Navigation types:** `NavigationToggle` re-exports types — prefer those (`NavigationItem`, `NavigationToggleProps`) when adding navigation items.
- **Animations:** Framer Motion is used for micro-interactions and layout animations; prefer small motion components rather than global CSS transitions for page transitions.

**Developer Workflows**
- **Install:** `npm install`
- **Dev server:** `npm run dev` (runs `npx vite`).
- **Build / Preview:** `npm run build` and `npm run preview`.
- **Linting:** `npm run lint` runs `eslint` across `.js,.jsx,.ts,.tsx` files. The project uses strict TypeScript (`tsconfig.json`) — expect type errors to block builds locally.

**Files to Inspect for Context**
- Routing and layout: `src/AppRouter.tsx`, `src/App.tsx`
- Projects model: `src/projects/index.ts`, `src/projects/types.ts`
- Smooth scrolling: `src/components/SmoothScrollWrapper.tsx` (imports `locomotive-scroll` CSS)
- Header & nav: `src/components/Header.tsx`, `src/components/NavigationToggle/NavigationToggle.tsx`

**Integration Notes & Gotchas**
- `locomotive-scroll` requires its CSS import (`locomotive-scroll/dist/locomotive-scroll.css`) — removing the import will break styles/behavior.
- TypeScript is strict (`"strict": true` in `tsconfig.json`); prefer changing types in `src/projects/types.ts` if adding new fields.
- Routes use `project/:projectId`; when navigating to `ProjectDetail` the code may set `location.state.fromProjectDetail` to preserve scroll behavior — preserve that convention when adding navigation.
- The project uses modern ESM tooling via Vite; commands in `package.json` run `npx vite` and `npx vite build` — CI should call the same scripts.

**What an AI Agent Should Do First**
- Look at `src/AppRouter.tsx` and `src/projects/index.ts` to understand routing and data keys.
- Run `npm install` and `npm run dev` to start a dev server and observe live behavior (navigation + scroll + animations).
- When editing scroll, animation, or route logic, test locally (manual navigation and resizing) because UI behavior depends on runtime browser interactions.

If anything here is unclear or you want additional examples (e.g. how to add a new project file or how `ProjectDetail` reads project data), tell me which area to expand and I will update this file.
