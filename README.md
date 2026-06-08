# Renno — Waitlist Landing Page

Marketing landing page for **Renno**, a fitness competition app where runners stake real money on weekly mileage goals. Hit your goal, keep your cash. Miss it, fund the winners.

Live at **[rennoapp.com](https://rennoapp.com)**

## Stack

- React + Vite
- Tailwind CSS v4
- Netlify (hosting + form handling)

## Getting started

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
netlify deploy --dir=dist --prod
```

## Email signups

Form submissions are captured by Netlify Forms. View them at:
**app.netlify.com → renno-waitlist → Forms**

## Swapping in the real logo

The nav and footer use a text wordmark placeholder. Once the SVG is ready:

1. Drop `renno-logo.svg` into `/public`
2. Uncomment the `<img>` line in `src/components/Navbar.jsx` and `src/components/Footer.jsx`
3. Remove the text wordmark below it

## Brand

| Token | Value |
|-------|-------|
| Background | `#0a0a0a` |
| Surface | `#141414` |
| Lime accent | `#C4F23C` |
| Headline font | Archivo 900 |
| Body font | Inter |
