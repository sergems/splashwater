export const park = {
  name: "Splash Kids Waterpark",
  shortName: "Splash Kids",
  address: "Block C, eMondlo/Vryheid Road, eMondlo, 3105, KwaZulu-Natal, South Africa",
  phoneDisplay: "+27 64 820 0293",
  phoneHref: "tel:+27648200293",
  whatsappHref: "https://wa.me/27648200293",
  email: "info@splashKidsWaterpark.co.za",
  emailHref: "mailto:info@splashKidsWaterpark.co.za",
  facebookUrl: "https://www.facebook.com/people/Splash-Kids-Waterpark/61595927306788/",
  hours: "Weekends & school/public holidays, 09:00–17:00",
  hoursNote: "Weekday opening is treated as by arrangement in this planning note.",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Block+C%2C+eMondlo%2FVryheid+Road%2C+eMondlo%2C+3105%2C+KwaZulu-Natal%2C+South+Africa",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Block%20C%2C%20eMondlo%2FVryheid%20Road%2C%20eMondlo%2C%203105%2C%20KwaZulu-Natal%2C%20South%20Africa&output=embed",
} as const;

export const listedAttractions = [
  {
    name: "Swimming pools",
    description: "Take a break from the heat and enjoy time in the water with your family.",
    icon: "waves",
    photo: {
      src: "/images/activities/swimming-pools.webp",
      alt: "An empty outdoor swimming pool with clear blue water, surrounded by stone paving, lounge chairs, blue umbrellas, flowers and trees.",
      width: 1400,
      height: 933,
    },
    restriction: "Safety note: keep non-swimmers within arm’s reach of a responsible adult. Pool depths and numeric age limits are not confirmed.",
  },
  {
    name: "Water slides",
    description: "Add a little speed and a big splash to your day at the park.",
    icon: "slide",
    photo: {
      src: "/images/activities/water-slides.webp",
      alt: "Colorful water slides rise above bright blue pools at a water park under a clear sky.",
      width: 1400,
      height: 931,
    },
    restriction: "Safety note: height, age or health limits may apply. Follow posted signs and staff instructions; no numeric cut-off is guessed.",
  },
  {
    name: "Trampolines",
    description: "A place for active play and high-energy fun.",
    icon: "activity",
    photo: {
      src: "/images/activities/trampolines.webp",
      alt: "A red-and-blue round trampoline with a black safety enclosure net in a grassy backyard, with trees and a house behind it.",
      width: 1400,
      height: 931,
    },
    restriction: "Safety note: use with close adult supervision, one jumper at a time, and stop if the enclosure or equipment appears damaged.",
  },
  {
    name: "Jumping castles",
    description: "Enjoy bouncing play as part of a family day out.",
    icon: "castle",
    photo: {
      src: "/images/activities/jumping-castles.webp",
      alt: "Children climbing inside a large yellow inflatable bounce castle outdoors.",
      width: 1400,
      height: 965,
    },
    restriction: "Safety note: remove shoes and supervise children nearby. Capacity and age limits are not confirmed; follow any posted instructions.",
  },
  {
    name: "Jungle gyms",
    description: "Outdoor climbing and play for children to explore.",
    icon: "climb",
    photo: {
      src: "/images/activities/jungle-gyms.webp",
      alt: "An empty rope-net climbing structure in an outdoor playground.",
      width: 1400,
      height: 933,
    },
    restriction: "Safety note: use age-appropriate equipment with an adult close by; no age, height or capacity number is guessed.",
  },
  {
    name: "Children’s play area",
    description: "A children’s play space is included in the activity list.",
    icon: "child",
    photo: {
      src: "/images/activities/childrens-play-area.webp",
      alt: "An outdoor playground with a blue slide, play structure and swings, surrounded by trees on an autumn day.",
      width: 1400,
      height: 933,
    },
    restriction: "Planning note: expect a family play area with adult supervision; the specific equipment and suitable ages may vary.",
  },
  {
    name: "Gardens",
    description: "Open-air green space to enjoy during a family visit.",
    icon: "garden",
    photo: {
      src: "/images/activities/gardens.webp",
      alt: "A landscaped park garden with a broad green lawn, trees, flower beds and paved paths.",
      width: 1400,
      height: 933,
    },
    restriction: "Planning note: garden areas are part of a regular visit; private event use is not included in the visit budget.",
  },
  {
    name: "Picnic & braai areas",
    description: "Bring your own food and make time to sit down together.",
    icon: "food",
    photo: {
      src: "/images/activities/picnic-braai.webp",
      alt: "An empty wooden picnic table beneath a large tree on a grassy lawn, with a kettle braai nearby.",
      width: 1400,
      height: 932,
    },
    restriction: "The park information allows visitors to bring food and coolerboxes at no extra charge. Safety note: use only designated braai spaces and follow staff fire-safety instructions.",
  },
  {
    name: "Lapas & benches",
    description: "Benches are listed; lapas can be requested in advance.",
    icon: "shade",
    photo: {
      src: "/images/activities/lapas-benches.webp",
      alt: "An open-sided timber shelter with long built-in wooden seating, surrounded by leafy greenery.",
      width: 1400,
      height: 933,
    },
    restriction: "Planning note: request a lapa 3–7 days ahead and budget R150–R600 per booking. Capacity and exact inclusions are not confirmed.",
  },
] as const;

