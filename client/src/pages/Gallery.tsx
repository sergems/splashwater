import { ArrowRight, Camera } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { listedAttractions } from "@/data/parkContent";

export default function Gallery() {
  return (
    <SiteLayout className="information-page gallery-page">
      <PageHero eyebrow="Activity photo gallery" title="See the fun." accent="Picture the day." description="Browse representative photos of the activities listed at Splash Kids Waterpark. The images show similar experiences—not the eMondlo venue." />
      <section className="section gallery-activity-intro"><span className="gallery-activity-intro-label"><Camera size={18} aria-hidden="true"/> Representative activity photos</span><p>These are real, licensed photographs selected to represent the kinds of family activities described on this site. They are not photographs of Splash Kids Waterpark.</p></section>
      <section className="section gallery-activity-grid" aria-label="Representative Splash Kids activity photos">{listedAttractions.map((item, index) => <article className="gallery-activity-card" key={item.name}><figure className="gallery-activity-photo"><img src={item.photo.src} alt={item.photo.alt} width={item.photo.width} height={item.photo.height} loading="lazy" decoding="async"/><span className="gallery-activity-index" aria-hidden="true">0{index + 1}</span></figure><div className="gallery-activity-caption"><span className="eyebrow eyebrow-blue">Splash Kids activity</span><h2>{item.name}</h2><p>{item.description}</p></div></article>)}</section>
      <section className="section page-bottom-cta"><div><span className="eyebrow eyebrow-blue">Plan your family visit</span><h2>Explore the activities.</h2><p>Read the family guidance, budget estimates and practical visit information.</p></div><Link className="button button-primary" href="/attractions">Browse attractions <ArrowRight size={17} aria-hidden="true"/></Link></section>
    </SiteLayout>
  );
}
