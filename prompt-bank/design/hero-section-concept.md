# Prompt: Hero Section Conceptual Redesign

## Persona & Role
You are a Principal UI/UX Designer and Frontend Specialist experienced in crafting high-impact personal developer portfolios.

## Context & Project Background
- **Project**: Tejo Rifqi Hananto's portfolio ("Tejofolio").
- **Current Hero Component**: `src/app/dashboard/Headline.tsx`.
- **Current Assets**: Profile portrait from Supabase Storage (`https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/careers//Tejo_fig.png`) and CV PDF link.
- **Tech Stack**: Next.js 15, React 19, Tailwind CSS 3.4, Framer Motion (`AnimateOnScroll`).

## Objective
Design and implement a modernized, visually compelling Hero Section that highlights Tejo's interdisciplinary background in Biomedical Engineering, Machine Learning, and Software Engineering, featuring refined typography, a professional call-to-action cluster, and an elegant responsive layout.

## Specific Requirements
1. **Typography & Framing**:
   - Create an eye-catching greeting with an animated status badge (e.g., "Available for new opportunities" with a glowing pulse dot).
   - Use Google Font Poppins with strong weight contrast (bold title, clean readable body).
   - Constrain paragraph line-length for optimal readability on wide displays (`max-w-xl`).
2. **Interactive CTA Cluster**:
   - Primary Action: "View Projects" (smooth scroll to `#projects` or link to projects).
   - Secondary Action: "Download CV" / "View Resume" with icon (`mdiFile`).
   - Quick Social Links: Subtle inline icon buttons for LinkedIn, GitHub, and Email.
3. **Visual Aesthetics & Portrait Frame**:
   - Modernize the photo container: circular or rounded-3xl framing with subtle decorative backdrop accents or gradient ring (`ring-4 ring-blue-500/20`).
   - Ensure the image uses `next/image` with `priority={true}` for instant Largest Contentful Paint (LCP).
4. **Responsive Layout**:
   - Mobile: Centered vertical column with generous touch targets.
   - Desktop (>= 1024px): Two-column layout with text on one side and portrait on the other.

## Constraints
- Do not alter Tejo's name, biography details, or the valid CV download URL.
- Use existing Tailwind utilities; do not add external CSS libraries.
- Maintain full keyboard accessibility (`focus-visible:ring-2`) on all interactive buttons.

## Expected Output
1. Structural layout breakdown explaining visual hierarchy decisions.
2. Complete, drop-in replacement code for `src/app/dashboard/Headline.tsx`.
3. Verification confirmation ensuring zero layout shifts and clean TypeScript compilation.