export const listedFacilities = [
  "Swimming pools and water slides",
  "Trampolines and jumping castles",
  "Jungle gyms and a children’s play area",
  "Gardens and outdoor areas",
  "Picnic and braai areas",
  "Benches",
  "Lapas listed for advance booking; budget range R150–R600 per booking",
] as const;

export const facilityPlanningNotes = [
  "Parking: budget R0–R50 per vehicle; spaces may be limited.",
  "Toilets, showers and changing rooms: plan to bring towels and spare clothes; do not rely on showers or changing facilities.",
  "Lockers and secure storage: no locker access is included in this planning information; keep valuables with you.",
  "On-site food sales: no purchase is included in the budget. Bring meals and snacks; coolerboxes are welcome at no extra charge according to the park information.",
  "Shade and parent seating: assume limited shaded seating and bring hats or sun protection.",
  "First aid and accessibility: do not rely on a dedicated first-aid service or step-free amenities; contact the team to plan around individual needs.",
] as const;

export const visitorPlanningNotes = [
  "Opening schedule — note: likely weekends and school/public holidays, 09:00–17:00; weekday opening is treated as by arrangement.",
  "Admission — rates: children R70–R120 (assuming ages 2–12), adults R80–R150, and under 2s R0–R50 per visit.",
  "Payment — planning assumption: tickets are paid in person; carry cash and a bank card because the accepted methods are not included in the payment information.",
  "Walk-ins and capacity — note: individual walk-ins may be available on open days; busy dates can fill up, so request groups and lapas 3–7 days ahead.",
  "Parking — budget range R0–R50 per vehicle; allow for limited spaces and use the address as an approximate location.",
  "Food — park information allows visitors to bring meals, snacks and coolerboxes at no extra charge; plan as if no food outlet is available.",
  "Swimwear — planning note: bring standard swimwear, towels, sandals and a change of clothes; slide-specific attire may differ.",
  "Showers, changing rooms and lockers — conservative note: do not rely on these being available; pack what your family needs for changing and valuables.",
  "Weather and ticket changes — outdoor activities may pause or close in severe weather. Budget conservatively as if tickets are not refundable unless written terms say otherwise; statutory consumer rights still apply.",
] as const;

export const priceCategories = [
  {
    category: "Child admission",
    price: "R70–R120 per child / visit",
    details: "Budgeting assumption: ages 2–12. The age band is a planning reference, not a Splash Kids ticket rule.",
  },
  {
    category: "Adult admission",
    price: "R80–R150 per adult / visit",
    details: "Planning range for a full family day; the final rate and activities included may differ.",
  },
  {
    category: "Toddler or age-based admission",
    price: "R0–R50 under age 2; R70–R120 ages 2–12",
    details: "Age categories are budgeting assumptions only. No attraction age or height restriction is confirmed.",
  },
  {
    category: "Family of four",
    price: "R300–R540 for 2 adults + 2 children",
    details: "Calculated from the indicative per-person rates; no family discount is assumed.",
  },
  {
    category: "School and organised group visits",
    price: "R70–R120 per child; R80–R150 per adult",
    details: "No group discount is assumed. Request group arrangements 3–7 days ahead; transport and catering are not included.",
  },
  {
    category: "Birthday and celebration visits",
    price: "R70–R120 per child for entry, plus a lapa rate of R150–R600",
    details: "Working budget only; catering, cake, décor and exclusive-use options are not included.",
  },
  {
    category: "Seasonal or promotional offers",
    price: "0% discount assumed",
    details: "Budget at standard indicative admission; no promotion or group concession is assumed.",
  },
  {
    category: "Additional activities or bookable facilities",
    price: "Lapa booking R150–R600; other add-ons not budgeted",
    details: "The lapa range is a broad working allowance, not an observed Splash Kids fee. Do not assume other extras are included or free.",
  },
] as const;

export const partyTypes = [
  "Children’s birthday parties",
  "Family celebrations",
  "School outings",
  "Church and community groups",
  "Organised group visits",
] as const;

