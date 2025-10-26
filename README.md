# Mommy DJ - Marketing Website

Marketing website for Mommy DJ, a professional DJ service specializing in weddings, private events, and parties.

## Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first design that works on all devices
- **Static Pages**: 
  - Home page with hero, services, reviews, and contact form
  - Matrimoni (Weddings)
  - Eventi Privati (Private Events)
  - Recensioni (Reviews)
  - Contatti (Contact)
- **Sticky Header**: With "Verifica disponibilità" CTA button
- **No Backend Required**: Static site - no authentication or backend needed

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Lint

```bash
# Run ESLint
npm run lint
```

## Deployment on Vercel

### Deploy Steps

1. Push this repository to GitHub
2. Import the project in Vercel dashboard
3. Configure build settings (Vercel will auto-detect Next.js)
4. Deploy!

### Environment Configuration

No environment variables are required for this static site.

## TODO: Connecting /richiedi to Banger Request App

The "Verifica disponibilità" button and `/richiedi` links currently point to a placeholder route.

**To connect to your Banger Request web app on Vercel:**

### Option 1: External Link (Recommended for separate apps)

Update the `/richiedi` links in the following files to point to your Banger Request app URL:

```typescript
// In components/Header.tsx
<Link href="https://your-banger-request-app.vercel.app/request">

// In components/Footer.tsx
<Link href="https://your-banger-request-app.vercel.app/request">

// In app/page.tsx (multiple locations)
<Link href="https://your-banger-request-app.vercel.app/request">

// And in other pages...
```

Replace `https://your-banger-request-app.vercel.app/request` with your actual Banger Request URL.

### Option 2: Vercel Rewrites (For seamless integration)

Add to `next.config.ts`:

```typescript
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/richiedi',
        destination: 'https://your-banger-request-app.vercel.app/request',
      },
    ]
  },
}
```

This will make `/richiedi` transparently proxy to your Banger Request app while keeping the same domain.

### Option 3: Multi-Zone (Advanced - Separate apps, shared domain)

If you want both apps under the same domain (e.g., `yourdomain.com` for marketing and `yourdomain.com/richiedi` for the app), configure Vercel's multi-zone feature:

1. Deploy both apps separately on Vercel
2. In the marketing site's Vercel project settings, add a rewrite rule to proxy `/richiedi/*` to the Banger Request app
3. Configure both apps to handle their respective paths

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with Header and Footer
│   ├── page.tsx                # Home page
│   ├── matrimoni/page.tsx      # Weddings page
│   ├── eventi-privati/page.tsx # Private events page
│   ├── recensioni/page.tsx     # Reviews page
│   └── contatti/page.tsx       # Contact page
├── components/
│   ├── Header.tsx              # Sticky header with navigation
│   ├── Footer.tsx              # Footer with links and contact info
│   └── Section.tsx             # Reusable section wrapper
└── public/                     # Static assets
```

## Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel
- **Linting**: ESLint with Next.js config

## License

Private - All rights reserved to Mommy DJ

## Support

For questions or issues, contact: info@mommydj.com
