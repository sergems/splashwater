import { AlertTriangle, ArrowRight, Check, CircleHelp, HeartHandshake, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { safetyTopicsToConfirm } from "@/data/parkContent";

const visitorGuidance = [
  "A responsible parent or guardian should actively supervise their children throughout the visit.",
  "Follow the signs, pool and attraction rules, restricted-area notices and instructions from park staff.",
  "Do not run, push or engage in rough play around wet areas; use slides and play equipment only as directed.",
  "Tell staff if you see damaged equipment, a hazard or anyone who may need help.",
  "Do not enter water or use an attraction while impaired by alcohol or another substance.",
  "Ask management about medical, accessibility or additional-support needs before visiting.",
];

export default function Safety() {
  return (
    <SiteLayout className="information-page safety-page">
      <PageHero eyebrow="Safety & parent information" title="Play with care." accent="Enjoy every splash." description="Know the general visitor guidance, and ask Splash Kids management to confirm current attraction rules, supervision and emergency procedures before your visit." actions={<Link className="button button-primary" href="/contact#enquiry">Ask about safety arrangements <ArrowRight size={17} aria-hidden="true"/></Link>} />
      <section className="section safety-promise"><div className="safety-promise-icon"><ShieldCheck size={29} aria-hidden="true"/></div><div><span className="eyebrow eyebrow-blue">For every family</span><h2>Good days out need <span>clear information.</span></h2><p>This page does not replace posted instructions or direct advice from park staff. Management must confirm the park’s own safety procedures and legal requirements before they are treated as official policy.</p></div></section>
      <section className="section safety-content-grid"><article className="safety-guidance-card"><div className="guidance-title"><span className="guidance-icon"><Check size={21} aria-hidden="true"/></span><div><span className="eyebrow eyebrow-blue">General visitor guidance</span><h2>Look out for one another.</h2></div></div><ul className="checked-list">{visitorGuidance.map((line) => <li key={line}>{line}</li>)}</ul></article><article className="safety-confirmation-card"><div className="guidance-title"><span className="guidance-icon guidance-icon-warn"><CircleHelp size={21} aria-hidden="true"/></span><div><span className="eyebrow eyebrow-blue">Park-specific detail</span><h2>Confirm with the team.</h2></div></div><p>These procedures and restrictions have not yet been supplied or verified. Contact Splash Kids before relying on any of them.</p><ul>{safetyTopicsToConfirm.map((topic) => <li key={topic}>{topic}</li>)}</ul></article></section>
      <section className="section incident-note"><AlertTriangle size={23} aria-hidden="true"/><div><strong>Need help at the park?</strong><p>Alert the nearest staff member. If there is immediate danger, contact local emergency services. The park’s first-aid arrangements and designated meeting points are to be confirmed.</p></div></section>
      <section className="section parent-question"><HeartHandshake size={24} aria-hidden="true"/><div><h2>Have a question before you arrive?</h2><p>Ask about age guidance, swimwear, accessibility, lifeguard coverage, first aid or any medical support needs.</p></div><Link className="button button-primary" href="/contact#enquiry">Contact the team</Link></section>
    </SiteLayout>
  );
}
