import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { park } from "@/data/parkContent";

const privacySections = [
  { title: "Who is responsible?", body: `This website is for ${park.name}, at ${park.address}. The responsible public trading name and contact details shown here come from the supplied project information. This draft does not confirm a company registration or Information Officer identity; send general privacy questions to the published email or phone number.` },
  { title: "What the website form does", body: "The enquiry form keeps the values you enter in the page’s current browser session. When you choose “Prepare WhatsApp message”, the site creates a pre-filled WhatsApp link. It does not send the message automatically and does not save form submissions to a Splash Kids database. You choose whether to open WhatsApp, review the message and send it." },
  { title: "Information to leave out", body: "Use an adult’s contact details and share only what the team needs to respond. Please do not enter a child’s name, identity number, medical information, payment details or other sensitive personal information in the website form." },
  { title: "If you choose to contact the park", body: "After you choose to send an email, make a call or send a WhatsApp message, the relevant service provider processes that communication. WhatsApp/Meta, your email provider and your mobile or network operator have their own terms, privacy notices, security measures and retention practices. Please review those services’ information before using them." },
  { title: "Maps and web fonts", body: "This site may load a Google Maps search/embed and fonts from Google Fonts. Planning assumption: those providers receive technical connection information, such as an IP address and browser details, when your browser requests their services; their own privacy terms apply." },
  { title: "Cookies, analytics and storage", body: "The visitor-facing site does not require a login and this project has no customer enquiry database. Platform analytics injection is disabled, and no Google Analytics or advertising tracker is present in the website code. Assume platform/CDN telemetry or third-party service processing may still apply; no cookie or retention duration is confirmed here." },
  { title: "How long information is kept", body: "The site itself does not retain enquiry submissions. Conservative privacy assumption: a message sent to the park or another provider may remain in phone, email or WhatsApp records until the relevant account holder deletes it. No specific retention duration is confirmed." },
  { title: "Your questions and rights", body: `For questions about a message sent directly to Splash Kids, use ${park.email} or ${park.phoneDisplay}. Direct access, correction or deletion requests to the business through those published contacts. This draft does not confirm an internal response process or identify a separate Information Officer.` },
  { title: "Children’s privacy", body: "The site is intended for parents, guardians and other adults planning a visit. It does not ask for a child’s personal details. An adult should make enquiries on behalf of a child, and appropriate consent should be obtained before publishing identifiable children in photos or videos." },
  { title: "Changes and review", body: "This draft is dated November 2026 and describes the present website structure and visitor-controlled WhatsApp handoff. It should be reviewed by Splash Kids management and an appropriate privacy adviser before being presented as a final privacy policy, and updated if the website or information handling changes." },
];

export default function Privacy() {
  return (
    <SiteLayout className="information-page policy-page">
      <PageHero eyebrow="Privacy information" title="Your details." accent="Your choice." description="A plain-language working draft explaining what happens when you use this website’s contact options." />
      <section className="section policy-review-banner"><strong>DRAFT PRIVACY NOTICE · CONSERVATIVE ASSUMPTIONS</strong><p>This page describes the current client-side WhatsApp handoff, third-party embeds and configured analytics status. It does not guide an unknown legal entity, retention period or Information Officer; appropriate review is recommended before public reliance.</p></section>
      <section className="section privacy-summary"><span className="eyebrow eyebrow-blue">In short</span><h2>This website does not store or send your enquiry.</h2><p>It prepares a message for you to review and send using WhatsApp. You decide whether to continue. WhatsApp’s own terms apply if you send it.</p><a href={park.emailHref}>Privacy questions? Email the team.</a></section>
      <section className="section policy-clauses privacy-clauses">{privacySections.map((section) => <article className="policy-clause" key={section.title}><h2>{section.title}</h2><p>{section.body}</p></article>)}</section>
    </SiteLayout>
  );
}
