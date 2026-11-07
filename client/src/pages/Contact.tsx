import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import MapPanel from "@/components/MapPanel";
import SiteLayout from "@/components/SiteLayout";
import { park } from "@/data/parkContent";

export default function Contact() {
  return (
    <SiteLayout className="information-page contact-page">
      <PageHero eyebrow="Contact Splash Kids" title="We’d love to" accent="hear from you." description="Ask about today’s schedule, current rates, group visits, facilities or anything you need to know before coming to eMondlo." />
      <section className="section contact-options-section"><div className="contact-option"><span><Phone size={21} aria-hidden="true"/></span><div><h2>Call the team</h2><a href={park.phoneHref}>{park.phoneDisplay}</a></div></div><div className="contact-option"><span><MessageCircle size={21} aria-hidden="true"/></span><div><h2>WhatsApp</h2><a href={park.whatsappHref} target="_blank" rel="noreferrer">Message Splash Kids</a></div></div><div className="contact-option"><span><Mail size={21} aria-hidden="true"/></span><div><h2>Email</h2><a href={park.emailHref}>{park.email}</a></div></div><div className="contact-option"><span><MapPin size={21} aria-hidden="true"/></span><div><h2>Find the park</h2><p>{park.address}</p></div></div></section>
      <section className="section contact-map-section"><MapPanel compact /></section>
      <section className="section contact-form-section"><div className="contact-form-intro"><span className="eyebrow eyebrow-blue">Get in touch</span><h2>What would you <span>like to know?</span></h2><p>Use this form to prepare a WhatsApp message for the team. You review and send it yourself; the website does not store form submissions.</p><p className="social-note">Follow <a href={park.facebookUrl} target="_blank" rel="noreferrer">Splash Kids on Facebook</a> for updates. The hours on this site are planning notes; ask for the day’s schedule before travelling.</p></div><EnquiryForm /></section>
    </SiteLayout>
  );
}
