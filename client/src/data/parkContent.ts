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
  hours: "To be confirmed",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Block+C%2C+eMondlo%2FVryheid+Road%2C+eMondlo%2C+3105%2C+KwaZulu-Natal%2C+South+Africa",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Block%20C%2C%20eMondlo%2FVryheid%20Road%2C%20eMondlo%2C%203105%2C%20KwaZulu-Natal%2C%20South%20Africa&output=embed",
} as const;

export const confirmedAttractions = [
  {
    name: "Swimming pools",
    description: "Take a break from the heat and enjoy time in the water with your family.",
    icon: "waves",
    photo: {
      src: "/manus-storage/swimming-pools_98b388fe.webp",
      alt: "An empty outdoor swimming pool with clear blue water, surrounded by stone paving, lounge chairs, blue umbrellas, flowers and trees.",
      credit: "Photo by Point3D Commercial Imaging Ltd. via Unsplash",
      sourceUrl: "https://unsplash.com/photos/41RtGos7y4g",
      width: 1400,
      height: 933,
    },
    restriction: "Pool depths, water conditions, operating times and age rules: to be confirmed.",
  },
  {
    name: "Water slides",
    description: "Add a little speed and a big splash to your day at the park.",
    icon: "slide",
    photo: {
      src: "/manus-storage/water-slides_769b857d.webp",
      alt: "Colorful water slides rise above bright blue pools at a water park under a clear sky.",
      credit: "Photo by LEILA HAOUAM via Unsplash",
      sourceUrl: "https://unsplash.com/photos/a-vibrant-water-park-with-colorful-slides-and-swimming-pools-Gq9Fq1qD8J8",
      width: 1400,
      height: 931,
    },
    restriction: "Slide availability and any age, height or health limits: to be confirmed.",
  },
  {
    name: "Trampolines",
    description: "A place for active play and high-energy fun.",
    icon: "activity",
    photo: {
      src: "/manus-storage/trampolines_a76ed03d.webp",
      alt: "A red-and-blue round trampoline with a black safety enclosure net in a grassy backyard, with trees and a house behind it.",
      credit: "Photo by Shay via Unsplash",
      sourceUrl: "https://unsplash.com/photos/red-and-blue-trampoline-with-net-4ZwklCsGWSg",
      width: 1400,
      height: 931,
    },
    restriction: "Age, capacity and supervision rules: to be confirmed.",
  },
  {
    name: "Jumping castles",
    description: "Enjoy bouncing play as part of a family day out.",
    icon: "castle",
    photo: {
      src: "/manus-storage/jumping-castles_73214163.webp",
      alt: "Children climbing inside a large yellow inflatable bounce castle outdoors.",
      credit: "Photo by Lukas Blazek via Pexels",
      sourceUrl: "https://www.pexels.com/photo/children-playing-on-inflatable-castle-296308/",
      width: 1400,
      height: 965,
    },
    restriction: "Operating times, age and capacity rules: to be confirmed.",
  },
  {
    name: "Jungle gyms",
    description: "Outdoor climbing and play for children to explore.",
    icon: "climb",
    photo: {
      src: "/manus-storage/jungle-gyms_fc780c6b.webp",
      alt: "An empty rope-net climbing structure in an outdoor playground.",
      credit: "Photo by Tracy Elford via Pexels",
      sourceUrl: "https://www.pexels.com/photo/ropes-in-the-playground-12586012/",
      width: 1400,
      height: 933,
    },
    restriction: "Age guidance, safe use and supervision rules: to be confirmed.",
  },
  {
    name: "Children’s play area",
    description: "A dedicated play space is included in the park’s supplied activity list.",
    icon: "child",
    photo: {
      src: "/manus-storage/childrens-play-area_c7569bfb.webp",
      alt: "An outdoor playground with a blue slide, play structure and swings, surrounded by trees on an autumn day.",
      credit: "Photo by Jason Kim via Pexels",
      sourceUrl: "https://www.pexels.com/photo/playground-at-the-park-near-the-trees-5785548/",
      width: 1400,
      height: 933,
    },
    restriction: "Age range and available equipment: to be confirmed.",
  },
  {
    name: "Gardens",
    description: "Open-air green space to enjoy during a family visit.",
    icon: "garden",
    photo: {
      src: "/manus-storage/gardens_9de6516c.webp",
      alt: "A landscaped park garden with a broad green lawn, trees, flower beds and paved paths.",
      credit: "Photo by Jeffrey Eisen via Unsplash",
      sourceUrl: "https://unsplash.com/photos/a-park-filled-with-lots-of-trees-and-flowers-N0EJlxbhyeI",
      width: 1400,
      height: 933,
    },
    restriction: "Garden access and any event arrangements: to be confirmed.",
  },
  {
    name: "Picnic & braai areas",
    description: "Bring your own food and make time to sit down together.",
    icon: "food",
    photo: {
      src: "/manus-storage/picnic-braai_081506a4.webp",
      alt: "An empty wooden picnic table beneath a large tree on a grassy lawn, with a kettle braai nearby.",
      credit: "Photo by Adrien Olichon via Unsplash",
      sourceUrl: "https://unsplash.com/photos/outdoor-picnic-table-set-up-under-a-large-tree-JpCap4FH2yQ",
      width: 1400,
      height: 932,
    },
    restriction: "Braai rules, permitted equipment and fire-safety instructions apply; confirm them with management.",
  },
  {
    name: "Lapas & benches",
    description: "Benches are available; lapas can be requested in advance.",
    icon: "shade",
    photo: {
      src: "/manus-storage/lapas-benches_b3ddf23c.webp",
      alt: "An open-sided timber shelter with long built-in wooden seating, surrounded by leafy greenery.",
      credit: "Photo by Nothing Ahead (Ian Panelo) via Pexels",
      sourceUrl: "https://www.pexels.com/photo/bench-under-thatched-roof-in-tropical-forest-20737295/",
      width: 1400,
      height: 933,
    },
    restriction: "Lapa availability, capacity, fees and booking arrangements: to be confirmed.",
  },
] as const;

