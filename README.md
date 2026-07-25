**Soft Tech Distribution — A Marketing Website**

A single-page marketing site for Soft Tech Distribution, a pan-regional IT, consumer electronics, and enterprise technology distributor. Built as static HTML/CSS/JS with no build step required.

**->Features**

1. Hero section with animated stat counters, a video-demo modal, and a full-bleed banner image.

2. "Who We Are" section with an auto-advancing mission/vision/values carousel.

3. Distribution verticals (Consumer IT & Laptops, Enterprise Infrastructure & Cloud, Supply Chain & Channel Support) shown as cards, each opening a detail modal.
3D product viewer — a lightweight Three.js scene (stylized laptop model) embedded in the "Consumer IT & Laptops" modal, with drag-to-rotate and auto-rotate.
Supply chain process section outlining the 4-step distribution flow.

4. Interactive Partner Estimator — a live calculator for estimated order value and delivery window based on selected tier + add-ons.
Partner onboarding / contact modal with a reseller application form.

5. Newsletter signup with toast notifications.

6. Multi-language support (i18n) — English, Spanish, French, and Swahili, switchable from the navbar dropdown. All translatable strings are tagged with data-i18n in the HTML and mapped in main.js.
Light/Dark theme toggle, persisted per session.

7. Fully responsive layout with a mobile nav menu.

**->Tech Stack**

1. HTML5 / CSS3 — no framework, custom design system (CSS variables for theme colors, spacing, radii, shadows).

2. Vanilla JavaScript — no framework or bundler.

3. Three.js r128 — powers the 3D product viewer (loaded via CDN).

4. Font Awesome 6.5.1 — icon set (loaded via CDN).

5. Google Fonts — Outfit (headings) and Plus Jakarta Sans (body text).

6. Images — sourced from Pexels (free-to-use stock photography, hotlinked via their CDN).

**->Editing Translations**

- All copy lives in a translation dictionary near the top of main.js, keyed by language code (en, es, fr, sw). Each key corresponds to a data-i18n="key_name" attribute in index.html. 


**->Editing Styles / Theme**

- Global design tokens (colors, fonts, spacing, shadows, radii) are defined as CSS custom properties near the top of style.css. Update these to re-theme the entire site without touching individual component rules. Dark/light mode is controlled via the data-theme attribute on <html>.

**-> Notes**
- All CDN dependencies (Three.js, Font Awesome, Google Fonts) require an internet connection — the site won't fully render offline.
  
- Form submissions (reseller application, newsletter signup) are front-end only (show a toast + reset) and aren't wired to a backend — connect them to your CRM/email service before going live.

- The 3D viewer is a stylized illustrative model, not a to-scale product render.