export const faqs = [
  {
    question: "Where is Splash Kids Waterpark?",
    answer: "The address is Block C, eMondlo/Vryheid Road, eMondlo, 3105, KwaZulu-Natal, South Africa. The map is an address search rather than a surveyed entrance pin, so allow time to locate the gate.",
  },
  {
    question: "What are the opening hours?",
    answer: "Planning note: likely weekends and school/public holidays, around 09:00–17:00; weekday opening is treated as by arrangement. Contact the team for the day's schedule before setting off.",
  },
  {
    question: "How much is entrance?",
    answer: "Rate guide: R70–R120 per child, R80–R150 per adult and R0–R50 for a child under 2. These are comparison-based planning ranges, not Splash Kids prices or a booking quote.",
  },
  {
    question: "What ages can visit?",
    answer: "Splash Kids is described as a family and children’s park. For budgeting only, the child-ticket reference uses ages 2–12 and the toddler reference uses under 2. Numeric attraction age, height or health limits are not guessed; follow signs and staff guidance.",
  },
  {
    question: "Do adults pay?",
    answer: "Yes, include adults in the budget: the listed rate is R80–R150 per adult. A family-of-four total is R300–R540 for two adults and two children, with no discount assumed.",
  },
  {
    question: "Can parents accompany children?",
    answer: "Parents and guardians should supervise children throughout the visit. Planning assumption: keep a responsible adult with each family group and within arm’s reach of children who cannot swim; no park-specific supervision ratio is confirmed.",
  },
  {
    question: "Are swimming costumes compulsory?",
    answer: "Planning note: bring standard swimwear, towels, sandals and spare clothes. Follow any pool or slide signs; exact attire rules are not guessed.",
  },
  {
    question: "Can visitors bring food?",
    answer: "Yes. Visitors may bring their own food and snacks, and coolerboxes are welcome at no extra charge. Follow the park’s fire-safety and braai instructions.",
  },
  {
    question: "Is food available on site?",
    answer: "Planning assumption: do not rely on an on-site food or drink outlet. Bring the meals and snacks your family needs; the park information allows outside food and coolerboxes at no extra charge.",
  },
  {
    question: "Can visitors bring birthday cakes?",
    answer: "Planning assumption: bring a cake if needed and request a celebration 3–7 days ahead. No catering, décor or cake service is included in the budget guide.",
  },
  {
    question: "Is advance booking needed?",
    answer: "Planning note: individual visits may be walk-ins on open days, subject to capacity. Request a lapa or organised group 3–7 days ahead; an enquiry does not reserve a date.",
  },
  {
    question: "Is parking available?",
    answer: "Budget R0–R50 per vehicle as a parking guide. Spaces may be limited; the address search is an approximate location rather than a gate pin.",
  },
  {
    question: "What happens if it rains?",
    answer: "Outdoor activities may pause or close during heavy rain, lightning or unsafe conditions. For budgeting, assume no refund unless written ticket terms state otherwise; statutory consumer rights still apply.",
  },
  {
    question: "Are toddler facilities available?",
    answer: "A separate toddler splash zone is not included in the planning note. Use only the listed activities that signs and staff indicate are suitable for your child, with close adult supervision.",
  },
  {
    question: "Can schools and groups book?",
    answer: "Group enquiries are welcome. Planning note: R70–R120 per child and R80–R150 per adult, with no group discount assumed; request a date 3–7 days ahead. An enquiry is not a confirmed booking.",
  },
  {
    question: "Who should visitors contact in an emergency?",
    answer: "Alert the nearest staff member. Do not assume a dedicated first-aid station or designated meeting point; for immediate danger, contact local emergency services.",
  },
] as const;

export const safetyPlanningNotes = [
  "Water supervision — plan for a responsible adult to remain within arm’s reach of any child who cannot swim; no lifeguard coverage is assumed.",
  "Attraction limits — numeric age, height, weight, depth and capacity limits are not confirmed. Follow current signs and staff instructions; do not use equipment if a rule is unclear.",
  "Swimming ability and attire — treat a non-swimmer as needing close adult supervision; bring standard swimwear and follow posted pool attire instructions.",
  "Play equipment — conservative note: close adult supervision, one jumper at a time on a trampoline, and shoes off on an inflatable castle; use equipment only when staff indicate it is open.",
  "First aid and incidents — do not rely on an on-site medical professional being present. Carry essential medication, alert staff to hazards, and contact emergency services for immediate danger.",
  "Lost children — choose a family meeting point when you arrive; no designated park meeting point is assumed.",
  "Weather — expect outdoor activities to pause or close during lightning or severe weather. Budget as if a closure does not automatically create a refund, while retaining all applicable consumer rights.",
  "Medical and accessibility needs — plan for no dedicated accessibility or medical support unless the park says otherwise; contact the team before visiting and bring any essential supplies.",
  "Food, braai and restricted items — bring food and coolerboxes as park information allows; use only designated braai spaces and follow staff fire-safety instructions. No glass, alcohol or smoking policy is guided.",
  "Hygiene and damaged equipment — use facilities only as directed, avoid rough play on wet surfaces, and stop using equipment that appears damaged; notify staff.",
] as const;
