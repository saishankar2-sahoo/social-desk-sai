# social-desk

A sample AI social media manager built with Next.js App Router, TypeScript and Tailwind CSS. The app includes overview, trend research, multi-platform composition, calendar scheduling, analytics and simulated social account connections.

## Requirements
- Node.js 20.9+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Demo behavior
- All sample content and metrics live in `src/data/mock.ts`.
- AI-style research, platform copy generation and image preview are simulated in `src/lib/ai.ts`.
- Generated drafts require an explicit approval action before the schedule action becomes available.
- Account connections are simulated; no credentials are collected and no external authentication occurs.
- No external social APIs or backend services are called. The image concept uses a local SVG placeholder; no external API or image service is called.

## Project structure
```text
src/app/          App Router pages
src/components/   Shared dashboard shell and UI primitives
src/data/mock.ts  All mock data
src/lib/ai.ts     Replaceable sample AI functions
public/stitch/    Original Stitch screen references
design/            Original Stitch HTML and design system reference
```

## Environment
No environment variables are required. See `.env.example` for the intentionally empty template.
