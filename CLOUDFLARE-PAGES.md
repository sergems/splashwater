# Cloudflare Pages Deployment

The site is prepared for a static Cloudflare Pages deployment from the GitHub repository [`sergems/splashwater`](https://github.com/sergems/splashwater). It is not deployed yet. The site has no application server, database, login, payment integration or server-side enquiry storage; the contact actions hand off to WhatsApp, phone and email.

## Recommended Pages setup

Use Cloudflare Pages **Git integration** and connect the GitHub repository. Set the production branch to `main`. Cloudflare Pages supports GitHub integrations and can build on pushes to connected branches [1]. Choose Git integration rather than Direct Upload when creating the project; Cloudflare documents that those deployment modes cannot later be switched in place [1].

Set the build settings to:

- Framework preset: `None` (the project has a custom prerender build command).
- Root directory: repository root (`/`).
- Build command: `pnpm run build:static`.
- Build output directory: `dist/public`.
- Project name: `splashwater` (if unavailable, choose an available Pages name and update the `name` field in `wrangler.jsonc`).

The command runs Vite and then prerenders all 13 public routes to route-specific `index.html` files. Cloudflare Pages serves matching static HTML and supports `index.html` route folders [5].

A root-level `404.html` is included in `client/public/`. This is important for Pages: without a top-level 404 file, Pages treats the project as a single-page app and returns the Home HTML for unknown paths; with `404.html`, it can return a proper not-found response [5].

## Build versions and assets

The repository pins Node.js to `22.23.4` in `.nvmrc` and pnpm to `10.18.0` in `package.json`. In the Cloudflare Pages build environment variables, set `PNPM_VERSION=10.18.0` for both Production and Preview builds. Cloudflare documents `.nvmrc` for Node selection and `PNPM_VERSION` for overriding the build image's pnpm version [2]. No runtime secrets or service bindings are required.

All website-visible image files are checked into the repository under `client/public/images/`: the logo in `brand/` and the nine optimized activity photos in `activities/`. The source code no longer needs Manus Storage to render these images. Photo source and license details remain in `PHOTO-SOURCES.md`.

The source-controlled `wrangler.jsonc` records the Pages project name, compatibility date and `./dist/public` output directory [3]. Cloudflare treats a Wrangler file used for Pages deployment as configuration source of truth for the fields it declares; review it before the first deployment and change those fields in Git rather than relying on dashboard edits. The Pages build command and build-image version settings are configured separately in the dashboard. The project currently declares no Pages Functions, Workers bindings or database resources.

## Create and connect the project

In the Cloudflare dashboard, open **Workers & Pages**, create a Pages project using **Connect to Git**, and authorize access to `sergems/splashwater`. Select `main` as the production branch and enter the build settings above. Cloudflare’s build configuration requires the command and output directory to match the files produced by the build [4]. The first Pages build should then publish a `pages.dev` address. Check the Home page and the direct routes `/about/`, `/attractions/`, `/visit/`, `/prices/`, `/parties/`, `/safety/`, `/facilities/`, `/gallery/`, `/faqs/`, `/contact/`, `/terms/` and `/privacy/`, plus the logo and all nine activity images.

Cloudflare account authorization, Pages project creation, DNS changes and deployment have not been performed in this task. No custom domain was supplied, so do not add a guessed canonical URL or sitemap. After selecting the actual production origin, update route-level social/canonical metadata and create an absolute-URL sitemap if desired. The current social-preview image is a public CDN URL; it can be moved to the checked-in brand asset and updated to the chosen public origin at that point.

For a local Cloudflare Pages runtime smoke test after building, use `npx wrangler pages dev dist/public`. For the routine production path, use the Git integration so pushes to `main` build and deploy automatically [1].

## References

[1]: https://developers.cloudflare.com/pages/configuration/git-integration/ "Cloudflare Pages Git integration"
[2]: https://developers.cloudflare.com/pages/configuration/build-image/ "Cloudflare Pages build image"
[3]: https://developers.cloudflare.com/pages/functions/wrangler-configuration/ "Cloudflare Pages Wrangler configuration"
[4]: https://developers.cloudflare.com/pages/configuration/build-configuration/ "Cloudflare Pages build configuration"
[5]: https://developers.cloudflare.com/pages/configuration/serving-pages/ "Cloudflare Pages serving behavior"
