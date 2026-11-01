---
trigger: model_decision
description: "Code quality standards, TypeScript type safety, clean code principles, error handling, performance optimization, and verification protocols."
---

# Code Quality & Engineering Standards

## 1. TypeScript Standards & Type Safety
- **Strict Typing Without Compromise**:
  - `any` is strictly prohibited. Use explicit interfaces, typed generics, `unknown` with type narrowing, or discriminated unions.
  - Avoid non-null assertions (`!`) unless guaranteed by preceding invariant guards.
  - Do not use reckless type casting (`as unknown as X`). Use user-defined type guards or Zod schemas when handling external data.
- **Data Model Integrity**:
  - Keep types centralized and synchronized with source definitions (e.g., `ProjectType` in `src/constants/projectconstant.tsx`).
  - Derive types using TypeScript utilities (`Partial`, `Pick`, `Omit`, `Record`, `typeof`) where appropriate instead of declaring redundant manual shapes.

## 2. Clean Code Principles
- **Single Responsibility Principle (SRP)**:
  - Each React component must have a single clear concern: presentation, state management, or layout orchestration.
  - Split large, monolithic files (>150 lines) into focused subcomponents or custom hooks.
- **Descriptive & Consistent Naming**:
  - Components: PascalCase (`ProjectCard.tsx`, `SkillTag.tsx`).
  - Utilities and Hooks: camelCase (`convertMonthsDuration.ts`, `useWindowDimensions.ts`).
  - Constants and Enums: UPPER_SNAKE_CASE or PascalCase (`Size`, `Projects`).
  - Boolean variables and props: Prefix with `is`, `has`, or `should` (`isOpen`, `hasThumbnail`, `shouldAnimate`).
- **DRY (Don't Repeat Yourself)**:
  - Extract reusable logic (such as date formatting or duration calculations) into `src/utils/`.
  - Consolidate common UI elements (badges, buttons, links) into shared components in `src/components/`.

## 3. Error Handling & Defensive Programming
- **Fallback UI & Graceful Degradation**:
  - Always handle empty states, missing thumbnails, or broken links gracefully.
  - Provide fallback visuals when remote image URLs fail to resolve (e.g., placeholder icon or local asset fallback).
- **External API & Network Resilience**:
  - Wrap Supabase or external fetch operations in `try/catch` blocks.
  - Communicate errors to the user using accessible alerts or `react-toastify` notifications (`toast.error(...)`), while logging technical details for debugging.

## 4. Performance & Core Web Vitals
- **Render Optimization**:
  - Avoid unnecessary re-renders in client components. Memoize expensive transformations using `useMemo` and callbacks using `useCallback` when passed to memoized children.
  - Do not attach unthrottled/undebounced scroll or resize listeners directly in React components. (Use existing throttled solutions like `react-resize-detector`).
- **Bundle Efficiency**:
  - Import only specific icon exports from `@mdi/js` (e.g., `import { mdiFile } from "@mdi/js"`). Never import wildcard `* as MDI from "@mdi/js"`.
  - Ensure dynamic imports (`next/dynamic`) are leveraged for heavy client-only interactive widgets that are below the fold.

## 5. Verification & Pre-Commit Protocol
Before completing any task or declaring an implementation complete, the agent must execute and confirm:
1. **ESLint Verification**:
   ```bash
   npm run lint
   ```
   Resolve all ESLint warnings and errors. No lint violations may remain.
2. **Type Check Verification**:
   ```bash
   npx tsc --noEmit
   ```
   Ensure zero TypeScript compilation errors.
3. **Build Health Check**:
   ```bash
   npm run build
   ```
   Confirm the Next.js production build compiles successfully with no broken routes or missing modules.

