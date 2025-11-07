## Victor Consultancy Site

Strategic AI adoption hub for Anne Victor. Built with Next.js 15 (App Router), Tailwind CSS v4, and Supabase for authentication, data, and storage. The site delivers:

- Hero-led homepage with AI adoption value proposition
- Solution, industry, and assessment pages
- Client portal roadmap and resource library
- Automation hooks for insights/blog and LinkedIn workflows

## Stack

- **Frontend**: Next.js 15 App Router, React 19, Tailwind CSS v4
- **Auth/DB**: Supabase (Postgres + Row-Level Security)
- **CMS (planned)**: Headless (Sanity/Contentful) via `CMS_PREVIEW_*` environment variables
- **Automation**: Zapier/n8n integration points for publishing and CRM syncing
- **Deployment**: Vercel + Cloudflare DNS

## Local Setup

```bash
git clone https://github.com/<org>/victor-consultancy
cd victor-consultancy
npm install
cp .env.example .env.local
npm run dev
```

Populate `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
CMS_PREVIEW_BASE_URL=...
CMS_PREVIEW_TOKEN=...
SUPABASE_SERVICE_ROLE_KEY=...
```

## Supabase

Migration files live in `supabase/migrations/`. The first migration creates `assessment_session_requests` with RLS policies to allow anonymous inserts and service-role reads.

Apply migrations:

```bash
npx supabase db push
```

Service role secrets should be stored securely (e.g., Supabase project settings, Vercel env vars). The `SUPABASE_SERVICE_ROLE_KEY` is only required for backend cron jobs or CMS automations; never expose it to the client.

## CMS Preview

`src/lib/cms.ts` fetches featured insights/resources. Without environment variables set, it falls back to curated defaults. Configure a headless CMS endpoint exposing `/insights` and `/resources` JSON lists.

During local development you can leave `CMS_PREVIEW_BASE_URL` pointed to the built-in API mocks:

```
CMS_PREVIEW_BASE_URL=/api/cms
CMS_PREVIEW_TOKEN=
```

For production, replace the base URL with your CMS (e.g., Sanity, Contentful, Hygraph) preview API and issue a read token.

## Development Notes

- Shared layout in `src/app/layout.tsx` manages navigation, footer, and theming.
- Assessment form leverages server actions (`src/app/assessment/actions.ts`) for Supabase-backed session requests.
- Tailwind design tokens tuned for neutral palette with blush accents.

## Roadmap

- Client portal authentication + resource delivery
- Supabase-managed readiness assessment scoring and PDF reports
- CMS integration for insights hub, resource library, and academy updates
- Automation workflows (blog → LinkedIn, download → CRM)
