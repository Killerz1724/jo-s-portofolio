---
description: "Comprehensive portfolio redesign workflow covering layout, visual hierarchy, modern styling, and responsive structure while preserving existing content."
---

# Redesign Portfolio Workflow

## 1. Role
Senior UI/UX Designer & Lead Frontend Architect specializing in modern developer portfolios, Next.js, and Tailwind CSS.

## 2. Objective
Plan, structure, and implement a modern, cohesive redesign of the portfolio's visual hierarchy, layout, typography, and section presentations, elevating personal branding while strictly preserving all existing content, projects, career entries, and external links.

## 3. Context Inspection Requirements
Before proposing or applying any design changes, the agent **must** read and inspect:
1. **Core Layout & Structure**:
   - `src/app/layout.tsx` (Global fonts, toast containers, root HTML)
   - `src/components/Layout.tsx` (Main container constraints, padding, wrappers)
   - `src/components/Header.tsx` and `src/components/SideBar.tsx` (Navigation flow, drawer states)
   - `src/components/Footer.tsx` (Contact information, social links)
2. **Dashboard Sections**:
   - `src/app/dashboard/page.tsx`
   - `src/app/dashboard/Headline.tsx` (Hero banner, photo, CV link)
   - `src/app/dashboard/Skills.tsx` (Skill categories, tags, icon rendering)
   - `src/app/dashboard/Career.tsx` (Career history cards and timeline)
   - `src/app/dashboard/Projects.tsx` (Featured projects display)
3. **Data Contracts**:
   - `src/constants/projectconstant.tsx`
   - `src/constants/careerdetailsconst.tsx`
4. **Active Rules**:
   - `.agents/rules/project-standards.md`
   - `.agents/rules/ui-ux-guidelines.md`
   - `.agents/rules/frontend-architecture.md`

## 4. Execution Steps
1. **Design Audit & Gap Analysis**:
   - Identify visual friction points, such as oversized gap utilities (`gap-[15rem]`), fixed width cards (`w-[20rem]`), and inconsistent margins.
   - Evaluate typography scale, contrast ratios, and whitespace rhythm across sections.
2. **Design System Alignment**:
   - Standardize color palettes using Tailwind utility classes (`blue-600`, `slate-900`, `slate-100`).
   - Define a consistent container layout (e.g., `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`).
   - Establish uniform card styling (subtle borders, refined shadows, consistent padding, rounded corners).
3. **Component-by-Component Refactoring**:
   - **Hero/Headline Section**: Modernize layout with clean typography, dynamic badge intro, high-quality portrait framing, and prominent CTA buttons.
   - **Skills Section**: Organize skills into clean visual chips or categorised grids with recognizable icons.
   - **Career Section**: Enhance the timeline or card layout with clear role hierarchy, duration badges, and skill tags.
   - **Projects Section**: Implement a responsive multi-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) with interactive preview cards.
   - **Navigation & Mobile Drawer**: Replace brittle viewport dimension checks with clean Tailwind responsive navigation.
4. **Motion & Interaction Integration**:
   - Use Framer Motion (`AnimateOnScroll`) to provide subtle, unified entrance transitions across sections.
   - Add refined `:hover` and `:focus-visible` states to cards and buttons.
5. **Cross-Viewport Testing & Polish**:
   - Check rendered layout at 360px (mobile), 768px (tablet), 1024px (laptop), and 1440px+ (desktop).

## 5. Constraints
- **Zero Content Deletion**: Do not remove, mock, or reduce existing project descriptions, career entries, or achievements.
- **Preserve Links**: Maintain CV download links, LinkedIn profile redirects, WhatsApp contacts, and GitHub repositories.
- **No Heavy Dependencies**: Implement designs using existing packages (`tailwindcss`, `framer-motion`, `@mdi/react`, `clsx`). Do not install redundant UI component libraries.
- **Maintain Route Integrity**: Do not alter routing behavior between `/`, `/dashboard`, `/career-details/*`, and `/project-details/*`.

## 6. Quality Standards
- **Aesthetic Excellence**: Clean, professional, contemporary design standard for senior engineering portfolios.
- **Typography**: Adhere strictly to the Poppins type hierarchy with legible line-heights and line-lengths (`max-w-prose` for paragraphs).
- **Accessibility**: 100% WCAG 2.1 AA compliance (contrast ratio >= 4.5:1, keyboard focus rings, semantic landmarks).

## 7. Verification Requirements
Execute and verify each of the following before concluding:
1. `npm run lint` — Confirm 0 errors and 0 warnings.
2. `npx tsc --noEmit` — Confirm full TypeScript type safety.
3. `npm run build` — Verify production build succeeds without Next.js compile errors.
4. Manual inspection of mobile layout to ensure zero horizontal scrollbars (`overflow-x: hidden`).

## 8. Expected Deliverables
1. Comprehensive summary of design enhancements made per section.
2. Modified component files with clean, documented code changes.
3. Verification log showing clean lint, type check, and build status.

