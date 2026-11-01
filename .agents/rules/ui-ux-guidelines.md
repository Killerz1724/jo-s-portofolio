---
trigger: model_decision
description: "UI/UX design guidelines, visual hierarchy, responsive layout rules, typography, Tailwind CSS styling conventions, and accessibility (a11y) standards."
---

# UI/UX Design & Styling Guidelines

## 1. Design Philosophy
- **Modern & Professional**: Present Tejo's engineering background with a clean, confident aesthetic tailored for hiring managers, engineering leads, and clients.
- **Content-First Hierarchy**: Showcase projects, practical achievements, and skills with prominence. Avoid decorative clutter that detracts from content clarity.
- **Purposeful Motion**: Employ subtle, polished micro-interactions and scroll-triggered animations. Animation must enhance orientation, not distract or cause motion sickness.
- **Responsive Resilience**: Every screen must provide an optimal viewing and interaction experience across 360px mobile viewports up to 4K ultrawide monitors.

## 2. Color System & Design Tokens
- **Primary Brand Color**:
  - Blue Palette: `blue-600` (`#2563eb`), `blue-500` (`#3b82f6`), `blue-400` (`#60a5fa`).
  - Active/Accent highlights: Deep blue `#1F3A93`, Vibrant blue `#2563eb`.
- **Neutral Surface & Text**:
  - Backgrounds: Dark/Light background tokens using CSS variables (`var(--background)`).
  - Text: Dark slate `#0f172a` on light surfaces; off-white `#f8fafc` on dark surfaces.
  - Subdued Text / Metadata: `text-slate-500` or `text-gray-400` with verified contrast ratios.
- **Semantic Tag Colors** (from `SkillTag.tsx`):
  - `darkBlue`: `#1F3A93`
  - `red`: `#D64541`
  - `green`: `#16A085`
  - `purple`: `#8E44AD`
  - `orange`: `#E67E22`
  - `lightBlue`: `#90D5FF`
- **Contrast Integrity**: Always maintain at least a **4.5:1 contrast ratio** for standard text and **3:1** for large text/icons against their respective background.

## 3. Typography & Text Hierarchy
- **Font Family**: Google Font `Poppins` loaded via `next/font/google` in `src/app/layout.tsx`.
- **Scale & Weight Conventions**:
  - Page Headings (`h1`): `text-3xl lg:text-5xl font-black tracking-tight`.
  - Section Headings (`h2`): `text-2xl lg:text-3xl font-extrabold`.
  - Card & Subsection Titles (`h3`): `text-lg lg:text-xl font-bold`.
  - Body Text (`p`): `text-sm lg:text-base leading-relaxed text-slate-700 dark:text-slate-300`.
  - Badges, Tags, Metadata: `text-xs font-semibold tracking-wide`.
- **Readability**: Keep body paragraph widths constrained (`max-w-prose` or `max-w-2xl`) to avoid unwieldy 100+ character line lengths on wide viewports.

## 4. Spacing, Layout & Responsive Standards
- **Breakpoints (Tailwind Standards)**:
  - `sm`: 640px (large phones, small phablets)
  - `md`: 768px (tablets, portrait)
  - `lg`: 1024px (laptops, landscape tablets)
  - `xl`: 1280px (standard desktop displays)
  - `2xl`: 1536px (wide monitors)
- **Mobile-First Construction**:
  - Always write baseline classes for mobile viewports, applying responsive prefixes (`md:`, `lg:`) for larger viewports.
  - Avoid fixed horizontal pixel widths (e.g., replace `w-[20rem]` or `w-[24rem]` with responsive fluid width utilities like `w-full max-w-sm` or CSS grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
  - Prevent horizontal page overflow: inspect padding, margins, and absolute overlays across mobile screens.
- **Section Spacing**:
  - Maintain consistent vertical rhythm between dashboard sections (`gap-16 lg:gap-28` rather than arbitrary massive values like `gap-[15rem]` that harm mobile scrolling).
- **Navigation & SideBar**:
  - On mobile (`< 1024px`), navigation must be accessible via an accessible drawer/menu overlay with visible close interactions.
  - On desktop (`>= 1024px`), persistent side navigation or top navigation must not obscure main content or create awkward overlap.

## 5. Animation & Motion Guidelines
- **Scroll Entrances**: Use `AnimateOnScroll` (`framer-motion`) with subtle vertical translation (`y: 20px` to `0`) and opacity transition (`duration: 0.5s`).
- **Hover & Focus Micro-interactions**:
  - Prefer smooth transforms (`transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`).
  - Avoid jarring, looping animations like continuous `wiggle` in static views unless explicitly triggered by deliberate user interaction.
- **Reduced Motion Support**:
  - Respect `prefers-reduced-motion`: Wrap animations in motion queries or disable autoplay/looping motion when the user prefers reduced motion (`motion-reduce:...`).

## 6. Accessibility (a11y) Requirements (WCAG 2.1 AA)
- **Semantic HTML**: Use native semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, `<a>`). Never use an un-semantic `<div>` or `<span>` for clickable interactions without proper role and keyboard handling.
- **Keyboard Navigation**:
  - All interactive elements must receive clear `:focus-visible` styling (e.g., `focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none`).
  - Interactive components must be operable via `Tab`, `Enter`, and `Space`.
- **Images & Media**:
  - All `next/image` tags must have descriptive `alt` text explaining the content. Purely decorative elements must explicitly declare `alt=""` and `aria-hidden="true"`.
- **Target Sizes**:
  - All interactive touch targets (buttons, links, icon toggles) must meet the minimum size requirement of **44x44 CSS pixels** on touch-enabled viewports.

## 7. Tailwind CSS Conventions
- **Class Grouping Order**:
  1. Layout / Positioning (`fixed`, `relative`, `flex`, `grid`, `z-10`)
  2. Sizing & Box Model (`w-full`, `max-w-md`, `p-4`, `m-2`)
  3. Typography (`text-base`, `font-bold`, `text-center`)
  4. Visual Styling (`bg-white`, `border`, `rounded-xl`, `shadow`)
  5. Interactive States (`hover:...`, `focus-visible:...`, `active:...`)
- **Utility Over CSS Modules**:
  - Favor Tailwind utility classes over legacy `.module.css` files for newly authored or refactored components.
  - Use `clsx` or `clsxm` to cleanly merge conditional classes.

