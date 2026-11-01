---
trigger: always_on
---

# Project Standards & Core Directives

## 1. Project Identity & Overview
- **Application**: Tejo Rifqi Hananto's Personal Portfolio ("Tejofolio" / "Jo's Portofolio").
- **Core Technology Stack**:
  - **Framework**: Next.js 15 (App Router, Standalone output).
  - **Runtime & UI Library**: React 19, TypeScript 5 (Strict Mode).
  - **Styling**: Tailwind CSS 3.4.x with `tailwindcss-animated` and `postcss`.
  - **Animation**: Framer Motion 12.x (`AnimateOnScroll` and motion primitives).
  - **Icons & Assets**: Material Design Icons (`@mdi/react`, `@mdi/js`), Supabase Storage CDN.
  - **Utility Libraries**: `clsx`, `@riverfl0w/clsxm`, `react-resize-detector`, `react-toastify`.
  - **Deployment Target**: Docker container on VPS (configured via `Dockerfile`, `docker-compose.yaml`, `nginx`).

## 2. Fundamental Operating Guardrails (Non-Negotiable)
1. **Preserve Existing Functionality**:
   - Never break, alter, or omit existing project content, career timelines, project entries (`src/constants/`), or resume download links without explicit user approval.
   - Maintain route redirection behavior: root `/` redirects to `/dashboard` (handled in `src/middleware.ts` and `next.config.ts`).
   - Preserve dynamic routing contracts: `/career-details/[pathname]` and `/project-details/[pathname]`.
2. **Zero Unnecessary Dependencies**:
   - Do NOT install external packages for capabilities already satisfied by the current dependency tree (e.g., use existing Framer Motion, `@mdi/react`, Tailwind CSS, and `clsx`).
   - Always verify `package.json` before proposing any new library.
3. **Non-Destructive Refactoring**:
   - Always inspect affected files and their import graphs before editing.
   - Prefer surgical, modular modifications over sweeping rewrites.
   - Ensure backward compatibility for shared components (`src/components/`).
4. **Environment & Build Hygiene**:
   - All code must pass TypeScript compilation (`tsc --noEmit`) and ESLint checks (`npm run lint`).
   - Absolute and alias imports (`@/...`) must map cleanly according to `tsconfig.json`.

## 3. Directory & File Organization
```
jo-s-portofolio/
├── .agents/                    # Antigravity agent configuration
│   ├── rules/                 # Permanent workspace rules
│   └── workflows/             # Task-specific automated workflows
├── prompt-bank/               # Reusable prompt library & templates
├── public/                    # Static assets served from root
├── src/
│   ├── app/                   # Next.js 15 App Router pages & layouts
│   │   ├── career-details/    # Dynamic career detail routes
│   │   ├── dashboard/         # Main portfolio sections
│   │   ├── project-details/   # Dynamic project detail routes
│   │   ├── globals.css        # Global CSS & Tailwind directives
│   │   └── layout.tsx         # Root layout with font & toast container
│   ├── assets/                # Bundled local images and logos
│   ├── components/            # Reusable React components
│   ├── constants/             # Data constants, types, and navigation routes
│   ├── lib/                   # Shared libraries, animation wrappers, clients
│   ├── utils/                 # Pure helper functions & date formatters
│   └── middleware.ts          # Edge routing middleware
├── Dockerfile                 # Standalone Docker build definition
└── next.config.ts             # Next.js compiler & remote pattern settings
```

## 4. Communication & Execution Standards
- **Reasoning**: State architectural intent before proposing non-trivial code modifications.
- **Verification**: Run `npm run lint` and verify builds after changes to validate syntax and types.
- **Documentation**: Keep comments concise, explanatory, and focused on non-obvious business logic. Never remove existing contextual comments.

