import { ArrowRight, CalendarDays, PartyPopper, Users, Waves } from "lucide-react";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import SiteLayout from "@/components/SiteLayout";
import { partyTypes, park } from "@/data/parkContent";

const icons = [PartyPopper, Users, CalendarDays, Waves, Users];

export default function Parties() {
  return (
    <SiteLayout className="information-page">
      <PageHero eyebrow="Parties, schools & groups" title="Make the big day" accent="a Splash Kids day." description="Plan a birthday, family celebration, school outing or group visit using the estimated budgets below. They are not official package rates or a booking offer." actions={<a className="button button-primary" href="#enquiry">Ask about a booking <ArrowRight size={17} aria-hidden="true"/></a>} />
      <section className="section party-types-section"><div className="section-heading"><span className="eyebrow eyebrow-blue">Bring your people</span><h2>What are you <span>planning?</span></h2><p>These are enquiry types rather than guaranteed packages. Use the estimates to set a budget and send a request for your preferred date.</p></div><div className="party-type-grid">{partyTypes.map((name, index) => { const Icon = icons[index] ?? Users; return <article className="party-type-card" key={name}><span className="party-type-number">0{index + 1}</span><Icon size={24} aria-hidden="true"/><h3>{name}</h3><p>Budget estimate: R70–R120 per child and R80–R150 per adult. No group discount or catering is assumed.</p></article>; })}</div>
        <div className="party-planning-note"><CalendarDays size={23} aria-hidden="true"/><div><strong>Planning a lapa or organised visit?</strong><p>Allow an estimated 3–7 days for a request and R150–R600 for a lapa booking. Food, décor and exclusive-use options are not included. An enquiry does not reserve a date.</p></div></div>
        <div className="party-contact-row"><p>Prefer to message directly? WhatsApp the team on <a href={park.whatsappHref} target="_blank" rel="noreferrer">{park.phoneDisplay}</a>.</p><a className="button button-outline" href={park.whatsappHref} target="_blank" rel="noreferrer">WhatsApp the team <ArrowRight size={17} aria-hidden="true"/></a></div>
      </section>
      <section className="section party-form-section"><EnquiryForm defaultType="Birthday party" partyRequest /></section>
    </SiteLayout>
  );
}
