import { ArrowLeft, CircleHelp } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";

const NOT_FOUND_PATH = "/404";

export default function NotFound() {
  useEffect(() => {
    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "noindex";
    if (window.location.pathname.replace(/\/$/, "") !== NOT_FOUND_PATH) {
      window.location.replace(NOT_FOUND_PATH);
    }
    return () => robots?.remove();
  }, []);

  return (
    <SiteLayout className="information-page not-found-page">
      <section className="section not-found-panel" aria-labelledby="not-found-title">
        <span className="not-found-icon"><CircleHelp size={32} aria-hidden="true" /></span>
        <span className="eyebrow eyebrow-blue">That path is a little lost</span>
        <h1 id="not-found-title">We can’t find that page.</h1>
        <p>The link may have changed. Head back to Splash Kids and choose where you’d like to go next.</p>
        <Link className="button button-primary" href="/"><ArrowLeft size={17} aria-hidden="true" /> Back to home</Link>
      </section>
    </SiteLayout>
  );
}
