import { Service, OfficeLocation, Article, PatientReview } from "./types";

export const SERVICES: Service[] = [
  {
    id: "ocular-allergies",
    title: "Dry Eye & Ocular Surface Disorders",
    shortDescription: "Specialized diagnostics and comprehensive management for dry eyes, ocular allergies, and meibomian gland dysfunction.",
    longDescription: "Ocular allergy and dry eye syndrome often overlap, causing significant discomfort and vision fluctuation. As a leading national pioneer in ocular immunology, Dr. Bielory provides targeted testing to differentiate simple allergies from tear film disorders. Treatments range from customized prescription anti-inflammatory drops to advanced tear stimulation and meibomian gland therapies, ensuring sustained relief and eye health preservation.",
    symptoms: [
      "Persistent itching, burning, or stinging in the eyes",
      "Sensation of grit or sand in the eyes",
      "Excessive watering or tearing followed by dryness",
      "Redness, swollen eyelids, and blurry vision",
      "Sensitivity to light or wind"
    ],
    treatments: [
      "Ocular surface inflammation analysis",
      "Prescription immunomodulatory eye drops",
      "Autologous serum tear therapies",
      "Meibomian gland hygiene and physical stimulation",
      "Punctal plugs for tear retention"
    ],
    iconName: "Eye"
  },
  {
    id: "immunological-treatments",
    title: "Specialized Immunological Treatments",
    shortDescription: "Advanced biologic therapies and targeted treatments for severe allergic and immunological conditions.",
    longDescription: "Modern immunology has unlocked highly targeted treatments called biologics. For patients with severe, uncontrolled asthma, chronic hives (urticaria), or severe eczema (atopic dermatitis) who do not respond to traditional options, Dr. Bielory prescribes and monitors groundbreaking biologic therapies. These treatments target specific proteins in the immune cascade, preventing severe symptoms and restoring quality of life.",
    symptoms: [
      "Severe asthma attacks requiring frequent steroid rescue",
      "Chronic hives lasting for weeks or months without a clear trigger",
      "Intractable skin itching and weeping eczema",
      "Frequent flare-ups of chronic sinus polyps"
    ],
    treatments: [
      "Monoclonal antibody therapies (e.g., Xolair, Dupixent, Nucala, Fasenra)",
      "Detailed immune pathway profiling",
      "Subcutaneous immunoglobulin (SCIG) infusion management",
      "Continuous clinical response and safety monitoring"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "drug-allergies",
    title: "Drug Allergy Testing & Desensitization",
    shortDescription: "Accurate testing and desensitization programs for antibiotics, aspirin, and local anesthetics.",
    longDescription: "Many patients carry a label of 'penicillin allergic' from childhood, which is often inaccurate or has resolved over time. This label can restrict access to optimal medical treatments. Dr. Bielory provides state-of-the-art drug allergy evaluations, including safe in-office oral challenges and drug desensitization, ensuring patients can safely receive essential antibiotic therapies, local anesthetics, or aspirin regimens.",
    symptoms: [
      "Hives or skin rashes after taking an antibiotic",
      "Swelling of the lips, face, or tongue following medication",
      "Shortness of breath or wheezing shortly after drug administration",
      "Gastrointestinal upset paired with cutaneous reactions"
    ],
    treatments: [
      "Penicillin skin testing and graded oral challenges",
      "Aspirin desensitization for cardiac or respiratory conditions",
      "Local anesthetic (dental/surgical) allergy evaluations",
      "Alternative medication compatibility mapping"
    ],
    iconName: "Pill"
  },
  {
    id: "airway-skin-allergies",
    title: "Allergies (Eye, Nose, Sinus, Skin) & Asthma",
    shortDescription: "Comprehensive treatment for hay fever, allergic rhinitis, asthma, eczema, and hives.",
    longDescription: "Allergic reactions in the respiratory system, sinuses, and skin often share a common immune root. Dr. Bielory takes a holistic approach to managing the upper and lower airways—often referred to as 'one airway, one disease.' By treating nasal allergies, sinus congestion, and bronchial asthma in tandem, we achieve superior outcomes. Our customized management plans combine environmental controls, modern medication, and targeted therapies.",
    symptoms: [
      "Seasonal or year-round sneezing, runny nose, and congestion",
      "Chronic sinus pressure, headaches, and post-nasal drip",
      "Wheezing, shortness of breath, chronic cough, and chest tightness",
      "Itchy, flaky skin rashes, or sudden itchy hives"
    ],
    treatments: [
      "Personalized allergen exposure avoidance training",
      "Customized inhaler and nasal spray optimization",
      "Targeted skin barrier repair and topical therapy regimens",
      "Pulmonary function testing (Spirometry) and airway inflammation assessment"
    ],
    iconName: "Wind"
  },
  {
    id: "allergy-testing",
    title: "Specialized Allergy Testing",
    shortDescription: "Advanced skin prick, patch, and blood testing to pinpoint exact environmental and chemical triggers.",
    longDescription: "Effective treatment depends on precise diagnosis. Dr. Bielory utilizes a full spectrum of allergy diagnostic tools. Skin prick testing identifies immediate hypersensitivities to environmental pollens, molds, pet dander, and dust mites. For delayed allergic contact dermatitis (reactions to cosmetics, metals, or chemicals), patch testing is conducted. Comprehensive blood assays are used when skin testing is impractical.",
    symptoms: [
      "Unexplained seasonal symptoms or worsening around animals",
      "Chronic rashes that appear several days after using specific products",
      "Persistent sinus congestion without a known cause",
      "Severe reactions to insect stings"
    ],
    treatments: [
      "In-office environmental skin prick testing (immediate results)",
      "Comprehensive multi-allergen Patch Testing (Thin-layer Rapid Patch Test)",
      "Component-resolved molecular blood testing (IgE testing)",
      "Stinging insect (venom) allergy testing"
    ],
    iconName: "ClipboardList"
  },
  {
    id: "immune-disorders",
    title: "Immune Disorders & Symptoms of Unknown Origin",
    shortDescription: "Diagnostic workup and clinical management of primary immunodeficiencies and unexplained systemic symptoms.",
    longDescription: "When patients suffer from unusually frequent, severe, or hard-to-treat infections, or face unexplained chronic systemic symptoms, an underlying immune system imbalance may be responsible. Dr. Bielory performs detailed clinical evaluations of the immune system's cellular and humoral arms to diagnose primary immunodeficiencies, mast cell activation disorders, and auto-inflammatory syndromes, crafting tailored management strategies.",
    symptoms: [
      "Multiple severe sinus or ear infections within a single year",
      "Infections requiring recurrent or prolonged courses of intravenous antibiotics",
      "Unexplained recurrent fevers, joint pain, or flushing",
      "Severe, unexplained fatigue paired with shifting physical symptoms"
    ],
    treatments: [
      "Quantitative immunoglobulin level analysis and vaccine response testing",
      "T and B-lymphocyte functional assays",
      "Mast cell mediator testing and activation management",
      "Intravenous and subcutaneous immunoglobulin replacement coordination"
    ],
    iconName: "Activity"
  }
];

export const LOCATIONS: OfficeLocation[] = [
  {
    id: "springfield",
    city: "Springfield, NJ",
    address: "100 Morris Avenue, Suite 105, Springfield, NJ 07081",
    phone: "(973) 912-9811",
    fax: "(973) 912-9812",
    mapUrl: "https://maps.google.com/?q=100+Morris+Avenue+Springfield+NJ+07081",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=100+Morris+Avenue+Suite+105+Springfield+NJ+07081",
    hours: [
      { day: "Monday", hours: "9:00 AM - 5:00 PM" },
      { day: "Tuesday", hours: "9:00 AM - 6:30 PM" },
      { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
      { day: "Thursday", hours: "10:00 AM - 7:00 PM" },
      { day: "Friday", hours: "9:00 AM - 4:00 PM" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" }
    ]
  },
  {
    id: "wall",
    city: "Wall Township, NJ",
    address: "1967 Highway 34, Suite 101, Wall Township, NJ 07719",
    phone: "(732) 449-0111",
    fax: "(732) 449-0112",
    mapUrl: "https://maps.google.com/?q=1967+Highway+34+Wall+Township+NJ+07719",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=1967+Highway+34+Suite+101+Wall+Township+NJ+07719",
    hours: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
      { day: "Thursday", hours: "Closed" },
      { day: "Friday", hours: "9:00 AM - 5:00 PM" },
      { day: "Saturday", hours: "8:30 AM - 12:30 PM (Bi-weekly)" },
      { day: "Sunday", hours: "Closed" }
    ]
  }
];

export const TESTIMONIALS: PatientReview[] = [
  {
    id: "review-1",
    name: "Eleanor S.",
    location: "Springfield, NJ",
    rating: 5,
    condition: "Severe Ocular Allergy & Dry Eyes",
    text: "For years I visited eye doctors who simply told me I had dry eyes and prescribed standard drops, but my eyes remained bloodshot, itchy, and burning. Dr. Bielory was the first to recognize my condition was immunologically driven. He conducted a thorough workup and put me on a customized regimen. Within three weeks, my symptoms improved by 90%. His scientific expertise is matched only by his kindness.",
    date: "May 12, 2026"
  },
  {
    id: "review-2",
    name: "Marcus G.",
    location: "Wall Township, NJ",
    rating: 5,
    condition: "Chronic Uncontrolled Asthma",
    text: "My asthma was so severe that I was hospitalized twice last year and relied heavily on prednisone. Dr. Bielory introduced me to biologic therapies. He explained the underlying immune mechanism in terms I could actually understand. I'm now on a monthly biologic injection and have not needed my rescue inhaler in six months. He truly saved my quality of life.",
    date: "March 28, 2026"
  },
  {
    id: "review-3",
    name: "Sarah M.",
    location: "Summit, NJ",
    rating: 5,
    condition: "Penicillin Allergy Label",
    text: "I was told I was allergic to penicillin as a baby and spent my whole life taking expensive, heavy-duty alternative antibiotics. Dr. Bielory did a safe, precise skin test and a monitored oral challenge. Turns out, I am NOT allergic! Removing that label from my medical files is a massive relief for my future healthcare. The office staff was incredibly reassuring throughout the testing.",
    date: "June 2, 2026"
  },
  {
    id: "review-4",
    name: "James D.",
    location: "Belmar, NJ",
    rating: 5,
    condition: "Severe Environmental Allergies",
    text: "Spring and fall in New Jersey were absolute torture for me—constant sneezing, sinus headaches, and fatigue. After starting tailored immunotherapy at Dr. Bielory's office, my outdoor allergies are practically gone. I can enjoy gardening and hiking again without a mountain of tissues. The Wall office is efficient, modern, and has virtually no wait time.",
    date: "April 15, 2026"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "understanding-ocular-allergies",
    title: "Understanding Ocular Allergies: Why Your Eyes Are Dry, Red, and Itchy",
    category: "Ocular Immunology",
    excerpt: "Discover the immunological link between seasonal allergies and chronic dry eye, and learn about targeted therapies that go beyond basic artificial tears.",
    content: "Ocular allergies are a highly common but frequently misunderstood subset of allergic reactions. Many patients present with burning, red, and swollen eyes, assuming they have standard dry eye syndrome, and cycle through dozens of over-the-counter lubricating drops without finding relief.\n\nIn reality, these symptoms are often driven by an overactive ocular immune system. When airborne allergens like grass, tree pollen, or pet dander land on the moist surface of the eye, they bind to IgE antibodies on mast cells. This triggers the release of histamine and other inflammatory mediators, causing the classic symptoms of allergic conjunctivitis.\n\nFurthermore, chronic allergic inflammation can damage the delicate goblet cells and meibomian glands on the eyelids, which are responsible for producing the essential mucus and lipid layers of your tear film. Without these layers, tears evaporate too quickly, leading to secondary dry eye syndrome.\n\n### Strategic Treatments\nEffective management requires addressing both the allergic trigger and the surface inflammation:\n1. **Prescription Antihistamine/Mast Cell Stabilizers**: Drops like Alcaftadine or Olopatadine block histamines and prevent further mast cell degranulation.\n2. **Short-term Corticosteroid Drops**: Under strict medical supervision, mild steroid drops can rapidly break the cycle of severe ocular surface inflammation.\n3. **Immunomodulators**: Long-term prescription drops help regulate the local immune response and promote natural tear production.\n4. **Environmental Control**: Wearing wrap-around sunglasses outdoors, utilizing high-efficiency HEPA air filters, and washing your face immediately after spending time outdoors can dramatically reduce allergen exposure.",
    author: "Leonard Bielory, M.D.",
    date: "June 14, 2026",
    readTime: "5 min read"
  },
  {
    id: "biologics-asthma-allergy",
    title: "Biologics in Asthma & Allergy: A Revolutionary Treatment Frontier",
    category: "Advanced Immunology",
    excerpt: "An expert look at how monoclonal antibodies are transforming the treatment of severe asthma, eczema, and chronic hives by targeting precise immune pathways.",
    content: "For decades, patients with severe, uncontrolled asthma, chronic hives, or debilitating eczema had few therapeutic options other than high-dose inhaled steroids or frequent courses of oral prednisone. While steroids are effective anti-inflammatories, their long-term systemic side effects—ranging from bone thinning and cataracts to high blood pressure and weight gain—pose major risks.\n\nEnter the era of biologics. Biologics are highly specialized, laboratory-engineered antibodies designed to bind to very specific targets in the body's immune system, blocking the precise proteins responsible for driving allergic inflammation.\n\n### How Biologics Work\nAllergic diseases are often driven by what immunologists call 'Type 2 Inflammation.' This pathway involves signaling proteins (cytokines) such as Interleukin-4 (IL-4), Interleukin-5 (IL-5), and Interleukin-13 (IL-13), as well as Immunoglobulin E (IgE).\n\n- **Anti-IgE Therapy (e.g., Omalizumab / Xolair)**: Binds to circulating IgE antibodies, preventing them from attaching to mast cells and basophils. This is highly effective for moderate-to-severe allergic asthma and chronic spontaneous hives.\n- **Anti-IL-5 Therapies (e.g., Mepolizumab / Nucala, Benralizumab / Fasenra)**: Targets IL-5 or its receptor, which regulates eosinophils—a white blood cell that causes severe airway swelling. These are game-changers for eosinophilic asthma.\n- **Anti-IL-4/IL-13 Therapy (e.g., Dupilumab / Dupixent)**: Dual-blocks the IL-4 and IL-13 receptors, halting the primary cascade of Type 2 inflammation. It is widely used to treat severe eczema, moderate-to-severe asthma, and chronic rhinosinusitis with nasal polyps.\n\nBecause biologics target the root immune source of the disease rather than suppressing the entire body, they are exceptionally safe and have transformed patients' lives by reducing asthma flare-ups by over 50% and clearing severe eczema rashes.",
    author: "Leonard Bielory, M.D.",
    date: "April 29, 2026",
    readTime: "7 min read"
  },
  {
    id: "penicillin-allergy-debunked",
    title: "The Penicillin Allergy Label: Why 90% of Allergic Patients Are Actually Safe",
    category: "Drug Allergy",
    excerpt: "Carrying a penicillin allergy label from childhood can severely impact your healthcare. Learn why most allergies resolve over time and how testing can remove it.",
    content: "Approximately 10% of the U.S. population reports an allergy to penicillin. However, clinical studies show that **90% of these individuals are not actually allergic** when formally tested.\n\n### Why is this label so common, and why does it disappear?\nThere are several reasons why so many patients carry an incorrect penicillin allergy label:\n1. **Viral Rashes Misidentified as Allergies**: Young children frequently develop skin rashes when they have viral infections. If they happen to be taking amoxicillin or penicillin at the time, the rash is often incorrectly attributed to the drug rather than the virus.\n2. **Natural Resolution**: IgE-mediated drug allergies naturally fade over time. Approximately 50% of people with a true penicillin allergy lose their sensitivity within five years, and about 80% lose it within ten years.\n3. **Non-Allergic Side Effects**: Mild side effects like nausea or diarrhea are sometimes mistaken for true, potentially life-threatening allergic reactions.\n\n### The Cost of a False Label\nCarrying a penicillin allergy label is not harmless. It forces doctors to prescribe alternative, broad-spectrum antibiotics. These alternatives are often more expensive, have more side effects, and are less effective at curing the target infection. This also contributes to the global crisis of antibiotic resistance.\n\n### How We Delabel Patients Safely\nAt our allergy clinics in Springfield and Wall Township, we follow a safe, three-step delabeling protocol:\n- **Clinical History Review**: We assess the details of the original reaction (e.g., how long ago it occurred, presence of hives, swelling, or breathing issues).\n- **Skin Testing**: We perform a superficial skin prick test with major and minor penicillin determinants, followed by a small intradermal test. This takes about 30 minutes and is highly accurate.\n- **Supervised Oral Challenge**: If skin tests are negative, we administer a small dose of amoxicillin in our office and monitor the patient closely for an hour. Once cleared, the penicillin allergy label is officially removed from their medical record.",
    author: "Leonard Bielory, M.D.",
    date: "May 22, 2026",
    readTime: "6 min read"
  }
];
