import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Router } from "wouter";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "dist", "public");

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceOrInsertMeta(html, attribute, key, value) {
  const tag = `<meta ${attribute}="${escapeAttribute(key)}" content="${escapeAttribute(value)}" />`;
  const pattern = new RegExp(`<meta\\s+${attribute}="${escapeRegExp(key)}"[^>]*\\/?\\s*>`, "i");
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `  ${tag}\n  </head>`);
}

function makeDocument(template, meta, markup, socialPreviewImage) {
  let html = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(meta.title)}</title>`);
  html = replaceOrInsertMeta(html, "name", "description", meta.description);
  html = replaceOrInsertMeta(html, "name", "keywords", meta.keywords.join(", "));
  html = replaceOrInsertMeta(html, "property", "og:type", "website");
  html = replaceOrInsertMeta(html, "property", "og:site_name", "Splash Kids Waterpark");
  html = replaceOrInsertMeta(html, "property", "og:title", meta.title);
  html = replaceOrInsertMeta(html, "property", "og:description", meta.description);
  html = replaceOrInsertMeta(html, "property", "og:image", socialPreviewImage);
  html = replaceOrInsertMeta(html, "property", "og:image:alt", "Splash Kids Waterpark logo");
  html = replaceOrInsertMeta(html, "name", "twitter:card", "summary_large_image");
  html = replaceOrInsertMeta(html, "name", "twitter:title", meta.title);
  html = replaceOrInsertMeta(html, "name", "twitter:description", meta.description);
  html = replaceOrInsertMeta(html, "name", "twitter:image", socialPreviewImage);
  return html;
}

let vite;
try {
  const template = await readFile(path.join(outputRoot, "index.html"), "utf8");
  vite = await createServer({
    configFile: path.join(projectRoot, "vite.config.ts"),
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "error",
  });
  const [{ default: App }, { routeMeta, socialPreviewImage }] = await Promise.all([
    vite.ssrLoadModule("/src/App.tsx"),
    vite.ssrLoadModule("/src/data/routeMeta.ts"),
  ]);

  for (const [route, meta] of Object.entries(routeMeta)) {
    const app = createElement(Router, { ssrPath: route }, createElement(App));
    const markup = renderToStaticMarkup(app);
    const document = makeDocument(template, meta, markup, socialPreviewImage);
    const relativeDirectory = route === "/" ? "" : route.replace(/^\//, "");
    const target = path.join(outputRoot, relativeDirectory, "index.html");
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, document, "utf8");
    console.log(`Prerendered ${route} -> ${path.relative(projectRoot, target)}`);
  }
} catch (error) {
  console.error("Static route prerender failed:", error);
  process.exitCode = 1;
} finally {
  await vite?.close();
}
