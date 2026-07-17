import { Service, OfficeLocation, Article, PatientReview } from "./types";

export const SERVICES: Service[] = [
  {
    id: "ocular-allergies",
    title: "Dry Eye",
    shortDescription: "Dry eye syndrome (also known as Tear Film Dysfunction), is commonly seen with patients having allergies as well which can exacerbate the tear film abnormalities. Dr. Bielory is the leading U.S. expert in ocular surface disorders. Our Center is certified in using specialized testing and treatment to assist in improving ocular surface health.",
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
    iconName: "Eye",
    imageUrl: "/dryeys.jfif"
  },
  {
    id: "immunological-treatments",
    title: "Specialized Immunological Treatments",
    shortDescription: "Dr. Bielory trained at the National Institutes of Health where he evaluated and integrated \"cutting edge\" therapeutic agents in order to restore balance to an overactive immune system that unleashes excessive amounts of proteins that trigger inflammation leading altered immune states",
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
    iconName: "ShieldCheck",
    imageUrl: "/treatment.png"
  },
  {
    id: "drug-allergies",
    title: "Drug Allergy",
    shortDescription: "Antibiotic allergies prevent many patients from using the correct medication to maximize their treatment such as Penicillin based antibiotic treatments. Even in those with true allergy, over 90% will lose this tendency over a 10-year period. Consequently our center have tested over a thousand patients and have been able to provide more than 90% to be treated with the drug of choice.",
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
    iconName: "Pill",
    imageUrl: "/drugallergy.jpg"
  },
  {
    id: "airway-skin-allergies",
    title: "Eye, Nose, Sinus, Ears, & Skin and Asthma",
    shortDescription: "Allergy, commonly intertwined with atopy, is the genetic predisposition to produce an exaggerated immunoglobulin E (IgE) that leads to the heightened immune response to otherwise harmless substances (inhaled or food allergens) in the environment that leads to the development allergic airway diseases that affect the nose (allergic rhinitis), sinuses (sinusitis), and lungs (asthma, allergic bronchopulmonary aspergillosis) as well as other target organs such as the eye (conjunctivitis, allergic conjunctivitis) and skin (atopic dermatitis, urticaria, angioedema) and allergic reactions to venomous stings, latex.",
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
    iconName: "Wind",
    imageUrl: "/eye.jfif"
  },
  {
    id: "allergy-testing",
    title: "Specialized Allergy Testing",
    shortDescription: "Ready to finally get relief? Our team of allergy specialists are ready to welcome you and help you feel at ease. Patients under two years will have a limited testing panel. Skin allergy testing is the most common, reliable and relatively painless form of allergy testing. If you have allergies, just a little swelling will occur at the specific sites where allergic to was introduced. Reactions and results are known within 15-20 minutes. Blood tests are generally reserved for a deeper assessment to immune proteins and cells in difficult cases. Patch testing is a form of skin testing used to determine the cause of allergic contact dermatitis. That takes 2-4 days, or even up to a week, and confirm the presence of sensitivity to a variety of substances, including metals, rubber compounds, fragrances, preservatives and sometimes medications.",
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
    iconName: "ClipboardList",
    imageUrl: "/Allergy.jfif"
  },
  {
    id: "immune-disorders",
    title: "Symptoms of Unknown Origin",
    shortDescription: "There are medical conditions, such as diabetes, hypertension, or asthma, that almost all of us will have heard of. But what about those that are so rare that very few of us will know about. These can be associated with characterized by multiple frustrating and difficult-to-treat symptoms, including dizziness and lightheadedness, skin flushing and itching, skin rashes, gastrointestinal complaints, chronic pain, persistent cough, disorientation, shortness of breath and bone and joint problems. Many are simply treated without a focus of the underlying pathophysiology. Our office attempts to unveil the external and internal allergic and immunologic triggers of these symptoms to maximize the best treatment course.",
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
    iconName: "Activity",
    imageUrl: "/Specialized_testing.webp"
  }
];

