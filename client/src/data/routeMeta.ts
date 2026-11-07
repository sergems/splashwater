export type RouteMeta = {
  title: string;
  description: string;
  keywords: string[];
};

export const socialPreviewImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663941084778/prjHFPytLXilmERV.webp";

export const defaultMeta: RouteMeta = {
  title: "Splash Kids Waterpark | Family Fun in eMondlo",
  description:
    "Plan a family day at Splash Kids Waterpark in eMondlo, KwaZulu-Natal. Explore attractions, check visit details and contact the park team.",
  keywords: ["Splash Kids Waterpark", "eMondlo", "family day out", "KwaZulu-Natal"],
};

export const routeMeta: Record<string, RouteMeta> = {
  "/": defaultMeta,
  "/about": {
    title: "About Splash Kids Waterpark | eMondlo",
    description: "Meet Splash Kids Waterpark in eMondlo and discover the family outings, outdoor play and waterpark experiences on offer.",
    keywords: ["about Splash Kids", "eMondlo waterpark", "family outings", "KwaZulu-Natal"],
  },
  "/attractions": {
    title: "Waterpark Attractions & Activities | Splash Kids",
    description: "Explore Splash Kids Waterpark's pools, slides, trampolines, jumping castles, jungle gyms, gardens and family areas in eMondlo.",
    keywords: ["waterpark attractions", "pools and slides", "kids activities", "eMondlo"],
  },
  "/visit": {
    title: "Plan Your Visit to Splash Kids Waterpark",
    description: "Find the eMondlo address, directions and clearly labeled planning notes for hours, entry, bookings, parking and amenities.",
    keywords: ["plan a visit", "Splash Kids directions", "eMondlo", "visitor information"],
  },
  "/prices": {
    title: "Entrance Fees & Packages | Splash Kids Waterpark",
    description: "View nonbinding budget ranges for Splash Kids Waterpark admission, families, groups, celebrations and lapa bookings.",
    keywords: ["waterpark prices", "entrance fees", "family packages", "Splash Kids"],
  },
  "/parties": {
    title: "Birthday Parties & Group Visits | Splash Kids",
    description: "Ask Splash Kids Waterpark about birthday parties, family celebrations, school outings and group visits in eMondlo.",
    keywords: ["kids birthday party", "school outings", "group visits", "eMondlo"],
  },
  "/safety": {
    title: "Visitor Safety & Parent Information | Splash Kids",
    description: "Read conservative family safety guidance for Splash Kids Waterpark. Numeric attraction limits are not guessed; follow current signs and staff.",
    keywords: ["waterpark safety", "parent information", "visitor rules", "Splash Kids"],
  },
  "/facilities": {
    title: "Facilities & Amenities | Splash Kids Waterpark",
    description: "Explore Splash Kids Waterpark's listed pools, play areas, gardens, picnic and braai spaces, lapas and conservative amenity guidance.",
    keywords: ["waterpark facilities", "picnic and braai", "lapas", "eMondlo"],
  },
  "/gallery": {
    title: "Activity Photo Gallery | Splash Kids Waterpark",
    description: "Explore activity photos of pools, slides, play areas, gardens, picnic spaces and lapas.",
    keywords: ["Splash Kids photos", "waterpark gallery", "eMondlo", "family activities"],
  },
  "/faqs": {
    title: "Splash Kids Waterpark FAQs | Visitor Questions",
    description: "Get answers about Splash Kids Waterpark location, opening hours, prices, food, parking, groups, weather and visitor safety.",
    keywords: ["waterpark FAQs", "visitor questions", "Splash Kids", "eMondlo"],
  },
  "/contact": {
    title: "Contact Splash Kids Waterpark | eMondlo",
    description: "Contact Splash Kids Waterpark by phone, WhatsApp or email, find the eMondlo address and prepare a visit enquiry.",
    keywords: ["contact Splash Kids", "WhatsApp enquiry", "eMondlo address", "waterpark"],
  },
  "/terms": {
    title: "Terms & Conditions | Splash Kids Waterpark",
    description: "Read draft visitor and booking terms for Splash Kids Waterpark, with nonbinding planning notes and consumer-rights cautions.",
    keywords: ["waterpark terms", "booking conditions", "visitor safety", "Splash Kids"],
  },
  "/privacy": {
    title: "Privacy Policy | Splash Kids Waterpark",
    description: "Learn how the Splash Kids Waterpark website handles contact details and visitor-controlled WhatsApp enquiries under its draft privacy notice.",
    keywords: ["privacy policy", "POPIA", "WhatsApp enquiries", "Splash Kids"],
  },
};
