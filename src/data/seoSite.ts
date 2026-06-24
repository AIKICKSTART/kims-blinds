import { suburbs80km, suburbRadiusStats, type SuburbRecord } from "./suburbs80km";

export { suburbs80km, suburbRadiusStats };
export type { SuburbRecord };

export type ServiceRecord = { slug: string; name: string; shortName: string; plural: string; primaryKeyword: string; secondaryKeywords: string[]; summary: string; technicalProof: string; localAngle: string; idealFor: string[]; costNote: string; };
export type ArticleBlock = { title: string; paragraphs: string[]; bullets?: string[]; };
export type ArticleFaq = { question: string; answer: string; };
export type BlogPostRecord = { slug: string; title: string; category: string; intent: "commercial" | "informational" | "transactional"; summary: string; metaDescription?: string; datePublished?: string; targetKeywords: string[]; sections: string[]; productSummary?: string[]; articleBlocks?: ArticleBlock[]; keyQuestions?: ArticleFaq[]; relatedServiceSlugs?: string[]; howTo?: { name: string; steps: string[] }; };
export type FaqItem = { category: string; question: string; answer: string; };
export type SuburbContent = { localContext: string; localProjects: string; productFocus: string; quotePrep: string; faq: ArticleFaq[]; };

export const CONTENT_DATE = "2026-06-24";
export function metaDesc(text: string): string { const clean = text.trim().replace(/\s+/g, " "); if (clean.length <= 160) return clean; const slice = clean.slice(0, 160); const lastSpace = slice.lastIndexOf(" "); return (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).replace(/[\s,;:.]+$/, ""); }

export const business = {
  name: "Kim's Blinds",
  owner: "Kim's Blinds team",
  phone: "02 4256 1297",
  phoneHref: "tel:0242561297",
  phoneE164: "+61242561297",
  email: "info@kimsblinds.com.au",
  address: "Unit 5, 147 Industrial Rd, Oak Flats NSW 2529",
  streetAddress: "Unit 5, 147 Industrial Rd",
  addressLocality: "Oak Flats",
  addressRegion: "NSW",
  postalCode: "2529",
  addressCountry: "AU",
  geo: { lat: -34.564, lon: 150.818 },
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "16:30" },
    { days: ["Friday"], opens: "09:00", closes: "15:30" },
  ],
  priceRange: "$$",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Unit%205%20147%20Industrial%20Rd%20Oak%20Flats%20NSW%202529",
  serviceBase: "Oak Flats, NSW",
  trustMarker: "Free measure and quote",
  qualityMarker: "100% quality assurance",
  productMarker: "Locally made products",
  ownershipMarker: "Family owned and operated",
  baseUrl: "https://kimsblinds.com.au",
  sameAs: [
    "https://www.facebook.com/p/Kims-Blinds-61576949375188/",
    "https://reviews.birdeye.com/kims-blinds-170038323965589",
    "https://www.localsearch.com.au/profile/kim-s-blinds/oak-flats-nsw/hrYg",
  ],
};

export const indexableSuburbSlugs = [
  "oak-flats",
  "albion-park",
  "calderwood",
  "dapto",
  "kiama",
  "lake-illawarra",
  "picton",
  "shell-cove",
  "shellharbour",
  "thirroul",
  "warilla",
  "wilton",
  "wollongong",
  "cronulla",
  "caringbah",
  "miranda",
  "sutherland",
  "engadine",
] as const;

export const indexableSuburbSlugSet = new Set<string>(indexableSuburbSlugs);
export const indexableSuburbs = suburbs80km.filter((suburb) => indexableSuburbSlugSet.has(suburb.slug));
export function isIndexableSuburb(slug: string): boolean { return indexableSuburbSlugSet.has(slug); }

export const services: ServiceRecord[] = [
  {
    slug: "blinds",
    name: "Blinds",
    shortName: "Blinds",
    plural: "custom blinds",
    primaryKeyword: "blinds Wollongong",
    secondaryKeywords: ["roller blinds","holland blinds","venetian blinds","vision blinds"],
    summary: "Measured blinds including roller, Holland, Venetian, timber Venetian, vertical and vision options for Wollongong region homes.",
    technicalProof: "Fabric, opacity, control side, opening size and room use are confirmed during the measure.",
    localAngle: "Works for bedrooms, living rooms, apartments and investment properties that need privacy and light control.",
    idealFor: ["bedrooms","living rooms","sliding doors","apartments"],
    costNote: "Pricing depends on fabric, opening size, operating method and how many rooms are quoted together.",
  },
  {
    slug: "roller-blinds",
    name: "Roller Blinds",
    shortName: "Roller blinds",
    plural: "roller blinds",
    primaryKeyword: "roller blinds Wollongong",
    secondaryKeywords: ["blockout roller blinds","sunscreen roller blinds","dual roller blinds"],
    summary: "Clean roller blinds for privacy, glare control and everyday light management.",
    technicalProof: "Opacity, brackets, roll direction and controls are checked before quoting.",
    localAngle: "Popular across Oak Flats, Shellharbour, Wollongong and Kiama homes.",
    idealFor: ["bedrooms","living areas","home offices","apartments"],
    costNote: "Costs vary by fabric, width, drop and control method.",
  },
  {
    slug: "venetian-blinds",
    name: "Venetian Blinds",
    shortName: "Venetian blinds",
    plural: "venetian blinds",
    primaryKeyword: "venetian blinds Wollongong",
    secondaryKeywords: ["timber venetian blinds","aluminium venetian blinds"],
    summary: "Venetian blinds for adjustable privacy, ventilation and light control.",
    technicalProof: "Blade material, tilt control, cord safety and moisture exposure are checked.",
    localAngle: "Useful for kitchens, studies and street-facing rooms.",
    idealFor: ["kitchens","studies","street-facing windows","rental updates"],
    costNote: "Pricing depends on material, size and controls.",
  },
  {
    slug: "vertical-blinds",
    name: "Vertical Blinds",
    shortName: "Vertical blinds",
    plural: "vertical blinds",
    primaryKeyword: "vertical blinds Wollongong",
    secondaryKeywords: ["sliding door vertical blinds","fabric vertical blinds"],
    summary: "Vertical blinds for wide windows and sliding doors where practical privacy and access matter.",
    technicalProof: "Track width, stack side and fabric are confirmed during the measure.",
    localAngle: "A practical choice for family rooms and rental properties.",
    idealFor: ["sliding doors","wide windows","rentals","family rooms"],
    costNote: "Costs depend on track length, drop and fabric.",
  },
  {
    slug: "vision-blinds",
    name: "Vision Blinds",
    shortName: "Vision blinds",
    plural: "vision blinds",
    primaryKeyword: "vision blinds Wollongong",
    secondaryKeywords: ["day night blinds","zebra blinds"],
    summary: "Vision blinds use alternating sheer and opaque bands for flexible privacy and filtered light.",
    technicalProof: "Band alignment, mounting and control side are confirmed during the measure.",
    localAngle: "Good for living rooms and bedrooms where privacy changes through the day.",
    idealFor: ["living rooms","bedrooms","street-facing windows"],
    costNote: "Pricing depends on fabric, cassette options and opening size.",
  },
  {
    slug: "awnings",
    name: "Awnings",
    shortName: "Awnings",
    plural: "awnings",
    primaryKeyword: "awnings Wollongong",
    secondaryKeywords: ["aluminium awnings","canvas awnings","folding arm awnings","retractable awnings"],
    summary: "Awnings for shade, heat control and outdoor comfort around windows, patios and alfresco areas.",
    technicalProof: "Sun path, wind exposure, projection, fixing surface and operation are confirmed.",
    localAngle: "Ideal for exposed Illawarra windows and outdoor areas.",
    idealFor: ["western windows","patios","alfresco areas","shopfronts"],
    costNote: "Pricing depends on width, projection, material, fixing and operation.",
  },
  {
    slug: "outdoor-blinds",
    name: "Outdoor Blinds & Retractable Awnings",
    shortName: "Outdoor blinds",
    plural: "outdoor blinds and retractable awnings",
    primaryKeyword: "outdoor blinds Wollongong",
    secondaryKeywords: ["retractable awnings","folding arm awnings","alfresco blinds"],
    summary: "Outdoor blinds and retractable awnings for patios, balconies and alfresco spaces.",
    technicalProof: "Guide type, width, drop, fabric, controls and exposure are confirmed before quoting.",
    localAngle: "Useful for coastal entertaining areas, sunny patios and privacy.",
    idealFor: ["alfresco spaces","balconies","patios","pool areas"],
    costNote: "Costs depend on guide system, fabric, controls and exposure.",
  },
  {
    slug: "plantation-shutters",
    name: "Plantation Shutters",
    shortName: "Plantation shutters",
    plural: "plantation shutters",
    primaryKeyword: "plantation shutters Wollongong",
    secondaryKeywords: ["white plantation shutters","bathroom shutters"],
    summary: "Plantation shutters for privacy, insulation and a built-in finish across windows and doors.",
    technicalProof: "Panel layout, blade size, mount type and moisture exposure are checked.",
    localAngle: "Suited to bedrooms, bathrooms, kitchens and street-facing rooms.",
    idealFor: ["bedrooms","bathrooms","kitchens","bay windows"],
    costNote: "Pricing depends on opening size, panels, blade size and material.",
  },
  {
    slug: "curtains",
    name: "Curtains",
    shortName: "Curtains",
    plural: "curtains",
    primaryKeyword: "curtains Wollongong",
    secondaryKeywords: ["sheer curtains","blockout curtains","drapery tracks"],
    summary: "Curtains and drapery tracks for softness, privacy, insulation and finished interiors.",
    technicalProof: "Heading, fabric weight, lining, track type and floor clearance are measured.",
    localAngle: "Strong for bedrooms, living rooms and large sliding doors.",
    idealFor: ["bedrooms","living rooms","sliding doors","feature windows"],
    costNote: "Costs depend on fabric, lining, heading, track hardware and drop.",
  },
  {
    slug: "panel-glides",
    name: "Panel Glides",
    shortName: "Panel glides",
    plural: "panel glide blinds",
    primaryKeyword: "panel glides Wollongong",
    secondaryKeywords: ["sliding panel blinds","large door blinds"],
    summary: "Panel glides for wide sliding doors and large windows with broad fabric panels.",
    technicalProof: "Track width, panel count, stack side and fabric overlap are checked.",
    localAngle: "Useful for apartments, patios and open-plan rooms.",
    idealFor: ["sliding doors","large windows","apartments"],
    costNote: "Pricing depends on track width, panel count and fabric.",
  },
  {
    slug: "fly-screens",
    name: "Fly Screens",
    shortName: "Fly screens",
    plural: "fly screens",
    primaryKeyword: "fly screens Wollongong",
    secondaryKeywords: ["insect screens","screen doors","fly screen replacement"],
    summary: "Measured fly screens and insect screens for doors and windows.",
    technicalProof: "Fly screen quotes separate insect control from security so the product matches the need.",
    localAngle: "A practical fit for summer airflow, pets, rentals and coastal homes.",
    idealFor: ["windows","sliding doors","rental properties","replacement mesh"],
    costNote: "Fly screens are quoted by opening type, mesh, frame condition and access.",
  },
  {
    slug: "security-doors",
    name: "Security Doors & Windows",
    shortName: "Security doors",
    plural: "security doors and security window screens",
    primaryKeyword: "security doors Wollongong",
    secondaryKeywords: ["security windows","security screen doors","window grilles"],
    summary: "Security doors, security windows, screen doors and window grilles measured for airflow, privacy and practical home protection.",
    technicalProof: "The measure confirms door type, frame condition, lock requirements, mesh or grille preference and daily use.",
    localAngle: "Relevant for front entries, sliding doors, ground-floor windows and homes wanting airflow with a stronger barrier.",
    idealFor: ["front doors","sliding doors","ground-floor windows","laundry doors"],
    costNote: "Pricing depends on opening size, mesh or grille choice, hardware and installation access.",
  },
  {
    slug: "security-screens",
    name: "Security Screens",
    shortName: "Security screens",
    plural: "security screens",
    primaryKeyword: "security screens Wollongong",
    secondaryKeywords: ["security window screens","window grilles","screen doors"],
    summary: "Window security screens and screen doors for rooms where ventilation and a stronger barrier are both needed.",
    technicalProof: "Frame, mesh, fixing method, access and opening operation are confirmed before quoting.",
    localAngle: "Useful for bedrooms, street-facing rooms and windows opened often in warm weather.",
    idealFor: ["bedroom windows","street-facing rooms","upper-storey rooms"],
    costNote: "Pricing depends on screen count, size, access and frame detail.",
  }
];

