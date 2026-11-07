import { useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";
import { defaultMeta, routeMeta, socialPreviewImage } from "@/data/routeMeta";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

function writeMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function SiteLayout({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [location] = useLocation();
  const route = location.split(/[?#]/)[0] || "/";
  const meta = routeMeta[route] ?? defaultMeta;

  useEffect(() => {
    document.title = meta.title;
    writeMeta("name", "description", meta.description);
    writeMeta("name", "keywords", meta.keywords.join(", "));
    writeMeta("property", "og:type", "website");
    writeMeta("property", "og:site_name", "Splash Kids Waterpark");
    writeMeta("property", "og:title", meta.title);
    writeMeta("property", "og:description", meta.description);
    writeMeta("property", "og:image", socialPreviewImage);
    writeMeta("property", "og:image:alt", "Splash Kids Waterpark logo");
    writeMeta("name", "twitter:card", "summary_large_image");
    writeMeta("name", "twitter:title", meta.title);
    writeMeta("name", "twitter:description", meta.description);
    writeMeta("name", "twitter:image", socialPreviewImage);
  }, [meta]);

  return (
    <div className={`site-shell ${className}`.trim()}>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <SiteFooter />
    </div>
  );
}
