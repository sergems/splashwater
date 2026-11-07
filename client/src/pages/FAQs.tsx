import { ArrowRight, CircleHelp } from "lucide-react";
import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { faqs } from "@/data/parkContent";

export default function FAQs() {
  return (
    <SiteLayout className="information-page faq-page">
      <PageHero eyebrow="Frequently asked questions" title="Planning questions?" accent="Start here." description="Quick answers to common questions about location, tickets, food, groups and safety. Details marked to be confirmed should be checked with the park team." />
      <section className="section faq-content"><div className="faq-side-note"><CircleHelp size={24} aria-hidden="true"/><div><strong>Need another answer?</strong><p>Contact Splash Kids directly to confirm current details before you travel.</p><Link className="text-link" href="/contact">Get in touch <ArrowRight size={16} aria-hidden="true"/></Link></div></div><div className="faq-list">{faqs.map((item, index) => <details className="faq-item" key={item.question} open={index === 0}><summary><span>{item.question}</span><span className="faq-plus" aria-hidden="true"/></summary><div className="faq-answer"><p>{item.answer}</p></div></details>)}</div></section>
    </SiteLayout>
  );
}
