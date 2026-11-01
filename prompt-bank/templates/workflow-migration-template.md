# Template: Converting a Prompt to an Antigravity Workflow

Use this template when converting a tested, reusable prompt from `prompt-bank/` into an automated Antigravity workflow in `.agents/workflows/<workflow-name>.md`.

---

```markdown
---
description: "[One concise sentence (under 120 characters) describing what this workflow executes and when the agent or user should trigger it]"
---

# [Workflow Title in Title Case]

## 1. Role
[Specify the specialist persona, e.g., Senior Frontend Architect, UI/UX Designer, Performance Auditor] specializing in [relevant technologies].

## 2. Objective
[A concise, unambiguous statement of the workflow's mission and desired outcome].

## 3. Context Inspection Requirements
Before proposing or applying any modifications, the agent **must** read and inspect:
1. [Target file 1, e.g., src/app/dashboard/page.tsx]
2. [Target file 2, e.g., src/constants/projectconstant.tsx]
3. [Governing rule file, e.g., .agents/rules/project-standards.md]

## 4. Execution Steps
1. **[Step 1: Diagnostic / Inspection]**:
   - [Actionable instruction]
   - [Actionable instruction]
2. **[Step 2: Strategy / Design]**:
   - [Actionable instruction]
   - [Actionable instruction]
3. **[Step 3: Implementation / Refactoring]**:
   - [Actionable instruction]
   - [Actionable instruction]
4. **[Step 4: Quality & Verification]**:
   - [Actionable instruction]

## 5. Constraints
- **Preservation**: [Preserve existing data/functionality]
- **Scope Limit**: [Explicit boundary on what NOT to change]
- **Dependencies**: [Zero redundant dependency rule]

## 6. Quality Standards
- [Standard 1, e.g., 100% WCAG 2.1 AA accessibility conformance]
- [Standard 2, e.g., Zero TypeScript compilation errors]
- [Standard 3, e.g., Responsive across 360px to 2560px viewports]

## 7. Verification Requirements
Execute and verify each of the following before concluding:
1. `npm run lint` — Confirm 0 errors and 0 warnings.
2. `npx tsc --noEmit` — Confirm full TypeScript type safety.
3. `npm run build` — Verify production build succeeds without Next.js compile errors.

## 8. Expected Deliverables
1. [Deliverable 1: Summary of changes or audit findings]
2. [Deliverable 2: Complete modified source code]
3. [Deliverable 3: Verification logs]
```

---

## Migration Checklist:
1. **Filename**: Save as `.agents/workflows/<workflow-name>.md` using lowercase kebab-case.
2. **Frontmatter**: Verify the YAML header has valid `description: "..."`.
3. **Slash Command**: Test that typing `/<workflow-name>` in Antigravity chat suggests and executes the workflow properly.
4. **Size Budget**: Keep the workflow markdown under 12,000 characters to stay within Antigravity single-file workflow budgets.

