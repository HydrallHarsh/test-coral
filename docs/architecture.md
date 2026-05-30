# Architecture

```
┌─────────────┐     HTTPS      ┌──────────────────┐
│ Coral       │ ◄────────────► │ fleet-status-api │
│ Telemetry   │                │ (this service)   │
└─────────────┘                └────────┬─────────┘
                                        │
                                        ▼
                               ┌──────────────────┐
                               │ Postgres         │
                               │ fleet_status DB  │
                               └──────────────────┘
```

1. **Ingest** — Scheduled `src/cli/sync.js` pulls vessel snapshots from Coral API.  
2. **Serve** — Express routes expose aggregated regional counts.  
3. **UI** — `public/admin.html` is deprecated; React dashboard lives in a separate repo (dependency kept for shared types).

## Security notes

- Webhook signatures validated with `GITHUB_WEBHOOK_SECRET`.  
- Never commit `.env`; use `.env.example` and 1Password.  
- Dependency updates tracked in `#fleet-platform` Slack.
