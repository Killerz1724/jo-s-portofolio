---
description: "In-depth code review workflow evaluating TypeScript hygiene, Next.js Server/Client component boundaries, React 19 idioms, and maintainability."
---

# Code Review & Architecture Audit Workflow

## 1. Role
Staff Software Engineer & Frontend Architecture Specialist conducting rigorous code reviews and quality audits for Next.js and TypeScript applications.

## 2. Objective
Perform a comprehensive static analysis and architectural review of modified or targeted codebase files. Audit TypeScript type safety, Next.js Server/Client component boundaries, React 19 conventions, security, maintainability, and clean code principles, delivering categorized, actionable feedback.

## 3. Context Inspection Requirements
Before initiating the review, the agent **must**:
1. Check repository status and recent changes using `git status` or `git diff`.
2. Inspect project configuration files:
   - `tsconfig.json` (Compiler flags and path aliases)
   - `eslint.config.mjs` (Active lint rules and plugins)
   - `package.json` (Dependency tree and scripts)
   - `next.config.ts` (Next.js config and remote patterns)
3. Review applicable rules:
   - `.agents/rules/code-quality.md`
   - `.agents/rules/frontend-architecture.md`
   - `.agents/rules/project-standards.md`

## 4. Execution Steps
1. **Automated Static Analysis**:
   - Run `npm run lint` and record all warnings/errors.
   - Run `npx tsc --noEmit` to verify type checking across all files.
2. **Next.js & React 19 Architecture Review**:
   - **Boundary Verification**: Ensure `'use client'` is used only when strictly required by interactive leaf components (hooks, event handlers, animations). Verify that pages/layouts remain Server Components.
   - **Navigation & Links**: Check all `<Link>` components to ensure paths are absolute (e.g., `/project-details/...`) and not relative without a leading slash.
   - **Hydration & Lifecycle**: Inspect `useEffect` hooks for unnecessary state synchronization or missing cleanup functions.
3. **TypeScript Hygiene & Type Safety**:
   - Audit for prohibited `any` types or unsafe `as unknown as X` assertions.
   - Check component prop interfaces and function signatures for explicit, descriptive types.
   - Verify array operations (`.map()`) provide stable, unique `key` props (never use random numbers or array indices if items can reorder).
4. **Clean Code & Maintainability**:
   - Check for dead code, commented-out logic, unused variables, and leftover debugging statements (`console.log`).
   - Check naming consistency (PascalCase for components, camelCase for utilities, UPPER_SNAKE_CASE for constants).
   - Evaluate code duplication (DRY) and suggest utility/component extraction where repetitive blocks exist.
5. **Security & Vulnerability Check**:
   - Confirm no sensitive credentials or Supabase service role keys are exposed in client-facing files.
   - Validate external links have `rel="noopener noreferrer"` when using `target="_blank"`.
   - Verify `next.config.ts` image `remotePatterns` are scoped appropriately.
6. **Formulate Review Report**:
   - Categorize all findings by severity:
     - 🔴 **Critical**: Bugs, build blockers, security exposures, infinite redirect loops.
     - 🟠 **High**: Type safety violations, improper Server/Client boundaries, broken responsive overflow.
     - 🟡 **Medium**: Code duplication, missing focus rings, un-memoized heavy computations.
     - 🟢 **Low / Nit**: Formatting inconsistency, stylistic suggestions, comment cleanup.

## 5. Constraints
- **Constructive & Specific**: Always cite exact file paths and line numbers. Provide concrete "Before vs After" code snippets for each suggestion.
- **Do Not Break Working Logic**: Distinguish between functional defects and stylistic preferences. Do not recommend changes that alter existing portfolio data.

## 6. Quality Standards
- Adhere strictly to the Google and Next.js engineering best practices.
- Ensure all recommendations maintain or improve Core Web Vitals and accessibility.

## 7. Verification Requirements
1. Confirm all findings against current Next.js 15 and React 19 documentation.
2. Verify automated lint and compile commands produce deterministic results.

## 8. Expected Deliverables
1. **Structured Code Review Report** containing:
   - Executive Summary (Overall health score / readiness).
   - Categorized Findings Table (Severity, File, Line, Issue).
   - Detailed Recommendations with before/after code blocks.
2. Action plan for addressing any critical or high-severity items.

