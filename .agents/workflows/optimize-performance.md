---
description: "Performance and Core Web Vitals optimization workflow targeting LCP, CLS, INP, bundle sizes, and image delivery."
---

# Performance & Core Web Vitals Optimization Workflow

## 1. Role
Web Performance Engineer & Core Web Vitals Specialist expert in Next.js App Router performance tuning, bundle reduction, and browser rendering pipelines.

## 2. Objective
Systematically identify, benchmark, and eliminate performance bottlenecks across the portfolio application. Optimize Core Web Vitals—Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP)—while minimizing client JavaScript payloads, optimizing remote assets, and streamlining font and CSS delivery.

## 3. Context Inspection Requirements
Before implementing optimizations, the agent **must** inspect:
1. **Next.js & Build Configuration**:
   - `next.config.ts` (Compiler options, compression, `output: "standalone"`, `remotePatterns`)
   - `package.json` (Production dependencies, icon packages, animation libraries)
2. **Above-the-Fold & Media Components**:
   - `src/app/layout.tsx` (Font loading via `next/font/google`, global styles, scripts)
   - `src/app/dashboard/Headline.tsx` (Hero portrait image, above-the-fold layout)
   - `src/components/ProjectCard.tsx` and `src/components/CareerCard.tsx` (Card image loading and dimensions)
   - `src/components/VideoComponent.tsx` (Video preload and player configuration)
3. **Client-Side Runtime Overhead**:
   - `src/lib/AnimateOnScroll.tsx` (Framer Motion scroll listener efficiency)
   - `src/components/Header.tsx` (Resize listener throttling in `react-resize-detector`)
4. **Governing Rules**:
   - `.agents/rules/frontend-architecture.md` (Asset & Media Handling)
   - `.agents/rules/code-quality.md` (Performance & Core Web Vitals)

## 4. Execution Steps
1. **Largest Contentful Paint (LCP) Optimization**:
   - Inspect the primary hero image in `src/app/dashboard/Headline.tsx`.
   - Add `priority={true}` to the hero image to ensure immediate preloading by the browser.
   - Ensure the image serves modern formats (WebP/AVIF) from Supabase or the Next.js image optimization API.
2. **Cumulative Layout Shift (CLS) Prevention**:
   - Verify every `<Image />` element has explicit `width` and `height` properties or a wrapper with a fixed aspect ratio (`aspect-video`, `aspect-square`).
   - Audit fonts in `src/app/layout.tsx`: verify `display: 'swap'` and proper font preloading via `next/font/google` to eliminate Flash of Unstyled Text (FOUT) shifts.
   - Prevent layout jumps when mobile navigation or toast notifications appear.
3. **Interaction to Next Paint (INP) & Main Thread Efficiency**:
   - Audit event listeners: replace expensive JS resize detection in `Header.tsx` with pure CSS media queries (`hidden lg:block`) where possible.
   - Verify that Framer Motion animations only animate GPU-accelerated CSS properties (`transform`, `opacity`) and avoid animating layout triggers (`width`, `height`, `top`, `margin`).
4. **Bundle Size & Tree-Shaking Audit**:
   - Verify that icon imports from `@mdi/js` strictly import named exports rather than entire namespace imports.
   - Evaluate client components: move static wrappers and presentational code back to React Server Components (RSC).
   - Dynamically import heavy below-the-fold components using `next/dynamic` (e.g., video player, modal dialogs).
5. **Production Build Analysis**:
   - Run `npm run build` and evaluate the generated route size table and shared JS bundle metrics.

## 5. Constraints
- **Preserve Visual Fidelity**: Do not over-compress images to the point of visible degradation or pixelation.
- **Maintain Interactivity**: Do not remove essential animations or functional toast notifications to shave micro-fractions of milliseconds.
- **No External CDN Dependencies**: Avoid injecting unverified external script tags or CDNs into `layout.tsx`.

## 6. Quality Standards
- Target a **90+ Lighthouse Performance** score.
- **LCP** under 2.5 seconds on standard mobile 4G simulations.
- **CLS** score below 0.05.
- Minimal First Load JS bundle for the dashboard route.

## 7. Verification Requirements
1. Run `npm run build` and verify that all routes build without errors or bloat warnings.
2. Check that the hero image loads with `priority` and appropriate `sizes` attributes.
3. Run `npm run lint` and `npx tsc --noEmit` to confirm complete code integrity.

## 8. Expected Deliverables
1. Performance audit report detailing identified bottlenecks and remedies.
2. Code diffs of optimized components, image tags, and configuration.
3. Next.js production build metrics showing bundle size breakdown.

