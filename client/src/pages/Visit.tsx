import { ArrowUpRight, CalendarDays, CircleHelp, Clock3, MapPin, Mail, Phone, ShieldCheck, Ticket, MessageCircle } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EnquiryForm from "@/components/EnquiryForm";

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Block+C%2C+eMondlo%2FVryheid+Road%2C+eMondlo%2C+3105%2C+KwaZulu-Natal%2C+South+Africa";
const packages = ["Individual entrance tickets", "Family packages", "Birthday party packages", "Group bookings", "School & community visits", "Lapa bookings"];

export default function Visit() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="page-hero visit-hero">
          <span className="eyebrow"><span className="eyebrow-dot" /> Get set for a happy day out</span>
          <h1>Plan your<br /><span>visit!</span></h1>
          <p>Planning a family day out? Here’s what we know so far. Please contact management to confirm the latest details before you set off.</p>
          <a className="button button-primary" href="#enquiry">Ask the team <ArrowUpRight size={17} /></a>
          <span className="page-hero-spark spark-a">✳</span><span className="page-hero-spark spark-b">✦</span>
        </section>

        <section className="visit-info-section">
          <div className="visit-facts-grid">
            <article className="visit-fact fact-blue">
              <span className="fact-icon"><Clock3 size={23} /></span><span className="fact-label">Opening hours</span>
              <h2>Hours to be confirmed</h2><p>Our opening days, daily hours and public-holiday hours are still being finalised. Give management a call before your visit. Social links will be added when the park’s channels are ready.</p>
              <a href="tel:+27648200293">Call for the latest hours <ArrowUpRight size={15} /></a>
            </article>
            <article className="visit-fact fact-yellow">
              <span className="fact-icon"><Ticket size={23} /></span><span className="fact-label">Entrance fees</span>
              <h2>Prices to be confirmed</h2><p>Entrance prices and age groups are still being finalised. Contact the team for current rates and availability.</p>
              <a href="mailto:info@splashKidsWaterpark.co.za">Ask for current prices <ArrowUpRight size={15} /></a>
            </article>
          </div>
          <section className="packages-panel">
            <div><span className="eyebrow eyebrow-blue">Packages to ask about</span><h2>Let’s plan your day</h2><p>Package options and prices are not confirmed yet. Contact management to ask what’s available and how to book.</p></div>
            <div className="package-tags">{packages.map((item) => <span key={item}>{item}</span>)}</div>
          </section>
        </section>

        <section className="before-visit-section">
          <div className="before-copy"><span className="eyebrow eyebrow-blue">Before you visit</span><h2>A few handy <span>things to know</span></h2><p>Keep these tips in mind while you plan your day.</p></div>
          <div className="before-list">
            <div><span>01</span><p>Bring your own food. Coolerboxes are welcome at no extra charge.</p></div>
            <div><span>02</span><p>Braai areas are available, and lapas must be booked ahead of time.</p></div>
            <div><span>03</span><p>Keep children with you and follow all pool and attraction safety signs.</p></div>
            <div><span>04</span><p>Check the opening hours before you travel, and ask management about lapa or group availability.</p></div>
          </div>
          <div className="visit-safety"><ShieldCheck size={20} /><span>Help everyone enjoy a safe day: please follow park signs and staff instructions.</span></div>
        </section>

        <section className="location-section">
          <div className="location-card">
            <div className="location-pin-art"><MapPin size={46} /><span>eM</span></div>
            <div className="location-copy"><span className="eyebrow eyebrow-blue">Find us in KwaZulu-Natal</span><h2>Your day out<br />starts in <span>eMondlo!</span></h2>
              <address>Block C, eMondlo/Vryheid Road<br />eMondlo, 3105<br />KwaZulu-Natal, South Africa</address>
              <p className="small-note">The precise entrance pin hasn’t been confirmed yet. This link searches the address provided by the park.</p>
              <a className="button button-primary" href={mapsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact-options">
          <div className="contact-heading"><span className="eyebrow eyebrow-blue">We’re happy to help</span><h2>Planning something<br /><span>special?</span></h2><p>Ask us about your visit, a lapa booking, a birthday or a group day out.</p>
            <div className="contact-methods">
              <a href="tel:+27648200293"><Phone size={18} /><span><small>Call us</small>+27 64 820 0293</span><ArrowUpRight size={15} /></a>
              <a href="https://wa.me/27648200293" target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WhatsApp</small>Chat to our team</span><ArrowUpRight size={15} /></a>
              <a href="mailto:info@splashKidsWaterpark.co.za"><Mail size={18} /><span><small>Email</small>info@splashKidsWaterpark.co.za</span><ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div><EnquiryForm /></div>
        </section>
        <div className="visit-reminder"><CalendarDays size={18} /><p>Please book lapas and organised group visits in advance. Sending an enquiry isn’t a confirmed booking; management will get in touch to confirm availability and next steps.</p><CircleHelp size={18} /></div>
      </main>
      <SiteFooter />
    </div>
  );
}