export const LOCATIONS: OfficeLocation[] = [
  {
    id: "springfield",
    city: "Springfield, NJ",
    address: "400 Mountain Ave, Springfield, NJ 07081",
    phone: "(973) 912-9817",
    fax: "(973) 912-9812",
    mapUrl: "https://www.google.com/maps/place/400+Mountain+Ave,+Springfield,+NJ+07081",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=400+Mountain+Ave+Springfield+NJ+07081",
    hours: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", hours: "1:00 PM - 5:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
      { day: "Friday", hours: "Closed" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" }
    ]
  },
  {
    id: "wall",
    city: "Wall Township, NJ",
    address: "1937 Route 35, Wall Township, NJ 07719",
    phone: "(973) 912-9817",
    fax: "(732) 449-0112",
    mapUrl: "https://www.google.com/maps/place/1937+NJ-35,+Wall+Township,+NJ+07719",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=1937+NJ-35+Wall+Township+NJ+07719",
    hours: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", hours: "1:00 PM - 5:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
      { day: "Friday", hours: "Closed" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" }
    ]
  }
];

export const TESTIMONIALS: PatientReview[] = [
  {
    id: "review-1",
    name: "Melissa Platt",
    location: "Springfield, NJ",
    rating: 5,
    condition: "Allergy Symptoms",
    text: "Dr. Bielory is extremely kind and caring. He is always up to date on the latest research and was able to recommend a course of treatment that helped my allergy symptoms tremendously. His office staff is courteous and helpful as well. I would recommend Dr. Bielory without hesitation!",
    date: "July 16, 2026"
  },
  {
    id: "review-2",
    name: "Zach Weiner",
    location: "Wall Township, NJ",
    rating: 5,
    condition: "Patient Care",
    text: "I've been a patient of Dr. Bielory's for a couple years now and he has really helped me. I really appreciate that he makes himself available for questions and is a calming voice to explain clearly what's going and all the possible solutions - very happy to call him my doctor and look forward to appointments.",
    date: "June 24, 2026"
  },
  {
    id: "review-3",
    name: "Diana Butto Sibilia",
    location: "Verified Patient",
    rating: 5,
    condition: "Severe Sinus Infection",
    text: "I recently suffered a severe sinus infection requiring multiple courses of antibiotics and steroids. I was having difficulty getting rid of it. It was only when I remembered I had SINUSOL and started using it multiple times daily that I got relief and it started to clear and go away. I continue multiple uses daily and will never stop using this product. I am now hooked and swear by this product which is natural and does not have side effects.",
    date: "May 18, 2026"
  },
  {
    id: "review-4",
    name: "Topher D",
    location: "Verified Patient",
    rating: 5,
    condition: "Patient Education & Care",
    text: "Dr. Bielory is like a walking encyclopedia, and has a style that is helpful and informative. After every visit I feel like I leave smarter and more aware of how to better manage my situation. He listens carefully and checks to make sure you understand so that you don't leave feeling unsure about anything. I know this might sound crazy but I actually look forward to my visits. Absolutely would recommend Dr. Bielory to anyone! (And already recommended him to my mom.)",
    date: "April 30, 2026"
  }
];
export const ARTICLES: Article[] = [
  {
    id: "falcpa-2004",
    title: "Food Allergen Labeling Consumer Protection Act (FALCPA) of 2004",
    category: "Food Allergy",
    excerpt: "Understanding the FALCPA regulations, the key food allergens identified, and how this landmark act protects consumers with food allergies.",
    content: `Are there exceptions to FALCPA labelling? It is also important to realize that sesame, mustard, molluscs and shellfish, such as oysters, clams, mussels or scallops, are not required to be labeled as a major allergen under FALCPA. They are required for labeling in Canada. However, even in United States, these foods must be declared on the ingredient list if they have a technical or functional effect in the product with the exception that they can be hidden in terms such as flavorings on occasion. They cannot be identified in the “contains” statement so consumers must look for them in the ingredient list.

FALCPA affects all packaged foods sold in the United States: conventional foods, vitamins and dietary supplements, infant formula and foods, medical foods, and all retail and food-service products packaged for sale.

Exclusions from FALCPA include: prescription and over-the counter drugs, personal care items (such as cosmetics, shampoo, mouth wash, toothpaste or shaving cream), pet foods and supplies, any food products regulated by the United States Department of Agriculture (USDA) Food Safety and Inspection Service (FSIS) (meat and poultry products and whole eggs), any food product regulated by the Alcohol and Tobacco Tax and Trade Bureau. Although the USDA FSIS encourages food companies to follow FALCPA, they are not obligated to do so.

Some things made from certain food sources are exempt from labels. For example, highly refined oils from soybean are exempt from source labeling. Raw agricultural products (corn, rice) may contain low levels of a different allergenic crop (soybean, wheat) due to shared farm equipment and are not labeled. Some ingredients including spices and colorants do not have to be labeled unless they are any of the big eight allergens.

How dangerous are precautionary labels or “may contain” statements? You may also see Precautionary Allergen Labels (PAL), more commonly known as “may contain” statements. In contrast to the regulations imposed by FALCPA, PALs are voluntary, not standardized, and not mandated by law in the United States or any other country. Companies may use PALs to signify that there may be some risk of unintentional contamination of their product with certain allergens. Some foods labeled with PALs have little or no contamination, for others it can be fairly high or on occasion. Similar to PALs, restaurants may provide precautionary statements (e.g. “We cannot guarantee that…”). The inconsistency and vagueness of PALs are particularly problematic because they do not provide you with a clear sense of how risky ingesting the food is. A contrasting analogy can be made during risk evaluation of crossing the street. Anyone can be at risk of an accident when crossing a road, but usually it is obvious how much traffic there is and how dangerous it might be to cross at any given time (e.g. walk sign versus stop sign). Therefore, until there are better and more standardized PAL practices, many choose to avoid foods that have a PAL or “may contain” statement.  

Because PAL statements are voluntary, many different wordings are used in PAL statements. If PALs are used, they are legally required to be truthful and not misleading. No matter the language, it does not change the amount of risk. Common examples of PALs include (where X can be peanut, tree nut, egg, milk, etc.):

a. May contain X

b. Made in a facility that uses or processes X

c. Made on shared equipment with X

d. Not guaranteed to be free of X

What about international food labels, or when I travel?Food products made in other countries still have to comply with FALCPA if they are officially imported into and sold in the United States. Other countries have different labelling practices and laws.  

In addition to the eight allergens covered by FALCPA, in Canada additional allergens are mandated to be labeled in “contains” statements: sesame, molluscan shellfish (snails, octopus, clams and scallops), mustard and sulfites (a preservative). In Japan, buckwheat, peanut, milk, egg, shrimp and crab must be labeled.`,
    author: "Leonard Bielory",
    date: "14 July, 2021",
    readTime: "5 min read",
    imageUrl: "/food.png"
  },
  {
    id: "eye-allergy-overview",
    title: "Eye Allergy Overview",
    category: "Ocular Immunology",
    excerpt: "A comprehensive overview of eye allergies, also known as allergic conjunctivitis, detailing common triggers, symptoms, and options for long-term relief.",
    content: `Also called allergic conjunctivitis or ocular allergy, eye allergy occurs when something you are allergic to irritates the conjunctiva. This is the delicate membrane covering the eye and the inside of the eyelid.

Like all allergies, allergic conjunctivitis starts when the immune system identifies an otherwise harmless substance as an allergen. This causes your immune system to overreact and produce antibodies called immunoglobulin (ige). These antibodies travel to cells that release chemicals which cause an allergic reaction. In this case, allergic reactions include eyes that water, itch, hurt or become red or swollen.

The most common causes of allergic conjunctivitis are seasonal allergens such as pollen and mold spores. People with seasonal allergic rhinitis (hay fever) normally notice their symptoms worsen when they go outdoors on days with high pollen counts.

Indoor allergens such as dust mites and pet dander can also cause eye allergies year-round. If you suffer from this type of allergy, you may notice your symptoms worsen during certain activities such as cleaning your house or grooming a pet.

Eye allergy symptoms can be very annoying. Yet they pose little threat to eyesight other than temporary blurriness. Unlike conditions such as pink eye, allergic conjunctivitis is not contagious.

However, red, itchy, burning and puffy eyes can be caused also by infections and other conditions that can threaten eyesight.

If your symptoms are related to an eye allergy, chances are you will have problems in both eyes.

Typical symptoms include:
•    watery eyes
•    itchiness
•    sensitivity to light
•    redness
•    grittiness
•    eyelid swelling

These symptoms can occur alone or along with allergic rhinitis nasal symptoms. They typically appear shortly after exposure to the allergen.

Symptoms resulting from seasonal outdoor allergens tend to be worse than if your symptoms are due to indoor allergens such as dust mites or pet dander.

Symptoms may be reduced if you are taking allergy medications such as antihistamines, which suppress the allergic reaction.

The first step toward relief from annoying eye allergy symptoms is a proper diagnosis.

Eye allergy treatment & management

If indoor allergens are causing your eye allergy symptoms, avoidance is the key to relief. Use a vacuum with a hepa filter to reduce dust in your home or try keeping pets out of the bedroom to reduce exposure to their dander.

If pollen and other seasonal allergens are causing your misery, here are a few helpful suggestions:

Wear a hat with a wide brim to reduce the amount of allergen that blows into the eyes.
Sunglasses can also help reduce the amount of allergen that lands in the eyes.
Apply saline eye drops to the eyes after being outdoors to wash away allergens from the ocular lining.
Over-the-counter antihistamine pills and eye drops are often used for short-term treatment of eye allergy symptoms. However, prolonged use of some eye drops may actually make your symptoms worse as they may exacerbate patients having dry eyes along with their ocular allergies.

Your doctor may prescribe stronger medications if your symptoms are long-lasting.

Corticosteroid eye drops are effective, but they often have side effects, even when used only for a short time. Use of this medication should be managed by an ophthalmologist due to the risk of side effects, such as glaucoma (increased ocular pressure), cataracts and infection.

Depending on what is causing your eye allergy symptoms, immunotherapy (allergy shots) can be very effective in providing long-term resistance to the triggering allergens.

 

A LIST OF PUBLICATIONS IS PROVIDED BELOW.

 

Bielory, L. (2000). Allergic And Immunologic Disorders Of The Eye. Part Ii: Ocular Allergy. J Allergy Clin Immunol, 106(6), 1019-1032. DOI:10.1067/MAI.2000.111238

Bielory, L. (2002a). Ocular Allergy Guidelines: A Practical Treatment Algorithm. Drugs, 62(11), 1611-1634. HTTP://WWW.NCBI.NLM.NIH.GOV/PUBMED/12109924

Bielory, L. (2002b). Update On Ocular Allergy Treatment. Expert Opin Pharmacother, 3(5), 541-553. DOI:10.1517/14656566.3.5.541

Bielory, L. (2007). Differential Diagnoses Of Conjunctivitis For Clinical Allergist-Immunologists. Ann Allergy Asthma Immunol, 98(2), 105-114; QUIZ 114-107, 152. DOI:10.1016/S1081-1206(10)60681-3

Bielory, L. (2008). Ocular Allergy Overview. Immunol Allergy Clin North Am, 28(1), 1-23, V. DOI:10.1016/J.IAC.2007.12.011

Bielory, L. (2010). Allergic Conjunctivitis And The Impact Of Allergic Rhinitis. Curr Allergy Asthma Rep, 10(2), 122-134. DOI:10.1007/S11882-010-0087-1

Bielory, L. (2020). Allergic Inflammation Of The Anterior Surface Of The Eye. Allergy Asthma Proc, 41(6), 449-453. DOI:10.2500/AAP.2020.41.200068

Bielory, L., Delgado, L., Katelaris, C. H., Leonardi, A., Rosario, N., & Vichyanoud, P. (2020). ICON: Diagnosis And Management Of Allergic Conjunctivitis. Ann Allergy Asthma Immunol, 124(2), 118-134. DOI:10.1016/J.ANAI.2019.11.014

Bielory, L., & Friedlaender, M. H. (2008). Allergic Conjunctivitis. Immunol Allergy Clin North Am, 28(1), 43-58, VI. DOI:10.1016/J.IAC.2007.12.005

Bielory, L., Katelaris, C. H., Lightman, S., & Naclerio, R. M. (2007). Treating The Ocular Component Of Allergic Rhinoconjunctivitis And Related Eye Disorders. Medgenmed, 9(3), 35.HTTPS://WWW.NCBI.NLM.NIH.GOV/PUBMED/18092041

Bielory, L., Lien, K. W., & Bigelsen, S. (2005). Efficacy And Tolerability Of Newer Antihistamines In The Treatment Of Allergic Conjunctivitis. Drugs, 65(2), 215-228. HTTP://WWW.NCBI.NLM.NIH.GOV/PUBMED/15631542

Bielory, L., Meltzer, E. O., Nichols, K. K., Melton, R., Thomas, R. K., & Bartlett, J. D. (2013). An Algorithm For The Management Of Allergic Conjunctivitis. Allergy Asthma Proc, 34(5), 408-420. DOI:10.2500/AAP.2013.34.3695

Bielory, L., & Mongia, A. (2002). Current Opinion of Immunotherapy for Ocular Allergy. Curr Opin Allergy Clin Immunol, 2(5), 447-452. HTTP://WWW.NCBI.NLM.NIH.GOV/PUBMED/12582330

Bielory, L., & Schoenberg, D. (2019). Emerging Therapeutics for Ocular Surface Disease. Curr Allergy Asthma Rep, 19(3), 16. DOI:10.1007/S11882-019-0844-8

Bielory, L., & Schoenberg, D. (2019). Ocular Allergy: Update On Clinical Trials. Curr Opin Allergy Clin Immunol, Publish Ahead Of Print. DOI:10.1097/ACI.0000000000000564

Elieh Ali Komi, D., Rambasek, T., & Bielory, L. (2018). Clinical Implications of Mast Cell Involvement in Allergic Conjunctivitis. Allergy, 73(3), 528-539. DOI:10.1111/ALL.13334

Groneberg, D. A., Bielory, L., Fischer, A., Bonini, S., & Wahn, U. (2003). Animal Models of Allergic And Inflammatory Conjunctivitis. ALLERGY, 58(11), 1101-1113. HTTP://WWW.NCBI.NLM.NIH.GOV/PUBMED/14616119

HTTP://ONLINELIBRARY.WILEY.COM/STORE/10.1046/J.1398-9995.2003.00326.X/ASSET/J.1398-9995.2003.00326.X.PDF?V=1&T=I0RVL49K&S=D5BBE41A504234CEB5C090048ED299ACF5FBC794

Nye, M., Rudner, S., & Bielory, L. (2013). Emerging Therapies In Allergic Conjunctivitis And Dry Eye Syndrome. Expert Opin Pharmacother, 14(11), 1449-1465. DOI:10.1517/14656566.2013.802773

Rosario, N., & Bielory, L. (2011). Epidemiology Of Allergic Conjunctivitis. Curr Opin Allergy Clin Immunol, 11(5), 471-476. DOI:10.1097/ACI.0B013E32834A9676`,
    author: "Leonard Bielory",
    date: "24 February, 2021",
    readTime: "4 min read",
    imageUrl: "/Allergyeye.jpg"
  },
  {
    id: "cough-covid-vs-allergies",
    title: "Cough: COVID 19 versus allergic-cough, asthma-cough, chronic cough",
    category: "Respiratory Health",
    excerpt: "How to differentiate between a cough caused by COVID-19, environmental allergies, bronchial asthma, or other chronic conditions.",
    content: `Cough, scratchy throat, headaches and other common COVID symptoms are also seasonal allergy symptoms. Cough is a vital protective reflex that is triggered by both mechanical and chemical stimuli. Last time the FDA approved a treatment for cough was in 1958 with modest impact. The cough is commonly described as being …”like having seasonal allergies” or from exposure to mold and dust as holiday ornaments are brought out this time of year. Covid-19 associated cough can be present during active virus, linger long after the virus is gone, and then become a "Chronic Cough" as part of a “post viral syndrome”.  As I have reported in comparing allergies and COVID 19 symptoms,  Chronic Cough should not become part of anyone’s new normal. Advanced diagnostic approach and comprehensive, evidence based cough treatment can be distinguished by an allergy assessment. It has been reported that over 85% of patients diagnosed and thus treated can demonstrate measurable relief and report a vast improvemeant in the quality of their daily lives.

Decreases in cough reflex sensitivity from sucrose or menthol could help explain why cough syrups without pharmacologically active ingredients are often almost as effective as formulations with an added drug (Complementary and alternative interventions in asthma, allergy, and immunology) as it has been noted that sweet taste may alter cough thresholds (Sweet Taste and Menthol Increase Cough Reflex Thresholds). This provides additional support that sweet taste can suppress cough sensitivity, and supports and extends previous work by showing that menthol alone (as opposed to menthol mixed with eucalyptol) can suppress cough sensitivity. - components found in the Sinusol® formulation.

This also further supports the wife's tale that honey could be effective at reducing the symptoms of acute coughs due to upper respiratory tract infections (infections of the airways), including how often people coughed and how bad their cough was. The guidance applies to adults and children over 5 years of age. It's important to note that honey is not safe for children under the age of 1. (A spoonful of honey helps a coughing child sleep)

Allergic-cough | Asthma-cough | Chronic cough | Cough | Covid-19`,
    author: "Leonard Bielory",
    date: "24 February, 2021",
    readTime: "6 min read",
    imageUrl: "/covid.jpg"
  },
  {
    id: "intranasal-treatments-allergies-viral",
    title: "Intranasal Treatments: Allergies and potentially viral infections including COVID 19",
    category: "Allergy Treatment",
    excerpt: "An exploration of intranasal treatments, their efficacy in managing environmental allergies, and their potential role in mitigating viral infections.",
    content: `Intranasal drug administration has a long tradition and is still used for medical as well as recreational purposes. The most common use is for treatment of local symptoms e.g. nasal congestion in the course of a common rhinitis or inflammation linked to allergic rhinitis. Dr. Bielory, as an international member of the World Allergy Organization committee recently published an international expert consensus focusing on current and future directions in the management of allergic rhinitis  (Source 1). It has ben noted that the medications intended for local activity are well established and can be found across the globe in every pharmacy and drug store. Examples for topical treatment of rhinitis are decongestants (oxymetazoline, xylometazoline, naphazoline), anti-histamines (azelastine, levocabastine, olopatadine) and glucocorticoids (e.g. mometasone, budesonide, fluticasone) and natural holistic products including Sinusol Breathe Easy. For this particular indication, drugs should act fast and only locally while systemic absorption should be as low as possible; this to avoid systemic side effects which are linked with typical oral formulations of comparable drug substances. Intranasal treatments have also recently reported the potential impact of intranasal treatment of allergies has also been shown to have an effect on allergies affecting the eye (Dr. Bielory references: Source 2 - Ocular symptoms improvement from intranasal; Source 3 - Allergic conjunctivitis and the impact of allergic rhinitis)

 Vaccines may also benefit from the intranasal route. Existing vaccines commonly utilize the intramuscular and oral administration route. While the respiratory and gastrointestinal tract is very immune competent and fights with microbes permanently, the muscle is not the first choice. Intramuscular vaccination primarily induces systemic immune response, mainly via formation of vaccine-strain specific circulating antibodies. Injections of vaccines were done since the early days and they are indeed effective. So for most people today vaccination is equal to getting an intramuscular injection which is linked to pain. For the health care professional it is linked to fears of needle stick injuries, risk of disease transmission and dangerous medical waste.

Covid-19 | Intransel Treatments`,
    author: "Leonard Bielory",
    date: "24 February, 2021",
    readTime: "5 min read",
    imageUrl: "/intranasaltreatments.jpg"
  }
];
