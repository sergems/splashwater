import { ArrowRight, CalendarDays, CircleDollarSign, Ticket, Users } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { park, priceCategories } from "@/data/parkContent";

const categoryIcons = [Ticket, Users, CalendarDays, CircleDollarSign];

export default function Prices() {
  return (
    <SiteLayout className="information-page">
      <PageHero
        eyebrow="Entrance fees & packages"
        title="Plan a family budget."
        accent="Rates by category."
        description="Browse the listed entry, family, group and facility rates, then confirm today’s price and booking terms with the Splash Kids team."
        actions={
          <a className="button button-primary" href={park.whatsappHref} target="_blank" rel="noreferrer">
            Ask for today’s rates <ArrowRight size={17} aria-hidden="true" />
          </a>
        }
      />

      <section className="section price-page-section" aria-label="Rates by category">
        <div className="pricing-notice" role="note">
          <span className="pricing-notice-icon"><CircleDollarSign size={23} aria-hidden="true" /></span>
          <div>
            <strong>Rate guide — confirm before paying</strong>
            <p>Prices, inclusions and booking terms can change. Contact the team for the current rate before travelling or paying.</p>
          </div>
        </div>

        <div className="price-list-heading">
          <div>
            <span className="eyebrow eyebrow-blue">Clear categories</span>
            <h2>Rates at a glance.</h2>
            <p>Use the list below to see the relevant category, rate and what it covers. Group arrangements, lapas and add-ons should be confirmed in advance.</p>
          </div>
          <span className="price-list-count">{priceCategories.length} categories listed</span>
        </div>

        <div className="price-category-list" role="list">
          {priceCategories.map((item, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <article className={`price-category-row price-category-row--${(index % 4) + 1}`} key={item.category} role="listitem">
                <span className="price-category-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="price-category-icon"><Icon size={20} aria-hidden="true" /></span>
                <div className="price-category-copy">
                  <span className="price-category-kicker">Category {String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.category}</h3>
                  <p>{item.details}</p>
                </div>
                <div className="price-category-value">
                  <span>Listed rate</span>
                  <strong>{item.price}</strong>
                </div>
              </article>
            );
          })}
        </div>

        <div className="price-closing-note" role="note">
          <span className="price-closing-icon"><CalendarDays size={20} aria-hidden="true" /></span>
          <div>
            <strong>Confirm current rates and availability before travelling.</strong>
            <p>An enquiry does not hold a booking. Ask the team about dates, group spaces, lapa requests and what is included.</p>
          </div>
          <Link className="price-closing-link" href="/contact#enquiry">Contact the team <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
