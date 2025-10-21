# TransatourMA

Run instructions using Bun.

## Prerequisites

- Bun >= 1.2.23 installed (`curl -fsSL https://bun.sh/install | bash`)

## Install (root)

```bash
bun install
```

## Environment (server)

Create `packages/server/.env` with at least:

```bash
OPENAI_API_KEY=sk-...
# optional
PORT=3000
```

## Development

Run both server and client together from the repo root:

```bash
bun run dev
```

- Server: http://localhost:3000
- Client (Vite): http://localhost:5173 (proxies `/api` to `:3000`)

### Run individually (optional)

Server (Express):

```bash
cd packages/server
bun run dev
```

Client (Vite + React):

```bash
cd packages/client
bun run dev
```

## Build & Preview

Client build:

```bash
cd packages/client
bun run build
bun run preview
```

Server start (prod-like):

```bash
cd packages/server
bun run start
```

## API (quick ref)

- POST `/api/chat` → { message }
- GET `/api/promotions` → Promotion[]

This project was created using `bun init` in bun v1.2.23. `Bun` is a fast all-in-one JavaScript runtime.
