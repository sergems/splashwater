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
      "Splash Kids Waterpark enquiry",
      `Name: ${values.fullName}`,
      `Contact number: ${values.phone}`,
      `Email: ${values.email || "Not provided"}`,
      `Enquiry type: ${values.enquiryType}`,
      `Preferred visit date: ${values.date || "Not provided"}`,
      `Adults: ${values.adults || "Not provided"}`,
      `Children: ${values.children || "Not provided"}`,
      `Message / special requirements: ${values.message || "None"}`,
    ].join("\n");
    setPreparedUrl(`https://wa.me/27648200293?text=${encodeURIComponent(message)}`);
    setNotice("Your enquiry is ready. Choose the button below to open WhatsApp and send it to the team.");
  };

  return (
    <div className="enquiry-card" id="enquiry">
      <div className="enquiry-head">
        <span className="eyebrow eyebrow-blue">Let’s get your fun day started</span>
        <h3>Tell us what you’re planning</h3>
        <p>Ask about a visit, lapa, birthday or group outing. Management will confirm availability and arrangements.</p>
      </div>
      <form onSubmit={prepareMessage} className="enquiry-form">
        <div className="form-grid">
          <label>Full name <input name="fullName" autoComplete="name" required value={values.fullName} onChange={(e) => update("fullName", e.target.value)} /></label>
          <label>Contact number <input name="phone" type="tel" autoComplete="tel" required value={values.phone} onChange={(e) => update("phone", e.target.value)} /></label>
          <label>Email address <input name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => update("email", e.target.value)} /></label>
          <label>Type of enquiry
            <select name="enquiryType" value={values.enquiryType} onChange={(e) => update("enquiryType", e.target.value)}>
              <option>General Visit</option><option>Lapa Booking</option><option>Birthday Party</option><option>Group Visit</option><option>Other</option>
            </select>
          </label>
          <label>Preferred visit date <input name="date" type="date" value={values.date} onChange={(e) => update("date", e.target.value)} /></label>
          <label>Number of adults <input name="adults" type="number" min="0" inputMode="numeric" value={values.adults} onChange={(e) => update("adults", e.target.value)} /></label>
          <label>Number of children <input name="children" type="number" min="0" inputMode="numeric" value={values.children} onChange={(e) => update("children", e.target.value)} /></label>
          <label className="form-wide">Message or special requirements <textarea name="message" rows={4} value={values.message} onChange={(e) => update("message", e.target.value)} /></label>
        </div>
        <p className="form-disclaimer">Submitting this form does not automatically confirm a booking. Your details are not sent or stored by this website; the form prepares a message for you to send using WhatsApp.</p>
        <button className="button button-primary" type="submit"><MessageCircle size={18} /> Prepare WhatsApp enquiry</button>
        {notice && <div className="form-result" role="status"><CheckCircle2 size={18} /><span>{notice}</span></div>}
        {preparedUrl && <a className="button button-whatsapp" href={preparedUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Open WhatsApp to send <ArrowUpRight size={16} /></a>}
      </form>
    </div>
  );
}