export const serviceContent: Record<string, ArticleBlock[]> = {
  blinds: [
    {
      title: "Measured blinds for Illawarra rooms",
      paragraphs: [
        "Blinds work best when they are specified for the way a room is actually used. A bedroom may need blockout and privacy, a living room may need glare control without losing daylight, and a rental or office may need a durable finish that is easy to operate every day.",
        "Kim's Blinds measures the opening before recommending roller, Holland, Venetian, timber Venetian, vertical or vision blinds. The practical details matter: the stack position, control side, child-safety requirements, mounting surface, sun direction and whether the room faces the street, the coast or a neighbouring property.",
      ],
      bullets: ["Blockout and sunscreen fabrics for different privacy levels", "Venetian and vision options where adjustable daylight matters", "Vertical and panel-style solutions for wide glass and sliding doors"],
    },
    {
      title: "What separates a good blind quote from a quick price",
      paragraphs: [
        "A quick square-metre price does not tell you whether the blind will clear the handle, line up with nearby openings, suit the moisture level of the room or operate comfortably for the people using it. The free measure and quote exists to remove those unknowns before the order is placed.",
        "For a useful quote request, send the suburb, room type, photos of the full window or door, approximate width and drop, and whether your first priority is privacy, heat reduction, glare control, blockout or a softer decorative finish.",
      ],
    },
  ],
  "roller-blinds": [
    {
      title: "Roller blinds for glare, privacy and blockout",
      paragraphs: [
        "Roller blinds are the cleanest option when you want a simple line, predictable operation and a wide fabric choice. They can be specified as blockout, sunscreen, light-filtering or dual roller systems depending on whether the room needs night privacy, daytime view, heat control or both.",
        "In coastal and lake-facing homes, the fabric choice is often more important than the colour. A room that gets low western sun needs a different recommendation from a shaded bedroom or a home office where screen glare is the problem.",
      ],
      bullets: ["Blockout for bedrooms and media rooms", "Sunscreen fabrics for daytime glare and view-through", "Dual roller systems where day and night privacy both matter"],
    },
    {
      title: "Measure checks for roller blinds",
      paragraphs: [
        "The measure confirms recess depth, bracket clearance, chain or motor position, roll direction, window hardware, child-safety restraints and whether nearby windows should line up visually. These details are hard to confirm from product photos alone.",
        "Kim's Blinds can also compare roller blinds against curtains, vision blinds or shutters during the same quote when the room needs more insulation, softness or adjustable privacy than a single roller blind can provide.",
      ],
    },
  ],
  "venetian-blinds": [
    {
      title: "Venetian blinds where adjustable light is the priority",
      paragraphs: [
        "Venetian blinds suit rooms where you want to tilt light rather than simply open or close the window covering. They are practical for kitchens, studies, street-facing rooms and spaces where airflow and privacy change through the day.",
        "The right material depends on exposure and maintenance. Aluminium, timber-look and timber-style finishes each behave differently around heat, moisture, cleaning and daily handling, so the quote should start with the room, not just the colour sample.",
      ],
      bullets: ["Tilt control for privacy without fully darkening the room", "Useful for narrow windows and work spaces", "Material choice guided by moisture, heat and cleaning needs"],
    },
    {
      title: "Details that affect the finished result",
      paragraphs: [
        "A good Venetian blind quote checks blade width, lift control, tilt control, cord safety, mounting depth and how the blind will sit beside tiles, architraves, handles or splashbacks.",
        "Kim's Blinds can compare Venetian blinds with roller blinds or shutters when a customer wants sharper lines, stronger insulation or a more built-in finish.",
      ],
    },
  ],
  "vertical-blinds": [
    {
      title: "Vertical blinds for sliding doors and wide windows",
      paragraphs: [
        "Vertical blinds remain a practical choice for wide glass, sliding doors and family rooms because they can move with the doorway instead of blocking access. They also let you rotate the blades for privacy while still admitting controlled daylight.",
        "They are often considered for investment properties, townhouses and older homes where an affordable, serviceable product is more important than a decorative statement.",
      ],
      bullets: ["Works with sliding-door traffic", "Blade rotation gives variable privacy", "Track and stack side are planned during measure"],
    },
    {
      title: "Quote details for vertical blinds",
      paragraphs: [
        "The measure needs to confirm track width, drop, stack direction, blade overlap, floor clearance, fabric type and whether the door handle or skirting affects operation.",
        "Kim's Blinds can also compare vertical blinds with panel glides, curtains or roller blinds if the opening is large and the customer wants a softer, more modern or more compact finish.",
      ],
    },
  ],
  "vision-blinds": [
    {
      title: "Vision blinds for flexible day-night privacy",
      paragraphs: [
        "Vision blinds use alternating sheer and opaque bands, giving more control than a standard roller blind without the bulk of curtains. They suit living rooms, bedrooms and street-facing windows where the privacy setting changes between morning, afternoon and evening.",
        "The key is band alignment. A measured quote checks how the fabric bands will sit at the top and bottom of the opening so the blind looks intentional when filtered, private or fully raised.",
      ],
      bullets: ["Layered fabric bands for filtered light", "A clean alternative to some curtain applications", "Useful where privacy changes through the day"],
    },
    {
      title: "When to choose something else",
      paragraphs: [
        "Vision blinds are not the answer for every room. If full darkness is the main goal, a blockout roller blind or curtain treatment may suit better. If insulation and a permanent built-in look matter most, plantation shutters may be worth comparing.",
        "Kim's Blinds can walk through those tradeoffs during the free measure so the selected product matches how the room is used after installation, not just how it looks on a sample board.",
      ],
    },
  ],
  awnings: [
    {
      title: "Awnings for heat, shade and exposed windows",
      paragraphs: [
        "Awnings solve problems that indoor blinds cannot fully fix because they manage sun before it reaches the glass. That matters for west-facing windows, exposed patios, shopfronts and rooms where heat builds up before the air conditioner starts working.",
        "Kim's Blinds considers sun path, wind exposure, fixing surfaces, projection, operation and the way the outdoor area is used. Aluminium, canvas, folding arm and retractable options each suit different openings and levels of exposure.",
      ],
      bullets: ["External shade for heat and glare control", "Canvas and aluminium options for different finishes", "Folding arm and retractable systems for flexible outdoor use"],
    },
    {
      title: "A measured approach to outdoor shade",
      paragraphs: [
        "The quote should confirm the wall or fascia fixing, projection, head height, obstructions, drainage, nearby doors and the level of wind exposure. These checks help avoid a product that looks right in a brochure but struggles in the actual position.",
        "For alfresco areas, Kim's Blinds can compare awnings with outdoor blinds so the customer understands whether the priority is overhead shade, side privacy, wind protection or a more enclosed outdoor room.",
      ],
    },
  ],
  "outdoor-blinds": [
    {
      title: "Outdoor blinds and retractable awnings for alfresco living",
      paragraphs: [
        "Outdoor blinds help make patios, balconies and alfresco spaces more usable by reducing glare, adding privacy and softening wind or weather exposure. Retractable awnings and folding arm awnings can add shade without permanently enclosing the area.",
        "For homes around Shellharbour, Kiama and Wollongong, the quote needs to consider salt air, wind direction, afternoon sun, nearby pools, deck access and whether the space is used for dining, entertaining or everyday family shade.",
      ],
      bullets: ["Side privacy for patios and balconies", "Retractable shade for entertaining areas", "Manual or powered operation depending on span and use"],
    },
    {
      title: "What to decide before quoting outdoor products",
      paragraphs: [
        "Before the measure, decide whether the goal is shade, privacy, wind management, insect control or a cleaner finished look. Those goals point to different fabrics, guide systems and operating methods.",
        "Kim's Blinds can inspect the fixing points and exposure before recommending a system, because outdoor products need to be specified around the building and local conditions rather than chosen from width and drop alone.",
      ],
    },
  ],
  "plantation-shutters": [
    {
      title: "Plantation shutters for a built-in window finish",
      paragraphs: [
        "Plantation shutters suit rooms where the window covering should feel permanent, tidy and architectural. They are often considered for bedrooms, bathrooms, kitchens, bay windows and street-facing rooms where adjustable privacy matters every day.",
        "A shutter quote is more than panel size. Kim's Blinds checks blade size, panel layout, frame style, mid-rail position, moisture exposure, clearance and how the shutters will open around furniture, taps, handles or nearby walls.",
      ],
      bullets: ["Adjustable privacy through louvre control", "Strong fit for wet-area and street-facing applications where suitable", "Panel layout planned around daily access"],
    },
    {
      title: "Shutters versus blinds or curtains",
      paragraphs: [
        "Shutters create a different outcome from soft window furnishings. They can feel more built-in and easier to wipe down, while curtains add softness and roller blinds keep a slimmer profile. The right choice depends on the room, budget, style and maintenance preference.",
        "Kim's Blinds can compare shutters with blinds and curtains during the same measure so the final quote reflects the customer's practical priorities, not a single-product sales path.",
      ],
    },
  ],
  curtains: [
    {
      title: "Curtains for softness, blockout and insulation",
      paragraphs: [
        "Curtains are useful when a room needs softness, acoustic comfort, insulation, a premium finish or a more complete blockout effect. Sheers, lined curtains and blockout fabrics each solve a different privacy and comfort problem.",
        "The measure checks track position, heading style, fabric fullness, lining, stack space, drop, floor clearance and how the curtains will sit beside blinds, shutters, furniture or sliding doors.",
      ],
      bullets: ["Sheers for daytime softness and privacy", "Blockout linings for bedrooms and media rooms", "Tracks and headings selected around the room finish"],
    },
    {
      title: "Layering curtains with blinds",
      paragraphs: [
        "Many rooms perform best with a layered treatment: a blind for practical daytime control and a curtain for evening privacy, insulation and softness. This is especially useful for bedrooms, large glass doors and living rooms with strong sun.",
        "Kim's Blinds can quote curtains alongside roller blinds, vision blinds or shutters so the hardware, projection and final look are planned together.",
      ],
    },
  ],
  "panel-glides": [
    {
      title: "Panel glides for large doors and clean stacking",
      paragraphs: [
        "Panel glides suit wide sliding doors and large windows where broad fabric panels create a cleaner look than many narrow blades. They can soften large openings while still stacking to one side for access.",
        "The quote checks track width, stack side, panel count, overlap, fabric weight and whether the opening needs privacy, glare control or a decorative room divider effect.",
      ],
      bullets: ["Wide fabric panels for large openings", "Good for patios, apartments and open-plan rooms", "Stack planning keeps access practical"],
    },
    {
      title: "Panel glides versus vertical blinds",
      paragraphs: [
        "Both options can work on large glass, but they suit different expectations. Vertical blinds are practical and familiar; panel glides create a broader, more contemporary finish.",
        "Kim's Blinds can compare both during the measure so the customer can decide based on operation, stack space, budget, fabric and room style.",
      ],
    },
  ],
  "fly-screens": [
    {
      title: "Fly screens for airflow without insects",
      paragraphs: [
        "Fly screens are for ventilation first. They help keep doors and windows open through warmer months without turning every opening into an insect path. They are common for bedrooms, kitchens, laundries, rental updates and sliding doors.",
        "A proper quote separates fly screens from security screens. If the customer mainly wants airflow and insect control, a fly screen may be enough. If the opening also needs a stronger barrier, a security door or window screen should be discussed.",
      ],
      bullets: ["Measured insect screens for windows and doors", "Replacement mesh and frame condition checked", "Security needs separated from basic insect control"],
    },
    {
      title: "What affects fly screen pricing",
      paragraphs: [
        "Costs vary by opening type, frame condition, mesh choice, access, door hardware and whether existing tracks or frames can be reused. Photos can help start the discussion, but the final recommendation depends on the measure.",
        "Kim's Blinds can also assess nearby security doors or window grilles during the same appointment if airflow and protection are both part of the brief.",
      ],
    },
  ],
  "security-doors": [
    {
      title: "Security doors and windows for airflow with a stronger barrier",
      paragraphs: [
        "Security doors, security window screens and window grilles are chosen when the opening needs more than insect control. They are common for front entries, sliding doors, laundries, bedrooms, ground-floor windows and street-facing rooms.",
        "The measure checks frame condition, door swing, lock requirements, mesh or grille preference, handle clearance, sill detail and how often the opening is used. Those details decide whether the product will be secure, practical and comfortable to live with.",
      ],
      bullets: ["Measured security doors for entries and sliding doors", "Window screens and grilles for ventilation with a stronger barrier", "Hardware and frame checks before final quote"],
    },
    {
      title: "Security products need clear expectations",
      paragraphs: [
        "The best quote explains the difference between fly screens, screen doors, window grilles and security products before the customer commits. Each option has a different balance of visibility, ventilation, privacy, strength and price.",
        "Kim's Blinds also supplies other window furnishings, so a customer can coordinate security screens with blinds, shutters, awnings or curtains instead of solving each opening in isolation.",
      ],
    },
  ],
  "security-screens": [
    {
      title: "Security screens for windows that stay usable",
      paragraphs: [
        "Security screens are useful where windows need airflow while still feeling more protected. They are often considered for bedrooms, living rooms, laundries, street-facing openings and homes where the occupants want to open windows more often.",
        "The quote checks the window type, fixing surface, access, mesh or grille preference, escape requirements, visibility and how the window operates after the screen is fitted.",
      ],
      bullets: ["Window-focused security screening", "Airflow and privacy considered together", "Measured around frame, access and operation"],
    },
    {
      title: "When to combine screens with blinds",
      paragraphs: [
        "A security screen does not replace a blind or curtain. Screens manage the opening; blinds, shutters and curtains manage light, privacy and interior comfort. Many rooms need both, especially bedrooms and street-facing living areas.",
        "Kim's Blinds can quote the screen and window furnishing together so frame colour, privacy, airflow and room finish are considered as one decision.",
      ],
    },
  ],
};

