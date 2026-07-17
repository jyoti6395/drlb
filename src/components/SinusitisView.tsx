import { ArrowLeft, Phone, Calendar, CheckCircle2, Info, AlertTriangle, MapPin } from "lucide-react";

interface SinusitisProps {
  setView: (view: string) => void;
  onBookClick: () => void;
}

export default function SinusitisView({ setView, onBookClick }: SinusitisProps) {
  const sinusCavities = [
    { name: "The maxillary sinuses", desc: "located on each side of your nose, near the cheek bones." },
    { name: "The frontal sinuses", desc: "located above the eyes, near your forehead." },
    { name: "The ethmoid sinuses", desc: "located on each side of the bridge of your nose, near your eyes. There are three small pairs of the ethmoid sinuses." },
    { name: "The sphenoid sinuses", desc: "behind the eyes, deeper into your skull." }
  ];

  const mainSymptoms = [
    "Depending on which sinuses are infected, you may feel pain or pressure in your forehead, cheeks, ears, or teeth.",
    "You may have thick, sticky mucus coming from your nose.",
    "Your mucus may be cloudy, or have a greenish-yellow color.",
    "Mucus may drip down the back of your throat (postnasal drip), giving you a sore throat and cough.",
    "Your nose may be stuffed, restricting your breathing.",
    "Your face may feel tender, especially around the eyes."
  ];

  const otherSymptoms = [
    "hoarseness",
    "fever",
    "fatigue",
    "bad breath",
    "decreased sense of smell and taste"
  ];

  const chronicFactors = [
    "viral or bacterial infections",
    "fungal infections",
    "hay fever or allergies to dust mites, molds, and so on",
    "frequent exposure to cigarette smoke or other airborne pollutants",
    "nasal polyps, a deviated septum, or a damaged nasal structure",
    "medical conditions such as asthma, HIV, or cystic fibrosis",
    "aspirin sensitivity",
    "respiratory tract infections"
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-6 font-sans text-slate-800 selection:bg-dominant-green/10 selection:text-dominant-green-dark relative overflow-hidden">
      {/* Background Decorative Glow Spots */}
      <div className="absolute top-80 left-10 w-96 h-96 bg-dominant-green-glow rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-[60%] right-10 w-96 h-96 bg-dominant-orange-glow rounded-full blur-3xl opacity-45 pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-dominant-green-glow rounded-full blur-3xl opacity-50 pointer-events-none" />
      

      {/* Hero Page Header Banner matching other pages */}
      <div className="relative bg-slate-950 py-8 md:py-10 px-4 border-b border-slate-900 shadow-md overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-[1.02] transition-transform duration-10000 ease-out hover:scale-105"
          style={{
            backgroundImage: "url('/summer_pollen_sinus_header.png')",
          }}
        />
        {/* Dark gradient overlay for extreme readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/40 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto">
          {/* Header text content */}
          <div className="max-w-3xl space-y-4">
            <span className="text-dominant-orange font-bold tracking-widest uppercase text-[10px] md:text-xs px-3 py-1.5 rounded-full bg-dominant-orange-glow border border-dominant-orange/30 inline-block animate-pulse shadow-sm">
              Heat, Humidity and Pollen
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mt-1 leading-tight drop-shadow-md">
              Summer is Here!
            </h1>
            <p className="font-serif italic text-base md:text-lg leading-relaxed border-l-4 border-dominant-orange pl-4 text-slate-200 py-1 drop-shadow-xs max-w-2xl">
              The "Witches Brew" for allergy sufferers!
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
      <div className="max-w-7xl mx-auto px-4 mt-4 space-y-6 relative z-10">
        
        {/* 1. Spotlight Section: Text (L) & Venn Diagram Image (R) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Sinus Anatomy Text */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-xs border border-slate-200/60 rounded-2xl p-4 md:p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Spotlight - Sinuses
              </h2>
              
              <p className="text-slate-650 text-sm leading-relaxed font-normal">
                The sinuses are hollow spaces in the skull and the face bones around your nose. There are four pairs of sinuses, named for the bones that they’re located in:
              </p>

              <div className="bg-dominant-green-light/35 border-l-4 border-dominant-green p-3 rounded-r-2xl rounded-l-md text-xs sm:text-sm text-slate-650 leading-relaxed space-y-1.5 shadow-2xs mt-3">
                <p className="font-semibold text-dominant-green-dark">
                  These sinuses collectively are called the paranasal sinuses.
                </p>
                <p className="italic text-slate-500 border-t border-dominant-green-glow/45 pt-1.5 mt-1">
                  The name sinus comes from the Latin word sinus, which means a bay, a curve, or a hollow cavity.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Venn Diagram Image (Visual Break 1 - Single Box) */}
          <div className="lg:col-span-5 bg-white/90 backdrop-blur-xs border border-slate-200/60 rounded-2xl p-4 shadow-sm flex flex-col items-center text-center space-y-2.5 hover:shadow-md transition-shadow duration-300 justify-between">
            <div className="w-full bg-slate-50 py-1 px-2.5 rounded-lg border border-slate-200/45">
              <span className="text-xs font-bold text-slate-900 font-serif uppercase tracking-wider">Figure 1: Schematic of Allergic Comorbidities</span>
            </div>
            
            <div className="p-2.5 bg-slate-50/50 border border-slate-100 rounded-xl overflow-hidden flex items-center justify-center w-full grow my-1">
              <img 
                src="/sinus_venn.png" 
                alt="Schematic of Allergic Comorbidities" 
                className="max-h-40 md:max-h-48 object-contain w-auto block rounded-lg hover:scale-[1.03] transition-transform duration-300 ease-out"
              />
            </div>
            
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-[320px] bg-slate-50/40 p-2 rounded-lg">
              Venn diagram showing overlap of conjunctivitis with eczema, rhinitis, food allergy, EoE, and asthma.
            </p>
          </div>

        </div>

        {/* Sinus Locations list: Full-Width 4-Column Responsive Grid */}
        <div className="space-y-3">
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block pl-1">
            The Four Main Sinus Cavities:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sinusCavities.map((sc, index) => (
              <div 
                key={index} 
                className="p-4 bg-white/90 backdrop-blur-xs border-t-4 border-t-dominant-green border border-slate-200/60 rounded-xl hover:border-dominant-green/30 shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase text-dominant-green bg-dominant-green-light px-2 py-0.5 rounded font-sans">
                      0{index + 1}
                    </span>
                    <span className="text-dominant-green font-extrabold select-none text-sm group-hover:rotate-45 transition-transform duration-300">
                      ✦
                    </span>
                  </div>
                  <h4 className="text-slate-900 font-bold text-sm group-hover:text-dominant-green transition-colors">
                    {sc.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Symptoms Section: Figure 2 (L) & Symptoms lists/pills (R) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Eye Clinical Image (Visual Break 2 - Single Box) */}
          <div className="lg:col-span-5 bg-white/90 backdrop-blur-xs border border-slate-200/60 rounded-2xl p-4 shadow-sm flex flex-col items-center text-center space-y-2.5 hover:shadow-md transition-shadow duration-300 justify-between">
            <div className="w-full bg-slate-50 py-1 px-2.5 rounded-lg border border-slate-200/45">
              <span className="text-xs font-bold text-slate-900 font-serif uppercase tracking-wider">Figure 2: Conjunctivitis Manifestations</span>
            </div>
            
            <div className="bg-slate-50/50 border border-slate-100 rounded-xl overflow-hidden flex items-center justify-center w-full grow my-1">
              <img 
                src="/sinus_eyes.png" 
                alt="Clinical representations of allergic conjunctivitis manifestations" 
                className="w-full h-auto block hover:scale-[1.02] transition-transform duration-300 ease-out"
              />
            </div>
            
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-[320px] bg-slate-50/40 p-2 rounded-lg">
              Clinical photographic reference for diagnostic classification of conjunctival allergy indicators.
            </p>
          </div>

          {/* Right: Symptoms of Sinusitis */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-xs border border-slate-200/60 rounded-2xl p-4 md:p-5 shadow-sm space-y-3 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Symptoms of sinusitis
              </h2>
              <span className="text-xs font-bold text-slate-400 block mt-2.5 mb-2.5 uppercase tracking-wider">
                Symptoms of a sinus inflammation are similar to those of a cold:
              </span>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {mainSymptoms.map((sym, index) => (
                  <li key={index} className="flex gap-2.5 items-start text-xs text-slate-750 leading-relaxed p-2.5 bg-slate-50/40 hover:bg-slate-50 border border-slate-200/35 hover:border-dominant-green/20 rounded-xl transition-all duration-200 group">
                    <span className="w-4.5 h-4.5 rounded-full bg-dominant-green-light group-hover:bg-dominant-green/10 flex items-center justify-center text-[9px] text-dominant-green font-extrabold shrink-0 mt-0.5 transition-colors">
                      ✓
                    </span>
                    <span className="group-hover:text-slate-950 transition-colors">{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-4 mt-3 space-y-2.5">
              <span className="text-[10px] sm:text-xs uppercase font-extrabold text-slate-400 block tracking-wider">
                Other Symptoms include:
              </span>
              <div className="flex flex-wrap gap-2">
                {otherSymptoms.map((os, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-semibold px-3 py-1.5 bg-slate-50 border border-slate-200/50 hover:border-dominant-green/30 hover:bg-white text-slate-750 hover:text-dominant-green rounded-lg transition-all duration-250 cursor-default shadow-2xs"
                  >
                    {os}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 3. Diagnostics & Treatment: Diagnostics (L) & Figure 3 (R) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Acute & Chronic Classifications */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-xs border border-slate-200/60 rounded-2xl p-4 md:p-5 shadow-sm space-y-3 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-dominant-green" />
                <span>Diagnostics: Acute vs. Chronic</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="p-3.5 bg-slate-50/50 hover:bg-white border-l-4 border-l-dominant-green border border-slate-200/40 hover:border-slate-250 rounded-r-xl rounded-l-md transition-all duration-200 shadow-2xs">
                  <span className="text-[9px] bg-dominant-green-light text-dominant-green-dark font-extrabold uppercase px-1.5 py-0.5 rounded tracking-wide mb-1.5 inline-block">
                    Acute
                  </span>
                  <p className="text-xs text-slate-755 leading-relaxed">
                    A sinus infection can last from 10 days to as long as 8 weeks. This is called an <strong className="text-slate-950 font-bold">acute sinus infection</strong>.
                  </p>
                </div>
                
                <div className="p-3.5 bg-slate-50/50 hover:bg-white border-l-4 border-l-dominant-orange border border-slate-200/40 hover:border-slate-250 rounded-r-xl rounded-l-md transition-all duration-200 shadow-2xs">
                  <span className="text-[9px] bg-dominant-orange-light text-dominant-orange font-extrabold uppercase px-1.5 py-0.5 rounded tracking-wide mb-1.5 inline-block">
                    Chronic
                  </span>
                  <p className="text-xs text-slate-755 leading-relaxed">
                    Sometimes a sinus infection can become chronic, getting better and then worse again, off and on for months.
                  </p>
                </div>
              </div>
              
              <div className="p-3 bg-slate-50/40 border border-slate-200/40 rounded-xl space-y-1.5 text-xs text-slate-650 leading-relaxed">
                <p>
                  <strong className="text-slate-950 font-bold">Chronic sinusitis</strong> is medically defined as sinusitis that occurs more than four times a year<sup className="text-[10px] text-dominant-green font-bold select-none cursor-help ml-0.5 animate-pulse" title="Trusted Source">Trusted Source</sup>. If your sinus infection lasts longer than eight weeks, it’s also usually considered chronic.
                </p>
                <p className="font-semibold text-slate-950">
                  Chronic sinusitis is one of the most common chronic conditions.
                </p>
              </div>
            </div>

            <div className="bg-amber-50/80 border border-amber-250 p-3.5 rounded-xl text-slate-700 text-xs flex gap-3 items-start shadow-2xs mt-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                The symptoms of acute and chronic sinusitis are similar. Fever is less likely, except in severe cases.
              </p>
            </div>
          </div>

          {/* Right: Severity Pyramid Image (Visual Break 3) */}
          <div className="lg:col-span-5 bg-white/90 backdrop-blur-xs border border-slate-200/60 rounded-2xl p-4 shadow-sm flex flex-col items-center text-center space-y-2.5 hover:shadow-md transition-shadow duration-300 justify-between">
            <div className="w-full bg-slate-50 py-1 px-2.5 rounded-lg border border-slate-200/45">
              <span className="text-xs font-bold text-slate-900 font-serif uppercase tracking-wider">Figure 3: Treatment Algorithm for SAC &amp; PAC</span>
            </div>
            
            <div className="p-2.5 bg-slate-50/50 border border-slate-100 rounded-xl overflow-hidden flex items-center justify-center w-full grow my-1">
              <img 
                src="/sinus_pyramid.png" 
                alt="Treatment algorithm severity pyramid" 
                className="max-h-40 md:max-h-48 object-contain w-auto block rounded-lg hover:scale-[1.03] transition-transform duration-300 ease-out"
              />
            </div>
            
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-[320px] bg-slate-50/40 p-2 rounded-lg">
              First-line, moderate, and severe treatment pathway guidelines for seasonal and perennial allergic conjunctivitis.
            </p>
          </div>

        </div>

        {/* Chronic Factors involved: Full Width 4-Column Card Grid */}
        <div className="space-y-3">
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block pl-1 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-dominant-orange" />
            <span>Chronic Sinusitis Risk Factors &amp; Complications:</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {chronicFactors.map((factor, index) => (
              <div 
                key={index} 
                className="flex gap-3 items-start bg-white/90 backdrop-blur-xs border border-slate-200/50 hover:border-dominant-orange/30 rounded-xl p-3 hover:shadow-sm transition-all duration-300 group hover:-translate-y-0.5 shadow-2xs"
              >
                <span className="w-5 h-5 rounded bg-dominant-orange-light group-hover:bg-dominant-orange/15 flex items-center justify-center text-[10px] text-dominant-orange font-extrabold shrink-0 mt-0.5 transition-colors">
                  ✦
                </span>
                <span className="text-xs font-semibold text-slate-705 group-hover:text-slate-950 transition-colors leading-relaxed">
                  {factor}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Natural Antihistamines Highlight Card at the Bottom */}
        <div className="bg-gradient-to-r from-white to-slate-50/60 border border-slate-200/65 rounded-2xl p-4 md:p-5 shadow-xs max-w-7xl mx-auto space-y-3 hover:shadow-sm transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-dominant-green-glow rounded-full blur-2xl opacity-40 pointer-events-none" />
          
          <div className="flex items-center gap-3 border-b border-slate-100 pb-2.5 relative z-10">
            <div className="bg-dominant-green/10 p-2.5 rounded-xl text-dominant-green shadow-2xs">
              <Info className="w-4.5 h-4.5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-slate-950">
              Natural Antihistamines &amp; Relief
            </h4>
          </div>
          
          <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-655 relative z-10">
            <p className="font-semibold text-slate-800">
              People with allergies may find relief by using natural plant extracts and foods that act as antihistamines.
            </p>
            <p className="border-l-4 border-dominant-green pl-3.5 text-slate-500 italic py-1 bg-slate-50/30 rounded-r-lg">
              Antihistamines are substances that block histamine activity in the body. Histamine is a protein that triggers allergy symptoms, such as sneezing, itchy eyes, and a scratchy throat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
