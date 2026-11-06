import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { AlertTriangle, ArrowUpRight, MessageCircle } from "lucide-react";

export default function Privacy() {
  return (
    <div className="site-shell"><SiteHeader /><main id="main-content" tabIndex={-1}>
      <section className="policy-hero privacy-hero"><span className="eyebrow eyebrow-blue">Your details matter</span><h1>Privacy<br /><span>Policy</span></h1><p>A plain-language guide to privacy on this website.</p><div className="policy-meta">Draft for management review · Last updated: November 2026</div></section>
      <section className="policy-content">
        <div className="draft-warning"><AlertTriangle size={22} /><div><strong>DRAFT FOR MANAGEMENT REVIEW</strong><p>Please review this draft against the park’s actual information-handling practices and South African privacy requirements before treating it as the final policy.</p></div></div>
        <p className="policy-intro">This page explains what happens when you use the Splash Kids Waterpark website to prepare an enquiry. The enquiry form does not send your details to a park database or save them as a booking. You decide whether to open WhatsApp and send the message.</p>
        <article className="terms-section"><h2>Details you enter on the form</h2><p>You can add your name, phone number, email address, enquiry type, preferred visit date, group size and a message. The website uses these details to prepare a WhatsApp message on your device. Nothing is sent to the park until you open WhatsApp and choose to send the message yourself.</p><p>If you contact the park by phone, email or WhatsApp, the information you share is handled by that service and by the park when your message is received. Please only include information needed to help with your enquiry.</p></article>
        <article className="terms-section"><h2>Links to other services</h2><p>Links to WhatsApp, your email app and Google Maps take you to services outside this website. Those services have their own privacy policies and terms. Please review them before sharing information or using their features.</p><a className="text-link" href="https://wa.me/27648200293" target="_blank" rel="noreferrer"><MessageCircle size={16} /> Message us on WhatsApp <ArrowUpRight size={15} /></a></article>
        <article className="terms-section"><h2>Enquiries are not confirmed bookings</h2><p>Preparing or sending an enquiry does not reserve a date or confirm a booking. Management will contact you to confirm availability and arrangements.</p></article>
        <article className="terms-section"><h2>Children’s information</h2><p>Please have a parent, guardian or responsible adult make enquiries on behalf of a family. Do not enter a child’s personal information in the website enquiry form.</p></article>
        <article className="terms-section"><h2>Questions about your information</h2><p>If you have a question or request about information you have shared directly with Splash Kids Waterpark, contact management on +27 64 820 0293 (phone or WhatsApp) or email info@splashKidsWaterpark.co.za. Requests will be handled under applicable law, including POPIA.</p></article>
        <article className="terms-section"><h2>Changes to this page</h2><p>Management may update this page if the website or the park’s information-handling practices change. The date above will be updated when a new version is published.</p></article>
      </section>
    </main><SiteFooter /></div>
  );
}