export const blogPosts: BlogPostRecord[] = [
  {
    slug: "complete-guide-blinds-awnings-shutters-wollongong",
    title: "Complete Guide to Blinds, Awnings, Shutters and Security Screens in Wollongong",
    category: "Buying guide",
    intent: "commercial",
    summary: "A practical room-by-room guide to choosing blinds, awnings, shutters, curtains, fly screens and security screens for Wollongong, Shellharbour, Kiama and nearby homes.",
    metaDescription: "Compare blinds, awnings, shutters, curtains and security screens for Wollongong homes. Practical local guide from Kim's Blinds.",
    targetKeywords: ["blinds Wollongong","awnings Wollongong","security screens Wollongong"],
    sections: ["room goal","product families","local exposure","measure checklist","quote questions"],
    productSummary: ["Choose the product by room use, not by product name alone.", "Use the measure to confirm fit, finish, controls and installation details."],
    articleBlocks: [
      {
        title: "Start with the room, not the catalogue",
        paragraphs: [
          "The best product choice starts with what the room needs to do. A bedroom usually needs privacy and blockout. A living room may need glare control without losing the feeling of daylight. A kitchen may need something easy to clean. A patio or west-facing window may need external shade before heat reaches the glass.",
          "Kim's Blinds supplies blinds, awnings, fly screens, security doors and windows, panel glides, plantation shutters and curtains from Oak Flats. That broad range is useful because many homes need more than one product family. A large sliding door might need panel glides or curtains inside, while the adjoining alfresco area may need an awning or outdoor blind outside.",
        ],
        bullets: ["Privacy", "Blockout", "Glare control", "Heat reduction", "Airflow", "Security", "Soft interior finish"],
      },
      {
        title: "How the main product families compare",
        paragraphs: [
          "Roller blinds are usually the simplest path for a clean, practical result. Venetian blinds and vision blinds give more adjustable light control. Vertical blinds and panel glides suit wide doors where access still matters. Curtains add softness, insulation and stronger night privacy when selected with the right lining and track.",
          "Plantation shutters create a more permanent, built-in finish and can suit bedrooms, bathrooms and street-facing windows. Awnings and outdoor blinds do a different job: they manage sun, glare and outdoor comfort before the heat enters the room. Fly screens and security screens keep openings usable when airflow is part of the brief.",
        ],
      },
      {
        title: "Local conditions around Wollongong and Shellharbour",
        paragraphs: [
          "Homes around the Illawarra are not all dealing with the same problem. Coastal homes may need privacy and corrosion-aware product choices. Lake-facing and west-facing rooms often need heat and glare control. Newer estates around Calderwood, Tullimbar and Shell Cove often have large openings that need clean stacking and careful control placement.",
          "That is why a measured quote is more reliable than a generic product price. The measure confirms the opening, sun direction, frame condition, fixing surface, controls and access. It also gives the customer a chance to compare options side by side before committing.",
        ],
      },
      {
        title: "What to prepare before requesting a quote",
        paragraphs: [
          "You do not need perfect measurements before calling, but a little context helps the first conversation. Send your suburb, the product you are considering, photos of the full opening, rough width and drop, and the problem you want solved. It is more useful to say 'afternoon glare in a home office' than simply 'roller blind price'.",
          "If you are comparing multiple rooms, group them by function. Bedrooms, living rooms, wet areas, sliding doors and outdoor spaces often need different products even when the fabric colour or frame finish should feel consistent across the home.",
        ],
        bullets: ["Suburb and access notes", "Photos from inside and outside where relevant", "Approximate width and drop", "Room use and privacy goal", "Manual or powered operation preference"],
      },
      {
        title: "Questions worth asking at the measure",
        paragraphs: [
          "Ask what will happen around handles, skirting, tiles, sliding tracks, architraves, furniture and uneven frames. Ask whether the selected product gives daytime privacy, night privacy or both. Ask how the product should be cleaned and what parts are most likely to need adjustment over time.",
          "The right installer should be able to explain why one product suits an opening better than another. That practical advice is where a local measure earns its value.",
        ],
      },
    ],
    keyQuestions: [
      { question: "Does Kim's Blinds offer a free measure and quote?", answer: "Yes. Kim's Blinds publicly promotes a free measure and quote for its product range." },
      { question: "Where is Kim's Blinds based?", answer: "Kim's Blinds is based at Unit 5, 147 Industrial Rd, Oak Flats NSW 2529." },
      { question: "What products should I compare first?", answer: "Start with the room goal. Compare blinds or curtains for interior privacy, awnings or outdoor blinds for external shade, shutters for a built-in finish, and screens for airflow or security." }
    ],
    relatedServiceSlugs: ["blinds","awnings","security-doors","plantation-shutters"],
  },
  {
    slug: "roller-blinds-vs-curtains",
    title: "Roller Blinds vs Curtains: Which Works Best for Your Room?",
    category: "Blinds and curtains",
    intent: "commercial",
    summary: "Compare roller blinds, sheer curtains and blockout curtains for privacy, light, insulation, cleaning, cost control and interior finish.",
    metaDescription: "Roller blinds vs curtains for Wollongong homes. Compare privacy, blockout, insulation, cleaning and room-by-room fit.",
    targetKeywords: ["roller blinds","curtains Wollongong","blockout curtains"],
    sections: ["privacy","light control","insulation","large doors","layering"],
    productSummary: ["Roller blinds are clean and compact.", "Curtains add softness, insulation and stronger interior styling."],
    articleBlocks: [
      {
        title: "The short answer",
        paragraphs: [
          "Choose roller blinds when you want a clean, compact window covering with clear control over glare, privacy or blockout. Choose curtains when the room needs softness, insulation, acoustic comfort, a decorative finish or stronger night-time privacy.",
          "Many rooms use both. A sunscreen or blockout roller blind can handle practical daylight control, while sheer or lined curtains add softness and finish the room in the evening.",
        ],
      },
      {
        title: "Privacy and blockout",
        paragraphs: [
          "A blockout roller blind is direct and efficient, but privacy depends on fit, side gaps, fabric and whether the window is viewed from above or from the street. Curtains can give broader coverage when the track extends past the opening and the fabric has enough fullness.",
          "For bedrooms, the best result often comes from checking both the product and the mounting position. A blind fitted inside the recess may look tidy but allow more light around the sides. A curtain or face-fitted blind may cover more, but needs wall space and clearances.",
        ],
        bullets: ["Inside recess: tidy but more sensitive to gaps", "Face fit: broader coverage where space allows", "Layered: strongest option when softness and blockout both matter"],
      },
      {
        title: "Cleaning, moisture and everyday use",
        paragraphs: [
          "Roller blinds are usually easier to keep visually minimal, especially in studies, kitchens and rental properties. Curtains need more fabric care but bring a softer interior feel that blinds cannot replicate.",
          "In rooms with moisture, cooking residue or pets, ask about fabric suitability and cleaning expectations before choosing by colour. A product that looks good on day one still needs to suit the way the room is lived in.",
        ],
      },
      {
        title: "Large sliding doors",
        paragraphs: [
          "Sliding doors are where the decision becomes practical. A curtain can stack away and soften a large wall of glass. Roller blinds may need multiple drops across the opening. Panel glides or vertical blinds can be better when access through the door happens often.",
          "The measure should confirm stack side, track position, handle clearance, floor clearance and whether the door is a high-traffic opening. That is more important than choosing from a product photo.",
        ],
      },
      {
        title: "How to brief Kim's Blinds",
        paragraphs: [
          "Before the quote, decide whether the room needs daytime privacy, night privacy, blockout, insulation, softness or a minimal look. If you are unsure, send photos and ask to compare roller blinds, curtains and any layered option during the measure.",
          "The final recommendation should reflect the room function first, then the fabric, colour and budget.",
        ],
      },
    ],
    keyQuestions: [
      { question: "Are roller blinds cheaper than curtains?", answer: "Often they can be, but final pricing depends on opening size, fabric, controls, tracks, lining and installation access. A measured quote is required." },
      { question: "Can I use roller blinds and curtains together?", answer: "Yes. Layering is useful when you want practical daylight control plus a softer evening finish." },
      { question: "Which is better for bedrooms?", answer: "Bedrooms usually need blockout and privacy. That can be a blockout roller blind, lined curtains or a layered treatment depending on gaps, style and budget." }
    ],
    relatedServiceSlugs: ["roller-blinds","curtains","blinds"],
  },
  {
    slug: "awnings-outdoor-blinds-alfresco-guide",
    title: "Awnings and Outdoor Blinds for Alfresco Areas",
    category: "Outdoor living",
    intent: "commercial",
    summary: "How to choose awnings, folding arm awnings, retractable awnings and outdoor blinds for shade, privacy and usable patios.",
    metaDescription: "Choose awnings or outdoor blinds for patios, balconies and exposed windows. Practical Illawarra shade guide.",
    targetKeywords: ["awnings Wollongong","outdoor blinds Wollongong","retractable awnings"],
    sections: ["shade","weather","privacy","operation","measure"],
    productSummary: ["Awnings manage sun before it hits the glass.", "Outdoor blinds can add side privacy and make alfresco areas more usable."],
    articleBlocks: [
      {
        title: "The difference between awnings and outdoor blinds",
        paragraphs: [
          "Awnings are usually about shade and heat control. They sit outside the glass or above an outdoor area, reducing sun before it reaches the room or patio. Outdoor blinds are usually about enclosing or screening a side of an alfresco area for privacy, glare, wind or a more usable outdoor room.",
          "Some homes need both. A folding arm or retractable awning may give overhead shade, while an outdoor blind on one side can reduce low afternoon glare or neighbour exposure.",
        ],
      },
      {
        title: "Where outdoor products earn their keep",
        paragraphs: [
          "West-facing windows, balconies, decks, pergolas, patios and exposed glass doors are common candidates. Around the Illawarra, the measure should consider sun direction, coastal exposure, wind, fixing surfaces and whether the space is used mainly for dining, kids, pets, entertaining or heat reduction.",
          "Awnings and outdoor blinds should not be chosen on width alone. Projection, guide type, fabric, control method and the building surface all change the result.",
        ],
        bullets: ["Western sun on glass", "Patio glare during meals", "Balcony privacy", "Alfresco wind exposure", "Shopfront or commercial shade"],
      },
      {
        title: "Manual, crank or motorised operation",
        paragraphs: [
          "Operation matters because outdoor products are heavier and more exposed than indoor blinds. A small window awning may be simple. A wider alfresco solution may need a different operating method so it is easy enough to use consistently.",
          "Ask during the quote how the product should be used in changing weather. Outdoor products have practical limits, and those limits should be explained before installation.",
        ],
      },
      {
        title: "What Kim's Blinds needs to check",
        paragraphs: [
          "The measure should inspect head height, fixing points, wall or fascia condition, nearby lights or downpipes, ground clearance, door swing, wind exposure and whether drainage or pooling could be an issue.",
          "Photos are useful before the appointment, especially wide shots that show the full wall, roofline and outdoor area. Close-up photos alone rarely show enough context for an outdoor product.",
        ],
      },
      {
        title: "How to avoid the wrong product",
        paragraphs: [
          "If the issue is heat inside the room, start with external shade. If the issue is evening privacy on a patio, start with outdoor blinds. If the issue is insects, talk about screens as well. If the issue is a finished interior look, indoor blinds or curtains may still be needed.",
          "A good quote should name the problem first, then the product.",
        ],
      },
    ],
    keyQuestions: [
      { question: "Are awnings better than indoor blinds for heat?", answer: "Often, yes, because awnings manage sun before it reaches the glass. The right answer still depends on exposure, fixing points and room use." },
      { question: "Can outdoor blinds make a patio fully weatherproof?", answer: "Outdoor blinds can improve comfort and privacy, but they should be specified around exposure and realistic use. They are not a replacement for a fully enclosed room." },
      { question: "Do I need photos before booking?", answer: "Photos help. Send wide photos of the wall, roofline, patio and opening so Kim's Blinds can understand the fixing area before the measure." }
    ],
    relatedServiceSlugs: ["awnings","outdoor-blinds"],
  },
  {
    slug: "security-doors-windows-buying-guide",
    title: "Security Doors and Windows: What to Check Before You Buy",
    category: "Security screens",
    intent: "commercial",
    summary: "A practical guide to choosing security doors, security windows, screen doors and window grilles for airflow, privacy and everyday use.",
    metaDescription: "Security doors and window screens buying guide for Illawarra homes. Compare airflow, frame, locks and privacy.",
    targetKeywords: ["security doors Wollongong","security windows","security screens Wollongong"],
    sections: ["door type","window type","hardware","privacy","quote checklist"],
    productSummary: ["Security screens are different from fly screens.", "The quote should confirm frame, hardware, mesh or grille and daily use."],
    articleBlocks: [
      {
        title: "Start by separating insect control from security",
        paragraphs: [
          "Fly screens and security screens solve different problems. A fly screen is mainly for ventilation and insect control. A security screen or door is chosen when the opening also needs a stronger physical barrier, different hardware or a more robust frame.",
          "That distinction matters because customers can overpay for strength they do not need or under-specify a product for an entry point that is used every day.",
        ],
      },
      {
        title: "Door openings need practical checks",
        paragraphs: [
          "Security doors should be measured around the frame, sill, door swing, handle clearance, lock position and how the entry is used. A front door, laundry door and sliding door may all need different hardware or framing decisions.",
          "The quote should also consider visibility, privacy, airflow and whether the door is used by children, older family members, pets or frequent visitors.",
        ],
        bullets: ["Frame condition", "Lock and handle position", "Sill and track details", "Airflow and visibility", "Daily traffic through the door"],
      },
      {
        title: "Window security screens are a separate decision",
        paragraphs: [
          "Windows need their own assessment. Bedrooms, street-facing rooms and ground-floor openings often need airflow while still feeling more secure. The screen must suit the window type so the opening remains usable after installation.",
          "Ask how the product affects cleaning, emergency access, ventilation and the way the window opens. Security should not make the room frustrating to live in.",
        ],
      },
      {
        title: "Privacy, airflow and light",
        paragraphs: [
          "A security product does not automatically solve privacy or glare. Screens manage the opening; blinds, curtains or shutters manage interior light and privacy. In many rooms the best result is a security screen plus a separate window furnishing.",
          "Kim's Blinds can quote both categories, which helps keep frame colour, privacy and room finish coordinated.",
        ],
      },
      {
        title: "What to ask before approving the quote",
        paragraphs: [
          "Ask what product is being supplied, what hardware is included, how it will be fixed, how it should be maintained and whether the opening will still operate the way you expect. If the product is for security rather than insects, ask the installer to explain that specification clearly.",
          "Do not approve a quote that only names a product category without explaining the measured fit and hardware decisions.",
        ],
      },
    ],
    keyQuestions: [
      { question: "Are fly screens the same as security screens?", answer: "No. Fly screens are mainly for insects and airflow. Security screens or doors add a stronger barrier and different frame or hardware requirements." },
      { question: "Can Kim's Blinds quote doors and window screens together?", answer: "Yes. Kim's Blinds lists security doors and windows, fly screens and window grilles in its product range." },
      { question: "Should I also quote blinds or curtains?", answer: "If privacy, glare or blockout matters inside the room, quote the window furnishing at the same time so the final result works together." }
    ],
    relatedServiceSlugs: ["security-doors","security-screens","fly-screens"],
  },
  {
    slug: "plantation-shutters-light-privacy-guide",
    title: "Plantation Shutters for Light, Privacy and a Built-In Finish",
    category: "Shutters",
    intent: "commercial",
    summary: "Where plantation shutters fit best, what to ask at measure, and how they compare with blinds or curtains for local homes.",
    metaDescription: "Plantation shutters guide for Wollongong and Shellharbour homes. Compare privacy, light, moisture and fit.",
    targetKeywords: ["plantation shutters Wollongong","window shutters"],
    sections: ["privacy","blade size","wet areas","panel layout","measure"],
    productSummary: ["Shutters create a more built-in finish than most soft furnishings.", "The measure should confirm panel layout, clearance and moisture exposure."],
    articleBlocks: [
      {
        title: "What shutters do well",
        paragraphs: [
          "Plantation shutters create a built-in look that suits rooms where the window covering should feel permanent and tidy. They are often considered for bedrooms, bathrooms, kitchens, street-facing rooms and feature windows.",
          "The louvres make privacy adjustable. You can angle light, block a direct view line or open the panels for access, depending on how the shutters are configured.",
        ],
      },
      {
        title: "What must be measured carefully",
        paragraphs: [
          "A shutter quote needs to check panel layout, frame style, blade size, hinge position, mid-rail position, handle clearance and whether the panels can open without hitting furniture, taps, tiles or nearby walls.",
          "The opening may look simple from the front, but reveals, architraves and out-of-square frames can change the final specification.",
        ],
        bullets: ["Panel split", "Blade size", "Frame depth", "Moisture exposure", "Clearance around handles and furniture"],
      },
      {
        title: "Wet areas and coastal homes",
        paragraphs: [
          "Bathrooms, laundries and coastal properties need a more careful conversation about material and maintenance. The right shutter needs to suit moisture exposure and cleaning expectations, not just the preferred colour.",
          "If the room faces strong sun or salty air, ask how the product should be maintained and whether another window furnishing would perform better for the same budget.",
        ],
      },
      {
        title: "Shutters versus blinds and curtains",
        paragraphs: [
          "Shutters are not simply a more expensive blind. They change the architecture of the opening. Roller blinds are slimmer, curtains are softer, and shutters are more structured. The right option depends on the room style, cleaning preference, budget and desired level of permanence.",
          "Kim's Blinds supplies all three categories, so the measure can compare products honestly instead of forcing every room into one solution.",
        ],
      },
      {
        title: "Questions to ask at the measure",
        paragraphs: [
          "Ask how the shutter will open, where the panels will stack, whether a mid-rail is recommended, what blade size suits the opening and what maintenance is expected. Also ask whether the window will still be easy to clean after installation.",
          "A good shutter quote should make the final layout easy to imagine before you approve it.",
        ],
      },
    ],
    keyQuestions: [
      { question: "Are plantation shutters good for bathrooms?", answer: "They can be, but material choice, moisture exposure and ventilation need to be checked during the measure." },
      { question: "Do shutters block all light?", answer: "No. Shutters control and reduce light, but blade gaps and frame details mean they do not behave the same as a full blockout curtain." },
      { question: "Should I compare shutters with blinds?", answer: "Yes. Shutters, roller blinds and curtains create different finishes and price points, so comparing them during the measure is sensible." }
    ],
    relatedServiceSlugs: ["plantation-shutters","blinds","curtains"],
  },
  {
    slug: "fly-screens-insect-screens-guide",
    title: "Fly Screens and Insect Screens for Everyday Ventilation",
    category: "Screens",
    intent: "commercial",
    summary: "How to choose fly screens for windows and doors, when to replace mesh, and when to step up to security screens.",
    metaDescription: "Fly screens and insect screens guide. Learn when to repair, replace or upgrade to security screens.",
    targetKeywords: ["fly screens Wollongong","insect screens","fly screen replacement"],
    sections: ["windows","doors","mesh replacement","security upgrade","quote prep"],
    productSummary: ["Fly screens are for airflow and insect control.", "Security screens are a different product and should be quoted separately."],
    articleBlocks: [
      {
        title: "What fly screens are actually for",
        paragraphs: [
          "Fly screens let a home breathe without inviting insects through every open window or door. They are practical for bedrooms, kitchens, laundries, sliding doors and rental properties where simple ventilation matters.",
          "They should not be confused with security screens. If the brief includes strength, locks or a stronger barrier, that should be discussed as a security product rather than a standard insect screen.",
        ],
      },
      {
        title: "Repair, replace or upgrade",
        paragraphs: [
          "Mesh replacement can make sense when the frame is still sound and the problem is a tear, loose mesh or age-related wear. Full replacement may be better when frames are bent, tracks are poor, corners are damaged or the screen no longer fits cleanly.",
          "An upgrade to security screens is worth discussing when the opening is used for ventilation but also needs a stronger barrier, especially on ground-floor windows, street-facing rooms and frequently used doors.",
        ],
        bullets: ["Replace mesh when the frame is still usable", "Replace the full screen when fit or frame condition is poor", "Discuss security screens when barrier strength matters"],
      },
      {
        title: "Door screens need extra context",
        paragraphs: [
          "Sliding doors, hinged doors and laundry doors all have different hardware and clearance issues. Pets, children, high traffic and damaged tracks can affect the final recommendation.",
          "The measure should confirm how the door is used, whether the existing frame or track is serviceable and whether insect control alone is enough.",
        ],
      },
      {
        title: "How fly screens work with blinds and curtains",
        paragraphs: [
          "Fly screens solve airflow; they do not solve glare, blockout or interior privacy. If the room also needs light control, quote blinds, curtains or shutters at the same time.",
          "This is especially useful for bedrooms and living rooms where occupants want to keep windows open during warmer evenings while still maintaining privacy inside.",
        ],
      },
      {
        title: "What to send before asking for a quote",
        paragraphs: [
          "Send photos of the full opening, close-ups of any damaged screen or track, the suburb, whether it is a window or door, and whether you want insect control only or a security upgrade as well.",
          "That context helps Kim's Blinds prepare the right discussion before the free measure and quote.",
        ],
      },
    ],
    keyQuestions: [
      { question: "Can torn mesh be replaced?", answer: "Often yes, if the frame is still usable. The measure confirms whether mesh replacement or a full screen replacement is more practical." },
      { question: "Are fly screens secure?", answer: "Standard fly screens are for insects and airflow. If security is the goal, ask about security doors or window screens." },
      { question: "Can I quote fly screens with blinds?", answer: "Yes. Many rooms need both airflow and light control, so quoting screens with blinds or curtains can make sense." }
    ],
    relatedServiceSlugs: ["fly-screens","security-screens"],
  },
  {
    slug: "panel-glides-vertical-blinds-large-doors",
    title: "Panel Glides and Vertical Blinds for Large Sliding Doors",
    category: "Blinds",
    intent: "commercial",
    summary: "Compare panel glides and vertical blinds for wide openings, sliding doors, apartments and open-plan living areas.",
    metaDescription: "Panel glides vs vertical blinds for sliding doors. Compare stack, privacy, fabric and access before quoting.",
    targetKeywords: ["panel glides","vertical blinds","sliding door blinds"],
    sections: ["large openings","stack side","fabric","privacy","alternatives"],
    productSummary: ["Panel glides create broader fabric panels.", "Vertical blinds are practical where access and blade rotation matter."],
    articleBlocks: [
      {
        title: "Why large doors need a different decision",
        paragraphs: [
          "A large sliding door is not just a wide window. People walk through it, furniture sits near it, handles need clearance and the covering has to stack somewhere. That is why a product that works beautifully on a bedroom window can feel awkward on a patio opening.",
          "Panel glides, vertical blinds and curtains are common options because each can handle width and access in a different way.",
        ],
      },
      {
        title: "Panel glides",
        paragraphs: [
          "Panel glides use broad fabric panels that slide across a track. They suit modern rooms, apartments and open-plan spaces where the customer wants a cleaner look than many narrow blades.",
          "They need careful stack planning. The measure should confirm how many panels are required, which side they will stack to, and whether the stack will interfere with the door or furniture.",
        ],
        bullets: ["Broad panels", "Modern finish", "Good for wide openings", "Stack side must be planned"],
      },
      {
        title: "Vertical blinds",
        paragraphs: [
          "Vertical blinds are practical, familiar and useful where the opening is used often. The blades rotate for privacy and light control, and the track can be specified around the way the door opens.",
          "They may not create the same contemporary feel as panel glides, but they can be a sensible choice for family rooms, rentals and high-use sliding doors.",
        ],
      },
      {
        title: "When curtains or roller blinds may be better",
        paragraphs: [
          "Curtains can soften a large glass wall and improve night privacy. Roller blinds can work if the opening is split into sections, but they may be less convenient when the door is used frequently.",
          "Kim's Blinds can compare these options during the measure so the customer sees the tradeoff between look, stack, access, privacy and budget.",
        ],
      },
      {
        title: "Measure checklist",
        paragraphs: [
          "Before quoting, check door width, drop, handle clearance, stack space, traffic through the door, floor clearance, fabric preference and whether pets or children use the opening.",
          "A good large-door solution should be easy to live with, not just attractive when fully closed.",
        ],
      },
    ],
    keyQuestions: [
      { question: "Are panel glides better than vertical blinds?", answer: "Not always. Panel glides create a cleaner broad-panel look, while vertical blinds are practical for frequent access and blade rotation." },
      { question: "Can curtains work on large sliding doors?", answer: "Yes. Curtains are often strong for softness, night privacy and insulation, provided the track and stack space are planned." },
      { question: "What should I photograph?", answer: "Photograph the full door, the handle side, the wall space beside the door and any furniture that could affect the stack." }
    ],
    relatedServiceSlugs: ["panel-glides","vertical-blinds","blinds"],
  },
  {
    slug: "kims-blinds-service-areas",
    title: "Kim's Blinds Service Areas Around Oak Flats, Illawarra and Sutherland Shire",
    category: "Local guide",
    intent: "commercial",
    summary: "A local service-area guide for customers around Oak Flats, Shellharbour, Wollongong, Kiama, Dapto and selected Sutherland Shire hubs.",
    metaDescription: "Kim's Blinds service area guide from Oak Flats to Wollongong, Kiama, Dapto and selected Sutherland Shire hubs.",
    targetKeywords: ["Kim's Blinds Oak Flats","blinds Shellharbour","blinds Sutherland Shire"],
    sections: ["Oak Flats","Shellharbour","Wollongong","Kiama","Dapto","Sutherland Shire hubs"],
    productSummary: ["Kim's Blinds is based in Oak Flats.", "The site now focuses on main suburb hubs rather than thin pages for every suburb."],
    articleBlocks: [
      {
        title: "Why this site uses main suburb hubs",
        paragraphs: [
          "A useful local page should help a customer understand the service area, product decisions and quote process. It should not exist just because a suburb name can be swapped into a template. Kim's Blinds therefore focuses its indexable local content on main suburb hubs and keeps broader long-tail combinations out of the sitemap unless they carry real value.",
          "That approach is better for users and safer for search. The main hubs cover the places customers naturally recognise: Oak Flats, Shellharbour, Wollongong, Kiama, Dapto, Albion Park, Calderwood, Warilla, Lake Illawarra, Thirroul, Picton, Wilton and selected Sutherland Shire hubs.",
        ],
      },
      {
        title: "Oak Flats and nearby Shellharbour suburbs",
        paragraphs: [
          "Kim's Blinds is based at Unit 5, 147 Industrial Rd, Oak Flats NSW. Nearby enquiries often involve bedrooms, sliding doors, coastal glare, fly screens, security doors and practical family-home window furnishings.",
          "Shellharbour, Shell Cove, Warilla and Lake Illawarra homes often need products that balance privacy, airflow and sun exposure. The right recommendation may be a blind, shutter, awning, curtain, fly screen or security screen depending on the opening.",
        ],
      },
      {
        title: "Wollongong, Dapto and northern Illawarra",
        paragraphs: [
          "Wollongong and Dapto enquiries can range from apartments and older homes to new builds and commercial spaces. Larger glass, street-facing rooms and home offices often make product selection more nuanced than a simple price request.",
          "Thirroul and other northern coastal suburbs may bring stronger conversations around salt air, privacy, airflow and afternoon glare. Those conditions are why a measured quote is preferable to a generic product price.",
        ],
      },
      {
        title: "Kiama, Albion Park, Calderwood, Picton and Wilton",
        paragraphs: [
          "Kiama and nearby coastal homes often need light control, privacy and exterior shade that respects views and outdoor living. Albion Park and Calderwood homes may involve newer openings, wide doors and family spaces where the product needs to be durable and easy to operate.",
          "Picton and Wilton sit further from the Oak Flats base, so quote requests should include clear product interest, photos and timing expectations. This helps the team understand the scope before confirming the best next step.",
        ],
      },
      {
        title: "Selected Sutherland Shire hubs",
        paragraphs: [
          "For selected Sutherland Shire hubs such as Sutherland, Miranda, Caringbah and Cronulla, the same product logic applies: start with the room problem, then confirm the product through a measure. Coastal exposure, apartment living, privacy and airflow are common reasons to compare more than one product family.",
          "Customers should call or send the product, suburb, opening photos and approximate dimensions so Kim's Blinds can respond accurately during business hours.",
        ],
      },
    ],
    keyQuestions: [
      { question: "Why are not all suburbs indexed?", answer: "Main suburb hubs are more useful than hundreds of near-duplicate suburb pages. Long-tail pages should only be indexed when they provide genuine local value." },
      { question: "What areas are most important?", answer: "Oak Flats, Shellharbour, Wollongong, Kiama, Dapto, Albion Park and selected Sutherland Shire hubs are treated as the primary local content hubs." },
      { question: "How do I request a quote from outside Oak Flats?", answer: "Call 02 4256 1297 or send your suburb, product interest, opening photos and approximate dimensions through the contact page." }
    ],
    relatedServiceSlugs: ["blinds","awnings","security-doors","plantation-shutters"],
  }
];

