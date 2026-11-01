---
trigger: model_decision
description: "Frontend architecture standards for Next.js 15 App Router, React 19 Server and Client Components, routing conventions, state management, and asset handling."
---

# Frontend Architecture Standards

## 1. Next.js 15 App Router Paradigm
- **Server Components by Default**:
  - Keep all page files (`page.tsx`) and static display components as React Server Components (RSC) to minimize client-side JavaScript bundle size and improve initial page render (TTFB/FCP).
- **Client Components (`'use client'`) Boundary**:
  - Apply the `'use client'` directive exclusively to interactive leaf nodes that require React hooks (`useState`, `useEffect`, `useRef`), event listeners (`onClick`, `onScroll`), browser APIs (`window`, `localStorage`), or animation libraries (`framer-motion`).
  - Never mark an entire page or layout with `'use client'` if it only contains static markup with one interactive child; hoist interactivity down to leaf components.
- **Async Components & Metadata**:
  - Export standard Next.js metadata objects (`export const metadata: Metadata = { ... }`) from layout or page files for SEO and social sharing cards.

## 2. React 19 Component Standards
- **Component Anatomy & Declaration**:
  - Declare functional components with standard TypeScript typing:
    ```tsx
    interface ProjectCardProps {
      project: ProjectType[number];
      priority?: boolean;
    }

    export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
      // Implementation
    }
    ```
- **Props Typing**:
  - Always define explicit TypeScript interfaces or type aliases for component props. Avoid implicit `any` or loose prop shapes.
- **Composition Over Prop Drilling**:
  - Utilize `children` and slots for compound components (e.g., `Layout`, `AnimateOnScroll`, `Tooltip`) rather than deep prop pass-throughs.

## 3. Routing Conventions & Linking
- **Absolute Path Navigation**:
  - Always use root-relative paths in Next.js `<Link>` components (e.g., `href={`/project-details/${project.pathName}`}`).
  - **Forbidden**: Do not use relative paths without a leading slash (e.g., `href={`project-details/...`}`), which causes URL compounding bugs when navigating from nested routes.
- **Middleware & Route Handlers**:
  - Route redirection from `/` to `/dashboard` is handled in `src/middleware.ts` and mirrored in `next.config.ts`.
  - Do not introduce conflicting routing logic in page components that could trigger infinite redirect loops.
- **Dynamic Segments**:
  - Dynamic routes must follow the Next.js App Router folder convention: `src/app/project-details/[pathname]/page.tsx` and `src/app/career-details/[pathname]/page.tsx`.

## 4. Data Management & Constants
- **Static Portfolio Data**:
  - Keep structured portfolio content in `src/constants/` (`projectconstant.tsx`, `careerdetailsconst.tsx`, `breadcrumb.ts`).
  - Data contracts must use explicit TypeScript definitions (e.g., `ProjectType`, `CareerDetailsType`).
  - Keep data arrays immutable; transform data through pure utility functions (e.g., `src/utils/convertMonthsDuration.ts`).
- **External Data & Supabase Client**:
  - When accessing Supabase, use `@supabase/ssr` for server-side operations and `@supabase/supabase-js` for client interactions.
  - Keep Supabase initialization inside `src/lib/` or `src/utils/supabase/` with environment variables (`process.env.NEXT_PUBLIC_SUPABASE_URL`, `process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY`).
  - Never hardcode sensitive service role keys in client-side code.

## 5. Asset & Media Handling
- **Image Optimization**:
  - Always render images through Next.js `<Image />` (`next/image`).
  - Supply explicit `width` and `height`, or use `fill` with a properly styled, positioned parent container (`relative overflow-hidden`).
  - Define meaningful `alt` attributes for screen reader accessibility and SEO.
  - When displaying hero or above-the-fold images, set `priority={true}` to prevent Largest Contentful Paint (LCP) delays.
- **Remote Image Patterns**:
  - Remote images from Supabase Storage or external domains must comply with the `remotePatterns` configuration in `next.config.ts`.
- **Icons**:
  - Use `@mdi/react` with `@mdi/js` icon path exports (e.g., `import { mdiBriefcase } from "@mdi/js"`). Avoid importing entire icon bundles to keep bundle sizes lean.

## 6. CSS & Styling Architecture
- **Tailwind Utility Precedence**:
  - Rely on Tailwind utility classes for all new component layouts.
  - Use `clsx` or `@riverfl0w/clsxm` for dynamic class concatenation:
    ```tsx
    import clsx from "clsx";
    <div className={clsx("p-4 rounded-lg", isActive && "bg-blue-600 text-white")} />
    ```
- **CSS Modules Usage**:
  - Existing CSS modules (e.g., `dashboard.module.css`) should only be maintained or refactored incrementally. Avoid creating new `.module.css` files when Tailwind utilities suffice.

