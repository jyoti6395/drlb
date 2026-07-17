import { ArrowLeft, Phone, Calendar, ShieldCheck, Heart, AlertCircle, MapPin } from "lucide-react";

interface ImmuneDisordersProps {
  setView: (view: string) => void;
  onBookClick: () => void;
}

export default function ImmuneDisordersView({ setView, onBookClick }: ImmuneDisordersProps) {
  const diagnosesList = [
    { name: "Eosinophilic esophagitis", details: "esophagus - EoE" },
    { name: "Eosinophilic gastritis", details: "stomach - EG" },
    { name: "Eosinophilic gastroenteritis", details: "stomach and small intestine - EGE" },
    { name: "Eosinophilic enteritis", details: "small intestine" },
    { name: "Eosinophilic colitis", details: "large intestine - EC" },
    { name: "Hypereosinophilic syndrome", details: "blood and any organ - HES" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16 font-sans text-slate-800 selection:bg-dominant-green/10 selection:text-dominant-green-dark relative overflow-hidden">
      {/* Background Decorative Glow Spots */}
      <div className="absolute top-80 left-10 w-96 h-96 bg-dominant-green-glow rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-[60%] right-10 w-96 h-96 bg-dominant-orange-glow rounded-full blur-3xl opacity-45 pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-dominant-green-glow rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Hero Page Header Banner matching other pages (using clinic_interior) */}
      <div className="relative bg-slate-950 py-12 md:py-16 px-4 border-b border-slate-900 shadow-md overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-[1.02] transition-transform duration-10000 ease-out hover:scale-105"
          style={{
            backgroundImage: "url('/clinic_interior.png')",
          }}
        />
        {/* Dark gradient overlay for extreme readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/40 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto">
          {/* Header text content */}
          <div className="max-w-3xl space-y-4">
            <span className="text-dominant-orange font-bold tracking-widest uppercase text-[10px] md:text-xs px-3 py-1.5 rounded-full bg-dominant-orange-glow border border-dominant-orange/30 inline-block animate-pulse shadow-sm">
              Clinical Specialization
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mt-1 leading-tight drop-shadow-md">
              Immune Disorders
            </h1>
            <p className="text-slate-200 text-sm md:text-base max-w-2xl leading-relaxed drop-shadow-xs">
              Ranges from Abnormal Immunological Proteins to Abnormal Immune Cells - Highlighting Eosinophilic Disorders
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto bg-dominant-orange hover:bg-dominant-orange-dark text-white font-bold text-xs md:text-sm px-5 py-3 rounded-xl shadow-lg hover:shadow-dominant-orange/35 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Core Content Area */}
      <div className="max-w-7xl mx-auto px-4 mt-8 space-y-8 md:space-y-10 relative z-10">
        
        {/* Top Section: Signaling Diagram (L) & Understanding (R) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Cytokine Signaling Diagram Card (Figure 1) */}
          <div className="lg:col-span-5 bg-white/90 backdrop-blur-xs border border-slate-200/60 rounded-2xl p-5 shadow-sm flex flex-col items-center text-center space-y-3 hover:shadow-md transition-shadow duration-300 justify-between">
            <div className="w-full bg-slate-50 py-1 px-2.5 rounded-lg border border-slate-200/45">
              <span className="text-xs font-bold text-slate-900 font-serif uppercase tracking-wider">Figure 1: Cellular Signaling Pathways</span>
            </div>
            
            <div className="p-2.5 bg-slate-50/50 border border-slate-100 rounded-xl overflow-hidden flex items-center justify-center w-full grow my-1">
              <img
                src="/immune_cells_header.png"
                alt="Eosinophil and immune cytokines diagram (TSLP, IL-33, IL-4, IL-5)"
                className="max-h-48 md:max-h-56 object-contain w-auto block rounded-lg hover:scale-[1.03] transition-transform duration-300 ease-out"
              />
            </div>
            
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-[320px] bg-slate-50/40 p-2 rounded-lg border border-slate-100">
              Cytokine signaling pathways (TSLP, IL-33, IL-4, IL-5)
            </p>
          </div>

          {/* Right: Understanding Text Block */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-xs border border-slate-200/60 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Understanding Eosinophilic Disorders
              </h2>
              
              <div className="space-y-3 text-xs sm:text-sm text-slate-655 leading-relaxed font-normal">
                <p>
                  Eosinophils are a normal cellular component of the blood and also of certain tissues, including spleen, lymph nodes, thymus, and the submucosal areas of the gastrointestinal, respiratory, and genitourinary tracts. Counts of 0 to 450 eosinophils per cubic millimeter of blood are considered within normal limits. Eosinophilic disorders occur when eosinophils are found in above-normal amounts in various parts of the body.
                </p>
                <p>
                  When the body wants to attack a substance, such as an allergy-triggering food or airborne allergen, eosinophils respond by moving into the area and releasing a variety of toxins. However, when the body produces too many eosinophils, they can cause chronic inflammation resulting in tissue damage.
                </p>
              </div>
            </div>

            <div className="bg-dominant-green-light/35 border-l-4 border-dominant-green p-4 rounded-r-2xl rounded-l-md text-xs sm:text-sm text-slate-655 leading-relaxed space-y-1 shadow-2xs mt-4 flex gap-3 items-start">
              <div className="bg-dominant-green/10 p-2 rounded-xl text-dominant-green shrink-0 shadow-2xs">
                <Heart className="w-4 h-4" />
              </div>
              <p className="text-slate-600 leading-normal">
                One of the major research centers for eosinophilic disorders is at Cincinnati Children's under the leadership of Marc E. Rothenberg, M.D. Ph.D.
              </p>
            </div>
          </div>

        </div>

        {/* Visual Illustrations Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Eosinophil Cell */}
          <div className="bg-white/90 backdrop-blur-xs border border-slate-200/60 rounded-2xl p-5 shadow-sm flex flex-col items-center text-center space-y-3 hover:shadow-md transition-shadow duration-300 justify-between">
            <div className="w-full bg-slate-50 py-1 px-2.5 rounded-lg border border-slate-200/45">
              <span className="text-xs font-bold text-slate-900 font-serif uppercase tracking-wider">Figure 2: Eosinophil Cell</span>
            </div>
            
            <div className="bg-slate-50/50 border border-slate-100 rounded-xl overflow-hidden flex items-center justify-center w-full grow my-1">
              <img
                src="/eosinophil_cell.png"
                alt="Eosinophil Cell"
                className="w-full h-auto block hover:scale-[1.02] transition-transform duration-300 ease-out"
              />
            </div>
            
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-[320px] bg-slate-50/40 p-2 rounded-lg w-full">
              Microscopic view showing the characteristic bi-lobed nucleus and red-staining granules.
            </p>
          </div>

          {/* Card 2: Gastrointestinal System */}
          <div className="bg-white/90 backdrop-blur-xs border border-slate-200/60 rounded-2xl p-5 shadow-sm flex flex-col items-center text-center space-y-3 hover:shadow-md transition-shadow duration-300 justify-between">
            <div className="w-full bg-slate-50 py-1 px-2.5 rounded-lg border border-slate-200/45">
              <span className="text-xs font-bold text-slate-900 font-serif uppercase tracking-wider">Figure 3: Gastrointestinal Tract</span>
            </div>
            
            <div className="bg-slate-50/50 border border-slate-100 rounded-xl overflow-hidden flex items-center justify-center w-full grow my-1">
              <img
                src="/eosinophilic_digestive.png"
                alt="Gastrointestinal Involvement"
                className="w-full h-auto block hover:scale-[1.02] transition-transform duration-300 ease-out"
              />
            </div>
            
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-[320px] bg-slate-50/40 p-2 rounded-lg w-full">
              Eosinophils can accumulate in the esophagus, stomach, and small/large intestines.
            </p>
          </div>

          {/* Card 3: Respiratory System */}
          <div className="bg-white/90 backdrop-blur-xs border border-slate-200/60 rounded-2xl p-5 shadow-sm flex flex-col items-center text-center space-y-3 hover:shadow-md transition-shadow duration-300 justify-between">
            <div className="w-full bg-slate-50 py-1 px-2.5 rounded-lg border border-slate-200/45">
              <span className="text-xs font-bold text-slate-900 font-serif uppercase tracking-wider">Figure 4: Respiratory Tract</span>
            </div>
            
            <div className="bg-slate-50/50 border border-slate-100 rounded-xl overflow-hidden flex items-center justify-center w-full grow my-1">
              <img
                src="/eosinophilic_respiratory.png"
                alt="Respiratory Involvement"
                className="w-full h-auto block hover:scale-[1.02] transition-transform duration-300 ease-out"
              />
            </div>
            
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-[320px] bg-slate-50/40 p-2 rounded-lg w-full">
              Illustrating the trachea and bronchial tree where eosinophils induce tissue irritation.
            </p>
          </div>
        </div>

        {/* Anatomical Classifications: Full-Width Card Grid */}
        <div className="bg-white/90 backdrop-blur-xs border border-slate-200/60 rounded-2xl p-5 md:p-6 shadow-sm space-y-4 hover:shadow-md transition-shadow duration-300">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-dominant-green" />
              <span>Anatomical Classifications</span>
            </h3>
            
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-2">
              Eosinophilic disorders are diagnosed according to the location where the levels of eosinophils are elevated:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {diagnosesList.map((d, index) => (
              <div 
                key={index}
                className="p-4 bg-slate-50/60 border border-slate-200/40 hover:border-dominant-green/30 hover:bg-white rounded-xl flex flex-col justify-between gap-3 shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-slate-950 transition-colors leading-snug">
                  {d.name}
                </span>
                <span className="text-[9px] bg-dominant-green-light text-dominant-green-dark px-2 py-0.5 rounded font-extrabold uppercase tracking-wide self-start shrink-0">
                  {d.details}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories of Disease Notice */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-850 text-slate-300 rounded-xl p-4 text-center text-xs leading-relaxed max-w-7xl mx-auto shadow-sm">
          <p className="font-medium opacity-90">
            There are many disorders where eosinophils have been found elevated in the blood or in different tissues. General categories of disease that have increased levels of eosinophils range from allergic disorders to endocrine disorders.
          </p>
        </div>

        {/* Bottom Banner: Advance Treatments for Eosinophilic Disorders */}
        <div className="bg-white/95 border border-slate-200/60 rounded-2xl p-6 md:p-8 text-center max-w-7xl mx-auto relative overflow-hidden shadow-lg">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-dominant-orange-glow rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-dominant-green-glow rounded-full blur-2xl pointer-events-none" />
          
          <span className="text-dominant-orange font-bold uppercase tracking-widest text-[9px] px-3 py-1.5 rounded-full bg-dominant-orange-light border border-dominant-orange-glow inline-block">
            Evidence-Based Therapeutics
          </span>
          
          <h3 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-slate-950 mt-3 relative z-10">
            Advance Treatments for Eosinophilic Disorders
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed relative z-10">
            Please contact our center to learn more about target diagnostic screenings and monoclonal antibody therapies (biologics).
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3.5 justify-center items-stretch sm:items-center max-w-md mx-auto sm:max-w-none relative z-10">
            <button
              onClick={() => {
                setView("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-dominant-orange hover:bg-dominant-orange-dark text-white font-bold text-sm px-5 py-3.5 rounded-xl shadow-md hover:shadow-dominant-orange-glow transition-all duration-300 text-center inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
            <button
              onClick={onBookClick}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-all duration-300 text-center cursor-pointer w-full sm:w-auto hover:-translate-y-0.5 shadow-md"
            >
              Book Appointment Online
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