export const faqItems: FaqItem[] = [
  { category: "Pricing & Costs", question: "Is the measure and quote free?", answer: "Yes. Kim's Blinds promotes a free measure and quote." },
  { category: "Pricing & Costs", question: "Can you price from photos?", answer: "Photos and approximate sizes help start the conversation, but a measured quote confirms the product, fit, installation details and final pricing." },
  { category: "Products & Materials", question: "What products does Kim's Blinds offer?", answer: "The service menu includes roller, Holland, Venetian, timber Venetian, vertical and vision blinds, awnings, fly screens, security doors and windows, panel glides, plantation shutters and curtains." },
  { category: "Products & Materials", question: "Do you supply Australian-made products?", answer: "Kim's Blinds promotes quality Australian-made and locally made products, with the final recommendation confirmed during the measure." },
  { category: "Installation", question: "What should I send before a quote?", answer: "Send your suburb, product interest, photos, approximate width and drop, and whether privacy, blockout, airflow, shade or security is the priority." },
  { category: "Installation", question: "Do you work on residential and commercial jobs?", answer: "Yes. Kim's Blinds lists residential and commercial installation, maintenance and repair needs." },
  { category: "Warranty & After-Sales", question: "What quality promise is listed publicly?", answer: "Kim's Blinds lists 100% quality assurance, friendly customer service and competitively priced products." },
  { category: "General", question: "Where is Kim's Blinds located?", answer: "Kim's Blinds is located at Unit 5, 147 Industrial Rd, Oak Flats NSW." },
  { category: "General", question: "What are the visiting hours?", answer: "Monday to Thursday 9am to 4.30pm, Friday 9am to 3.30pm, and Saturday to Sunday closed." },
  { category: "General", question: "What is the phone number?", answer: "Call Kim's Blinds on 02 4256 1297." },
  { category: "Service areas", question: "Why does the site use main suburb hubs?", answer: "Main suburb hubs are more useful than hundreds of near-duplicate pages. They let customers compare products and local conditions without thin suburb-swapped copy." }
];