export const confirmedFacilities = [
  "Swimming pools and water slides",
  "Trampolines and jumping castles",
  "Jungle gyms and a children’s play area",
  "Gardens and outdoor areas",
  "Picnic and braai areas",
  "Benches",
  "Lapas available by advance booking, subject to confirmation",
] as const;

export const amenitiesToConfirm = [
  "Parking and any parking fees",
  "Toilets, ablutions, showers and changing rooms",
  "Lockers or secure storage",
  "Food or beverage sales on site",
  "Shaded seating and parent rest areas",
  "First-aid arrangements and accessibility features",
] as const;

export const visitorDetailsToConfirm = [
  "Opening days, daily hours and public-holiday hours",
  "Entrance fees, age categories and attraction-specific charges",
  "Accepted payment methods and booking requirements",
  "Walk-in admissions, capacity limits, peak-season and weekend arrangements",
  "Parking availability and charges",
  "Food and drink sold on site, and any dietary information",
  "Swimwear, footwear and what visitors should bring",
  "Lockers, changing rooms, showers and ablutions",
  "Weather-related closures, ticket validity, refunds and rescheduling",
] as const;

export const priceCategories = [
  "Child admission",
  "Adult admission",
  "Toddler or age-based admission",
  "Family packages",
  "School and organised group visits",
  "Birthday and celebration packages",
  "Seasonal or promotional offers",
  "Additional activities or bookable facilities",
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
    answer: "The supplied address is Block C, eMondlo/Vryheid Road, eMondlo, 3105, KwaZulu-Natal, South Africa. The exact entrance pin still needs confirmation.",
  },
  {
    question: "What are the opening hours?",
    answer: "Opening days, daily hours and public-holiday hours are to be confirmed. Please call the team before travelling.",
  },
  {
    question: "How much is entrance?",
    answer: "Current prices and ticket categories are to be confirmed by management. Contact the team for the latest rates.",
  },
  {
    question: "What ages can visit?",
    answer: "The park is described for families and children, but age suitability and attraction-specific restrictions have not been confirmed. Please ask management about the activities your child plans to use.",
  },
  {
    question: "Do adults pay?",
    answer: "Adult admission prices and any accompanying-adult arrangements are to be confirmed. Please contact the team before your visit.",
  },
  {
    question: "Can parents accompany children?",
    answer: "Parents and guardians should supervise children at all times. Admission arrangements, access to attractions and any adult fees must be confirmed with management.",
  },
  {
    question: "Are swimming costumes compulsory?",
    answer: "Pool attire and footwear requirements are to be confirmed. Please ask management before travelling.",
  },
  {
    question: "Can visitors bring food?",
    answer: "Yes. Visitors may bring their own food and snacks, and coolerboxes are welcome at no extra charge. Follow the park’s food-safety and braai instructions.",
  },
  {
    question: "Is food available on site?",
    answer: "On-site food and beverage availability has not been confirmed. Bring food if you wish, and ask management about current options.",
  },
  {
    question: "Can visitors bring birthday cakes?",
    answer: "Cake, catering and party arrangements should be confirmed with management when enquiring about a celebration.",
  },
  {
    question: "Is advance booking needed?",
    answer: "Advance booking is recommended for lapas and organised groups. General walk-in arrangements and availability are to be confirmed.",
  },
  {
    question: "Is parking available?",
    answer: "Parking availability, location and any charges are to be confirmed. Please ask management before setting off.",
  },
  {
    question: "What happens if it rains?",
    answer: "Weather-related closures, ticket validity, refund and rescheduling arrangements have not been confirmed. Contact management for the current policy.",
  },
  {
    question: "Are toddler facilities available?",
    answer: "A separate toddler area or specific toddler facilities have not been confirmed. Ask management about age suitability and supervision before visiting.",
  },
  {
    question: "Can schools and groups book?",
    answer: "Schools, community groups and organised visitors can send an enquiry. Dates, group sizes, packages and availability must be confirmed by management.",
  },
  {
    question: "Who should visitors contact in an emergency?",
    answer: "Park-specific emergency contacts, first-aid coverage and lost-child procedures have not been supplied. Follow posted instructions and alert the nearest park staff member; call local emergency services if there is immediate danger.",
  },
] as const;

export const safetyTopicsToConfirm = [
  "Lifeguard presence, coverage and water-supervision arrangements",
  "Attraction age, height, weight, health and capacity restrictions",
  "Swimming-ability guidance, swimwear and footwear requirements",
  "First-aid provision, emergency response and incident-reporting steps",
  "Lost-child procedure and designated meeting point",
  "Weather and thunderstorm closures, reopening and refund handling",
  "Pool hygiene requirements and appropriate use of swimming facilities",
  "Whether diving or particular forms of jumping and water entry are permitted",
  "Medical needs, accessibility support and additional supervision",
  "Food, braai, glass, alcohol, smoking and prohibited-item rules",
  "Equipment checks, restricted zones and staff instructions",
] as const;
