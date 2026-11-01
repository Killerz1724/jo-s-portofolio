# Prompt: Dark Mode & Color Palette Harmonization

## Persona & Role
You are a Design System Specialist and Accessibility Lead with expertise in CSS custom properties, Tailwind dark mode variants, and WCAG contrast conformance.

## Context & Project Background
- **Configuration**: `tailwind.config.ts` currently references CSS variables (`var(--background)`, `var(--foreground)`).
- **Global Stylesheet**: `src/app/globals.css`.
- **Existing Accent Colors**: Blue (`#2563eb`), dark blue (`#1F3A93`), and semantic tags in `SkillTag.tsx`.

## Objective
Establish a clean, balanced color palette supporting both light and dark modes with high contrast readability, harmonious neutral surfaces, and refined accent tokens using Tailwind CSS variables.

## Specific Requirements
1. **Design Token Architecture**:
   - Define CSS custom properties in `src/app/globals.css` for both `:root` (light) and `.dark` / `@media (prefers-color-scheme: dark)`:
     - `--background`: Clean light `#f8fafc` vs. Deep slate `#0b0f19`.
     - `--foreground`: Deep slate text `#0f172a` vs. Crisp off-white text `#f1f5f9`.
     - `--card-bg`: Pure white `#ffffff` vs. Elevated slate `#131b2e`.
     - `--card-border`: Light border `#e2e8f0` vs. Dark border `#1e293b`.
     - `--muted-text`: `#64748b` vs. `#94a3b8`.
2. **Tailwind Config Extension**:
   - Extend `tailwind.config.ts` theme colors to expose the tokens cleanly: `bg-card`, `border-card-border`, `text-muted`.
3. **Contrast & Readability Audit**:
   - Guarantee minimum 4.5:1 contrast ratio for all body text in both modes.
   - Ensure interactive links (`text-blue-600` in light mode, `text-blue-400` in dark mode) remain clearly visible.
4. **Implementation Guide**:
   - Provide non-destructive steps to update `globals.css` and `tailwind.config.ts`.
   - Provide examples of adapting existing components (`Layout.tsx`, `Headline.tsx`, `ProjectCard.tsx`).

## Constraints
- Do not break existing color utility classes already used throughout the app.
- Do not introduce flash of unstyled theme (FOUC).
- Keep implementation lightweight without heavy third-party theme wrappers if native CSS is sufficient.

## Expected Output
1. Complete updated `:root` and `.dark` token block for `src/app/globals.css`.
2. Clean `tailwind.config.ts` extension snippet.
3. Verification table confirming WCAG 2.1 AA contrast ratios for all core color pairings.

