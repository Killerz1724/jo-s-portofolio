---
description: "Targeted workflow for polishing UI aesthetics, micro-interactions, component styling, and visual feedback without altering business logic."
---

# Improve UI Component Workflow

## 1. Role
Senior UI Specialist & Design System Engineer focused on precision micro-interactions, Tailwind styling polish, and component aesthetics.

## 2. Objective
Refine and elevate the visual styling, interactive states (hover, focus, active), layout alignment, and micro-interactions of a specific component or section without modifying the underlying application architecture or breaking existing contracts.

## 3. Context Inspection Requirements
Before modifying UI elements, the agent **must**:
1. Inspect the targeted component file(s) in `src/components/` or `src/app/`.
2. Review where the component is rendered in parent views (e.g., `src/app/dashboard/` or `src/app/project-details/`).
3. Check existing props, interfaces, and conditional styling logic (e.g., `clsx` or `@riverfl0w/clsxm`).
4. Read `.agents/rules/ui-ux-guidelines.md` to ensure color palette, typography, and token alignment.

## 4. Execution Steps
1. **Target Component Assessment**:
   - Analyze visual hierarchy: font weights, contrast, padding, and border radius.
   - Audit interactive states: Does the component have clear `:hover`, `:focus-visible`, and `:active` styling?
   - Identify visual bugs: mismatched alignments, clipped shadows, awkward line breaks, or jarring animations.
2. **Styling Refinement**:
   - Apply modernized Tailwind utility classes:
     - Replace harsh borders with soft borders (`border border-slate-200 dark:border-slate-800`).
     - Elevate depth with subtle shadows (`shadow-sm hover:shadow-md transition-shadow duration-300`).
     - Use consistent rounding (`rounded-xl` or `rounded-2xl`).
   - Standardize spacing using consistent Tailwind scale increments (`p-4 sm:p-6`, `gap-3 sm:gap-4`).
3. **Micro-Interaction Polish**:
   - Add subtle feedback on user action (e.g., slight scaling `hover:scale-[1.02] active:scale-[0.98]`, smooth background shifts `transition-colors duration-200`).
   - Ensure animation performance by animating only `transform` and `opacity` properties.
4. **Accessibility & State Verification**:
   - Add visible focus rings (`focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`).
   - Validate color contrast against light and dark backgrounds.
   - Verify that touch targets for icons and buttons are at least 44x44px.

## 5. Constraints
- **Preserve Existing Props**: Do not change or remove component props that are actively consumed by parent views.
- **Maintain Data Display**: Ensure all text, badges, titles, dates, and media elements remain rendered and accurate.
- **No Extra Libraries**: Use built-in Tailwind and existing Framer Motion capabilities; do not pull in outside CSS or icon libraries.

## 6. Quality Standards
- **Visual Harmony**: Styling changes must integrate seamlessly with adjacent components and the overall portfolio theme.
- **Performance**: Transitions must be hardware-accelerated (`transform`, `opacity`) and run at 60fps.
- **Accessibility**: Minimum WCAG 2.1 AA compliance for text contrast and interactive focus visibility.

## 7. Verification Requirements
1. Run `npm run lint` to guarantee clean ESLint status.
2. Run `npx tsc --noEmit` to verify TypeScript prop types.
3. Test component rendering at small mobile (360px) and standard desktop (1280px) breakpoints.

## 8. Expected Deliverables
1. Summary of specific UI improvements implemented (typography, spacing, states, micro-interactions).
2. Clean, updated component source code.
3. Quality and verification confirmation report.

