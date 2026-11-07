import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";

const clauses = [
  { title: "1. Entry fees and tickets", body: "All entry fees, ticket types, validity periods, inclusions, age categories and additional charges are to be confirmed by management before publication. Visitors should confirm the price and the activities included before paying." },
  { title: "2. Bookings, changes and refunds", body: "Booking methods, deposits, payment deadlines, cancellations, rescheduling and refunds are not yet confirmed. Contact Splash Kids for the current rules. A general enquiry does not reserve a date or confirm a booking." },
  { title: "3. Walk-in visitors", body: "Walk-in admission, capacity limits and availability have not been confirmed. Please check with management before travelling; an advertised opening time would not itself guarantee admission." },
  { title: "4. Children and responsible adults", body: "A parent or guardian should supervise children at all times. The park’s minimum supervision ratios, age restrictions and admission requirements are to be confirmed by management." },
  { title: "5. Attractions and restrictions", body: "Guests must follow posted pool and attraction signs and staff instructions. Age, height, weight, swimming-ability, health, capacity and equipment restrictions must be confirmed for each attraction before use." },
  { title: "6. Conduct and prohibited behaviour", body: "Visitors are expected to act respectfully and not endanger others or interfere with staff. Running, pushing and rough play near wet areas should be avoided. Rules regarding alcohol, smoking, vaping, other substances, weapons and other restricted items must be confirmed by management and applied consistently with law." },
  { title: "7. Swimwear, food and braai areas", body: "Swimwear, footwear, food, drinks, coolerboxes and braai rules should be confirmed before a visit. The supplied park information allows visitors to bring food and snacks and coolerboxes at no additional charge. Visitors must follow current fire-safety, hygiene and staff instructions; permitted braai equipment and other restrictions remain to be confirmed." },
  { title: "8. Weather and operational changes", body: "Weather closures, thunderstorm procedures, temporary maintenance closures, ticket validity, refunds and rescheduling arrangements are to be confirmed by management. Visitors should check current conditions with the team before travelling." },
  { title: "9. Personal belongings and lost property", body: "Visitors are responsible for their personal belongings. Secure-storage availability, lost-property handling and collection periods have not been supplied and must be confirmed by management." },
  { title: "10. Photography and filming", body: "Visitors should respect other guests’ privacy and must not publish identifiable photographs or video of children without appropriate parent or guardian consent. Commercial filming, park photography rules, use of images by the park and any required permissions must be confirmed with management." },
  { title: "11. Birthday parties and groups", body: "Group sizes, party packages, lapa hire, exclusive-use options, deposits, cancellation rules, catering, access times and additional charges are subject to written confirmation from management. A request is not an accepted booking." },
  { title: "12. Accessibility and additional support", body: "Accessibility features, reasonable accommodation, accessible facilities and assistance arrangements have not been confirmed. Please contact the team before visiting to discuss an individual requirement." },
  { title: "13. Incidents and complaints", body: "Report an incident, hazard or concern to park staff as soon as possible. The park’s emergency contact, first-aid arrangements, incident-reporting process and complaints procedure are to be confirmed by management." },
  { title: "14. Refusal or removal", body: "Management may apply reasonable, lawful entry or removal measures for a legitimate safety, security or conduct reason. Any final policy must be confirmed by management and may not override rights protected by South African law." },
  { title: "15. Responsibility and liability", body: "Nothing on this website excludes, restricts or purports to waive a right or liability that cannot lawfully be excluded under South African law. Any specific liability wording must be reviewed and approved by qualified South African legal advisers before it is relied upon." },
  { title: "16. Privacy and communications", body: "The website’s enquiry form prepares a message for the visitor to review and send via WhatsApp; it does not store or submit the message to a Splash Kids database. If a visitor chooses to send a message, WhatsApp’s own terms and privacy practices apply. See the draft Privacy Policy for more information." },
  { title: "17. Governing law and disputes", body: "These draft terms are intended to be interpreted consistently with applicable South African law. The appropriate dispute-resolution process and forum must be confirmed by management and legal advisers before these terms are finalised." },
  { title: "18. Updates to these terms", body: "Management may revise visitor information when park operations change. Until the park approves a final version, this page is a working draft and should not be treated as the complete operational policy." },
];

export default function Terms() {
  return (
    <SiteLayout className="information-page policy-page">
      <PageHero eyebrow="Visitor information" title="Terms &" accent="Conditions." description="A readable working draft of visitor, booking and facility terms for Splash Kids Waterpark." />
      <section className="section policy-review-banner"><strong>WORKING DRAFT · MANAGEMENT &amp; LEGAL REVIEW REQUIRED</strong><p>Prices, booking rules, attraction limits and park-specific procedures have not been approved. Management should review every clause and obtain South African legal advice before publication as final terms.</p></section>
      <section className="section policy-content"><div className="policy-index"><h2>In this draft</h2><ol>{clauses.map((clause, index) => <li key={clause.title}><a href={`#term-${index + 1}`}>{clause.title.replace(/^\d+\.\s/, "")}</a></li>)}</ol></div><div className="policy-clauses">{clauses.map((clause, index) => <article className="policy-clause" id={`term-${index + 1}`} key={clause.title}><h2>{clause.title}</h2><p>{clause.body}</p></article>)}</div></section>
    </SiteLayout>
  );
}
