# Splash Kids Waterpark — Website Handoff

**Status:** The 13-page responsive site is implemented in the current Webdev project, builds as a static site and is available in Preview. It has not been approved for public launch. The public site now uses clearly labeled, nonbinding planning estimates for hours, prices, visitor arrangements, parking and facilities. Replace these with owner-approved details before they are treated as official park information.

## Delivered structure

The public pages are Home (`/`), About (`/about`), Attractions (`/attractions`), Visitor Information (`/visit`), Entrance Fees (`/prices`), Parties & Groups (`/parties`), Safety (`/safety`), Facilities (`/facilities`), Gallery (`/gallery`), FAQs (`/faqs`), Contact (`/contact`), Terms & Conditions (`/terms`) and Privacy (`/privacy`). The Gallery now contains nine licensed representative activity photos and discloses that they are not photos of the Splash Kids venue. Route-specific page HTML and metadata are generated during the static build; the route manifest is at `client/public/manus-routes.json`.

The site uses the supplied Splash Kids logo, includes an official Facebook-page link, provides click-to-call/WhatsApp/email/directions actions, and labels public visit ranges as planning estimates rather than official tariffs or policies. Photographer and stock-site credit captions are not displayed on the activity photos; their source and license details remain in `PHOTO-SOURCES.md`. The enquiry form only prepares a WhatsApp message on the visitor’s device. The site does not receive or store form submissions. There is no database, login, payment system or public content-management dashboard.

## Recommended platform and hosting

For the current informational website, keep the existing static Webdev deployment. It avoids maintaining an application server and database while still supporting all current pages, direct contact links, route-specific static HTML and future content changes. Keep online ticket sales, reservations and secure server-side enquiries out of scope until management approves the workflow and operating rules.

A verified custom domain can be connected once the owner confirms domain control and DNS access. Canonical URLs are intentionally not guessed in the current metadata. Before launch, use the selected public domain to check the canonical/share settings, HTTPS behavior, generated sitemap/robots responses, enquiry links and map location. Social links should be expanded only after the official account URLs are confirmed.

## Updating the website

Contact details, activity and facility lists, planning estimates, visitor assumptions, party enquiry types, safety guidance and FAQs are centralized in `client/src/data/parkContent.ts`. Comparator evidence and the assumptions behind the estimates are documented in `CONTENT-ESTIMATES.md`; photo provenance is documented in `PHOTO-SOURCES.md`. Page titles and descriptions are in `client/src/data/routeMeta.ts`. Updates to the source require a project edit, build and release; there is no management-facing CMS or content login. Approved gallery media should be uploaded through project storage and then added to the gallery content. Do not use generic generated or unrelated venue imagery as if it were a photograph of Splash Kids.

Build command: `pnpm build:static`. Static output: `dist/public`. TypeScript check: `pnpm check`.

## Indicative timeline and costs

The website implementation is complete. Allow approximately **1–3 working days after all required approved copy, venue media, legal review and domain/DNS access arrive** for focused content-finalisation, a launch check and release. This is a planning estimate, not a contracted schedule; legal review, a new CMS, payments, reservations or other integrations would add time.

No once-off design/development quote or annual service prices were supplied with the brief. The Manus hosting charge is account/plan-specific and is not visible in this project; a domain registrar, support level and maintenance scope have not been selected. No domain, hosting, security/maintenance or future-update amount is estimated here because provider, term and scope are unspecified. Platform analytics injection is disabled and no Google Analytics product has been added; platform/CDN telemetry and the data practices of Google Maps, Google Fonts, WhatsApp and other providers may still apply. Review provider terms and any fees before adding a CMS, newsletter, payment processing or booking integrations.

## Ownership, support and maintenance

The code and project changes are versioned in the current Webdev project. Before handover, management should identify who has administrator access to the hosting/project account, source repository, domain registrar, business email and Facebook page. There is no administrator-facing content editor today. A post-launch support/maintenance arrangement and training session have not been priced or scheduled; if desired, agree who updates content, handles urgent corrections and checks third-party dependencies.

## Management items required before public launch

1. Owner-approved opening days/times and public-holiday arrangements to replace the planning estimate.
2. Owner-approved prices, age brackets, packages, booking, walk-in, payment, cancellation, refund and weather rules.
3. Official age/height/weight limits, lifeguard coverage, first-aid and emergency contacts, lost-child procedures, thunderstorm rules and other safety arrangements. No numeric safety limits are guessed on the public site.
4. Approved parking, ablutions, changing rooms/showers, lockers, food sales, shade, accessibility and any charges.
5. An accurate entrance/map pin and permission to use the location details.
6. Genuine, approved park/facility photos and any promotional video; parent/guardian permissions before publishing identifiable children.
7. Owner verification that the supplied telephone/WhatsApp number is current. A public Facebook listing shows a different number; the website retains the number supplied in the brief.
8. Final management/legal review of the Terms & Conditions and Privacy Policy, including POPIA responsibilities, retention, cookies and any consent requirements.
9. Custom domain, DNS access, social links, analytics choice (if any), CMS preference and content-update ownership.
10. Quote/approval for domain, hosting, support, third-party subscriptions and any future booking/payment integrations.
