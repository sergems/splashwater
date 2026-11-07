import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { park } from "@/data/parkContent";

const privacySections = [
  { title: "Who is responsible?", body: "This website is for Splash Kids Waterpark, Block C, eMondlo/Vryheid Road, eMondlo, 3105, KwaZulu-Natal, South Africa. The responsible legal entity and Information Officer details have not been supplied and must be confirmed by management before this notice is finalised." },
  { title: "What the website form does", body: "The enquiry form keeps the values you enter in the page’s current browser session. When you choose “Prepare WhatsApp message”, the site creates a pre-filled WhatsApp link. It does not send the message automatically and does not save form submissions to a Splash Kids database. You choose whether to open WhatsApp, review the message and send it." },
  { title: "Information to leave out", body: "Use an adult’s contact details and share only what the team needs to respond. Please do not enter a child’s name, identity number, medical information, payment details or other sensitive personal information in the website form." },
  { title: "If you choose to contact the park", body: "After you choose to send an email, make a call or send a WhatsApp message, the relevant service provider processes that communication. WhatsApp/Meta, your email provider and your mobile or network operator have their own terms, privacy notices, security measures and retention practices. Please review those services’ information before using them." },
  { title: "Maps and web fonts", body: "The pages may load a Google Maps search/embed and fonts from Google Fonts. When a browser requests these third-party services, the providers may receive technical connection information such as an IP address and browser details under their own privacy terms. Management should confirm the final integrations and any consent or cookie-notice requirements before launch." },
  { title: "Cookies, analytics and storage", body: "The visitor-facing site does not require a login and this project has no configured customer enquiry database. Platform analytics injection is currently disabled, and no Google Analytics or advertising tracker has been added in the website code. Other platform/CDN telemetry and third-party service processing may still apply. Management should verify the production environment, cookies, retention periods and consent requirements before making final statements." },
  { title: "How long information is kept", body: "The site itself does not retain enquiry submissions. If you send a message to the park, management may handle and retain the communication in its phone, email or WhatsApp service. The business’s retention periods and deletion procedures have not been provided and must be determined by management." },
  { title: "Your questions and rights", body: "For questions about a message you sent directly to Splash Kids, contact the team at info@splashKidsWaterpark.co.za or +27 64 820 0293. Requests to access, correct or delete information should be directed to the business. Management must confirm its POPIA process, responsible party, Information Officer contact and applicable legal response procedures." },
  { title: "Children’s privacy", body: "The site is intended for parents, guardians and other adults planning a visit. It does not ask for a child’s personal details. An adult should make enquiries on behalf of a child, and required consent must be obtained before publishing identifiable children in photos or videos." },
  { title: "Changes and review", body: "This draft is dated November 2026 and must be checked by Splash Kids management and an appropriate privacy adviser before being presented as a final POPIA-compliant policy. It should be updated when the website’s technology or information handling changes." },
];

export default function Privacy() {
  return (
    <SiteLayout className="information-page policy-page">
      <PageHero eyebrow="Privacy information" title="Your details." accent="Your choice." description="A plain-language working draft explaining what happens when you use this website’s contact options." />
      <section className="section policy-review-banner"><strong>DRAFT PRIVACY NOTICE · MANAGEMENT REVIEW REQUIRED</strong><p>This page describes the current client-side WhatsApp handoff and third-party embeds. Platform analytics injection is disabled. Management must confirm the responsible legal entity, Information Officer, production cookies, any analytics choice, retention and consent requirements before launch.</p></section>
      <section className="section privacy-summary"><span className="eyebrow eyebrow-blue">In short</span><h2>This website does not store or send your enquiry.</h2><p>It prepares a message for you to review and send using WhatsApp. You decide whether to continue. WhatsApp’s own terms apply if you send it.</p><a href={park.emailHref}>Privacy questions? Email the team.</a></section>
      <section className="section policy-clauses privacy-clauses">{privacySections.map((section) => <article className="policy-clause" key={section.title}><h2>{section.title}</h2><p>{section.body}</p></article>)}</section>
    </SiteLayout>
  );
}
