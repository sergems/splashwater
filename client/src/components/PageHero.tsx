import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  accent,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <span className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{eyebrow}</span>
      <h1>{title}{accent && <>{" "}<br /><span>{accent}</span></>}</h1>
      <p>{description}</p>
      {actions && <div className="hero-actions">{actions}</div>}
    </section>
  );
}
