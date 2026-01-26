# DevLogic Website

Official website for DevLogic - Logic Meets Innovation.

## Live Site

[www.devlogic.hr](https://www.devlogic.hr)

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Email**: Resend + React Email
- **Hosting**: Cloudflare Pages
- **i18n**: next-intl
- **Animations**: Framer Motion
- **Icons**: lucide-react
- **Theme**: next-themes (dark/light)
- **Package Manager**: pnpm

## Development

Install dependencies:

```bash
pnpm install
```

Start local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

Create production build:

```bash
pnpm build
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset name
- `RESEND_API_KEY` - Resend API key for email
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ID

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Localized pages
│   │   ├── layout.tsx
│   │   ├── page.tsx       # Home
│   │   ├── about/
│   │   ├── products/
│   │   ├── blog/
│   │   ├── contact/
│   │   └── privacy-policy/
│   ├── api/               # API routes
│   └── studio/            # Sanity Studio
├── components/
│   ├── layout/            # Navigation, Footer, etc.
│   ├── sections/          # Page sections (Hero, About, Services, etc.)
│   ├── ui/                # Reusable UI components
│   └── shared/            # Shared components
├── lib/
│   └── sanity/            # Sanity client and queries
├── messages/              # i18n translations (en.json, hr.json)
└── types/                 # TypeScript types
```

## Languages

The website supports:
- English (EN) - Default
- Croatian (HR)

## Sanity CMS

Access Sanity Studio at `/studio` when running locally.

Content types:
- Products
- Blog Posts
- Blog Categories
- Testimonials
- Portfolio

## Deployment

### Cloudflare Pages

```bash
pnpm run deploy
```

## License

MIT
