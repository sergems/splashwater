import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";

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

const initial: FormValues = {
  fullName: "",
  phone: "",
  email: "",
  enquiryType: "General Visit",
  date: "",
  adults: "",
  children: "",
  message: "",
};

export default function EnquiryForm() {
  const [values, setValues] = useState(initial);
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
      "Hello Splash Kids Waterpark! I have an enquiry:",
      `Name: ${values.fullName}`,
      `Contact number: ${values.phone}`,
      `Email: ${values.email || "Not provided"}`,
      `Enquiry type: ${values.enquiryType}`,
      `Preferred visit date: ${values.date || "Not provided"}`,
      `Adults: ${values.adults || "Not provided"}`,
      `Children: ${values.children || "Not provided"}`,
      `Anything else we should know: ${values.message || "Nothing else for now"}`,
    ].join("\n");
    setPreparedUrl(`https://wa.me/27648200293?text=${encodeURIComponent(message)}`);
    setNotice("Your message is ready. Open WhatsApp below, then choose Send when you’re ready to contact the team.");
  };

  return (
    <div className="enquiry-card" id="enquiry">
      <div className="enquiry-head">
          <span className="eyebrow eyebrow-blue">Tell us about your plans</span>
          <h3>How can we help?</h3>
          <p>Planning a visit, booking a lapa, celebrating a birthday or bringing a group? Send us a message and the team will follow up about availability.</p>
      </div>
      <form onSubmit={prepareMessage} className="enquiry-form">
        <div className="form-grid">
          <label>Your name <input name="fullName" autoComplete="name" required value={values.fullName} onChange={(e) => update("fullName", e.target.value)} /></label>
          <label>Your contact number <input name="phone" type="tel" autoComplete="tel" required value={values.phone} onChange={(e) => update("phone", e.target.value)} /></label>
          <label>Email address (optional) <input name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => update("email", e.target.value)} /></label>
          <label>What would you like to ask about?
            <select name="enquiryType" value={values.enquiryType} onChange={(e) => update("enquiryType", e.target.value)}>
              <option>General Visit</option><option>Lapa Booking</option><option>Birthday Party</option><option>Group Visit</option><option>Other</option>
            </select>
          </label>
          <label>When are you hoping to visit? <input name="date" type="date" value={values.date} onChange={(e) => update("date", e.target.value)} /></label>
          <label>How many adults? <input name="adults" type="number" min="0" inputMode="numeric" value={values.adults} onChange={(e) => update("adults", e.target.value)} /></label>
          <label>How many children? <input name="children" type="number" min="0" inputMode="numeric" value={values.children} onChange={(e) => update("children", e.target.value)} /></label>
          <label className="form-wide">Your message or any special requirements <textarea name="message" rows={4} value={values.message} onChange={(e) => update("message", e.target.value)} /></label>
        </div>
        <p className="form-disclaimer">This message is not sent or stored by the website. We’ll prepare it for WhatsApp, where you can review it and choose whether to send. An enquiry does not confirm a booking; the team will confirm availability and arrangements.</p>
        <button className="button button-primary" type="submit"><MessageCircle size={18} /> Prepare my message</button>
        {notice && <div className="form-result" role="status"><CheckCircle2 size={18} /><span>{notice}</span></div>}
        {preparedUrl && <a className="button button-whatsapp" href={preparedUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Review &amp; send in WhatsApp <ArrowUpRight size={16} /></a>}
      </form>
    </div>
  );
}
