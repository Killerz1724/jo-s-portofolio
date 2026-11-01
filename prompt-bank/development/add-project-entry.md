# Prompt: Add New Portfolio Project Entry

## Persona & Role
You are a Frontend Content & Data Specialist maintaining portfolio projects in Next.js and TypeScript.

## Context & Project Background
- **Data File**: `src/constants/projectconstant.tsx`.
- **Dynamic Route**: `src/app/project-details/[pathname]/page.tsx`.
- **Media Hosting**: Remote Supabase Storage or local `/public/` assets.
- **Data Type**: `ProjectType` array.

## Project Details to Add
- **ID**: `[Next sequential number, e.g., 3]`
- **Title**: `[Project Title]`
- **Slug / PathName**: `[kebab-case-slug]`
- **Thumbnail URL**: `[Supabase Storage URL or /assets/ path]`
- **Description**: `[Concise 2-3 sentence overview of the project]`
- **Key Achievements (`achieve`)**:
  - `[Achievement 1]`
  - `[Achievement 2]`
  - `[Achievement 3]`
- **Features (`features`)**:
  - `[Feature 1]`
  - `[Feature 2]`
- **Documentation Media (`documentation`)**:
  - `caption`: `[Media caption]`
  - `src`: `[Media URL or video stream link]`
  - `type`: `["image" | "video"]`
- **Related Links (`relatedLinks`)**:
  - `caption`: `["GitHub" | "Live Demo" | "Documentation"]`
  - `link`: `[Target URL]`

## Objective
Safely append a new project entry to `src/constants/projectconstant.tsx` ensuring type conformity, valid media configurations, and seamless dynamic page rendering.

## Specific Requirements
1. **Type Conformity**:
   - Ensure the new object strictly satisfies `ProjectType[number]`.
   - Ensure all required properties (`id`, `title`, `thumbnail`, `description`, `achieve`, `features`, `documentation`, `pathName`) are populated.
2. **Next.js Image / Remote Pattern Validation**:
   - If using remote Supabase or external storage URLs, verify that the host domain matches `remotePatterns` in `next.config.ts`.
3. **Dynamic Route Verification**:
   - Verify that `/project-details/[pathname]` dynamically resolves the new `pathName` without runtime errors.
4. **Preservation**:
   - Do NOT modify or delete existing project entries (`Keeper App`, `Tejoflow App`).

## Expected Output
1. The formatted TypeScript object ready to be added to `Projects` in `src/constants/projectconstant.tsx`.
2. Any necessary updates to `next.config.ts` if a new remote domain is introduced.
3. Verification confirmation: `npx tsc --noEmit` and build test.

