# Coral Fleet Status API

Internal Node service for aggregating vessel telemetry and exposing read-only fleet status to the ops dashboard. This repo powers the **Harbor** view in Coral Console (staging).

## Overview

| Component | Role |
|-----------|------|
| `src/index.js` | HTTP server (Express) |
| `src/routes/fleet.js` | Fleet snapshot & vessel detail endpoints |
| `src/services/vesselClient.js` | Upstream telemetry client |
| `public/admin.html` | Legacy ops UI (static assets) |

## Quick start

```bash
cp .env.example .env   # then fill values from 1Password
npm install
npm run dev
```

Server listens on `PORT` (default `8080`). Health check: `GET /health`.

## Configuration

Environment variables are documented in [`.env.example`](./.env.example). Required for local dev:

- `CORAL_API_BASE` — Coral platform API URL  
- `DATABASE_URL` — Postgres connection string  
- `JWT_SECRET` — session signing key  

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Nodemon + local `.env` |
| `npm start` | Production entry |
| `npm test` | Unit tests (Jest) |
| `npm run lint` | ESLint on `src/` |

## Deployment

Images are built via GitHub Actions and deployed to our staging cluster on merge to `main`. See [docs/architecture.md](./docs/architecture.md) for the request flow.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Internal team only.

## License

MIT — see [LICENSE](./LICENSE).
