import { ArrowRight, Check, CircleHelp, Clock3, MapPin, Ticket } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import MapPanel from "@/components/MapPanel";
import SiteLayout from "@/components/SiteLayout";
import { park, visitorPlanningNotes } from "@/data/parkContent";

const visitorDetails = [
  "Visitors may bring their own food and snacks.",
  "Coolerboxes are welcome at no additional charge.",
  "Picnic and braai areas are part of the park information; follow current staff fire-safety instructions.",
  "Lapas are listed for advance requests; allow 3–7 days ahead and R150–R600 per booking.",
  "Adults should supervise children throughout the visit and follow posted pool, attraction and staff instructions.",
];

export default function Visit() {
  return (
    <SiteLayout className="information-page">
      <PageHero eyebrow="Plan Your Visit" title="A little planning." accent="A lot more play." description="Use the address, practical guidance and park information below to shape a family day at Splash Kids. These details are nonbinding and may differ from the day’s arrangements." actions={<><a className="button button-primary" href={park.mapSearchUrl} target="_blank" rel="noreferrer">Get Directions <MapPin size={17} aria-hidden="true" /></a><Link className="button button-outline" href="/contact#enquiry">Ask a question <ArrowRight size={17} aria-hidden="true" /></Link></>} />
      <section className="section visit-facts-section"><div className="visit-facts-grid"><article className="visit-fact-card"><Clock3 size={22} aria-hidden="true"/><span>Indicative opening window</span><strong>{park.hours}</strong><p>{park.hoursNote}</p></article><article className="visit-fact-card"><Ticket size={22} aria-hidden="true"/><span>Indicative entrance</span><strong>Child R70–R120 · Adult R80–R150</strong><p>Under age 2: listed R0–R50 per visit.</p></article><article className="visit-fact-card"><CircleHelp size={22} aria-hidden="true"/><span>Group &amp; lapa requests</span><strong>Allow 3–7 days</strong><p>Planning note; busy-day capacity can limit walk-ins.</p></article></div></section>
      <section className="section visit-guidance-section"><div className="section-heading"><span className="eyebrow eyebrow-blue">Helpful before you go</span><h2>Visit details <span>&amp; planning notes.</span></h2><p>Use the guidance for budgeting and preparation—not as official Splash Kids hours, prices, facility guarantees or operating rules.</p></div>
        <div className="visit-guidance-grid"><article className="visit-confirmed-card"><div className="guidance-title"><span className="guidance-icon"><Check size={20} aria-hidden="true"/></span><div><span className="eyebrow eyebrow-blue">Park information</span><h3>Good to know</h3></div></div><ul>{visitorDetails.map((line) => <li key={line}>{line}</li>)}</ul></article><article className="visit-confirmation-card"><div className="guidance-title"><span className="guidance-icon guidance-icon-warn"><CircleHelp size={20} aria-hidden="true"/></span><div><span className="eyebrow eyebrow-blue">Conservative assumptions</span><h3>Budget &amp; prepare</h3></div></div><ul>{visitorPlanningNotes.map((item) => <li key={item}>{item}</li>)}</ul><Link className="text-link" href="/contact#enquiry">Get the latest visit details <ArrowRight size={16} aria-hidden="true"/></Link></article></div>
      </section>
      <section className="section location-section"><MapPanel /></section>
      <section className="section page-bottom-cta"><div><span className="eyebrow eyebrow-blue">Talk to our team</span><h2>Questions about your visit?</h2><p>Call or WhatsApp for the day’s schedule, latest rates, group spaces and practical arrangements.</p></div><a className="button button-primary" href={park.whatsappHref} target="_blank" rel="noreferrer">WhatsApp {park.phoneDisplay} <ArrowRight size={17} aria-hidden="true"/></a></section>
    </SiteLayout>
  );
}
