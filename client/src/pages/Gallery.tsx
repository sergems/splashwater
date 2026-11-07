import { Camera, Image, Mail, Video } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { park } from "@/data/parkContent";

const galleryCategories = ["Waterpark & pools", "Slides & water play", "Play & adventure", "Gardens & picnic areas", "Lapas & braai spaces", "Family events"];

export default function Gallery() {
  return (
    <SiteLayout className="information-page gallery-page">
      <PageHero eyebrow="Photo & video gallery" title="A closer look at" accent="Splash Kids." description="This space is ready for approved photographs and short videos of the actual park, its facilities and family events." />
      <section className="section gallery-empty-state"><div className="gallery-empty-icon"><Image size={31} aria-hidden="true"/><span><Video size={17} aria-hidden="true"/></span></div><span className="eyebrow eyebrow-blue">Park media</span><h2>Venue photographs &amp; videos</h2><p>Authentic park photographs and video clips have not yet been supplied. The gallery will use approved Splash Kids media only—not generic or unrelated waterpark pictures.</p><div className="gallery-media-types"><span><Camera size={17} aria-hidden="true"/> Venue photos</span><span><Video size={17} aria-hidden="true"/> Short videos</span><span><Image size={17} aria-hidden="true"/> Facility details</span></div><a className="button button-outline" href={park.emailHref}><Mail size={17} aria-hidden="true"/> Contact the team</a></section>
      <section className="section gallery-categories-section"><div className="section-heading"><span className="eyebrow eyebrow-blue">Gallery structure</span><h2>Browse by <span>park experience.</span></h2><p>Approved assets can be added to these categories as the gallery grows.</p></div><div className="gallery-category-grid">{galleryCategories.map((category, index) => <article key={category} className="gallery-category-card"><span>0{index + 1}</span><h3>{category}</h3><p>Park media to be added.</p></article>)}</div><p className="gallery-consent-note">Before sharing an identifiable child’s image or video, the appropriate parent or guardian consent and permissions must be obtained.</p></section>
      <section className="section page-bottom-cta"><div><span className="eyebrow eyebrow-blue">See the activities</span><h2>Discover what the park offers.</h2><p>Browse the supplied list of Splash Kids attractions and facilities.</p></div><Link className="button button-primary" href="/attractions">Explore attractions</Link></section>
    </SiteLayout>
  );
}
