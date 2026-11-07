import { AlertTriangle, ArrowRight, Check, HeartHandshake, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { safetyPlanningNotes } from "@/data/parkContent";

const visitorGuidance = [
  "A responsible parent or guardian should actively supervise children throughout the visit.",
  "Follow current signs, pool and attraction instructions, restricted-area notices and directions from park staff.",
  "Do not run, push or engage in rough play around wet areas; use slides and play equipment only as directed.",
  "Tell staff if you see damaged equipment, a hazard or anyone who may need help.",
  "Do not enter water or use an attraction while impaired by alcohol or another substance.",
  "Bring essential medication and plan ahead for medical, accessibility or additional-support needs.",
];

export default function Safety() {
  return (
    <SiteLayout className="information-page safety-page">
      <PageHero eyebrow="Safety & parent information" title="Play with care." accent="Enjoy every splash." description="Use these cautious family-planning assumptions alongside current signs and direct instructions from park staff. They are not official Splash Kids procedures or numeric attraction limits." actions={<Link className="button button-primary" href="/contact#enquiry">Ask about a visit <ArrowRight size={17} aria-hidden="true"/></Link>} />
      <section className="section safety-promise"><div className="safety-promise-icon"><ShieldCheck size={29} aria-hidden="true"/></div><div><span className="eyebrow eyebrow-blue">For every family</span><h2>Good days out need <span>careful choices.</span></h2><p>Adults should supervise children and follow the park’s current signs and staff instructions. Numeric height, age, depth and capacity limits are not guessed here because incorrect numbers could put a child at risk.</p></div></section>
      <section className="section safety-content-grid"><article className="safety-guidance-card"><div className="guidance-title"><span className="guidance-icon"><Check size={21} aria-hidden="true"/></span><div><span className="eyebrow eyebrow-blue">General visitor guidance</span><h2>Look out for one another.</h2></div></div><ul className="checked-list">{visitorGuidance.map((line) => <li key={line}>{line}</li>)}</ul></article><article className="safety-confirmation-card"><div className="guidance-title"><span className="guidance-icon guidance-icon-warn"><ShieldCheck size={21} aria-hidden="true"/></span><div><span className="eyebrow eyebrow-blue">Cautious planning notes</span><h2>Keep safety first.</h2></div></div><p>These assumptions are intentionally conservative, not park rules. Follow posted instructions and staff guidance whenever they differ.</p><ul>{safetyPlanningNotes.map((topic) => <li key={topic}>{topic}</li>)}</ul></article></section>
      <section className="section incident-note"><AlertTriangle size={23} aria-hidden="true"/><div><strong>Need help during a visit?</strong><p>Alert the nearest staff member. Do not assume a dedicated first-aid station is on site. For immediate danger, contact local emergency services.</p></div></section>
      <section className="section parent-question"><HeartHandshake size={24} aria-hidden="true"/><div><h2>Have a question before you arrive?</h2><p>Ask about age guidance, swimwear, access needs, lifeguard cover, first aid or medical support.</p></div><Link className="button button-primary" href="/contact#enquiry">Contact the team</Link></section>
    </SiteLayout>
  );
}
