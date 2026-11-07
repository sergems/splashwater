import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";

const logo = "/images/brand/splash-kids-logo.webp";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const onHome = location === "/";

  const close = () => {
    setOpen(false);
    if (typeof document !== "undefined") {
      document.querySelectorAll<HTMLDetailsElement>(".nav-dropdown[open]").forEach((item) => {
        item.open = false;
      });
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    close();
  }, [location]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="top-ribbon">
        <span>Splash Kids Waterpark · eMondlo</span>
        <a href="tel:+27648200293">Talk to our team · +27 64 820 0293</a>
      </div>
      <header className="site-header">
        <div className="nav-wrap">
          <nav id="site-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
            <div className="nav-group nav-group-left">
              <Link href="/" onClick={close} className={onHome ? "nav-current" : ""} aria-current={onHome ? "page" : undefined}>Home</Link>
              <Link href="/about" onClick={close}>About</Link>
              <details className="nav-dropdown">
                <summary>Explore <ChevronDown size={14} aria-hidden="true" /></summary>
                <div className="nav-dropdown-menu">
                  <Link href="/attractions" onClick={close}>Attractions</Link>
                  <Link href="/facilities" onClick={close}>Facilities</Link>
                  <Link href="/gallery" onClick={close}>Photo &amp; video gallery</Link>
                </div>
              </details>
            </div>
            <div className="nav-group nav-group-right">
              <details className="nav-dropdown nav-dropdown-right">
                <summary>Plan Your Visit <ChevronDown size={14} aria-hidden="true" /></summary>
                <div className="nav-dropdown-menu">
                  <Link href="/visit" onClick={close}>Visitor information</Link>
                  <Link href="/prices" onClick={close}>Entrance fees</Link>
                  <Link href="/parties" onClick={close}>Parties &amp; groups</Link>
                  <Link href="/safety" onClick={close}>Safety rules</Link>
                  <Link href="/faqs" onClick={close}>FAQs</Link>
                </div>
              </details>
              <Link href="/contact" onClick={close}>Contact</Link>
              <Link href="/contact#enquiry" onClick={close} className="nav-enquiry-link">Enquiry</Link>
            </div>
          </nav>
          <Link href="/" className="brand-lockup" aria-label="Splash Kids Waterpark home" onClick={close}>
            <img src={logo} alt="Splash Kids Waterpark logo" />
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="site-navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
          </button>
        </div>
      </header>
    </>
  );
}
