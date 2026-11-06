import { MotionConfig, motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Baby, Castle, CircleHelp, Clock3, Flower2, ForkKnife, MapPin, PartyPopper, ShieldCheck, Sparkles, TentTree, Trees, Waves, Wind } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const heroImage = "/manus-storage/async-images/odrhd4F0rIXnodBwn1pSYD/image-1.webp";
const picnicImage = "/manus-storage/async-images/odrhd4F0rIXnodBwn1pSYD/image-2.webp";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Block+C%2C+eMondlo%2FVryheid+Road%2C+eMondlo%2C+3105%2C+KwaZulu-Natal%2C+South+Africa";

const activities = [
  { title: "Swimming pools", text: "Cool down, splash around and enjoy the water.", Icon: Waves, color: "aqua" },
  { title: "Water slides", text: "Add a little excitement to your day with our water slides.", Icon: Wind, color: "yellow" },
  { title: "Trampolines", text: "Bounce, jump and let that happy energy fly.", Icon: Sparkles, color: "pink" },
  { title: "Jumping castles", text: "Endless entertainment for little adventurers.", Icon: Castle, color: "orange" },
  { title: "Jungle gyms", text: "Climb, explore and play outdoors.", Icon: Trees, color: "green" },
  { title: "Kids’ play area", text: "A space dedicated to fun and outdoor play.", Icon: Baby, color: "blue" },
  { title: "Beautiful gardens", text: "Enjoy the fresh air and lovely outdoor surroundings.", Icon: Flower2, color: "green" },
  { title: "Picnic & braai areas", text: "Gather your crew for lunch, snacks and a traditional braai.", Icon: ForkKnife, color: "orange" },
  { title: "Lapas & benches", text: "Take a breather; lapas are available with advance booking.", Icon: TentTree, color: "yellow" },
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
              <span className="eyebrow"><span className="eyebrow-dot" /> eMondlo’s happy place to play</span>
              <h1>BIG SPLASHES.<br /><span>BIG SMILES.</span></h1>
              <p className="hero-tagline">UNFORGETTABLE FAMILY FUN!</p>
              <p className="hero-description">Make a day of slides, splashes, trampoline jumps and garden-side family time at Splash Kids Waterpark.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#attractions">Explore attractions <ArrowRight size={18} /></a>
                <a className="button button-soft" href="/visit">Plan your visit <ArrowUpRight size={17} /></a>
              </div>
              <div className="hero-note"><MapPin size={17} /><span>Block C, eMondlo / Vryheid Road</span></div>
            </div>
            <div className="hero-art-wrap">
              <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
              <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, ease: "easeOut" }}>
                <img src={heroImage} alt="Illustration of children happily splashing in a colorful water-play area" fetchPriority="high" />
              </motion.div>
              <div className="hero-sticker"><span>MAKE</span><strong>A DAY<br />OF IT!</strong><Sparkles size={17} /></div>
              <span className="bubble bubble-a" aria-hidden="true" /><span className="bubble bubble-b" aria-hidden="true" /><span className="bubble bubble-c" aria-hidden="true" />
            </div>
            <a href="#experience" className="scroll-cue" aria-label="Scroll to discover the splash experience"><ArrowDown size={18} /><span>Let’s explore</span></a>
            <div className="hero-wave" aria-hidden="true" />
          </section>

          <section className="quick-strip" aria-label="Park highlights">
            <div><Waves size={19} /><span>Cool off &amp; splash</span></div><i aria-hidden="true" />
            <div><ForkKnife size={19} /><span>Bring your own picnic</span></div><i aria-hidden="true" />
            <div><PartyPopper size={19} /><span>Celebrate together</span></div>
          </section>

          <section className="section experience-section" id="experience">
            <Reveal className="experience-copy">
              <span className="eyebrow eyebrow-blue">More than just a waterpark</span>
              <h2>A family day<br /><span>with extra splash.</span></h2>
              <p>At Splash Kids Waterpark, the best memories are made when families spend time together. Find water attractions, outdoor entertainment and relaxing picnic spaces in one lively place.</p>
              <p>Whether the children are racing for another slide, bouncing on trampolines or exploring the play areas, there is something to keep everyone smiling.</p>
              <p className="script-line">Come for the fun. Stay for the memories. Leave with a smile!</p>
              <a href="#attractions" className="text-link">See what’s waiting <ArrowRight size={17} /></a>
            </Reveal>
            <Reveal className="experience-stamp" delay={0.12}>
              <div className="stamp-card stamp-yellow"><Sparkles size={26} /><strong>HAPPY<br />LITTLE<br />ADVENTURES</strong><span>ALL DAY LONG</span></div>
              <div className="stamp-card stamp-blue"><Waves size={28} /><strong>MAKE A<br />BIG SPLASH</strong><span>FAMILY FUN IN eMONDLO</span></div>
              <span className="confetti confetti-one" /><span className="confetti confetti-two" />
            </Reveal>
          </section>

          <section className="section attractions-section" id="attractions">
            <Reveal className="section-intro centered-intro">
              <span className="eyebrow eyebrow-blue">Something exciting around every corner</span>
              <h2>Pick your kind<br />of <span>play.</span></h2>
              <p>Explore the water fun, adventure zone and family-friendly spots waiting at the park.</p>
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
              <div className="picnic-frame"><img src={picnicImage} alt="Illustration of a family enjoying a picnic in a leafy garden beside the waterpark" loading="lazy" /></div>
              <span className="picnic-caption"><Flower2 size={16} /> YOUR DAY, YOUR WAY</span>
            </Reveal>
            <Reveal className="picnic-copy" delay={0.1}>
              <span className="eyebrow eyebrow-blue">Bring your own food. Bring your family. Enjoy!</span>
              <h2>Pack the snacks.<br /><span>Bring your crew.</span></h2>
              <p>Make your visit your own with a picnic in the garden or a relaxed meal together. Pack your favourite treats, gather your loved ones and make a day of it.</p>
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
              <span className="eyebrow eyebrow-light"><PartyPopper size={16} /> Gather your favourite people</span>
              <h2>Make your next<br /><span>celebration a splash!</span></h2>
              <p>Birthdays, family get-togethers or a group outing—bring everyone together for a day outside.</p>
              <div className="event-pills">{events.map((event) => <span key={event}>{event}</span>)}</div>
              <p className="party-small">Advance booking is recommended for lapas and organised group visits. Packages and availability must be confirmed with management.</p>
              <a className="button button-white" href="/visit#enquiry">Enquire about a party <ArrowUpRight size={17} /></a>
            </Reveal>
            <Reveal className="party-doodle" delay={0.16}>
              <div className="party-burst"><PartyPopper size={54} /><span>YAY!</span></div>
              <div className="party-bubble">GOOD<br />TIMES<br /><b>AHEAD</b></div>
              <span className="party-star star-one">✦</span><span className="party-star star-two">✳</span>
            </Reveal>
          </section>

          <section className="section gallery-section" id="gallery">
            <Reveal className="section-intro gallery-intro">
              <span className="eyebrow eyebrow-blue">See the fun. Feel the excitement.</span>
              <h2>Little peeks of<br /><span>big-time fun.</span></h2>
              <p>We’re getting the photo and video gallery ready. Real photos and a short park tour will be added once the park’s own media is available.</p>
              <span className="coming-pill"><Clock3 size={15} /> Park photos &amp; video coming soon</span>
            </Reveal>
            <Reveal className="gallery-preview" delay={0.1}>
              <div className="gallery-preview-head"><span className="gallery-live-dot" /> GALLERY PREVIEW</div>
              <div className="gallery-categories">
                {["The waterpark", "Pools & slides", "Kids’ adventure zone", "Jumping castles & trampolines", "Picnic & braai areas", "Lapas & garden", "Birthday parties & events"].map((item, i) => (
                  <span className={`gallery-category gallery-tone-${i % 4}`} key={item}><Sparkles size={16} /> {item}</span>
                ))}
              </div>
              <div className="gallery-preview-foot"><CircleHelp size={18} /><span>These are the moments we can’t wait to show you. Check back for actual park photos and a video tour.</span></div>
            </Reveal>
          </section>

          <section className="final-cta" id="contact">
            <div className="cta-splash" aria-hidden="true"><Waves size={62} /></div>
            <div className="final-cta-copy">
              <span className="eyebrow eyebrow-light">Your next family adventure starts here</span>
              <h2>Ready for a<br /><span>day full of smiles?</span></h2>
              <p>Bring the children, invite your friends and make some happy outdoor memories. We can’t wait to welcome you!</p>
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
