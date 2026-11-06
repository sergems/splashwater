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
          <p>Everything you need to plan a fun, hassle-free visit. A few details are still being confirmed, so please check with management before travelling.</p>
          <a className="button button-primary" href="#enquiry">Ask us a question <ArrowUpRight size={17} /></a>
          <span className="page-hero-spark spark-a">✳</span><span className="page-hero-spark spark-b">✦</span>
        </section>

        <section className="visit-info-section">
          <div className="visit-facts-grid">
            <article className="visit-fact fact-blue">
              <span className="fact-icon"><Clock3 size={23} /></span><span className="fact-label">Opening hours</span>
              <h2>To be confirmed</h2><p>Opening days, times and public holiday hours are not final yet. Please contact management for the latest updates before you travel. Social channels will be linked once established.</p>
              <a href="tel:+27648200293">Call to check <ArrowUpRight size={15} /></a>
            </article>
            <article className="visit-fact fact-yellow">
              <span className="fact-icon"><Ticket size={23} /></span><span className="fact-label">Entrance fees</span>
              <h2>Prices to be confirmed</h2><p>Prices and age categories are still being finalised. Ask our team for current rates and availability.</p>
              <a href="mailto:info@splashKidsWaterpark.co.za">Email for details <ArrowUpRight size={15} /></a>
            </article>
          </div>
          <section className="packages-panel">
            <div><span className="eyebrow eyebrow-blue">Possible packages</span><h2>Ask what’s available</h2><p>Packages will be displayed here once approved by management. Please contact the team for current prices, booking information and availability.</p></div>
            <div className="package-tags">{packages.map((item) => <span key={item}>{item}</span>)}</div>
          </section>
        </section>

        <section className="before-visit-section">
          <div className="before-copy"><span className="eyebrow eyebrow-blue">Before you visit</span><h2>Good to <span>know!</span></h2><p>A quick little checklist to help your day go smoothly.</p></div>
          <div className="before-list">
            <div><span>01</span><p>Coolerboxes are allowed at no additional charge, and you’re welcome to bring your own food.</p></div>
            <div><span>02</span><p>Braai areas are available; lapas need to be booked in advance.</p></div>
            <div><span>03</span><p>Please supervise children at all times and follow posted pool and attraction safety rules.</p></div>
            <div><span>04</span><p>Check operating hours before travelling. Contact management to confirm lapa and group availability.</p></div>
          </div>
          <div className="visit-safety"><ShieldCheck size={20} /><span>For everyone’s safety, follow all park signs and staff instructions during your visit.</span></div>
        </section>

        <section className="location-section">
          <div className="location-card">
            <div className="location-pin-art"><MapPin size={46} /><span>eM</span></div>
            <div className="location-copy"><span className="eyebrow eyebrow-blue">Find your way to the fun</span><h2>See you in<br /><span>eMondlo!</span></h2>
              <address>Block C, eMondlo/Vryheid Road<br />eMondlo, 3105<br />KwaZulu-Natal, South Africa</address>
              <p className="small-note">The exact park entrance and map pin are still to be confirmed. This directions link searches the supplied address.</p>
              <a className="button button-primary" href={mapsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact-options">
          <div className="contact-heading"><span className="eyebrow eyebrow-blue">Let’s get your fun day started</span><h2>Have a question?<br /><span>We’re here to help.</span></h2><p>Want to book a lapa or plan a birthday celebration? Get in touch with the team.</p>
            <div className="contact-methods">
              <a href="tel:+27648200293"><Phone size={18} /><span><small>Call us</small>+27 64 820 0293</span><ArrowUpRight size={15} /></a>
              <a href="https://wa.me/27648200293" target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WhatsApp</small>Chat to our team</span><ArrowUpRight size={15} /></a>
              <a href="mailto:info@splashKidsWaterpark.co.za"><Mail size={18} /><span><small>Email</small>info@splashKidsWaterpark.co.za</span><ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div><EnquiryForm /></div>
        </section>
        <div className="visit-reminder"><CalendarDays size={18} /><p>Advance booking is recommended for lapas and organised group visits. Submitting an enquiry does not confirm a booking—management will contact you to confirm availability and arrangements.</p><CircleHelp size={18} /></div>
      </main>
      <SiteFooter />
    </div>
  );
}
