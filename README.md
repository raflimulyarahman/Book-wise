# University Library

A university library management system built with Next.js 16, NextAuth, Drizzle ORM, and PostgreSQL (Neon). Supports user registration with university ID verification, book catalog browsing, borrowing records, and an admin dashboard for managing users, books, and borrow requests.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Auth**: NextAuth v5 (beta)
- **Database**: Neon PostgreSQL via Drizzle ORM
- **Cache/Rate limit**: Upstash Redis
- **Background jobs**: Upstash QStash / Workflow
- **Image uploads**: ImageKit
- **UI**: Tailwind CSS 4, shadcn/ui, Radix
- **Language**: TypeScript

## Features

- User sign-up / sign-in with university ID and card upload
- Account approval workflow (PENDING / APPROVED / REJECTED)
- Book catalog & borrowing (BORROWED / RETURNED)
- User profile & activity tracking
- Admin dashboard: users, books, borrow records, account requests
- Image uploads via ImageKit

## Getting Started

### Prerequisites

- Node.js 20+ or Bun 1.4+
- PostgreSQL database (Neon recommended)
- Upstash Redis & QStash accounts
- ImageKit account

### Install

```bash
bun install
```

### Environment Variables

Create `.env.local` with:

```env
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=...
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=...
IMAGEKIT_PRIVATE_KEY=...

NEXT_PUBLIC_API_ENDPOINT=http://localhost:3000

DATABASE_URL=postgresql://...

AUTH_SECRET=...

UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...

QSTASH_URL=...
QSTASH_TOKEN=...
QSTASH_CURRENT_SIGNING_KEY=...
QSTASH_NEXT_SIGNING_KEY=...
```

### Database

```bash
bun run db:generate   # generate migrations
bun run db:migrate    # apply migrations
bun run db:studio     # open Drizzle Studio
```

### Run

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
| --- | --- |
| `dev` | Start dev server |
| `build` | Production build |
| `start` | Start production server |
| `lint` | Run ESLint |
| `db:generate` | Generate Drizzle migrations |
| `db:migrate` | Apply migrations |
| `db:studio` | Open Drizzle Studio |

## Project Structure

```
app/          # Next.js App Router pages & API routes
components/   # Reusable UI components
constants/    # Shared constants (navigation, sidebar links)
database/     # Drizzle client, schema, redis
lib/          # Utilities, config, workflow
drizzle/      # Generated migrations
public/       # Static assets
```

## License

Private project.
