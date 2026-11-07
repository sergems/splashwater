import { motion, MotionConfig } from "framer-motion";
import { Activity, ArrowRight, ArrowUpRight, CalendarDays, CircleDollarSign, Clock3, Footprints, MessageCircle, ShieldCheck, TentTree, Trees, Waves } from "lucide-react";
import { Link } from "wouter";
import MapPanel from "@/components/MapPanel";
import SiteLayout from "@/components/SiteLayout";
import { confirmedAttractions, park } from "@/data/parkContent";

const logo = "/manus-storage/splash-kids-logo_1a88b93f.webp";
const quickActivities = [
  { icon: Waves, label: "Pools & water slides", href: "/attractions" },
  { icon: Activity, label: "Play & adventure", href: "/attractions" },
  { icon: TentTree, label: "Picnic, braai & lapas", href: "/facilities" },
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.6, ease: "easeOut" }}>{children}</motion.div>;
}

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <SiteLayout className="home-page">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" /> Family waterpark days in eMondlo</span>
            <h1 id="home-title">Make a splash.<br /><span>Create memories!</span></h1>
            <p>Bring the family together for pools, slides, outdoor play and time to unwind at Splash Kids Waterpark.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/visit">Plan Your Visit <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link className="button button-outline" href="/prices">View Prices <ArrowUpRight size={17} aria-hidden="true" /></Link>
            </div>
            <div className="hero-text-links">
              <Link href="/safety"><ShieldCheck size={16} aria-hidden="true" /> Safety Rules</Link>
              <a href={park.mapSearchUrl} target="_blank" rel="noreferrer"><Footprints size={16} aria-hidden="true" /> Get Directions</a>
              <a href={park.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={16} aria-hidden="true" /> WhatsApp the team</a>
            </div>
            <p className="hero-note">Opening hours and entrance fees: <strong>To be confirmed.</strong> Contact the team before travelling.</p>
          </div>
          <motion.div className="home-hero-brand" initial={false} animate={{ y: [0, -7, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <span className="brand-orb orb-one" aria-hidden="true" /><span className="brand-orb orb-two" aria-hidden="true" />
            <img src={logo} alt="Splash Kids Waterpark logo, featuring children, water slides and splashing water" />
            <div className="hero-location-chip"><span className="status-dot" /> Block C · eMondlo, KwaZulu-Natal</div>
          </motion.div>
          <div className="hero-waterline" aria-hidden="true"><span /><span /><span /></div>
        </section>

        <section className="quick-activity-strip" aria-label="Park highlights">
          {quickActivities.map(({ icon: Icon, label, href }) => <Link key={label} href={href}><Icon size={19} aria-hidden="true" /><span>{label}</span><ArrowRight size={15} aria-hidden="true" /></Link>)}
        </section>

        <section className="section section-visit-snapshot">
          <div className="section-heading section-heading-split">
            <div><span className="eyebrow eyebrow-blue">Before you head out</span><h2>Plan a day <span>to remember.</span></h2></div>
            <p>Get the details you need, then check with our team for the latest hours, prices and availability.</p>
          </div>
          <div className="visit-snapshot-grid">
            <article className="snapshot-card snapshot-hours"><span className="snapshot-icon"><Clock3 size={21} aria-hidden="true" /></span><span className="snapshot-label">Opening hours</span><strong>{park.hours}</strong><p>Call to confirm today’s schedule and public-holiday hours.</p><Link href="/visit">Visitor information <ArrowRight size={15} aria-hidden="true" /></Link></article>
            <article className="snapshot-card snapshot-prices"><span className="snapshot-icon"><CircleDollarSign size={21} aria-hidden="true" /></span><span className="snapshot-label">Entrance fees</span><strong>Rates to be confirmed</strong><p>Ask about current child, adult, family and group rates.</p><Link href="/prices">View price information <ArrowRight size={15} aria-hidden="true" /></Link></article>
            <article className="snapshot-card snapshot-bookings"><span className="snapshot-icon"><CalendarDays size={21} aria-hidden="true" /></span><span className="snapshot-label">Groups &amp; lapas</span><strong>Ask us in advance</strong><p>Plan organised visits and request a lapa before you arrive.</p><Link href="/parties">Enquire about a visit <ArrowRight size={15} aria-hidden="true" /></Link></article>
          </div>
        </section>

        <section className="section section-attractions" id="attractions">
          <div className="section-heading"><span className="eyebrow eyebrow-blue">Make a day of it</span><h2>Water, play <span>&amp; wide-open smiles.</span></h2><p>Explore the activities listed for Splash Kids Waterpark. Check availability and any age or safety restrictions with the team.</p></div>
          <div className="home-attraction-grid">
            {confirmedAttractions.slice(0, 6).map((item, index) => <Reveal key={item.name} className="home-attraction-card"><span className={`activity-index activity-index-${index + 1}`}>0{index + 1}</span><h3>{item.name}</h3><p>{item.description}</p><Link href="/attractions" aria-label={`Learn more about ${item.name}`}>Explore <ArrowRight size={15} aria-hidden="true" /></Link></Reveal>)}
          </div>
          <div className="section-link-row"><Link className="text-link" href="/attractions">See all attractions <ArrowRight size={17} aria-hidden="true" /></Link><Link className="text-link" href="/facilities">Explore facilities <ArrowRight size={17} aria-hidden="true" /></Link></div>
        </section>

        <section className="family-food-section">
          <div className="family-food-copy"><span className="eyebrow eyebrow-light">Bring the good things</span><h2>Pack a picnic.<br /><span>Stay a little longer.</span></h2><p>You’re welcome to bring your own food and snacks. Coolerboxes are welcome at no extra charge, with picnic and braai areas available.</p><Link className="button button-light" href="/facilities">Food, braai &amp; lapa details <ArrowRight size={17} aria-hidden="true" /></Link></div>
          <div className="family-food-list"><div><span className="food-number">01</span><span>Bring your own food</span></div><div><span className="food-number">02</span><span>Coolerboxes welcome at no extra charge</span></div><div><span className="food-number">03</span><span>Ask about braai rules before lighting up</span></div><div><span className="food-number">04</span><span>Book a lapa in advance</span></div></div>
          <Trees className="food-decoration" size={230} strokeWidth={0.6} aria-hidden="true" />
        </section>

        <section className="section section-celebrations">
          <div className="celebration-art" aria-hidden="true"><div className="celebration-ring"><span>Make it<br />a party</span></div><span className="celebration-dot dot-a" /><span className="celebration-dot dot-b" /><span className="celebration-dot dot-c" /></div>
          <div className="celebration-copy"><span className="eyebrow eyebrow-blue">Good days are better together</span><h2>Big days.<br /><span>Even bigger splashes.</span></h2><p>Planning a birthday, school outing or group visit? Tell us what you have in mind. Our team will confirm dates, packages and availability.</p><div className="hero-actions"><Link className="button button-primary" href="/parties">Explore parties &amp; groups <ArrowRight size={18} aria-hidden="true" /></Link><a className="text-link" href={park.whatsappHref} target="_blank" rel="noreferrer">WhatsApp our team <ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
        </section>

        <section className="section gallery-preview-section">
          <div className="gallery-preview-card"><div className="gallery-preview-copy"><span className="eyebrow eyebrow-blue">See what’s here</span><h2>A closer look at <span>Splash Kids.</span></h2><p>Visit the photo and video gallery for approved park media as it becomes available. No generic waterpark photos are used as venue images.</p><Link className="button button-outline" href="/gallery">Explore the gallery <ArrowRight size={17} aria-hidden="true" /></Link></div><div className="gallery-category-list"><Link href="/gallery"><span>01</span><strong>Pools &amp; slides</strong><ArrowUpRight size={16} aria-hidden="true" /></Link><Link href="/gallery"><span>02</span><strong>Play &amp; adventure</strong><ArrowUpRight size={16} aria-hidden="true" /></Link><Link href="/gallery"><span>03</span><strong>Picnic &amp; celebrations</strong><ArrowUpRight size={16} aria-hidden="true" /></Link></div></div>
        </section>

        <section className="section section-parent-reassurance"><div className="reassurance-icon"><ShieldCheck size={29} aria-hidden="true" /></div><div><span className="eyebrow eyebrow-blue">A family day starts with a plan</span><h2>Good information. <span>Better peace of mind.</span></h2><p>Please supervise children at all times and follow posted pool, attraction and staff instructions. Check our safety page and contact the team about park-specific procedures before visiting.</p></div><Link className="text-link" href="/safety">Read safety information <ArrowRight size={17} aria-hidden="true" /></Link></section>

        <section className="section home-map-section"><MapPanel compact /></section>
        <section className="final-cta"><div><span className="eyebrow eyebrow-light">Ready when you are</span><h2>Let’s plan your <span>next family day.</span></h2><p>Ask about current opening times, entrance rates, groups and lapa availability.</p></div><div className="final-cta-actions"><Link className="button button-light" href="/contact#enquiry">Send an enquiry <ArrowRight size={17} aria-hidden="true" /></Link><a className="final-phone" href={park.phoneHref}>Call {park.phoneDisplay}</a></div></section>
      </SiteLayout>
    </MotionConfig>
  );
}
