import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { park } from "@/data/parkContent";

type FormValues = {
  fullName: string;
  phone: string;
  email: string;
  enquiryType: string;
  date: string;
  adults: string;
  children: string;
  message: string;
};

type EnquiryFormProps = {
  defaultType?: string;
  partyRequest?: boolean;
};

const enquiryTypes = [
  "General visit",
  "Birthday party",
  "Lapa booking",
  "School outing",
  "Church or community group",
  "Organised group visit",
  "Prices or facilities",
  "Other",
];

export default function EnquiryForm({ defaultType = "General visit", partyRequest = false }: EnquiryFormProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    phone: "",
    email: "",
    enquiryType: defaultType,
    date: "",
    adults: "",
    children: "",
    message: "",
  });
  const [preparedUrl, setPreparedUrl] = useState("");
  const [notice, setNotice] = useState("");

  const update = (key: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setPreparedUrl("");
    setNotice("");
  };

  const prepareMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      `Hello ${park.name}! I have an enquiry:`,
      `Name: ${values.fullName}`,
      `Contact number: ${values.phone}`,
      `Email: ${values.email || "Not provided"}`,
      `Enquiry type: ${values.enquiryType}`,
      `Preferred date: ${values.date || "Not provided"}`,
      `Adults: ${values.adults || "Not provided"}`,
      `Children: ${values.children || "Not provided"}`,
      `Additional requirements: ${values.message || "None provided"}`,
    ].join("\n");
    setPreparedUrl(`${park.whatsappHref}?text=${encodeURIComponent(message)}`);
    setNotice("Your message is ready. Open WhatsApp below, review it and choose Send when you’re ready to contact the team.");
  };

  return (
    <section className="enquiry-card" id="enquiry" aria-labelledby="enquiry-title">
      <div className="enquiry-head">
        <span className="eyebrow eyebrow-blue">{partyRequest ? "Tell us about your plans" : "We’re here to help"}</span>
        <h2 id="enquiry-title">{partyRequest ? "Ask about a booking" : "Send an enquiry"}</h2>
        <p>Share only the details needed for the team to reply. An enquiry does not reserve a date or confirm a booking.</p>
      </div>
      <form onSubmit={prepareMessage} className="enquiry-form">
        <div className="form-grid">
          <label>Your name <input name="fullName" autoComplete="name" required value={values.fullName} onChange={(event) => update("fullName", event.target.value)} /></label>
          <label>Your contact number <input name="phone" type="tel" autoComplete="tel" required value={values.phone} onChange={(event) => update("phone", event.target.value)} /></label>
          <label>Email address <span className="label-optional">(optional)</span><input name="email" type="email" autoComplete="email" value={values.email} onChange={(event) => update("email", event.target.value)} /></label>
          <label>What is your enquiry about?
            <select name="enquiryType" value={values.enquiryType} onChange={(event) => update("enquiryType", event.target.value)}>
              {enquiryTypes.map((type) => <option key={type}>{type}</option>)}
            </select>
          </label>
          <label>Preferred date <span className="label-optional">(if known)</span><input name="date" type="date" value={values.date} onChange={(event) => update("date", event.target.value)} /></label>
          <label>Number of adults <span className="label-optional">(if known)</span><input name="adults" type="number" min="0" inputMode="numeric" value={values.adults} onChange={(event) => update("adults", event.target.value)} /></label>
          <label>Number of children <span className="label-optional">(if known)</span><input name="children" type="number" min="0" inputMode="numeric" value={values.children} onChange={(event) => update("children", event.target.value)} /></label>
          <label className="form-wide">Message or additional requirements <textarea name="message" rows={4} value={values.message} onChange={(event) => update("message", event.target.value)} /></label>
        </div>
        <p className="form-disclaimer">This website does not send or store your form details. It prepares a WhatsApp message on your device; WhatsApp’s own privacy terms apply if you choose to send it. Please do not enter a child’s name or sensitive information.</p>
        <button className="button button-primary" type="submit"><MessageCircle size={18} aria-hidden="true" /> Prepare WhatsApp message</button>
        {notice && <div className="form-result" role="status"><CheckCircle2 size={18} aria-hidden="true" /><span>{notice}</span></div>}
        {preparedUrl && <a className="button button-whatsapp" href={preparedUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" /> Review &amp; send in WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a>}
      </form>
    </section>
  );
}
