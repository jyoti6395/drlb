import { useState } from "react";
import { 
  Award, 
  BookOpen, 
  GraduationCap, 
  CheckCircle, 
  Shield, 
  Sparkles, 
  Heart, 
  User, 
  Stethoscope, 
  FileText, 
  Globe, 
  FlaskConical, 
  ScrollText, 
  ArrowRight,
  ShieldAlert
} from "lucide-react";

interface AboutViewProps {
  setView: (view: string) => void;
  onBookClick: () => void;
}

export default function AboutView({ setView, onBookClick }: AboutViewProps) {
  const [activeTab, setActiveTab] = useState<string>("bio");

  const education = [
    {
      degree: "Board Certified in Allergy and Immunology",
      spec: "Adult & Pediatrics",
      institution: "American Board of Allergy and Immunology",
    },
    {
      degree: "Board Certified in Diagnostic Laboratory Immunology",
      spec: "Laboratory Immunology Diagnostics",
      institution: "American Board of Allergy and Immunology",
    },
    {
      degree: "Fellowship in Allergy and Immunology",
      institution: "National Institutes of Health (NIH) - National Institute of Allergy and Infectious Diseases, Bethesda, MD",
      desc: "Unique fellowship training in clinical and research immunology."
    },
    {
      degree: "Fellowship in Hematology",
      institution: "National Institutes of Health (NIH) - National Heart, Lung and Blood Institute, Bethesda, MD",
      desc: "Specialized clinical and laboratory research fellowship."
    },
    {
      degree: "Doctor of Medicine (M.D.)",
      institution: "New Jersey Medical School, Rutgers University",
    },
    {
      degree: "M.S. in Molecular Biology",
      institution: "Lehigh University, Bethlehem, PA",
    },
    {
      degree: "B.S. in Fundamental Sciences",
      institution: "Lehigh University, Bethlehem, PA",
    }
  ];

  const appointments = [
    {
      role: "Professor of Medicine, Allergy, Immunology and Ophthalmology",
      org: "Hackensack Meridian School of Medicine",
      type: "Current"
    },
    {
      role: "Professor of Allergy and Immunology (Department of Medicine)",
      org: "Thomas Jefferson University - Sidney Kimmel School of Medicine",
      type: "Current"
    },
    {
      role: "Director",
      org: "Rutgers - Asthma and Allergy Research Center",
      type: "Previous"
    },
    {
      role: "Professor of Medicine, Pediatrics in Ophthalmology",
      org: "Rutgers University",
      type: "Previous"
    }
  ];

  const serviceCommittees = [
    "World Allergy Organization Committee on Climate Change",
    "World Allergy Organization Committee on Probiotics for Allergic Diseases",
    "World Allergy Organization Committee on Environmental Health",
    "Chair, American Academy of Allergy, Asthma and Immunology (AAAAI) National Allergy Bureau and Aerobiology Committee",
    "Dermatologic and Ocular Disease Interest Section, American Academy of Allergy, Asthma and Immunology (AAAAI)",
    "AAAAI - Immunotherapy, Rhinitis, Sinusitis, Ocular Diseases and Cough Interest Section",
    "Chair, Environmental Committee, American College of Allergy, Asthma and Immunology (ACAAI)",
    "Integrative Medicine Committee, American College of Allergy, Asthma and Immunology (ACAAI)",
    "Member, New Jersey Department of Environmental Protection, Clean Air Council of New Jersey (Governor Appointed)",
    "Vice President, Allergists for Israel"
  ];

  const researchActivities = [
    {
      sponsor: "Environmental Protection Agency (EPA)",
      title: "Climate Change and Allergic Airway Disease",
      role: "Principal Investigator"
    },
    {
      sponsor: "National Institutes of Health (NIH)",
      title: "Scientific Advances in Complementary and Alternative Medicine: Advances in Allergy, Asthma and Immunology",
      role: "Reviewer / Investigator"
    },
    {
      sponsor: "Centers for Disease Control and Prevention (CDC)",
      title: "Addressing Asthma from A Public Health Perspective",
      role: "Collaborating Specialist"
    },
    {
      sponsor: "National Institutes of Health (NIH) - NHLBI",
      title: "Raynaud's Treatment Study",
      role: "Chairman"
    },
    {
      sponsor: "Environmental Protection Agency (EPA)",
      title: "Community Based In-Home Asthma Environmental Education and Management",
      role: "Principal Investigator"
    }
  ];

  const publications = [
    {
      authors: "Lawley TJ, Bielory L, et al",
      title: "A prospective clinical and immunologic analysis of patients with serum sickness.",
      journal: "N. Engl. J. Med.",
      year: "1984"
    },
    {
      authors: "Bielory L, Gascon P, et al",
      title: "Serum sickness and haematopoietic recovery with antithymocyte globulin in bone marrow failure patients.",
      journal: "Brit. J. Haematol.",
      year: "1986"
    },
    {
      authors: "Bielory L, Noble K, Frohman L",
      title: "Urticarial Vasculitis and Visual Loss.",
      journal: "J Allergy Clin Immunol.",
      year: "1991"
    },
    {
      authors: "Bielory L",
      title: "Systemic Mastocytosis (SM): A Diagnostic Challenge.",
      journal: "Ann. Allergy, Asthma & Immunol.",
      year: "1995"
    },
    {
      authors: "The Raynaud's Treatment Study Investigators (Bielory L – RTS Chairman)",
      title: "Comparison of Sustained-Release Nifedipine and temperature Biofeedback for Primary Raynaud’s Phenomenon: results from a randomized Clinical Trial with 1-Year Follow-up.",
      journal: "Arch Int Med",
      year: "2000"
    },
    {
      authors: "Bielory L",
      title: "Allergic and immunologic disorders of the eye. Part I & 2: Immunology of the Eye.",
      journal: "J Allergy Clin Immunol.",
      year: "2000"
    },
    {
      authors: "Bielory L",
      title: "Complementary and alternative interventions in asthma, allergy, and immunology.",
      journal: "Ann Allergy Asthma Immunol",
      year: "2004"
    },
    {
      authors: "Ziska L, Knowlton K, et al. Bielory L",
      title: "Recent warming by latitude associated with increased length of ragweed pollen season in central North America.",
      journal: "Proc Natl Acad Sci USA",
      year: "2011"
    },
    {
      authors: "Bielory L, Skoner DP, et al",
      title: "Ocular and nasal allergy symptom burden in America: the Allergies, Immunotherapy, and RhinoconjunctivitiS (AIRS) surveys.",
      journal: "Allergy Asthma Proc",
      year: "2014"
    },
    {
      authors: "Zhang Y, Bielory L",
      title: "Allergenic pollen season variations in the past two decades under changing climate in the United States.",
      journal: "Glob Chang Biol",
      year: "2015"
    },
    {
      authors: "Bielory L, Delgado L",
      title: "International Consensus: Diagnosis and management of allergic conjunctivitis.",
      journal: "Ann Allergy Asthma Immunol",
      year: "2020"
    },
    {
      authors: "Anderegg A, ... Bielory L, et al",
      title: "Anthropogenic climate change is worsening North American pollen seasons.",
      journal: "Proc Natl Acad Sci USA",
      year: "2021"
    },
    {
      authors: "Damialis A, ... Bielory L, et al",
      title: "Higher airborne pollen concentrations correlated with increased SARS-CoV-2 infection rates, as evidenced from 31 countries across the globe.",
      journal: "Proc Natl Acad Sci USA",
      year: "2021"
    }
  ];

  const associations = [
    {
      name: "American Academy of Allergy, Asthma and Immunology (AAAAI)",
      desc: "Fellow & Committee Chair"
    },
    {
      name: "American College of Allergy, Asthma and Immunology (ACAAI)",
      desc: "Fellow & Committee Chair"
    },
    {
      name: "World Allergy Organization (WAO)",
      desc: "Committee Board Member"
    },
    {
      name: "Kean University - New Jersey Center for Science, Technology and Mathematics",
      desc: "Academic partner & advisor"
    },
    {
      name: "Rutgers University - Center for Environmental Prediction",
      desc: "Environmental and climate prediction collaboration"
    },
    {
      name: "Rutgers University - Environmental and Occupational Health Science Institute",
      desc: "Research affiliation"
    },
    {
      name: "Kean University - Center for Aerobiological Research",
      desc: "Aerobiological studies and research advisor"
    }
  ];

  const tabs = [
    { id: "bio", label: "Biography", icon: User },
    { id: "education", label: "Education & Career", icon: GraduationCap },
    { id: "service", label: "Professional Service", icon: Shield },
    { id: "research", label: "Research & Trials", icon: FlaskConical },
    { id: "publications", label: "Selected Publications", icon: BookOpen },
    { id: "associations", label: "Associations", icon: Globe },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      {/* Page Header Banner */}
      <div className="relative bg-slate-950 py-12 md:py-16 px-4 border-b border-slate-900 shadow-md overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
          style={{
            backgroundImage: "url('/clinic_interior.png')",
          }}
        />
        {/* Dark gradient overlay for extreme readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/60 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto">
          {/* Header text content */}
          <div className="max-w-3xl space-y-4">
            <span className="text-dominant-orange font-bold tracking-widest uppercase text-xs px-2.5 py-1 rounded bg-dominant-orange-glow border border-dominant-orange/20 inline-block animate-pulse">
              Meet the Doctor
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mt-1">
              Leonard Bielory, M.D.
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Dr. Bielory is a renowned international expert in the field of Allergy and Immunology, dedicated to providing compassionate, patient-centered clinical care. He views his patients’ wellness—body, mind and soul—as his top priority.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onBookClick}
                className="bg-dominant-orange hover:bg-dominant-orange-dark text-white font-semibold text-xs md:text-sm px-5 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-dominant-orange-glow cursor-pointer"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Area */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        
        {/* Navigation Tabs Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-2 overflow-x-auto scrollbar-thin">
          <div className="flex space-x-1 min-w-max md:min-w-0 md:grid md:grid-cols-6 gap-1">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "bg-dominant-green text-white shadow-md hover:bg-dominant-green-dark" 
                      : "text-slate-600 hover:text-dominant-green hover:bg-slate-50"
                  }`}
                >
                  <TabIcon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-400 group-hover:text-dominant-green"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display Area */}
        <div className="mt-6 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 animate-in fade-in duration-300">
          
          {/* TAB 1: BIOGRAPHY & PHILOSOPHY */}
          {activeTab === "bio" && (
            <div className="space-y-8">
              
              {/* Holistic Philosophy Card */}
              <div className="bg-dominant-green-light/50 border border-dominant-green/10 p-6 md:p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute -top-6 -right-6 p-4 opacity-5 text-dominant-green">
                  <Heart className="w-32 h-32" />
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-dominant-green mt-1 shrink-0" />
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-dominant-green bg-dominant-green-light px-2.5 py-1 rounded-md inline-block">
                      Clinical Philosophy
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                      A completely holistic approach to treat the patient as a whole.
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      "When examining a patient as a whole, and not as a subset of organs or symptoms, we increase the patient's quality of life and fight against the real causes behind symptoms. Diagnosis and solution is not always a simple answer, but rather a confluence of factors that are addressed one-by-one to maximize the health benefits and treatments. I treat one variable at a time to see the impact and then build from that knowledge base."
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio Narrative */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Doctor Portrait Card */}
                <div className="lg:col-span-3 flex flex-col items-center text-center space-y-4 bg-white border border-slate-200 p-5 rounded-2xl shadow-xs max-w-md mx-auto lg:max-w-none w-full">
                  <div className="relative group w-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-dominant-green/10 to-dominant-orange/10 rounded-xl blur-sm -m-1 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                    <img
                      src="/dr-bielory-portrait.png"
                      alt="Leonard Bielory, M.D. portrait"
                      className="relative w-full aspect-[4/5] object-cover rounded-xl shadow-xs border border-slate-200 transition-all duration-300 group-hover:scale-[1.01]"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-slate-900 text-base">Leonard Bielory, M.D.</h4>
                    <p className="text-xs text-dominant-green font-bold uppercase tracking-wider">Allergist &amp; Immunologist</p>
                    <p className="text-[10px] text-slate-500 font-medium">NIH &amp; Rutgers Alumnus</p>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                    A Lifetime Dedicated to Patient Wellness
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Dr. Leonard Bielory is an internationally recognized expert in the field of Allergy and Immunology. Inspired as a child by a local family doctor who made daily house calls, he understands the importance of ensuring that patients feel seen and valued—an approach that optimizes the effectiveness of their treatment plans, and thus their health.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Voted a top doctor in the tri-state area for the past 25 years, he views his patients’ wellness—body, mind and soul—as his top priority. Dr. Bielory has devoted his career to building on his unique training at the National Institutes of Health (NIH), combining compassionate, front-line clinical practices with active medical innovation.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Dr. Bielory is dedicated to making medical advances in a wide variety of professional settings outside his New Jersey offices. He serves on the World Allergy Organization's Committee on Climate Change, as well as the Committee researching the use of supplemental probiotics for allergic diseases.
                  </p>
                </div>

                {/* Side Highlights Box */}
                <div className="lg:col-span-4 bg-slate-50 border border-slate-100 p-5 rounded-xl space-y-4">
                  <h4 className="font-serif font-bold text-slate-900 text-sm flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Sparkles className="w-4 h-4 text-dominant-orange" />
                    <span>Specialty Focus Areas</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-dominant-green shrink-0" />
                      <span>Allergic Conjunctivitis (#1 US Expert)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-dominant-green shrink-0" />
                      <span>Ocular Surface & Dry Eye Disorders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-dominant-green shrink-0" />
                      <span>Allergic Airway Disorders & Asthma</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-dominant-green shrink-0" />
                      <span>Rare Immunological Disorders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-dominant-green shrink-0" />
                      <span>Food, Skin, & Drug Allergies</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Research Committees Highlights Box */}
              <div className="border border-slate-200 rounded-xl p-5 md:p-6 bg-slate-50 text-slate-700 text-sm leading-relaxed space-y-3">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-dominant-orange shrink-0" />
                  <h4 className="font-serif font-bold text-slate-900">National Research & Committee Leadership</h4>
                </div>
                <p className="text-slate-600 text-xs md:text-sm">
                  Dr. Bielory has served as a principal investigator for the US EPA grant on climate change and allergic airway diseases; as Chairman of the NIH RAYNAUD's Treatment Trials, studying treatments such as biofeedback versus prescription medications; on the committees for immunology, respiratory and allergy of the US Pharmacopeia Council of Experts; and as a reviewer for the Center of Excellence for Research on Complementary and Integrative Health at the NIH's Center for Complementary and Integrative Health.
                </p>
              </div>

            </div>
          )}

          {/* TAB 2: EDUCATION & CAREER */}
          {activeTab === "education" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                {/* Academic Timeline */}
                <div className="space-y-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <GraduationCap className="w-5 h-5 text-dominant-green" />
                    <span>Education & Medical Training</span>
                  </h3>
                  <div className="space-y-5 relative pl-4 border-l-2 border-slate-100">
                    {education.map((edu, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-dominant-green ring-4 ring-white group-hover:bg-dominant-green-dark transition-colors" />
                        <h4 className="font-bold text-slate-900 text-sm">{edu.degree}</h4>
                        {edu.spec && <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold inline-block my-0.5">{edu.spec}</span>}
                        <div className="text-xs text-slate-500 font-medium">{edu.institution}</div>
                        {edu.desc && <p className="text-xs text-slate-500 mt-1 leading-relaxed">{edu.desc}</p>}
                      </div>
                    ))}
                  </div>
                  <div className="bg-dominant-orange-light border border-dominant-orange/10 p-4 rounded-xl text-xs text-dominant-orange-dark">
                    <strong>Note:</strong> Dr. Bielory has devoted his career to building on his unique training at the National Institutes of Health.
                  </div>
                </div>

                {/* Appointments & Clinical Career */}
                <div className="space-y-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Award className="w-5 h-5 text-dominant-green" />
                    <span>Academic & Clinical Appointments</span>
                  </h3>
                  
                  {/* Current Roles */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Current Appointments</h4>
                    <div className="space-y-3">
                      {appointments.filter(a => a.type === "Current").map((appt, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                          <h5 className="font-bold text-slate-900 text-sm">{appt.role}</h5>
                          <div className="text-xs text-slate-500 font-semibold">{appt.org}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Previous Roles */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Previous Positions</h4>
                    <div className="space-y-3">
                      {appointments.filter(a => a.type === "Previous").map((appt, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                          <h5 className="font-bold text-slate-900 text-sm">{appt.role}</h5>
                          <div className="text-xs text-slate-500 font-semibold">{appt.org}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Professional Healthcare Recognition */}
                  <div className="bg-slate-900 text-white p-5 rounded-xl space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-5">
                      <Stethoscope className="w-20 h-20" />
                    </div>
                    <span className="text-[10px] bg-dominant-orange text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">Healthcare Excellence</span>
                    <h4 className="font-serif text-sm font-bold">Top National & International Recognition</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      For the past 30 years, Dr. Bielory has been recognized as one of the "top physicians" in Allergy and Immunology. He is globally recognized as the #1 expert in the United States on allergic conjunctivitis.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROFESSIONAL SERVICE */}
          {activeTab === "service" && (
            <div className="space-y-6">
              <div className="max-w-3xl">
                <h3 className="font-serif text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Committees &amp; Service
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">
                  Dr. Bielory has dedicated his professional life to alleviating the suffering of patients struggling with allergic airway disorders, rare immunological disorders, and food and drug allergies. To that end, he serves on numerous local, state, regional, national and international committees:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {serviceCommittees.map((committee, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-100 p-4 rounded-xl hover:border-dominant-green/20 hover:bg-white transition-all duration-300 shadow-xs">
                    <Shield className="w-4 h-4 text-dominant-green mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-xs md:text-sm leading-relaxed font-medium">{committee}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: RESEARCH & TRIALS */}
          {activeTab === "research" && (
            <div className="space-y-8">
              <div className="max-w-3xl space-y-3">
                <h3 className="font-serif text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Research Activities
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Dr. Bielory is actively involved in research in several areas critical to his patients’ health, including climate change and aerobiology. He is particularly interested in how advances in fields such as ophthalmology can enhance the complementary treatment of allergic airway diseases and their impacts on quality of life.
                </p>
              </div>

              {/* Research Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {researchActivities.map((act, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 p-5 rounded-xl space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-dominant-green bg-dominant-green-light px-2 py-0.5 rounded uppercase tracking-wider">
                        {act.sponsor}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        {act.role}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm md:text-base leading-snug">
                      {act.title}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Research Summary Banner */}
              <div className="bg-dominant-green text-white p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="space-y-2">
                  <h4 className="font-serif text-lg md:text-xl font-bold">50+ Pharmaceutical Studies</h4>
                  <p className="text-xs text-slate-100 max-w-xl">
                    Dr. Bielory has been involved in more than 50 pharmaceutical studies for the advancement of care of patients with allergic, asthmatic and immunologic disorders.
                  </p>
                </div>
                <div className="shrink-0 bg-white/10 px-4 py-2.5 rounded-lg border border-white/20 text-xs font-bold uppercase tracking-wider">
                  Clinical Innovation
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: SELECTED PUBLICATIONS */}
          {activeTab === "publications" && (
            <div className="space-y-6">
              <div className="max-w-3xl">
                <h3 className="font-serif text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Selected Scientific Publications
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">
                  With several hundred publications to his credit, Dr. Bielory is a highly regarded advocate of research aimed at boosting the wellness of the general public, as well as a sought-after consultant for companies engaged in developing cutting-edge therapeutics for patients with allergic, asthmatic and immunologic disorders.
                </p>
              </div>

              {/* Publications List */}
              <div className="space-y-4 mt-6">
                {publications.map((pub, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-4 p-4 border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-white rounded-xl transition-all duration-300 shadow-2xs"
                  >
                    <div className="bg-dominant-green-light text-dominant-green p-2 rounded-lg shrink-0 mt-0.5">
                      <ScrollText className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-dominant-green tracking-wide">
                        {pub.year} • {pub.journal}
                      </span>
                      <h4 className="text-slate-900 font-bold text-xs md:text-sm leading-snug">
                        "{pub.title}"
                      </h4>
                      <p className="text-slate-500 text-[11px] font-medium italic">
                        {pub.authors}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: PROFESSIONAL ASSOCIATIONS */}
          {activeTab === "associations" && (
            <div className="space-y-6">
              <div className="max-w-3xl">
                <h3 className="font-serif text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Academic &amp; Professional Associations
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">
                  Dr. Bielory maintains deep research, teaching, and clinical ties with leading international societies and regional research institutes.
                </p>
              </div>

              {/* Associations List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {associations.map((assoc, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col justify-between bg-slate-50 border border-slate-100 p-5 rounded-xl hover:border-dominant-orange/20 hover:bg-white transition-all duration-300 shadow-2xs"
                  >
                    <div className="space-y-2">
                      <div className="bg-dominant-orange-light text-dominant-orange p-1.5 rounded w-fit">
                        <Globe className="w-4 h-4" />
                      </div>
                      <h4 className="text-slate-900 font-bold text-xs md:text-sm leading-snug">
                        {assoc.name}
                      </h4>
                    </div>
                    <p className="text-slate-500 text-[11px] font-semibold tracking-wide uppercase mt-3">
                      {assoc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

