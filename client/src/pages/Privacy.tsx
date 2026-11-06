import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { AlertTriangle, ArrowUpRight, MessageCircle } from "lucide-react";

export default function Privacy() {
  return (
    <div className="site-shell"><SiteHeader /><main id="main-content" tabIndex={-1}>
      <section className="policy-hero privacy-hero"><span className="eyebrow eyebrow-blue">Your details matter</span><h1>Privacy<br /><span>Policy</span></h1><p>Website privacy information — draft for management review.</p><div className="policy-meta">Last updated: November 2026</div></section>
      <section className="policy-content">
        <div className="draft-warning"><AlertTriangle size={22} /><div><strong>DRAFT FOR MANAGEMENT REVIEW</strong><p>This page describes the current website enquiry experience. Management should review it against actual park operations and applicable South African privacy requirements before relying on it as a final policy.</p></div></div>
        <p className="policy-intro">Splash Kids Waterpark respects the privacy of visitors and aims to handle personal information responsibly. This website does not send enquiry-form entries to a park database or store them as booking records.</p>
        <article className="terms-section"><h2>Information you choose to provide</h2><p>The enquiry form lets you enter your name, contact number, email address, enquiry type, preferred visit date, group size and message. The information remains in the page while you use the form. When you choose “Open WhatsApp to send,” your browser opens a message addressed to the park’s WhatsApp number; it is not sent until you choose to send it in WhatsApp.</p><p>You can also contact the park directly by telephone, email or WhatsApp. Information you share through those channels is handled through the relevant communications service and by the park when it receives your message.</p></article>
        <article className="terms-section"><h2>Third-party services</h2><p>When you follow a link to WhatsApp, your email application or Google Maps, you leave this website and use a third-party service. Those services have their own privacy practices and terms. Please review them before sharing information or using the service.</p><a className="text-link" href="https://wa.me/27648200293" target="_blank" rel="noreferrer"><MessageCircle size={16} /> Open WhatsApp <ArrowUpRight size={15} /></a></article>
        <article className="terms-section"><h2>Bookings and confirmation</h2><p>This website enquiry form does not confirm a booking. Management must contact you to confirm availability and arrangements. Do not include sensitive personal information in an enquiry message unless it is necessary for your request.</p></article>
        <article className="terms-section"><h2>Children’s information</h2><p>The website is intended for families and enquiries should be made by a parent, guardian or responsible adult. Please do not submit a child’s personal information through the enquiry form.</p></article>
        <article className="terms-section"><h2>Your questions or requests</h2><p>For questions or requests about personal information you shared directly with Splash Kids Waterpark, please contact management by telephone/WhatsApp at +27 64 820 0293 or by email at info@splashKidsWaterpark.co.za. Applicable rights and requests will be handled in accordance with relevant law, including POPIA.</p></article>
        <article className="terms-section"><h2>Policy updates</h2><p>Management may update this page as the website and park’s information-handling practices develop. The posted date will be updated when a revised policy is published.</p></article>
      </section>
    </main><SiteFooter /></div>
  );
}