export const comparisonRows: [string, string, string][] = [
  ["Best for", "Interior privacy, glare, blockout and soft furnishing", "Built-in privacy, exterior shade, airflow or stronger screens"],
  ["Common products", "Roller, Holland, Venetian, vertical, vision blinds and curtains", "Plantation shutters, awnings, outdoor blinds, fly screens and security screens"],
  ["Large openings", "Panel glides, vertical blinds or curtains", "Sliding shutters, awnings or outdoor blinds where suitable"],
  ["Quote focus", "Fabric, controls, opacity, stack space and room use", "Frame, fixing, guide system, exposure, mesh, hardware and operation"],
];
export const comparisonFaqItems: ArticleFaq[] = [
  { question: "Are blinds or shutters better?", answer: "Neither is best for every room. Blinds are practical and flexible; shutters create a stronger built-in finish and adjustable privacy." },
  { question: "Where do curtains fit?", answer: "Curtains are ideal when the room needs softness, insulation, blockout or a finished fabric look." },
  { question: "Can outdoor blinds replace indoor blinds?", answer: "No. Outdoor blinds solve alfresco shade, privacy and wind management; indoor blinds and curtains handle interior privacy and light." },
];

const serviceBySlug = new Map(services.map((service) => [service.slug, service]));
const blogBySlug = new Map(blogPosts.map((post) => [post.slug, post]));
const suburbBySlug = new Map(suburbs80km.map((suburb) => [suburb.slug, suburb]));
export function getService(slug: string): ServiceRecord | undefined { return serviceBySlug.get(slug); }
export function getBlogPost(slug: string): BlogPostRecord | undefined { return blogBySlug.get(slug); }
export function getSuburb(slug: string): SuburbRecord | undefined { return suburbBySlug.get(slug); }
export function localProfile(suburb: SuburbRecord): string {
  const zone = suburb.marketZone.toLowerCase();
  if (zone.includes("coast")) return "coastal sun, privacy, airflow and salt-air exposure should shape the product choice";
  if (zone.includes("showroom") || suburb.distanceKm <= 6) return "showroom access is close by for comparing blinds, awnings, shutters, curtains and screens";
  if (zone.includes("shire")) return "Sutherland Shire homes still need practical privacy, shade, airflow and screen recommendations";
  if (suburb.distanceKm > 45) return "clear product photos and timing details help confirm the best quote path before travel is booked";
  return "homeowners usually need a practical mix of privacy, shade, airflow and low-maintenance finishes";
}
export function suburbIntro(suburb: SuburbRecord): string { return `${suburb.name} is a Kim's Blinds service-area hub for comparing blinds, awnings, shutters, curtains, fly screens and security screens around ${localProfile(suburb)}.`; }
export function serviceSuburbIntro(service: ServiceRecord, suburb: SuburbRecord): string { return `Kim's Blinds can discuss ${service.plural} in ${suburb.name}; the final recommendation depends on the opening, access and whether ${localProfile(suburb)}.`; }
export function pageUrl(pathname: string): string { return `${business.baseUrl}${pathname.startsWith("/") ? pathname : `/${pathname}`}`; }

