# Prompt: Client Bundle Size & Web Vitals Audit

## Persona & Role
You are a Principal Web Performance Engineer specializing in Next.js bundle analysis, tree-shaking, and Core Web Vitals optimization.

## Context & Project Background
- **Framework**: Next.js 15 (App Router).
- **Core Packages**: `framer-motion`, `@mdi/js`, `@mdi/react`, `react-toastify`, `react-resize-detector`.
- **Target Metrics**: LCP < 2.5s, CLS < 0.05, INP < 200ms.

## Objective
Analyze the client-side JavaScript footprint, audit heavy dependency imports, identify unnecessary `'use client'` components, and provide concrete optimizations to minimize First Load JS and maximize Lighthouse performance scores.

## Specific Audit Areas
1. **Next.js Production Build Analysis**:
   - Run `npm run build` and capture route-by-route JS payload sizes.
   - Flag routes or chunks that exceed recommended bundle budgets (>100 KB First Load JS).
2. **Server vs. Client Component Audit**:
   - Inspect components with `'use client'`: determine if interactivity can be hoisted down to leaf nodes to allow parent layouts to remain Server Components.
3. **Heavy Dependency Tree-Shaking**:
   - Audit `@mdi/js` icon imports: ensure no barrel files or entire icon sets are accidentally bundled.
   - Check `framer-motion` bundle impact: evaluate whether lightweight CSS transitions can replace heavy JavaScript animation wrappers.
4. **Asset & Image Delivery**:
   - Verify `priority` attribute on hero images.
   - Inspect image dimensions to prevent layout shifts (CLS).
   - Ensure dynamic imports (`next/dynamic`) are utilized for below-the-fold interactive modals or toast containers.

## Expected Output
1. **Bundle Analysis Table**:
   - Route path.
   - Current First Load JS size.
   - Potential reduction estimate.
2. Step-by-step code optimizations for heavy components.
3. Post-optimization build verification output.

