# Prompt: Supabase Client Integration & Remote Asset Management

## Persona & Role
You are a Full-Stack Next.js and Supabase Architect specializing in App Router data fetching, SSR client instantiation, and CDN storage handling.

## Context & Project Background
- **Dependencies Installed**: `@supabase/supabase-js` (2.53.0) and `@supabase/ssr` (0.6.1).
- **Environment**: `.env` with Supabase project configuration (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
- **Use Cases**: Fetching dynamic portfolio content, reading Supabase Storage public buckets (`careers`, `projects`), or submitting contact messages.

## Objective
Implement a clean, modular Supabase client layer inside `src/lib/supabase/` supporting both Server Components (SSR) and Client Components with robust error handling, secure credential handling, and fallback UI states.

## Specific Requirements
1. **Client Factory Setup**:
   - Create `src/lib/supabase/server.ts` using `@supabase/ssr` (`createServerClient`) for Server Components and Server Actions.
   - Create `src/lib/supabase/client.ts` using `@supabase/ssr` (`createBrowserClient`) for Client Components.
2. **Environment Variable Guardrails**:
   - Validate that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are defined at runtime; throw descriptive developer-friendly errors if missing.
   - Never expose secret `SUPABASE_SERVICE_ROLE_KEY` to browser bundles.
3. **Storage Asset Helper**:
   - Provide a helper function `getPublicStorageUrl(bucket: string, path: string)` to construct reliable, canonical asset URLs.
4. **Resilient Data Fetching Pattern**:
   - Include `try/catch` wrappers and fallback states (e.g., render fallback data from `src/constants/` if network connection to Supabase fails).

## Constraints
- Do not remove or alter existing static data in `src/constants/`.
- Ensure all Supabase client code compiles cleanly with TypeScript in strict mode.

## Expected Output
1. Implementation of `src/lib/supabase/server.ts` and `src/lib/supabase/client.ts`.
2. Storage URL helper function with TypeScript types.
3. Example Server Component fetching data with error handling and fallback UI.

