# Prompt: Accessibility (a11y) & WCAG 2.1 AA Audit

## Persona & Role
You are a Certified Web Accessibility Specialist and Frontend Quality Engineer expert in WCAG 2.1 AA, screen reader navigation, and keyboard ergonomics.

## Context & Project Background
- **Project**: Tejo Rifqi Hananto's Portfolio ("Tejofolio").
- **Key Viewports**: Mobile (<768px), Tablet, Desktop (>=1024px).
- **Core Components to Audit**:
  - `src/components/Header.tsx` & `src/components/SideBar.tsx` (Menu toggles, tooltip links)
  - `src/components/Footer.tsx` (Social links, clipboard copy button)
  - `src/app/dashboard/Headline.tsx` (Hero portrait `alt`, CV download button)
  - `src/components/ProjectCard.tsx` & `src/components/CareerCard.tsx` (Card links, image descriptions)

## Objective
Conduct a thorough accessibility audit against WCAG 2.1 Level AA standards, identifying non-compliant patterns, missing ARIA landmarks, keyboard traps, poor color contrast, or unlabelled buttons, and provide concrete remediation code.

## Specific Audit Areas
1. **Perceivable**:
   - **Image Alt Text**: Do all `<Image />` tags have descriptive `alt` attributes? Are decorative elements explicitly marked with `aria-hidden="true"`?
   - **Color Contrast**: Do all text elements and interactive icons achieve a contrast ratio >= 4.5:1 against light and dark backgrounds?
2. **Operable**:
   - **Keyboard Operability**: Can a user navigate all links, sidebar items, and copy buttons using only `Tab`, `Enter`, and `Space`?
   - **Focus Visible**: Are focus rings clearly visible (`focus-visible:ring-2`) on every interactive control?
   - **Touch Target Sizes**: Are all clickable elements at least 44x44 CSS pixels on touch viewports?
3. **Understandable**:
   - **Icon Buttons**: Do icon-only buttons (such as hamburger menu and social icons) have `aria-label` attributes for screen readers?
4. **Robust**:
   - **Semantic Landmarks**: Are `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` properly utilized?
   - **Heading Hierarchy**: Is there a logical heading ladder (`h1` -> `h2` -> `h3`) without skipping levels?

## Expected Output
1. **WCAG Compliance Scorecard** table listing:
   - Success Criterion (e.g., 1.1.1 Non-text Content, 1.4.3 Contrast, 2.1.1 Keyboard).
   - Component / File location.
   - Current Status (`Pass` / `Fail`).
   - Specific defect description.
2. Direct code fixes with before/after comparisons for all failing criteria.
3. Verification steps to validate fixes.

