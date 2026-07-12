# Yoga Studio Template 🧘

A free, complete website template for yoga studios (and similar small businesses), built for **zero recurring hosting cost** and **non-technical content editing**.

Content is in Brazilian Portuguese, made with small Brazilian studios in mind (WhatsApp booking, LGPD-friendly analytics), but everything is easy to translate.

## Features

- **Fully static** (Astro): fast, secure, free to host forever on Cloudflare (or Netlify/Vercel)
- **Admin panel at `/admin`** (Decap CMS): studio owners edit schedules, prices, teachers, news, gallery and site settings through friendly forms. Every change is a git commit: full audit trail and one-click rollback
- Class **schedule grouped by weekday**, with teachers selected from the registered teachers list
- **Pricing section** with collapsible plan groups (monthly, quarterly, class packs)
- Pages: home, modalities (class styles), schedule, teachers, gallery, news, about, contact, privacy policy
- **WhatsApp booking button** (no backend, no user data stored)
- Responsive, no client-side JavaScript on public pages, custom live preview in the CMS
- Well-commented code, written to be maintained by beginners

## Quick start

```bash
npm install
npm run dev        # site at http://localhost:4321
```

To try the admin panel locally (no login needed), run in two terminals:

```bash
npm run cms        # terminal 1: local CMS proxy
npm run dev        # terminal 2: the site
```

Then open <http://localhost:4321/admin>.

## Make it yours

| What | Where |
|---|---|
| Studio name, WhatsApp, address, banner | `src/data/settings.json` (or via `/admin`) |
| Colors and fonts | CSS variables at the top of `src/styles/global.css` |
| Schedule, prices, gallery | `src/data/*.json` (or via `/admin`) |
| Teachers, class styles, news | `src/content/*` (or via `/admin`) |
| Admin panel fields | `public/admin/config.yml` |

## Deploy (free)

1. Push to a GitHub repository.
2. On Cloudflare: Workers & Pages → import the repo. Build command `npm run build`, deploy command `npx wrangler deploy` (config in `wrangler.jsonc` serves the static `dist/` folder).
3. For production CMS login, point the backend in `public/admin/config.yml` to [DecapBridge](https://decapbridge.com) (email/password login for non-technical editors) or a GitHub OAuth proxy.

## License

MIT. Use it, tweak it, ship it.
