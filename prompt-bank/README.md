# Prompt Bank — Architecture & Usage Guide

Welcome to the **Jo's Portfolio Prompt Bank**. This repository serves as a centralized, curated collection of structured prompts and instructions designed for AI pair programming, feature development, UI design, code review, and automated workflows in Antigravity.

---

## 1. Directory Organization

The Prompt Bank is categorized by operational purpose:

```
prompt-bank/
├── README.md                  # This architecture and usage guide
├── design/                    # UI/UX design, visual hierarchy, styling, and aesthetic prompts
│   ├── hero-section-concept.md
│   ├── project-card-enhancement.md
│   └── dark-mode-color-palette.md
├── development/               # Feature engineering, component scaffolding, and integration prompts
│   ├── new-component.md
│   ├── add-project-entry.md
│   └── supabase-integration.md
├── review/                    # Quality audits, accessibility checks, and performance reviews
│   ├── accessibility-audit.md
│   ├── bundle-performance-audit.md
│   └── code-quality-checklist.md
└── templates/                 # Standardized prompt and workflow conversion templates
    ├── task-prompt-template.md
    └── workflow-migration-template.md
```

### Folder Responsibilities:
- **`design/`**: Prompts focused on visual design, layout wireframing, color theory, typography, Tailwind CSS styling tokens, and micro-interactions.
- **`development/`**: Prompts focused on implementing React 19 components, Next.js 15 App Router features, Supabase integrations, and TypeScript data modeling.
- **`review/`**: Prompts focused on quality assurance, code health, WCAG accessibility conformance, Core Web Vitals, and PR reviews.
- **`templates/`**: Boilerplates and blueprints for authoring new prompts and converting mature prompts into Antigravity workflows.

---

## 2. Naming Conventions

All prompt files must adhere to the following naming rules:
- **File Format**: Markdown (`.md`).
- **Casing**: Lowercase `kebab-case.md` (e.g., `hero-section-concept.md`, `add-project-entry.md`).
- **Descriptive Prefix/Action**: Name the file using an action-oriented or entity-focused noun phrase describing the exact task intent.
- **Directory Placement**: Place the prompt in the directory that reflects its primary goal (`design/`, `development/`, or `review/`). Never dump ad-hoc prompts in the root folder.

---

## 3. How to Add New Prompts

When creating a new prompt:
1. Open [`templates/task-prompt-template.md`](./templates/task-prompt-template.md).
2. Copy the structure into a new file inside the appropriate directory (e.g., `prompt-bank/development/my-new-feature.md`).
3. Fill in the standardized sections:
   - **Role**: Persona and technical domain.
   - **Objective**: Clear, measurable outcome.
   - **Context & Prerequisites**: Exact files, components, and data structures to inspect.
   - **Step-by-Step Instructions**: Sequential execution guide.
   - **Constraints & Quality Guardrails**: Non-negotiable boundaries.
   - **Expected Deliverables**: Code, tests, or documentation outputs.
4. Test the prompt in an AI chat session to ensure deterministic, high-quality results.

---

## 4. How to Reuse Existing Prompts

To use a prompt from the Prompt Bank in an active conversation:
1. **Direct Copy-Paste**: Copy the prompt content and paste it into the Antigravity chat input box.
2. **File Reference**: In Antigravity chat, reference the prompt directly by file path:
   ```
   Please execute the instructions in prompt-bank/development/new-component.md for creating a dynamic TestimonialCard component.
   ```
3. **Variable Customization**: Prompts include bracketed placeholders like `[ComponentName]` or `[RouteName]`. Replace these placeholders with your specific values before sending.

---

## 5. Converting Frequently Used Prompts to Antigravity Workflows

When a prompt proves repeatedly valuable across multiple development sessions, promote it to an official Antigravity workflow.

### Promotion Criteria:
- The task is recurring (e.g., routine code audits, adding portfolio projects, UI polishing).
- The prompt requires standardized context inspection across the codebase.
- You want one-click slash command invocation in Antigravity chat (e.g., `/improve-ui`).

### Conversion Procedure:
1. Review the [`templates/workflow-migration-template.md`](./templates/workflow-migration-template.md).
2. Create a new file in `.agents/workflows/<workflow-name>.md` (e.g., `.agents/workflows/add-project.md`).
3. Add the required Antigravity frontmatter at the top:
   ```markdown
   ---
   description: "One-sentence explanation of what the workflow does."
   ---
   ```
4. Structure the body into the 8 canonical workflow sections:
   - `## 1. Role`
   - `## 2. Objective`
   - `## 3. Context Inspection Requirements`
   - `## 4. Execution Steps`
   - `## 5. Constraints`
   - `## 6. Quality Standards`
   - `## 7. Verification Requirements`
   - `## 8. Expected Deliverables`
5. Test the newly created workflow in Antigravity by typing `/<workflow-name>` in the chat.

