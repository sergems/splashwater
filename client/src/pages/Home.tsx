import { MotionConfig, motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Baby, Castle, CircleHelp, Clock3, Flower2, ForkKnife, MapPin, PartyPopper, ShieldCheck, Sparkles, TentTree, Trees, Waves, Wind } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const heroImage = "/manus-storage/async-images/cGd9ozNxyph5wpS9hCTFeZ/image-1.webp";
const heroMobileImage = "/manus-storage/async-images/cGd9ozNxyph5wpS9hCTFeZ/image-2.webp";
const picnicImage = "/manus-storage/async-images/esvWjkq1lHdNGQ0cf8m5Am/image-1.webp";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Block+C%2C+eMondlo%2FVryheid+Road%2C+eMondlo%2C+3105%2C+KwaZulu-Natal%2C+South+Africa";

const activities = [
  { title: "Swimming pools", text: "Cool off, splash together and make the most of the water.", Icon: Waves, color: "aqua" },
  { title: "Water slides", text: "Get ready for a whoosh, a splash and another turn.", Icon: Wind, color: "yellow" },
  { title: "Trampolines", text: "Bounce high, laugh loud and let the fun take over.", Icon: Sparkles, color: "pink" },
  { title: "Jumping castles", text: "Little adventurers can jump, tumble and play.", Icon: Castle, color: "orange" },
  { title: "Jungle gyms", text: "Climb, explore and invent a new adventure outdoors.", Icon: Trees, color: "green" },
  { title: "Kids’ play area", text: "A special spot for little ones to play and explore.", Icon: Baby, color: "blue" },
  { title: "Beautiful gardens", text: "Take a breath, enjoy the greenery and spend time together.", Icon: Flower2, color: "green" },
  { title: "Picnic & braai areas", text: "Bring your favourite food and share a relaxed meal outdoors.", Icon: ForkKnife, color: "orange" },
  { title: "Lapas & benches", text: "Find a shady place to rest; lapas can be booked in advance.", Icon: TentTree, color: "yellow" },
];

