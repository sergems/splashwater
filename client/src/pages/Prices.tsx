import { ArrowRight, CircleDollarSign, Ticket } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { park, priceEstimates } from "@/data/parkContent";

export default function Prices() {
  return (
    <SiteLayout className="information-page">
      <PageHero eyebrow="Entrance fees & packages" title="Plan a family budget." accent="Estimated rates & extras." description="Use these comparison-based ranges to plan a visit. They are not official Splash Kids prices, a current tariff or a booking quote." actions={<a className="button button-primary" href={park.whatsappHref} target="_blank" rel="noreferrer">Ask for today’s rates <ArrowRight size={17} aria-hidden="true" /></a>} />
      <section className="section price-page-section">
        <div className="pricing-notice"><CircleDollarSign size={25} aria-hidden="true"/><div><strong>Planning estimates only — not official Splash Kids prices</strong><p>Actual rates, inclusions and booking terms may differ. Contact the team for the current price before paying.</p></div></div>
        <div className="price-table-wrap"><table className="price-table"><thead><tr><th scope="col">Admission or package</th><th scope="col">Budget estimate</th><th scope="col">Assumptions</th></tr></thead><tbody>{priceEstimates.map((item) => <tr key={item.category}><th scope="row"><span className="price-row-icon"><Ticket size={18} aria-hidden="true"/></span>{item.category}</th><td><span className="price-estimate">{item.estimate}</span></td><td>{item.details}</td></tr>)}</tbody></table></div>
        <div className="pricing-guidance-grid"><article><span className="eyebrow eyebrow-blue">A simple family budget</span><h2>Estimate R300–R540 for four.</h2><p>This assumes two adults and two children using the per-person ranges above, with no family discount, catering, transport or extras included.</p></article><article><span className="eyebrow eyebrow-blue">Group or party?</span><h2>Allow 3–7 days for a request.</h2><p>Use the same per-person estimate for groups, then allow R150–R600 for a lapa booking. No package discount or catering is assumed.</p><Link className="text-link" href="/parties">Explore group enquiries <ArrowRight size={16} aria-hidden="true"/></Link></article></div>
      </section>
    </SiteLayout>
  );
}
