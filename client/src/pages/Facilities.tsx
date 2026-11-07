import { ArrowRight, Check, CircleHelp, TentTree } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { amenitiesToConfirm, confirmedFacilities } from "@/data/parkContent";

export default function Facilities() {
  return (
    <SiteLayout className="information-page">
      <PageHero eyebrow="Facilities & amenities" title="A place to play." accent="Room to take a break." description="See the facilities included in the supplied Splash Kids information, and check anything else with management before your family sets off." actions={<Link className="button button-primary" href="/contact#enquiry">Ask the team <ArrowRight size={17} aria-hidden="true"/></Link>} />
      <section className="section facility-intro"><span className="facility-intro-icon"><TentTree size={26} aria-hidden="true"/></span><div><span className="eyebrow eyebrow-blue">The park experience</span><h2>Play outside. <span>Pause together.</span></h2><p>The park’s supplied information includes pools, play equipment, gardens and picnic spaces. Specific access arrangements, opening hours and availability should be confirmed with management.</p></div></section>
      <section className="section facilities-sections"><article className="facility-list-card"><span className="eyebrow eyebrow-blue">Included in supplied park details</span><h2>Confirmed park features</h2><ul className="checked-list">{confirmedFacilities.map((facility) => <li key={facility}>{facility}</li>)}</ul><p className="facility-footnote">Lapas are available by advance request; availability, capacity and any fee remain to be confirmed.</p></article><article className="facility-confirm-card"><span className="facility-confirm-icon"><CircleHelp size={24} aria-hidden="true"/></span><span className="eyebrow eyebrow-blue">Please check before travelling</span><h2>Other amenities</h2><p>These possible conveniences were listed for verification. They are not advertised as available until management confirms them.</p><ul>{amenitiesToConfirm.map((amenity) => <li key={amenity}>{amenity}</li>)}</ul><Link className="text-link" href="/visit">See visitor information <ArrowRight size={16} aria-hidden="true"/></Link></article></section>
      <section className="section facility-food-panel"><div><span className="eyebrow eyebrow-light">Bring your own</span><h2>Picnic plans are welcome.</h2><p>Visitors may bring food and snacks, and coolerboxes are welcome at no extra charge. Follow the park’s braai and fire-safety instructions, and check what food or drinks are sold on site.</p></div><span className="facility-food-icon" aria-hidden="true"><Check size={27}/></span></section>
    </SiteLayout>
  );
}
