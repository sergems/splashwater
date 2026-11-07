import { Activity, ArrowRight, Castle, Footprints, Leaf, TentTree, Trees, Waves } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { listedAttractions } from "@/data/parkContent";

const iconFor: Record<string, typeof Waves> = { waves: Waves, slide: Waves, activity: Activity, castle: Castle, climb: Footprints, child: Activity, garden: Leaf, food: TentTree, shade: Trees };

export default function Attractions() {
  return (
    <SiteLayout className="information-page">
      <PageHero eyebrow="Attractions & activities" title="Find your kind" accent="of waterpark fun." description="Explore the activities listed for Splash Kids and read cautious family-planning guidance. Follow current signs and staff instructions." actions={<><Link className="button button-primary" href="/visit">Plan Your Visit</Link><Link className="button button-outline" href="/safety">Read safety guidance</Link></>} />
      <section className="section attractions-page-section">
        <div className="section-heading section-heading-split">
          <div><span className="eyebrow eyebrow-blue">Explore the park</span><h2>Choose your <span>kind of splash.</span></h2></div>
          <p className="attraction-photo-note">Representative stock photos—not photographs of Splash Kids Waterpark. Numeric age, height, capacity and water-depth limits are not guessed; follow on-site signs and staff.</p>
        </div>
        <div className="attraction-grid">
          {listedAttractions.map((item, index) => {
            const Icon = iconFor[item.icon] ?? Activity;
            return (
              <article className="attraction-detail-card" key={item.name}>
                <figure className="attraction-photo">
                  <img src={item.photo.src} alt={item.photo.alt} width={item.photo.width} height={item.photo.height} loading="lazy" decoding="async" />
                  <span className="attraction-photo-index" aria-hidden="true">0{index + 1}</span>
                </figure>
                <div className="attraction-card-content">
                  <div className={`attraction-icon attraction-icon-${index + 1}`}><Icon size={24} aria-hidden="true" /></div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="restriction-note"><strong>Planning estimate</strong><span>{item.restriction}</span></div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section unconfirmed-attractions"><div><span className="eyebrow eyebrow-blue">Conservative visit plan</span><h2>Plan around <span>the listed activities.</span></h2><p>For budgeting, do not include a separate toddler zone, fountains or additional water-play features beyond the listed pools and slides. This avoids relying on unlisted amenities.</p></div><div className="unconfirmed-tags"><span>9 listed activities</span><span>No extra toddler zone assumed</span><span>Fountains not budgeted</span><span>Follow on-site signs</span></div></section>
      <section className="section page-bottom-cta"><div><span className="eyebrow eyebrow-blue">Make a plan</span><h2>Need today’s activity details?</h2><p>Call or WhatsApp the team for the day’s schedule and practical arrangements.</p></div><Link className="button button-primary" href="/contact#enquiry">Talk to the team <ArrowRight size={17} aria-hidden="true" /></Link></section>
    </SiteLayout>
  );
}