export const suburbContent: Record<string, SuburbContent> = Object.fromEntries(suburbs80km.map((suburb) => [suburb.slug, {
  localContext: `${suburb.name} sits about ${suburb.distanceKm.toFixed(1)} km from the Oak Flats showroom in the ${suburb.lga} local government area. For this hub, the useful starting point is not a suburb keyword; it is the opening itself: room use, sun direction, privacy, airflow, access and whether the customer wants interior comfort, exterior shade or a stronger screen.`,
  localProjects: `Typical ${suburb.name} conversations include roller blinds for bedrooms and home offices, awnings for exposed glass, plantation shutters for street-facing rooms, curtains for softness and insulation, fly screens for ventilation, and security doors or window screens where airflow and a stronger barrier both matter.`,
  productFocus: `${suburb.marketZone} means the quote should be framed around local conditions rather than a single product. If the opening faces strong afternoon sun, external shade may matter more than indoor fabric. If the opening is near a street, shutters, blinds, curtains or security screens may need to be compared for privacy and daily use.`,
  quotePrep: `Before requesting a ${suburb.name} quote, send the product interest, photos of the full opening, approximate width and drop, access notes and whether manual or powered operation is preferred. Kim's Blinds can then confirm the sensible next step during business hours instead of guessing from a suburb name alone.`,
  faq: [
    { question: `Is ${suburb.name} a main Kim's Blinds suburb hub?`, answer: isIndexableSuburb(suburb.slug) ? `Yes. ${suburb.name} is treated as a main local hub rather than a thin suburb swap page.` : `${suburb.name} is covered as a broader service-area route, but the site focuses indexable local SEO on the main suburb hubs.` },
    { question: `What products are common in ${suburb.name}?`, answer: "Common requests include blinds, awnings, plantation shutters, curtains, fly screens and security doors or windows depending on room use, exposure, privacy and airflow." },
    { question: `How do I request a ${suburb.name} quote?`, answer: `Call ${business.phone} or send the suburb, product interest, opening photos and approximate dimensions through the contact page.` },
    { question: `Why does Kim's Blinds not publish every service-suburb page?`, answer: "Thin location pages do not help customers. This site focuses on useful suburb hubs and keeps broad service-suburb combinations out of the sitemap unless they add genuine local value." },
  ],
}])) as Record<string, SuburbContent>;

