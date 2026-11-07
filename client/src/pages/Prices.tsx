import { ArrowRight, CalendarDays, CircleDollarSign, Ticket, Users } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { park, priceEstimates } from "@/data/parkContent";

const admissionCategories = new Set([
  "Child admission",
  "Adult admission",
  "Toddler or age-based admission",
]);

const admissionEstimates = priceEstimates.filter((item) => admissionCategories.has(item.category));
const familyEstimate = priceEstimates.find((item) => item.category === "Family of four");
const additionalEstimates = priceEstimates.filter(
  (item) => !admissionCategories.has(item.category) && item.category !== "Family of four",
);

export default function Prices() {
  return (
    <SiteLayout className="information-page">
      <PageHero
        eyebrow="Entrance fees & packages"
        title="Plan a family budget."
        accent="Estimated rates & extras."
        description="Use these comparison-based ranges to plan a visit. They are not official Splash Kids prices, a current tariff or a booking quote."
        actions={
          <a className="button button-primary" href={park.whatsappHref} target="_blank" rel="noreferrer">
            Ask for today’s rates <ArrowRight size={17} aria-hidden="true" />
          </a>
        }
      />

      <section className="section price-page-section" aria-label="Entrance price estimates">
        <div className="pricing-notice" role="note">
          <span className="pricing-notice-icon"><CircleDollarSign size={23} aria-hidden="true" /></span>
          <div>
            <strong>Planning estimates only — not official Splash Kids prices</strong>
            <p>Actual rates, inclusions and booking terms may differ. Contact the team for the current price before paying.</p>
          </div>
        </div>

        <section className="price-admission-section" aria-labelledby="price-admission-heading">
          <div className="price-section-heading">
            <div>
              <span className="eyebrow eyebrow-blue">A simple starting point</span>
              <h2 id="price-admission-heading">Estimated admission</h2>
              <p>Choose the closest fit for your family. Age bands and amounts are budgeting assumptions only.</p>
            </div>
            <span className="price-estimate-stamp">Nonbinding planning ranges</span>
          </div>

          <div className="price-highlight-grid">
            {admissionEstimates.map((item, index) => (
              <article className={`price-highlight-card price-highlight-card--${index + 1}`} key={item.category}>
                <div className="price-highlight-topline">
                  <span className="price-highlight-icon"><Ticket size={19} aria-hidden="true" /></span>
                  <span className="price-highlight-index">0{index + 1}</span>
                </div>
                <h3>{item.category}</h3>
                <p className="price-highlight-amount">{item.estimate}</p>
                <p className="price-highlight-details">{item.details}</p>
                <span className="price-highlight-label">Estimated per visit</span>
              </article>
            ))}
          </div>
        </section>

        {familyEstimate && (
          <aside className="price-family-banner" aria-labelledby="price-family-heading">
            <div className="price-family-main">
              <span className="price-family-icon"><Users size={21} aria-hidden="true" /></span>
              <div>
                <span className="price-family-kicker">Family of four estimate</span>
                <h2 id="price-family-heading">{familyEstimate.estimate}</h2>
              </div>
            </div>
            <div className="price-family-details">
              <p>{familyEstimate.details} Catering, transport and extras are not included.</p>
              <Link className="price-family-link" href="/parties">
                Explore group & party visits <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        )}

        <section className="price-additional-section" aria-labelledby="price-additional-heading">
          <div className="price-section-heading price-section-heading--additional">
            <div>
              <span className="eyebrow eyebrow-blue">Groups, celebrations & extras</span>
              <h2 id="price-additional-heading">More to include in your budget</h2>
              <p>These ranges do not imply that a package, discount or add-on is available.</p>
            </div>
          </div>

          <div className="price-option-grid">
            {additionalEstimates.map((item) => (
              <article className="price-option-card" key={item.category}>
                <span className="price-option-icon"><CircleDollarSign size={19} aria-hidden="true" /></span>
                <div className="price-option-heading">
                  <h3>{item.category}</h3>
                  <p className="price-option-amount">{item.estimate}</p>
                </div>
                <p className="price-option-details">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="price-closing-note" role="note">
          <span className="price-closing-icon"><CalendarDays size={20} aria-hidden="true" /></span>
          <div>
            <strong>An estimate is not a reservation.</strong>
            <p>Ask the team about current rates, dates and availability before travelling. An enquiry does not hold a booking.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
