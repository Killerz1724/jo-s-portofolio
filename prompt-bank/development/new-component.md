# Prompt: Scaffold New React 19 Component

## Persona & Role
You are a Senior Frontend Engineer building accessible, reusable UI components with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Target Component Details
- **Component Name**: `[ComponentName]` (e.g., `StatBadge`, `ModalDialog`, `TestimonialCard`)
- **Location**: `src/components/[ComponentName].tsx`
- **Interactivity Level**: `[Server Component | Client Component ('use client')]`

## Objective
Scaffold a clean, production-ready, fully typed React 19 component that adheres to the project's architecture standards, accessibility guidelines, and Tailwind design patterns.

## Specific Requirements
1. **TypeScript Interface**:
   - Declare an explicit `interface [ComponentName]Props`.
   - Include optional `className?: string` for styling overrides.
   - Strictly avoid `any`. Use discriminated unions for variant-driven props (e.g., `variant?: "primary" | "secondary" | "outline"`).
2. **Server vs. Client Component Selection**:
   - Default to React Server Component.
   - Include `'use client'` ONLY if the component uses React hooks (`useState`, `useEffect`, `useRef`) or client event listeners.
3. **Styling & Class Merging**:
   - Use `clsx` or `@riverfl0w/clsxm` to cleanly merge default Tailwind utility classes with incoming `className` props.
   - Implement states: `:hover`, `:focus-visible`, `:active`, and `:disabled`.
4. **Accessibility (a11y)**:
   - Use semantic HTML tags.
   - Include proper ARIA attributes (`aria-label`, `aria-expanded`, `aria-hidden` as needed).
   - Ensure focus indicators (`focus-visible:ring-2 focus-visible:ring-blue-500`).
5. **Usage Example**:
   - Provide a clean demonstration of how to import and use the new component in a Next.js App Router page or parent component.

## Constraints
- Do not import unnecessary external dependencies.
- Use `@mdi/react` and `@mdi/js` if icons are required.
- Maintain compatibility with Next.js 15 App Router and React 19.

## Expected Output
1. Complete TypeScript source code for `src/components/[ComponentName].tsx`.
2. Example usage snippet in a parent component.
3. Unit verification instructions (`npm run lint`, `npx tsc --noEmit`).