const serviceFaqAddons: Record<string, ArticleFaq[]> = {
  blinds: [
    { question: "Which blind type should I start with?", answer: "Start with the room goal. Roller blinds suit clean privacy or blockout, Venetians suit adjustable light, verticals and panel glides suit wide openings, and vision blinds suit flexible day-night privacy." },
    { question: "Can Kim's Blinds compare different blind types in one visit?", answer: "Yes. The measure can compare practical options for the same opening before a final quote is prepared." },
  ],
  "roller-blinds": [
    { question: "Are roller blinds good for bedrooms?", answer: "Yes, especially with blockout fabric, but side gaps, mounting position and room layout still need to be checked." },
    { question: "Can I choose sunscreen and blockout together?", answer: "Dual roller systems can combine daytime glare control with evening privacy when the opening has enough space." },
  ],
  "venetian-blinds": [
    { question: "Where do Venetian blinds work best?", answer: "They work well where adjustable light, ventilation and privacy matter, including studies, kitchens and street-facing rooms." },
    { question: "What does the measure check?", answer: "Blade material, tilt control, lift control, moisture exposure, mounting depth and cord safety are all practical checks." },
  ],
  "vertical-blinds": [
    { question: "Are vertical blinds still practical?", answer: "Yes. They remain useful for sliding doors, rentals and wide openings where access and blade rotation matter." },
    { question: "Should I compare panel glides?", answer: "Yes, especially if you want a broader, more contemporary fabric finish on a large opening." },
  ],
  "vision-blinds": [
    { question: "Are vision blinds the same as roller blinds?", answer: "No. Vision blinds use layered sheer and opaque bands, giving a different privacy and filtered-light effect." },
    { question: "Do vision blinds block out a room?", answer: "They can improve privacy and light control, but a full blockout roller blind or curtain may be better when darkness is the priority." },
  ],
  awnings: [
    { question: "When are awnings better than indoor blinds?", answer: "Awnings are useful when heat and glare need to be managed before sun reaches the glass." },
    { question: "What outdoor details affect the quote?", answer: "Sun path, wind exposure, fixing surface, projection, head height, operation and nearby obstructions all matter." },
  ],
  "outdoor-blinds": [
    { question: "Do outdoor blinds make a patio weatherproof?", answer: "They can improve comfort, privacy and shade, but the recommendation must match the exposure and realistic use of the space." },
    { question: "Should I choose an awning or outdoor blind?", answer: "Choose based on the problem: overhead shade points to an awning, while side privacy or glare may point to outdoor blinds." },
  ],
  "plantation-shutters": [
    { question: "What rooms suit plantation shutters?", answer: "They are often considered for bedrooms, bathrooms, kitchens and street-facing rooms where a built-in look and adjustable privacy matter." },
    { question: "What must be measured for shutters?", answer: "Panel layout, blade size, frame style, moisture exposure, clearance and how the panels open all need checking." },
  ],
  curtains: [
    { question: "Can curtains be layered with blinds?", answer: "Yes. A blind can handle practical light control while curtains add softness, insulation and evening privacy." },
    { question: "What affects curtain pricing?", answer: "Fabric, lining, fullness, track hardware, heading style, drop and installation detail all affect the final quote." },
  ],
  "panel-glides": [
    { question: "Where do panel glides fit best?", answer: "They suit wide sliding doors and large windows where broad fabric panels and clean stacking are preferred." },
    { question: "Are panel glides better than curtains?", answer: "Not always. Panel glides are cleaner and flatter, while curtains are softer and can provide stronger evening privacy." },
  ],
  "fly-screens": [
    { question: "Can you replace fly screen mesh only?", answer: "Often yes, if the frame is sound. If the frame or track is damaged, replacement may be more practical." },
    { question: "When should I upgrade to security screens?", answer: "Upgrade when the opening needs a stronger barrier as well as airflow and insect control." },
  ],
  "security-doors": [
    { question: "What is checked before quoting a security door?", answer: "Frame condition, door swing, sill detail, lock requirements, handle clearance, mesh or grille preference and daily use." },
    { question: "Can security doors be coordinated with blinds?", answer: "Yes. Screens manage the opening, while blinds, curtains or shutters manage interior privacy and light." },
  ],
  "security-screens": [
    { question: "Are security screens only for ground-floor windows?", answer: "No. They can also suit bedrooms, street-facing rooms and any window where airflow and a stronger barrier are both needed." },
    { question: "Do security screens replace window furnishings?", answer: "No. They do not provide the same privacy, glare control or blockout as blinds, shutters or curtains." },
  ],
};

export const serviceFaq: Record<string, ArticleFaq[]> = Object.fromEntries(services.map((service) => [service.slug, [
  { question: `Do you quote ${service.plural}?`, answer: `Yes. Kim's Blinds can measure and quote ${service.plural}; final recommendations depend on the opening, room and suburb.` },
  { question: `What affects the cost of ${service.plural}?`, answer: service.costNote },
  ...(serviceFaqAddons[service.slug] ?? []),
]])) as Record<string, ArticleFaq[]>;
