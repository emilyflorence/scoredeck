# ScoreDeck

A sports schedule frontend built with Next.js + Tailwind CSS, using the free [TheSportsDB](https://www.thesportsdb.com/api.php) API for schedule data.

ScoreDeck does not host or stream any video content. Game detail pages link out to official, licensed streaming providers (ESPN+, Fubo, Peacock, etc.) via affiliate links pointing to a separate affiliate-tracking backend.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Configuration

Update the affiliate redirect base URL in `pages/game/[id].js` (`https://your-affiliate-backend.com/r/...`) to point at your deployed affiliate-tracking service.

## Deployment

Recommended: deploy on [Vercel](https://vercel.com) — connect this repo and it will auto-detect the Next.js app.

## Data source

Schedule data courtesy of TheSportsDB free API. Please review their [terms/attribution requirements](https://www.thesportsdb.com/free_sports_api) for production use.
