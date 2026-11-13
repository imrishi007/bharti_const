# Bharti Construction Company

A responsive Next.js website using the supplied Royal Heritage reference and illustrative image pack.

## Run locally

Use Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production build and preview, run `npm run build` followed by `npm start`.

```sh
npm run lint
npm run typecheck
```

## Update content

- `src/content/site.ts` contains company details, navigation, homepage statistics, source links and asset paths.
- `src/content/timeline.ts` contains years, descriptions, publication flags, source links and optional historical photographs.
- `src/content/projects.ts` contains portfolio entries, verification statuses, categories, scopes and featured flags.
- `src/content/services.ts` contains expertise areas and scope lists.
- `public/images/heritage/` contains the supplied illustrative project crops and artwork adapted from the homepage reference. Replace these with approved photographs and the official logo when available.

Keep sample entries and documented engineering references clearly labeled until the company supplies project records and photographs. See [CONTENT_TODO.md](CONTENT_TODO.md) for outstanding content.

## Enquiries and site metadata

Copy `.env.example` to `.env.local`. Set `RESEND_API_KEY`, `ENQUIRY_FROM_EMAIL` and `ENQUIRY_TO_EMAIL` together to enable delivery. The sender address must use a domain authorized in Resend. With those values absent, the form validates the inputs and downloads a local text draft.

Set `SITE_URL` to the confirmed website origin to enable the production sitemap and Open Graph image. Until then, the preview requests that crawlers skip indexing it.
