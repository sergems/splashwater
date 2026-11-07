import { ArrowRight, CircleDollarSign, Ticket } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { park, priceCategories } from "@/data/parkContent";

export default function Prices() {
  return (
    <SiteLayout className="information-page">
      <PageHero eyebrow="Entrance fees & packages" title="Know before you go." accent="Ask for today’s rates." description="Admission fees, age categories and package inclusions must be approved by management. We’ll publish confirmed prices here as soon as they are available." actions={<a className="button button-primary" href={park.whatsappHref} target="_blank" rel="noreferrer">Ask about prices <ArrowRight size={17} aria-hidden="true" /></a>} />
      <section className="section price-page-section"><div className="pricing-notice"><CircleDollarSign size={25} aria-hidden="true"/><div><strong>Current prices: To be confirmed</strong><p>Contact Splash Kids before travelling. Do not rely on an old rate or an unconfirmed package.</p></div></div>
        <div className="price-table-wrap"><table className="price-table"><thead><tr><th scope="col">Admission or package</th><th scope="col">Current price</th><th scope="col">Details</th></tr></thead><tbody>{priceCategories.map((category) => <tr key={category}><th scope="row"><span className="price-row-icon"><Ticket size={18} aria-hidden="true"/></span>{category}</th><td><span className="price-to-confirm">To be confirmed</span></td><td>Ask management about eligibility, unit of charge, booking requirements and exclusions.</td></tr>)}</tbody></table></div>
        <div className="pricing-guidance-grid"><article><span className="eyebrow eyebrow-blue">Before you pay</span><h2>Check what’s included.</h2><p>Confirm whether a rate applies per person, per session or per day; any age or attraction limits; booking requirements; and whether additional facilities carry a charge.</p></article><article><span className="eyebrow eyebrow-blue">Group or party?</span><h2>Ask about availability.</h2><p>School, organised-group and birthday packages are subject to management confirmation. An enquiry does not reserve a date or confirm a booking.</p><Link className="text-link" href="/parties">Explore group enquiries <ArrowRight size={16} aria-hidden="true"/></Link></article></div>
      </section>
    </SiteLayout>
  );
}
