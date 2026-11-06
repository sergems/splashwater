import { Link } from "wouter";
import { MapPin, Mail, Phone, Waves } from "lucide-react";

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Block+C%2C+eMondlo%2FVryheid+Road%2C+eMondlo%2C+3105%2C+KwaZulu-Natal%2C+South+Africa";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-wave" aria-hidden="true" />
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-mark"><Waves size={24} aria-hidden="true" /><span>SPLASH <b>KIDS</b></span></div>
          <p>Big splashes. Big smiles.<br />Make a day of it together!</p>
          <a className="footer-map" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={16} /> Search the address <span>(entrance pin to be confirmed)</span></a>
        </div>
        <div className="footer-details">
          <h3>Find us in eMondlo</h3>
          <p>Block C, eMondlo/Vryheid Road<br />eMondlo, 3105, KwaZulu-Natal, South Africa</p>
          <a href="tel:+27648200293"><Phone size={16} /> +27 64 820 0293</a>
          <a href="mailto:info@splashKidsWaterpark.co.za"><Mail size={16} /> info@splashKidsWaterpark.co.za</a>
        </div>
        <div className="footer-links">
          <h3>Explore the site</h3>
          <Link href="/">Home</Link>
          <Link href="/visit">Plan Your Visit</Link>
          <a href="/#attractions">Park attractions</a>
          <Link href="/visit#enquiry">Ask about a visit</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Splash Kids Waterpark. All rights reserved.</span>
        <span>Social media links will be added when confirmed</span>
      </div>
    </footer>
  );
}
