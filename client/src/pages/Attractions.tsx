import { Activity, ArrowRight, Castle, Footprints, Leaf, TentTree, Trees, Waves } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { confirmedAttractions } from "@/data/parkContent";

const iconFor: Record<string, typeof Waves> = { waves: Waves, slide: Waves, activity: Activity, castle: Castle, climb: Footprints, child: Activity, garden: Leaf, food: TentTree, shade: Trees };

export default function Attractions() {
  return (
    <SiteLayout className="information-page">
      <PageHero eyebrow="Attractions & activities" title="Find your kind" accent="of waterpark fun." description="Explore the pools, slides, outdoor play and family spaces listed for Splash Kids. Confirm activity availability and restrictions with the team before your visit." actions={<><Link className="button button-primary" href="/visit">Plan Your Visit</Link><Link className="button button-outline" href="/safety">Read safety rules</Link></>} />
      <section className="section attractions-page-section"><div className="section-heading section-heading-split"><div><span className="eyebrow eyebrow-blue">Explore the park</span><h2>Choose your <span>kind of splash.</span></h2></div><p>Cards use descriptions rather than unverified venue photographs. Age, height, capacity and supervision limits are to be confirmed by management.</p></div>
        <div className="attraction-grid">{confirmedAttractions.map((item, index) => { const Icon = iconFor[item.icon] ?? Activity; return <article className="attraction-detail-card" key={item.name}><div className={`attraction-icon attraction-icon-${index + 1}`}><Icon size={24} aria-hidden="true"/><span>0{index + 1}</span></div><h3>{item.name}</h3><p>{item.description}</p><div className="restriction-note"><strong>Before you go</strong><span>{item.restriction}</span></div></article>; })}</div>
      </section>
      <section className="section unconfirmed-attractions"><div><span className="eyebrow eyebrow-blue">More detail to come</span><h2>Activities that need <span>confirmation.</span></h2><p>The supplied information does not confirm a separate toddler zone, fountains, water-play features beyond the listed pools and slides, or additional attractions. Ask management before making plans around these features.</p></div><div className="unconfirmed-tags"><span>Fountains</span><span>Toddler-specific facilities</span><span>Additional water-play areas</span><span>Attraction limits</span></div></section>
      <section className="section page-bottom-cta"><div><span className="eyebrow eyebrow-blue">Make a plan</span><h2>Need an answer before you set off?</h2><p>Contact Splash Kids about availability, age guidance or current operating arrangements.</p></div><Link className="button button-primary" href="/contact#enquiry">Ask the team <ArrowRight size={17} aria-hidden="true" /></Link></section>
    </SiteLayout>
  );
}
