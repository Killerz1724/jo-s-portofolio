---
description: "Comprehensive responsive design audit and remediation workflow across mobile, tablet, desktop, and ultrawide viewports."
---

# Responsive Design Audit & Remediation Workflow

## 1. Role
Responsive Web Design Specialist & Mobile UX Auditor with expertise in CSS grid, flexbox, Tailwind breakpoints, and touch interaction ergonomics.

## 2. Objective
Systematically audit and resolve responsive design defects across all pages and viewports (mobile 360px–480px, tablet 768px–1024px, laptop 1024px–1440px, ultrawide 1440px+). Eliminate horizontal overflows, broken flex wrapping, oversized fixed dimensions, and mobile navigation glitches using mobile-first Tailwind conventions.

## 3. Context Inspection Requirements
Before diagnosing and refactoring, the agent **must** inspect:
1. **Global Layout & Containers**:
   - `src/components/Layout.tsx` (Container width caps, horizontal padding)
   - `src/app/globals.css` (Base reset and viewport styling)
   - `src/constants/variable.ts` (Mobile/desktop size constants)
2. **Navigation Components**:
   - `src/components/Header.tsx` (Mobile hamburger toggle, resize detector usage)
   - `src/components/SideBar.tsx` (Fixed positioning, z-index, drawer behavior)
3. **Content Sections**:
   - `src/app/dashboard/Headline.tsx` (Hero image dimensions and flex wrapping)
   - `src/app/dashboard/Skills.tsx` (Tag wrapping and icon grid)
   - `src/app/dashboard/Career.tsx` and `src/components/CareerCard.tsx`
   - `src/app/dashboard/Projects.tsx` and `src/components/ProjectCard.tsx`
   - `src/app/project-details/[pathname]/page.tsx` and `src/app/career-details/[pathname]/page.tsx`
4. **Governing Rules**:
   - `.agents/rules/ui-ux-guidelines.md` (Section 4: Spacing, Layout & Responsive Standards)

## 4. Execution Steps
1. **Breakpoint Matrix Audit**:
   - Evaluate each view against standard screen widths:
     - **360px – 414px (Mobile)**: Check for horizontal overflow, overlapping text, and tap target spacing.
     - **768px (Tablet portrait)**: Check sidebar layout, headline flex direction, and card column count.
     - **1024px (Tablet landscape / small laptop)**: Check transition from mobile drawer to persistent navigation.
     - **1280px – 1536px+ (Desktop & Ultrawide)**: Check maximum width constraints (`max-w-6xl` or `max-w-7xl`) and ensure content does not stretch awkwardly.
2. **Identify & Catalog Defects**:
   - **Fixed Widths**: Locate hardcoded pixel or rem widths (`w-[20rem]`, `w-[24rem]`, `w-[300px]`, `min-h-[16rem]`) that overflow narrow screens.
   - **Excessive Spacing**: Identify oversized gap utilities (e.g., `gap-[15rem]`) that distort vertical mobile scrolling.
   - **Navigation Issues**: Identify mobile hamburger menu overlap, missing backdrop overlays, or double rendering of sidebar elements.
   - **Image Resizing**: Verify that Next.js `<Image />` elements use responsive parent containers or `sizes` attributes.
3. **Apply Mobile-First Remediation**:
   - Refactor fixed containers to fluid layouts (`w-full max-w-sm sm:max-w-md md:max-w-xl`).
   - Convert fixed margins/gaps to responsive scales (e.g., `gap-12 md:gap-20 lg:gap-28`).
   - Implement CSS Grid for cards:
     ```tsx
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
     ```
   - Streamline navigation: Prefer CSS-driven responsive visibility (`block lg:hidden`, `hidden lg:flex`) over JavaScript resize listeners where feasible.
4. **Touch Target & Tap Ergonomics**:
   - Ensure interactive icons (`SideBar`, `Header`, `Footer`) have bounding touch boxes >= 44x44px.
   - Prevent accidental double-tap zoom by using appropriate viewport meta settings.

## 5. Constraints
- **Preserve All Content**: Do not hide key information, project cards, or career details on mobile devices.
- **No Overflow Band-Aids**: Never apply `overflow-x: hidden` on `<body>` to hide misaligned elements; fix the underlying overflow cause in child elements.
- **Maintain Performance**: Use pure CSS / Tailwind responsive modifiers (`sm:`, `md:`, `lg:`) in preference to client-side JS resize event handlers wherever possible.

## 6. Quality Standards
- Zero unintended horizontal scrollbars at any viewport between 360px and 2560px.
- Fluid, proportional typography that scales comfortably without awkward word breaks.
- Accessible mobile navigation that closes reliably when clicking outside or navigating to a route.

## 7. Verification Requirements
1. Verify layout across 360px, 768px, 1024px, and 1440px viewports.
2. Run `npm run lint` and ensure clean output.
3. Run `npx tsc --noEmit` to confirm type integrity.
4. Execute `npm run build` to ensure no production build issues.

## 8. Expected Deliverables
1. Audit findings report detailing identified responsive issues and root causes.
2. Code diffs / updated components with mobile-first Tailwind classes.
3. Verification log validating clean builds and zero horizontal overflow.

