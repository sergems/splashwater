import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";

const clauses = [
  { title: "1. Entry fees and tickets", body: "The Prices page shows budgeting ranges, not an official Splash Kids tariff, offer or quote. For planning, assume admission is charged per person per visit. Actual ticket price, age bands, validity and inclusions are set by the park at sale." },
  { title: "2. Bookings, changes and refunds", body: "Planning estimate: request group or lapa arrangements 3–7 days ahead. For budgeting, do not include a refund or date change unless written ticket terms provide one. This is a conservative estimate, not an official policy and not a limit on statutory consumer rights." },
  { title: "3. Walk-in visitors", body: "Planning assumption: individual walk-ins may be accepted on open days, subject to capacity. Busy dates can fill up; an estimated opening window does not guarantee admission." },
  { title: "4. Children and responsible adults", body: "Parents and guardians should supervise children throughout the visit. No park-specific supervision ratio or minimum age is estimated; follow the current signs and directions from staff." },
  { title: "5. Attractions and restrictions", body: "Guests should follow posted pool and attraction signs and staff instructions. Numeric age, height, weight, swimming-ability, health, depth and capacity limits are deliberately not estimated." },
  { title: "6. Conduct and restricted items", body: "Visitors are expected to act respectfully and not endanger others or interfere with staff. Avoid running, pushing and rough play near wet areas. This draft does not guess the park’s specific alcohol, smoking, vaping, weapon or prohibited-item rules; applicable law and posted instructions apply." },
  { title: "7. Swimwear, food and braai areas", body: "Supplied information allows visitors to bring food and snacks and coolerboxes at no extra charge. Planning estimate: bring standard swimwear, towels and spare clothes; use braai areas only as directed by staff. No additional equipment or on-site food purchase is included in the budget." },
  { title: "8. Weather and operational changes", body: "Planning assumption: outdoor attractions may pause or close during lightning, severe weather or operational interruption. Budget conservatively as if no refund is provided unless written ticket terms say otherwise; statutory consumer rights remain unaffected." },
  { title: "9. Personal belongings and lost property", body: "Keep valuables with you. For planning, do not rely on lockers or secure storage, and keep a note of the items your family brings. This page makes no estimate of lost-property collection periods." },
  { title: "10. Photography and filming", body: "Respect other guests’ privacy and do not publish identifiable photographs or videos of children without appropriate parent or guardian consent. This draft does not estimate permissions for commercial filming or the park’s use of visitor images." },
  { title: "11. Birthday parties and groups", body: "Planning ranges are R70–R120 per child and R80–R150 per adult, with an estimated R150–R600 lapa booking. No group discount, catering, cake, décor or exclusive-use option is assumed. Allow 3–7 days for a request; an enquiry does not reserve a date or create a booking." },
  { title: "12. Accessibility and additional support", body: "For planning, do not rely on step-free access, accessible changing facilities or dedicated assistance being available. Contact the team before travelling to discuss individual access or medical needs." },
  { title: "13. Incidents and complaints", body: "Report an incident, hazard or concern to park staff as soon as possible. Do not assume that a dedicated first-aid professional or meeting point is on site; contact emergency services if there is immediate danger." },
  { title: "14. Refusal or removal", body: "Management may apply reasonable, lawful entry or removal measures for a legitimate safety, security or conduct reason. These measures may not override rights protected under South African law." },
  { title: "15. Responsibility and liability", body: "Nothing on this website excludes, restricts or purports to waive a right or liability that cannot lawfully be excluded under South African law. Any final liability wording requires appropriate South African legal review." },
  { title: "16. Privacy and communications", body: "The website’s enquiry form prepares a message for the visitor to review and send through WhatsApp; it does not store or submit the message to a Splash Kids database. If a visitor sends a message, WhatsApp’s own terms and privacy practices apply. See the draft Privacy Policy." },
  { title: "17. Governing law and disputes", body: "This draft is intended to be interpreted consistently with applicable South African law. It does not estimate a specific dispute-resolution forum or legal process." },
  { title: "18. Updates to these terms", body: "Management may update visitor information when operations change. These clauses contain planning assumptions and are not a final park policy or approved ticket contract." },
];

export default function Terms() {
  return (
    <SiteLayout className="information-page policy-page">
      <PageHero eyebrow="Visitor information" title="Terms &" accent="Conditions." description="A readable working draft with conservative planning estimates—not official ticket terms or park rules." />
      <section className="section policy-review-banner"><strong>WORKING DRAFT · ESTIMATES ARE NOT OFFICIAL POLICY</strong><p>This page uses nonbinding visitor-planning assumptions. It is not an approved price list, guarantee or final operating contract. South African legal review is recommended before public reliance; nothing here limits statutory consumer rights.</p></section>
      <section className="section policy-content"><div className="policy-index"><h2>In this draft</h2><ol>{clauses.map((clause, index) => <li key={clause.title}><a href={`#term-${index + 1}`}>{clause.title.replace(/^\d+\.\s/, "")}</a></li>)}</ol></div><div className="policy-clauses">{clauses.map((clause, index) => <article className="policy-clause" id={`term-${index + 1}`} key={clause.title}><h2>{clause.title}</h2><p>{clause.body}</p></article>)}</div></section>
    </SiteLayout>
  );
}
