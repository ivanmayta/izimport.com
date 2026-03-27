# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

There is no test suite configured in this project.

## Multi-Domain Routing

This is a **multi-domain Next.js app** where different subdomains serve different parts of the app, configured via rewrites in `next.config.ts`:

| Host | Maps to | Purpose |
|------|---------|---------|
| `localhost:3000` | `/home` | Public landing page |
| `app.localhost:3000` | `/app/*` | Authenticated dashboard |
| `business.localhost:3000` | `/business/*` | Public business storefronts |

The middleware (`src/middleware.ts`) enforces Clerk auth only when the host is `app.localhost`. Public routes (sign-in, sign-up, docs) bypass auth checks.

## Architecture

### Directory Layout

- `src/app/app/` — Protected app routes (dashboard, auth pages, docs)
- `src/app/business/` — Public storefront pages at `/business/[username]`
- `src/app/api/` — API routes (DHL shipment tracking)
- `src/lib/` — Core library code
- `src/components/ui/` — shadcn/ui components
- `src/types/` — Shared TypeScript types

### Auth (Clerk)

- `ClerkProvider` lives in `src/app/app/layout.tsx` with Spanish localization
- `clerkMiddleware()` in `src/middleware.ts` protects the `app.*` subdomain
- Server-side auth: use `auth()` from `@clerk/nextjs/server`
- `verifyAuthUser()` in `src/lib/dal.ts` wraps `auth()` with React `cache()`

### Database (Supabase + RLS)

Two Supabase client factories in `src/lib/supbase-clerk/`:
- `createClientSupabaseClient()` — browser, anon key only
- `createServerSupabaseClient()` — server, injects Clerk JWT for RLS

Key tables: `profiles` (username, business info, social URLs) and `products` (linked to profiles via `perfil_id`).

### Data Fetching & Caching

Three caching layers are in use:
1. React `cache()` — deduplicates per-request (used in `src/lib/dal.ts` and `src/lib/fetchers.ts`)
2. Next.js `"use cache"` directive (experimental) — persists across requests with `cacheLife("max")`
3. `revalidatePath()` — on-demand invalidation after mutations

### Server Actions (`src/lib/actions.ts`)

All mutations go through server actions (`"use server"`). They:
1. Verify auth via `verifyAuthUser()`
2. Validate input with Zod schemas from `src/lib/validations.ts`
3. Return typed state objects (`ProfileState`, `ProductState`) with field-level errors

### Image Uploads (Cloudinary)

`src/lib/cloudinary.ts` exports:
- `uploadImage()` — profile pictures (5 MB max, AVIF/WebP/JPEG/PNG)
- `uploadProductImage()` — product images (1 MB max)

Images are streamed to Cloudinary, then the `secure_url` is saved to Supabase and the affected cache paths are revalidated.

## Key Libraries

- **Radix UI Themes** (`@radix-ui/themes`) — primary UI component system; `Theme` provider is in `src/app/app/layout.tsx`
- **Tailwind CSS v4** — utility styling, configured via PostCSS
- **shadcn/ui** — additional components in `src/components/ui/`; config in `components.json`
- **Zustand** — client-side state (used in business storefront)
- **Zod** — all form validation schemas in `src/lib/validations.ts`
- **Sonner** — toast notifications (`Toaster` in `src/app/app/layout.tsx`)
- **Tiptap** — rich text editor for product descriptions

## Environment Variables

Required variables (see `.env`):
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` — Clerk auth
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `NEXT_PUBLIC_CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` — Cloudinary
- `NEXT_PUBLIC_APP_URL` — must be `http://app.localhost:3000` in development
- `NEXT_PUBLIC_BASE_DOMAIN` — must be `http://localhost:3000` in development
