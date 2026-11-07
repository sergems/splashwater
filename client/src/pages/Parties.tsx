import { ArrowRight, CalendarDays, PartyPopper, Users, Waves } from "lucide-react";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import SiteLayout from "@/components/SiteLayout";
import { partyTypes, park } from "@/data/parkContent";

const icons = [PartyPopper, Users, CalendarDays, Waves, Users];

export default function Parties() {
  return (
    <SiteLayout className="information-page">
      <PageHero eyebrow="Parties, schools & groups" title="Make the big day" accent="a Splash Kids day." description="Tell us about a birthday, family celebration, school outing or organised group visit. The team will confirm dates, rates, packages and availability." actions={<a className="button button-primary" href="#enquiry">Ask about a booking <ArrowRight size={17} aria-hidden="true"/></a>} />
      <section className="section party-types-section"><div className="section-heading"><span className="eyebrow eyebrow-blue">Bring your people</span><h2>What are you <span>planning?</span></h2><p>These are enquiry types, not confirmed packages. Share what you have in mind and management will let you know what can be arranged.</p></div><div className="party-type-grid">{partyTypes.map((name, index) => { const Icon = icons[index] ?? Users; return <article className="party-type-card" key={name}><span className="party-type-number">0{index + 1}</span><Icon size={24} aria-hidden="true"/><h3>{name}</h3><p>Dates, group sizes, prices and arrangements: to be confirmed.</p></article>; })}</div>
        <div className="party-planning-note"><CalendarDays size={23} aria-hidden="true"/><div><strong>Planning a lapa or organised visit?</strong><p>Please enquire in advance. Lapa availability, event packages, deposits, cancellation rules and exclusive-use options must all be confirmed by management.</p></div></div>
        <div className="party-contact-row"><p>Prefer to message directly? WhatsApp the team on <a href={park.whatsappHref} target="_blank" rel="noreferrer">{park.phoneDisplay}</a>.</p><a className="button button-outline" href={park.whatsappHref} target="_blank" rel="noreferrer">WhatsApp the team <ArrowRight size={17} aria-hidden="true"/></a></div>
      </section>
      <section className="section party-form-section"><EnquiryForm defaultType="Birthday party" partyRequest /></section>
    </SiteLayout>
  );
}
