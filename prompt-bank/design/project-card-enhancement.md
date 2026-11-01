# Prompt: Project Showcase Card Enhancement

## Persona & Role
You are a Senior Frontend UI Developer specializing in component micro-interactions, responsive grid systems, and Tailwind CSS.

## Context & Project Background
- **Target Component**: `src/components/ProjectCard.tsx` and parent container `src/app/dashboard/Projects.tsx`.
- **Data Source**: `src/constants/projectconstant.tsx` (`ProjectType`).
- **Issues to Solve**: Fixed card width (`w-[20rem]`), jarring continuous animation (`hover:animate-wiggle`), and relative navigation path (`project-details/...` missing leading slash).

## Objective
Elevate the project cards into responsive, visually captivating showcase cards featuring smooth hover zoom effects, elegant technology badge tags, clear title overlays, and robust absolute routing.

## Specific Requirements
1. **Responsive Card Geometry**:
   - Convert fixed `w-[20rem]` to a fluid layout within a responsive CSS grid (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`).
   - Maintain a consistent aspect ratio for preview images (`aspect-video` or `aspect-[16/10]`).
2. **Visual Hierarchy & Styling**:
   - Card container with subtle border (`border border-slate-200 dark:border-slate-800`), rounded corners (`rounded-2xl`), and gentle elevation shadow.
   - Polished hover transition: slight upward translation (`hover:-translate-y-1.5 transition-all duration-300`) and soft image zoom (`group-hover:scale-105 duration-500`).
   - Title and description overlay or footer with high contrast text.
3. **Technology & Feature Tags**:
   - Display a preview row of key tags or technologies associated with each project.
4. **Routing & Accessibility**:
   - Fix navigation path to absolute: `href={`/project-details/${project.pathName}`}`.
   - Add accessible focus indicators (`focus-visible:ring-2 focus-visible:ring-blue-500`).
   - Ensure the Next.js `<Image />` has descriptive `alt` text (`alt={`${project.title} project preview`}`).

## Constraints
- Preserve all existing project data fields (`title`, `thumbnail`, `pathName`, `achieve`, `features`).
- Avoid jarring animations or non-standard third-party dependencies.
- Ensure cards scale cleanly down to 320px mobile screens without horizontal scroll.

## Expected Output
1. Step-by-step summary of visual and structural improvements.
2. Complete updated code for `src/components/ProjectCard.tsx`.
3. Parent grid layout update for `src/app/dashboard/Projects.tsx`.

