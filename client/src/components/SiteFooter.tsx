import { Link } from "wouter";
import { ArrowUpRight, Facebook, Mail, MapPin, Phone, Waves } from "lucide-react";
import { park } from "@/data/parkContent";

const logo = "/manus-storage/splash-kids-logo_1a88b93f.webp";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="Splash Kids Waterpark home">
            <img src={logo} alt="Splash Kids Waterpark" loading="lazy" />
          </Link>
          <p>Family waterpark days in eMondlo.<br />Make room for a little splash.</p>
          <a className="footer-map-link" href={park.mapSearchUrl} target="_blank" rel="noreferrer">
            <MapPin size={16} aria-hidden="true" /> Directions <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-column">
          <h2>Discover</h2>
          <Link href="/about">About the park</Link>
          <Link href="/attractions">Attractions</Link>
          <Link href="/facilities">Facilities</Link>
          <Link href="/gallery">Photo &amp; video gallery</Link>
        </div>
        <div className="footer-column">
          <h2>Plan your day</h2>
          <Link href="/visit">Visitor information</Link>
          <Link href="/prices">Entrance fees</Link>
          <Link href="/parties">Parties &amp; groups</Link>
          <Link href="/safety">Safety rules</Link>
          <Link href="/faqs">FAQs</Link>
        </div>
        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <p>{park.address}</p>
          <a href={park.phoneHref}><Phone size={16} aria-hidden="true" /> {park.phoneDisplay}</a>
          <a href={park.emailHref}><Mail size={16} aria-hidden="true" /> {park.email}</a>
          <a href={park.whatsappHref} target="_blank" rel="noreferrer"><Waves size={16} aria-hidden="true" /> WhatsApp the team</a>
          <Link href="/contact#enquiry">Send an enquiry</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Splash Kids Waterpark. All rights reserved.</span>
        <div><Link href="/terms">Terms &amp; Conditions</Link><Link href="/privacy">Privacy Policy</Link><Link href="/safety">Safety</Link></div>
        <a href={park.facebookUrl} target="_blank" rel="noreferrer"><Facebook size={15} aria-hidden="true" /> Follow Splash Kids on Facebook</a>
      </div>
    </footer>
  );
}
