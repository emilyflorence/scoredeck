# ScoreDeck

A sports schedule frontend built with Next.js + Tailwind CSS, using the free [TheSportsDB](https://www.thesportsdb.com/) API for schedule data.

ScoreDeck does not host or stream any video content. Game detail pages link out to official, licensed streaming providers (ESPN+, Fubo, Peacock, etc.) via affiliate links pointing to a separate affiliate-tracking backend ([scoredeck-affiliate-backend](https://github.com/emilyflorence/scoredeck-affiliate-backend)).

## Getting started

```
npm install
npm run dev
```

Open http://localhost:3000

## Configuration

Copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_AFFILIATE_BASE_URL=https://your-deployed-affiliate-backend.com
```

This controls the base URL used for affiliate redirect links (`{NEXT_PUBLIC_AFFILIATE_BASE_URL}/r/:slug`) in `pages/game/[id].js`. If not set, it falls back to a placeholder URL, so be sure to configure it before going live.

On Vercel, add `NEXT_PUBLIC_AFFILIATE_BASE_URL` under Project Settings → Environment Variables.

## Deployment

Recommended: deploy on [Vercel](https://vercel.com) — connect this repo and it will auto-detect the Next.js app.

## Data source

Schedule data courtesy of TheSportsDB free API. Please review their [terms/attribution requirements](https://www.thesportsdb.com/free_sports_api) for production use.
