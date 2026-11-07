import { HeartHandshake, Sparkles, Users, Waves } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";

const values = [
  { icon: Waves, title: "Room to make a splash", text: "Swimming pools and water slides are part of the family experience listed for Splash Kids." },
  { icon: Users, title: "Time together", text: "Come with family and friends, or ask the team about a birthday, school or group visit." },
  { icon: Sparkles, title: "Fresh-air play", text: "From active play to garden and picnic time, make your day your own." },
  { icon: HeartHandshake, title: "Fun, with care", text: "We want every family day to feel welcoming and well cared for. Cleaning routines, water-quality checks, supervision and safety procedures must be confirmed by park management." },
];

export default function About() {
  return (
    <SiteLayout className="information-page">
      <PageHero eyebrow="Get to know us" title="Family days, with" accent="a splash of fun." description="Splash Kids Waterpark brings water play, outdoor activities and space for families with children, parents, guardians, schools and groups to spend time together in eMondlo. Exact age suitability is to be confirmed." />
      <section className="section about-story-section"><div className="about-story-mark" aria-hidden="true"><span>Splash<br />together</span></div><div className="about-story-copy"><span className="eyebrow eyebrow-blue">A day out in eMondlo</span><h2>Make space for <span>play, water &amp; time together.</span></h2><p>The park’s supplied activity list includes pools, water slides, trampolines, jumping castles, jungle gyms, gardens, picnic and braai areas, benches and lapas that can be requested in advance.</p><p>We want families to be able to plan with confidence. Age suitability, opening times, prices, attraction restrictions and on-site safety procedures should always be confirmed with management before a visit.</p><div className="hero-actions"><Link className="button button-primary" href="/visit">Plan Your Visit</Link><Link className="button button-outline" href="/attractions">Explore activities</Link></div></div></section>
      <section className="section section-values"><div className="section-heading"><span className="eyebrow eyebrow-blue">What makes a good day</span><h2>A waterpark visit <span>for the whole family.</span></h2><p>Fun matters. So do clear information, thoughtful supervision and respect for shared spaces.</p></div><div className="value-grid">{values.map(({ icon: Icon, title, text }, index) => <article className="value-card" key={title}><span className={`value-number value-number-${index + 1}`}>0{index + 1}</span><Icon size={24} aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="section audience-panel"><div><span className="eyebrow eyebrow-light">Bring your people</span><h2>Families, celebrations <span>&amp; group days.</span></h2><p>Parents, guardians, schools, birthday organisers and community groups can contact the team to ask about a visit. Age ranges, dates, rates and packages are confirmed by management.</p></div><Link className="button button-light" href="/parties">Ask about a group visit</Link></section>
    </SiteLayout>
  );
}
