# Splash Kids Waterpark — Website Handoff

**Status:** The 13-page responsive site is prepared for static Cloudflare Pages hosting but has not been deployed. The site uses nonbinding planning estimates for hours, prices, visitor arrangements, parking and facilities; replace these with owner-approved details before presenting them as official park information.

## Delivered structure

The public pages are Home (`/`), About (`/about`), Attractions (`/attractions`), Visitor Information (`/visit`), Entrance Fees (`/prices`), Parties & Groups (`/parties`), Safety (`/safety`), Facilities (`/facilities`), Gallery (`/gallery`), FAQs (`/faqs`), Contact (`/contact`), Terms & Conditions (`/terms`) and Privacy (`/privacy`). The Gallery contains nine licensed representative activity photos and discloses that they are not photos of the Splash Kids venue. Route-specific page HTML and metadata are generated during the static build; the route manifest is at `client/public/manus-routes.json`. A branded root-level `404.html` is included so Cloudflare Pages can return a not-found response instead of falling back to Home for unknown paths.

The site uses the owner-supplied Splash Kids logo, links to the Facebook page, and provides call, WhatsApp, email and directions actions. Activity-photo credits are not rendered on the public site; their source and license details remain in `PHOTO-SOURCES.md`. The enquiry form prepares a WhatsApp message on the visitor’s device and does not receive or store submissions. There is no database, login, payment system or content-management dashboard.

## Cloudflare Pages setup

The canonical repository is [sergems/splashwater](https://github.com/sergems/splashwater), with `main` as the recommended production branch. The project is prepared for Cloudflare Pages Git integration, with the build command `pnpm run build:static` and output directory `dist/public`; the Cloudflare project has not yet been created. `.nvmrc` pins Node.js 22.23.4; set the Cloudflare build variable `PNPM_VERSION=10.18.0` for both Production and Preview. The source-controlled Pages metadata is in `wrangler.jsonc`; step-by-step account setup and official references are in `CLOUDFLARE-PAGES.md`.

All site-visible logo and activity images are now stored in `client/public/images/`, so the deployed pages do not depend on Manus Storage. The static build does not need a runtime server, database, API key or Cloudflare binding. Cloudflare account authorization, Pages project creation, deployment and DNS/domain changes have not been performed.

No public domain was supplied. Canonical URLs and an absolute-URL sitemap should be finalized only after the actual public origin is selected. The current social-preview image remains on a public Manus CDN URL until a production origin is known; it can then be updated to the checked-in logo asset.

## Updating the website

Contact details, activity and facility lists, planning estimates, visitor assumptions, party enquiry types, safety guidance and FAQs are centralized in `client/src/data/parkContent.ts`. Comparator evidence is documented in `CONTENT-ESTIMATES.md`; photo provenance is in `PHOTO-SOURCES.md`. Page titles and descriptions are in `client/src/data/routeMeta.ts`. Approved future venue photographs should be added to `client/public/images/` with permissions and source information; do not rely on Manus Storage URLs in a Cloudflare deployment or present generic images as photos of Splash Kids.

Build command: `pnpm run build:static`. Static output: `dist/public`. TypeScript check: `pnpm check`.

## Indicative timeline and costs

The website implementation is complete. Allow approximately **1–3 working days after all required approved copy, venue media, legal review and domain/DNS access arrive** for focused content-finalisation, a launch check and release. This is a planning estimate, not a contracted schedule; legal review, a new CMS, payments, reservations or other integrations would add time.

No once-off design/development quote or annual service prices were supplied with the brief. Cloudflare plan charges, domain-registration costs, support level and maintenance scope have not been selected or quoted. No domain, hosting, security/maintenance or future-update amount is estimated here because provider, term and scope are unspecified. Platform analytics injection is disabled and no Google Analytics product has been added; the data practices of Google Maps, Google Fonts, WhatsApp and other providers may still apply. Review provider terms and any fees before adding a CMS, newsletter, payment processing or booking integrations.

## Ownership, support and management items before launch

Management should identify who has administrator access to the Cloudflare account, GitHub repository, domain registrar, business email and Facebook page. There is no administrator-facing content editor today. A post-launch support/maintenance arrangement and training session have not been priced or scheduled; if desired, agree who updates content and handles urgent corrections.

Before public launch, obtain owner-approved opening days/times and prices; booking, payment, cancellation, refund and weather policies; attraction restrictions, safety and first-aid procedures; facility availability and charges; an accurate entrance/map pin; genuine park photographs and permissions for identifiable children; verification of the supplied contact details; legal review of the Terms & Conditions and Privacy Policy; and the actual domain/DNS and social links. The public site uses clearly labeled estimates until management replaces them.
