# Prompt: [Descriptive Task Title in Title Case]

## Persona & Role
You are a [Senior Software Engineer / UI/UX Designer / Performance Specialist] specializing in [Key Domain, e.g., Next.js 15, Tailwind CSS, TypeScript].

## Context & Prerequisites
- **Target Files**: `[List relevant files, e.g., src/components/MyComponent.tsx]`
- **Related Rules & Guidelines**:
  - `.agents/rules/project-standards.md`
  - `.agents/rules/[ui-ux-guidelines.md | frontend-architecture.md | code-quality.md]`
- **Current State**: `[Brief 1-2 sentence description of existing implementation or current problem]`

## Objective
[Clear, concise description of the exact desired end state or feature to be delivered].

## Detailed Requirements
1. **[Requirement Category 1, e.g., Functional Behavior]**:
   - [Specific requirement item]
   - [Specific requirement item]
2. **[Requirement Category 2, e.g., UI & Responsive Styling]**:
   - [Specific requirement item]
   - [Specific requirement item]
3. **[Requirement Category 3, e.g., Type Safety & Architecture]**:
   - [Specific requirement item]
   - [Specific requirement item]

## Constraints & Guardrails
- **Preservation**: Do not break or remove existing functionality in `[affected area]`.
- **Dependencies**: Do not install new npm packages; utilize existing project libraries.
- **Standards**: Strictly adhere to TypeScript strict mode and ESLint rules.

## Verification Protocol
Before finalizing, verify:
1. `npm run lint` passes without errors.
2. `npx tsc --noEmit` passes without type errors.
3. Production build succeeds with `npm run build`.

## Expected Deliverables
1. [Deliverable 1, e.g., Architectural summary of changes]
2. [Deliverable 2, e.g., Full updated file source code]
3. [Deliverable 3, e.g., Verification test output]

