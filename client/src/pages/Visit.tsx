import { ArrowRight, Check, CircleHelp, Clock3, MapPin, Ticket } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import MapPanel from "@/components/MapPanel";
import SiteLayout from "@/components/SiteLayout";
import { park, visitorDetailsToConfirm } from "@/data/parkContent";

const confirmed = [
  "Visitors may bring their own food and snacks.",
  "Coolerboxes are welcome at no additional charge.",
  "Picnic and braai areas are part of the supplied park information; follow management’s current braai and fire-safety rules.",
  "Lapas should be requested in advance; availability and any fee must be confirmed.",
  "Adults should supervise children at all times and follow posted pool, attraction and staff instructions.",
];

export default function Visit() {
  return (
    <SiteLayout className="information-page">
      <PageHero eyebrow="Plan Your Visit" title="A little planning." accent="A lot more play." description="Find the supplied location and the answers that still need confirmation before your family heads to Splash Kids Waterpark." actions={<><a className="button button-primary" href={park.mapSearchUrl} target="_blank" rel="noreferrer">Get Directions <MapPin size={17} aria-hidden="true" /></a><Link className="button button-outline" href="/contact#enquiry">Ask a question <ArrowRight size={17} aria-hidden="true" /></Link></>} />
      <section className="section visit-facts-section"><div className="visit-facts-grid"><article className="visit-fact-card"><Clock3 size={22} aria-hidden="true"/><span>Opening hours</span><strong>{park.hours}</strong><p>Call before travelling, including on weekends and public holidays.</p></article><article className="visit-fact-card"><Ticket size={22} aria-hidden="true"/><span>Entrance fees</span><strong>To be confirmed</strong><p>Ask for the current rates and age categories.</p></article><article className="visit-fact-card"><CircleHelp size={22} aria-hidden="true"/><span>Bookings &amp; walk-ins</span><strong>Check availability</strong><p>Advance enquiries are recommended for groups and lapas.</p></article></div></section>
      <section className="section visit-guidance-section"><div className="section-heading"><span className="eyebrow eyebrow-blue">Helpful before you go</span><h2>What we know <span>&amp; what to check.</span></h2><p>These details are kept clear so families can make informed decisions. Anything not yet confirmed is labelled below.</p></div>
        <div className="visit-guidance-grid"><article className="visit-confirmed-card"><div className="guidance-title"><span className="guidance-icon"><Check size={20} aria-hidden="true"/></span><div><span className="eyebrow eyebrow-blue">Supplied park information</span><h3>Good to know</h3></div></div><ul>{confirmed.map((line) => <li key={line}>{line}</li>)}</ul></article><article className="visit-confirmation-card"><div className="guidance-title"><span className="guidance-icon guidance-icon-warn"><CircleHelp size={20} aria-hidden="true"/></span><div><span className="eyebrow eyebrow-blue">Ask management</span><h3>To be confirmed</h3></div></div><ul>{visitorDetailsToConfirm.map((item) => <li key={item}>{item}</li>)}</ul><Link className="text-link" href="/contact#enquiry">Contact the team <ArrowRight size={16} aria-hidden="true"/></Link></article></div>
      </section>
      <section className="section location-section"><MapPanel /></section>
      <section className="section page-bottom-cta"><div><span className="eyebrow eyebrow-blue">Talk to our team</span><h2>Questions about your visit?</h2><p>Call or WhatsApp before setting off for current opening times, prices, availability and practical arrangements.</p></div><a className="button button-primary" href={park.whatsappHref} target="_blank" rel="noreferrer">WhatsApp {park.phoneDisplay} <ArrowRight size={17} aria-hidden="true"/></a></section>
    </SiteLayout>
  );
}
