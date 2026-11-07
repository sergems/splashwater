import { ArrowRight, Check, CircleHelp, TentTree } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { facilityPlanningNotes, listedFacilities } from "@/data/parkContent";

export default function Facilities() {
  return (
    <SiteLayout className="information-page">
      <PageHero eyebrow="Facilities & amenities" title="A place to play." accent="Room to take a break." description="Explore the listed pools, play areas and picnic spaces, then use the conservative guidance below to prepare for amenities." actions={<Link className="button button-primary" href="/contact#enquiry">Ask the team <ArrowRight size={17} aria-hidden="true"/></Link>} />
      <section className="section facility-intro"><span className="facility-intro-icon"><TentTree size={26} aria-hidden="true"/></span><div><span className="eyebrow eyebrow-blue">The park experience</span><h2>Play outside. <span>Pause together.</span></h2><p>The activity list includes pools, play equipment, gardens, picnic and braai areas, benches and lapas. Guidance for additional conveniences are planning assumptions, not availability guarantees.</p></div></section>
      <section className="section facilities-sections"><article className="facility-list-card"><span className="eyebrow eyebrow-blue">Activities listed for Splash Kids</span><h2>Plan around these features</h2><ul className="checked-list">{listedFacilities.map((facility) => <li key={facility}>{facility}</li>)}</ul><p className="facility-footnote">Lapas are listed for advance requests; allow 3–7 days ahead and R150–R600 per booking. Capacity and inclusions are not confirmed.</p></article><article className="facility-confirm-card"><span className="facility-confirm-icon"><CircleHelp size={24} aria-hidden="true"/></span><span className="eyebrow eyebrow-blue">Conservative planning assumptions</span><h2>What to pack</h2><p>These notes help avoid relying on an amenity that may not be available during a visit.</p><ul>{facilityPlanningNotes.map((amenity) => <li key={amenity}>{amenity}</li>)}</ul><Link className="text-link" href="/visit">See visit guidance <ArrowRight size={16} aria-hidden="true"/></Link></article></section>
      <section className="section facility-food-panel"><div><span className="eyebrow eyebrow-light">Bring your own</span><h2>Picnic plans are welcome.</h2><p>Visitors may bring food and snacks, and coolerboxes are welcome at no extra charge. Use braai areas only as directed by staff and follow current fire-safety instructions.</p></div><span className="facility-food-icon" aria-hidden="true"><Check size={27}/></span></section>
    </SiteLayout>
  );
}
