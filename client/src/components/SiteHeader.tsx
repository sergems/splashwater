import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const logo = "/manus-storage/splash-kids-logo_1a88b93f.webp";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const onHome = location === "/";
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="top-ribbon">
        <span>Splash Kids Waterpark · eMondlo</span>
        <a href="tel:+27648200293">Talk to our team · +27 64 820 0293</a>
      </div>
      <header className="site-header">
        <div className="nav-wrap">
          <Link href="/" className="brand-lockup" aria-label="Splash Kids Waterpark home" onClick={close}>
            <img src={logo} alt="Splash Kids Waterpark logo" />
          </Link>
          <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
            <div className="nav-group nav-group-left">
              <Link href="/" onClick={close} className={onHome ? "nav-current" : ""}>Home</Link>
              <a href="/#attractions" onClick={close}>The park</a>
            </div>
            <div className="nav-group nav-group-right">
              <Link href="/visit" onClick={close}>Plan your visit</Link>
              <a href="/visit#enquiry" onClick={close} className="nav-enquiry-link">Enquiry</a>
            </div>
          </nav>
          <button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>
    </>
  );
}