const events = ["Children’s birthday parties", "Family celebrations", "School & community outings", "Church & youth group visits", "Friends’ get-togethers", "Group day visits"];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell">
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          <section className="hero-section" id="home">
            <div className="hero-copy">
              <span className="eyebrow"><span className="eyebrow-dot" /> A family waterpark in eMondlo</span>
              <h1>Big splashes.<br /><span>Big smiles.</span></h1>
              <p className="hero-tagline">Unforgettable family fun.</p>
              <p className="hero-description">Cool off in the pools, explore the slides and play areas, then slow down for a picnic in the garden. A relaxed family day out, your way.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#attractions">Explore the park <ArrowRight size={18} /></a>
                <a className="button button-soft" href="/visit">Plan a visit <ArrowUpRight size={17} /></a>
              </div>
              <div className="hero-note"><MapPin size={17} /><span>Block C, eMondlo / Vryheid Road</span></div>
            </div>
            <div className="hero-art-wrap">
              <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
              <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, ease: "easeOut" }}>
                <picture>
                  <source media="(max-width: 760px)" srcSet={heroMobileImage} />
                  <img src={heroImage} alt="Illustrative concept image of a family at an outdoor splash park; it does not depict the actual venue." fetchPriority="high" />
                </picture>
              </motion.div>
              <div className="hero-sticker"><span>ILLUSTRATIVE CONCEPT</span><strong>Not a park photograph</strong></div>
              <span className="bubble bubble-a" aria-hidden="true" /><span className="bubble bubble-b" aria-hidden="true" /><span className="bubble bubble-c" aria-hidden="true" />
            </div>
            <a href="#experience" className="scroll-cue" aria-label="Scroll to discover the splash experience"><ArrowDown size={18} /><span>Let’s explore</span></a>
            <div className="hero-wave" aria-hidden="true" />
          </section>

          <section className="quick-strip" aria-label="Park highlights">
            <div><Waves size={19} /><span>Pools &amp; slides</span></div><i aria-hidden="true" />
            <div><ForkKnife size={19} /><span>Bring a picnic</span></div><i aria-hidden="true" />
            <div><PartyPopper size={19} /><span>Gather together</span></div>
          </section>

          <section className="section experience-section" id="experience">
            <Reveal className="experience-copy">
              <span className="eyebrow eyebrow-blue">A little of everything</span>
              <h2>A family day<br /><span>at your own pace.</span></h2>
              <p>Bring your favourite people together for a day of water fun, outdoor play and time to unwind. Splash Kids Waterpark has plenty of ways to make family memories in eMondlo.</p>
              <p>Race to the slides, bounce on the trampolines, explore the play areas or slow things down with a picnic. There’s room for everyone to enjoy the day their own way.</p>
              <p className="script-line">Make time for the people who matter.</p>
              <a href="#attractions" className="text-link">See what’s waiting <ArrowRight size={17} /></a>
            </Reveal>
            <Reveal className="experience-stamp" delay={0.12}>
              <div className="stamp-card stamp-yellow"><Waves size={26} /><strong>Make a splash.</strong><span>POOL TIME, TOGETHER</span></div>
              <div className="stamp-card stamp-blue"><TentTree size={28} /><strong>Take a pause.</strong><span>GARDEN &amp; PICNIC TIME</span></div>
              <span className="confetti confetti-one" /><span className="confetti confetti-two" />
            </Reveal>
          </section>

          <section className="section attractions-section" id="attractions">
            <Reveal className="section-intro centered-intro">
              <span className="eyebrow eyebrow-blue">The park, at your pace</span>
              <h2>Find your kind<br />of <span>day out.</span></h2>
              <p>Spend the day in the water, head outdoors to play, or take a break in the garden. There’s space to enjoy it your way.</p>
            </Reveal>
            <div className="activity-grid">
              {activities.map(({ title, text, Icon, color }, index) => (
                <Reveal className={`activity-card card-${color}`} delay={Math.min(index * 0.035, 0.25)} key={title}>
                  <span className="activity-icon"><Icon size={25} strokeWidth={2.25} /></span>
                  <span className="activity-number">0{index + 1}</span>
                  <h3>{title}</h3><p>{text}</p>
                </Reveal>
              ))}
            </div>
            <p className="safety-note"><ShieldCheck size={19} /> Please supervise children at all times and follow posted pool and attraction safety rules.</p>
          </section>

          <section className="section picnic-section" id="picnic">
            <Reveal className="picnic-visual">
              <div className="picnic-frame"><img src={picnicImage} alt="Illustrative concept of a family picnic in a garden near a splash park; not a photograph of the venue." loading="lazy" /></div>
              <span className="picnic-caption"><Trees size={16} /> PICNIC-AREA CONCEPT</span>
            </Reveal>
            <Reveal className="picnic-copy" delay={0.1}>
              <span className="eyebrow eyebrow-blue">Picnic &amp; braai areas</span>
              <h2>Take a pause.<br /><span>Stay for lunch.</span></h2>
              <p>Bring the snacks you love, find a spot to settle in and enjoy a meal together between all the splashing and playing.</p>
              <ul className="check-list">
                <li><span>✓</span> Bring your own food and snacks</li>
                <li><span>✓</span> Coolerboxes welcome at no extra charge</li>
                <li><span>✓</span> Picnic spaces and braai facilities available</li>
                <li><span>✓</span> Lapas can be booked in advance</li>
              </ul>
              <p className="small-note">Management will share any applicable braai rules, permitted equipment and food-safety requirements.</p>
              <a href="/visit#enquiry" className="button button-secondary">Ask about a lapa <ArrowUpRight size={17} /></a>
            </Reveal>
          </section>

          <section className="party-band" id="celebrate">
            <div className="party-sun" aria-hidden="true" />
            <Reveal className="party-copy">
              <span className="eyebrow eyebrow-light"><PartyPopper size={16} /> Mark a special occasion</span>
              <h2>Bring everyone<br /><span>together.</span></h2>
              <p>Planning a birthday, family get-together or group outing? Bring everyone together for a day of fresh air and fun.</p>
              <div className="event-pills">{events.map((event) => <span key={event}>{event}</span>)}</div>
              <p className="party-small">Advance booking is recommended for lapas and organised group visits. Packages and availability must be confirmed with management.</p>
              <a className="button button-white" href="/visit#enquiry">Enquire about a party <ArrowUpRight size={17} /></a>
            </Reveal>
            <Reveal className="party-doodle" delay={0.16}>
              <div className="party-feature-card">
                <span className="party-feature-icon"><PartyPopper size={23} /></span>
                <span className="party-feature-label">GOOD TIMES, TOGETHER</span>
                <strong>Make it a day to remember.</strong>
                <p>Birthdays · family days · group outings</p>
              </div>
            </Reveal>
          </section>

          <section className="section gallery-section" id="gallery">
            <Reveal className="section-intro gallery-intro">
              <span className="eyebrow eyebrow-blue">A closer look at Splash Kids</span>
              <h2>The park in<br /><span>pictures.</span></h2>
              <p>We’re looking forward to sharing a closer look at the park. Real photos and a short tour will appear here when the park’s own pictures and video are ready.</p>
              <span className="coming-pill"><Clock3 size={15} /> Park photos &amp; video coming soon</span>
            </Reveal>
            <Reveal className="gallery-preview" delay={0.1}>
              <div className="gallery-preview-head"><span className="gallery-live-dot" /> GALLERY PREVIEW</div>
              <div className="gallery-categories">
                {["The waterpark", "Pools & slides", "Kids’ adventure zone", "Jumping castles & trampolines", "Picnic & braai areas", "Lapas & garden", "Birthday parties & events"].map((item, i) => (
                  <span className={`gallery-category gallery-tone-${i % 4}`} key={item}><Sparkles size={16} /> {item}</span>
                ))}
              </div>
              <div className="gallery-preview-foot"><CircleHelp size={18} /><span>We can’t wait to share the real-life splashes and smiles. Please check back for park photos and a video tour.</span></div>
            </Reveal>
          </section>

          <section className="final-cta" id="contact">
            <div className="cta-splash" aria-hidden="true"><Waves size={62} /></div>
            <div className="final-cta-copy">
              <span className="eyebrow eyebrow-light">Make time for a family day out</span>
              <h2>Plan a day<br /><span>in eMondlo.</span></h2>
              <p>Bring the kids, invite your friends and make a day of happy outdoor memories. We’d love to help you plan your visit.</p>
              <div className="hero-actions">
                <a className="button button-yellow" href="/visit">Plan your visit <ArrowRight size={18} /></a>
                <a className="button button-outline-light" href="tel:+27648200293">Call +27 64 820 0293</a>
                <a className="button button-outline-light" href="https://wa.me/27648200293" target="_blank" rel="noreferrer">Chat to us on WhatsApp <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="cta-contact-card">
              <span className="cta-card-icon"><MapPin size={21} /></span>
              <strong>Find your way to the fun</strong>
              <p>Block C, eMondlo/Vryheid Road<br />eMondlo, 3105, KwaZulu-Natal</p>
              <a href={mapsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a>
              <span className="small-note">Exact map entrance pin to be confirmed.</span>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </MotionConfig>
  );
}
