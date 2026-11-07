# Splash Kids Waterpark — Website Handoff

**Status:** The 13-page responsive site is implemented in the current Webdev project, builds as a static site and is available in Preview. It has not been approved for public launch. Opening times, prices, packages, detailed safety procedures, actual park photographs/video, the exact map entrance pin and final legal text still require management confirmation.

## Delivered structure

The public pages are Home (`/`), About (`/about`), Attractions (`/attractions`), Visitor Information (`/visit`), Entrance Fees (`/prices`), Parties & Groups (`/parties`), Safety (`/safety`), Facilities (`/facilities`), Gallery (`/gallery`), FAQs (`/faqs`), Contact (`/contact`), Terms & Conditions (`/terms`) and Privacy (`/privacy`). Route-specific page HTML and metadata are generated during the static build; the route manifest is at `client/public/manus-routes.json`.

The site uses the supplied Splash Kids logo, includes an official Facebook-page link, provides click-to-call/WhatsApp/email/directions actions, and keeps hours, prices and other unknowns explicitly “To be confirmed.” The enquiry form only prepares a WhatsApp message on the visitor’s device. The site does not receive or store form submissions. There is no database, login, payment system or public content-management dashboard.

## Recommended platform and hosting

For the current informational website, keep the existing static Webdev deployment. It avoids maintaining an application server and database while still supporting all current pages, direct contact links, route-specific static HTML and future content changes. Keep online ticket sales, reservations and secure server-side enquiries out of scope until management approves the workflow and operating rules.

A verified custom domain can be connected once the owner confirms domain control and DNS access. Canonical URLs are intentionally not guessed in the current metadata. Before launch, use the selected public domain to check the canonical/share settings, HTTPS behavior, generated sitemap/robots responses, enquiry links and map location. Social links should be expanded only after the official account URLs are confirmed.

## Updating the website

Confirmed contact values, hours, attractions, amenities, visitor details, rates, party enquiry types, safety topics and FAQ answers are centralized in `client/src/data/parkContent.ts`. Page titles and descriptions are in `client/src/data/routeMeta.ts`. Updates to the source require a project edit, build and release; there is no management-facing CMS or content login. Approved gallery media should be uploaded through project storage and then added to the gallery content. Do not use generic generated or unrelated venue imagery as if it were a photograph of Splash Kids.

Build command: `pnpm build:static`. Static output: `dist/public`. TypeScript check: `pnpm check`.

## Indicative timeline and costs

The website implementation is complete. Allow approximately **1–3 working days after all required copy, approved media, legal review and domain/DNS access arrive** for a focused content-finalisation, launch check and release. This is a planning estimate, not a contracted schedule; legal review, a new CMS, payments, reservations or other integrations would add time.

No once-off design/development quote or annual service prices were supplied with the brief. The Manus hosting charge is account/plan-specific and is not visible in this project; a domain registrar, support level and maintenance scope have not been selected. Accordingly, domain, hosting, security/maintenance and future update amounts are **to be confirmed with the owner/provider**, rather than invented here. Platform analytics injection is disabled and no Google Analytics product has been added; platform/CDN telemetry and the data practices of Google Maps, Google Fonts, WhatsApp and other providers may still apply. Review provider terms and any fees before adding a CMS, newsletter, payment processing or booking integrations.

## Ownership, support and maintenance

The code and project changes are versioned in the current Webdev project. Before handover, management should confirm who has administrator access to the hosting/project account, source repository, domain registrar, business email and Facebook page. There is no administrator-facing content editor today. A post-launch support/maintenance arrangement and training session have not been priced or scheduled; if desired, agree who updates content, handles urgent corrections and checks third-party dependencies.

## Management items required before public launch

1. Approved opening days/times and public-holiday arrangements.
2. Approved prices, age brackets, packages, booking, walk-in, payment, cancellation, refund and weather rules.
3. Confirmed age/height/weight limits, lifeguard coverage, first-aid and emergency contacts, lost-child procedures, thunderstorm rules and other official safety arrangements.
4. Confirmed parking, ablutions, changing rooms/showers, lockers, food sales, shade, accessibility and any charges.
5. Accurate entrance/map pin and permission to use the location details.
6. Genuine, approved park/facility photos and any promotional video; parent/guardian permissions before publishing identifiable children.
7. Confirmation that the supplied telephone/WhatsApp number is current. A public Facebook listing shows a different number; the website retains the number provided in the project brief pending owner confirmation.
8. Final management/legal review of the Terms & Conditions and Privacy Policy, including POPIA responsibilities, retention, cookies and any consent requirements.
9. Confirmed custom domain, DNS access, social links, analytics choice (if any), CMS preference and content-update ownership.
10. Quote/approval for domain, hosting, support, third-party subscriptions and any future booking/payment integrations.
