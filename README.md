# Lone Coder

**Personal portfolio & business site for Lone Coder — self-employed software developer and QA specialist.**

https://lonecoder.nsh.one

A static, single-page site built with plain HTML, CSS and vanilla JavaScript — no framework, no build step, no backend. It introduces Lone Coder, lists the services offered, showcases a portfolio of live projects, and collects project inquiries through a contact form.

---

## Features

### Content
- **About** — bio, role, availability status, and a list of services offered (testing, web/app development, Chrome extensions, data entry, virtual assistance, etc.)
- **Portfolio** — a grid of live project cards, each with a headline stat, a short description, and a link to the deployed app (currently: Password Generator, 10 Minute Mail, Retro Quiz Zone, Dark-ELIZA, The Spirit of Halloween, and RockStation)
- **Contact** — a project-inquiry form (name, email, subject, details) submitted via [Formspree](https://formspree.io), protected by a honeypot field and Google reCAPTCHA, plus direct links to GitHub, LinkedIn, and a one-click "copy email" button

### Internationalization
- Full UI translation into **English, Bulgarian, Russian, and German**, switchable from a flag dropdown in the navbar
- Translations live in a single `i18n.js` dictionary; markup is translated declaratively via `data-i18n` (text content) and `data-i18n-aria` (`aria-label`) attributes — no page reload, no routing, just a DOM re-render
- The chosen language persists in `localStorage` and is restored on the next visit

### UI/UX details
- Responsive navbar that collapses into a hamburger menu on mobile, with a shadow that appears on scroll
- Mobile-friendly language switcher (a dedicated CSS fix keeps its dropdown from overflowing off-screen on narrow phones)
- Contact form gives inline status feedback (sending / success / error), all translated, without a page navigation
- Custom 404 page

### SEO / sharing
- Open Graph and Twitter Card meta tags for link previews
- `sitemap.xml` and `robots.txt`
- Custom domain via `CNAME` (`lonecoder.nsh.one`), served through GitHub Pages

---

## Limitations

- **No backend.** The contact form relies entirely on Formspree as a third-party submission handler; if Formspree is down or its free-tier quota is exhausted, the form stops working until it's noticed.
- **Portfolio is manually maintained.** New projects are added by hand — a new `<article class="portfolio-card">` in `index.html` plus a matching `pN_highlight` / `pN_desc` pair in all four languages in `i18n.js`. Nothing is pulled dynamically from GitHub or elsewhere.
- **Translations are hand-written, not machine-generated at build time**, and only cover the four languages listed above — there's no fallback language picker beyond English if a key is missing.
- **No analytics or visitor tracking** — no way to see traffic without setting one up separately.
- **Single HTML page.** There's no routing; `#about`, `#portfolio`, `#contact` are anchors within one document, not separate routes.

---

## Project structure

```
index.html      the entire site markup (nav, about, portfolio, contact, footer)
style.css       all styling
script.js       navbar toggle, scroll shadow, email-copy button, contact form submit handler
i18n.js         translation dictionary (en/bg/ru/de) + the data-i18n rendering engine
404.html        custom not-found page
logo.png        site logo / favicon / social share image
CNAME           custom domain for GitHub Pages (lonecoder.nsh.one)
robots.txt      search engine crawl rules
sitemap.xml     sitemap for search engines
```

## Running locally

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. No build step or dependencies required.

## Deploying

Hosted on **GitHub Pages** directly from this repository, with the custom domain pinned via `CNAME`. Pushing to the default branch updates the live site — there's no separate build or deploy command.

## Adding a new portfolio project

1. Add a new `<article class="portfolio-card">` block inside `#portfolio .portfolio-grid` in `index.html`, using the next `pN` index (title, `data-i18n="pN_highlight"`, `data-i18n="pN_desc"`, and a link to the live app).
2. Add the matching `pN_highlight` / `pN_desc` translation pair to **all four** language blocks in `i18n.js` (`en`, `bg`, `ru`, `de`).
3. The grid (`grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`) reflows automatically — no CSS changes needed for additional cards.
