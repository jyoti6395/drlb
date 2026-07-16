import { Calendar, ArrowRight, ShieldCheck, Award, Star, BookOpen } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
  onContactClick: () => void;
  setView: (view: string) => void;
}

export default function Hero({ onBookClick, onContactClick, setView }: HeroProps) {
  return (
    <section className="relative bg-slate-950 pt-10 pb-20 md:py-24 border-b border-slate-900 font-sans overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
        style={{
          backgroundImage: "url('/clinic_interior.png')",
        }}
      />
      {/* Dark gradient overlay for extreme readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/50 z-10" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        {/* Left Side: Pitch and Headings */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
          {/* Subtitle intro */}
          <div className="inline-flex items-center gap-2 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-2 duration-300">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Come In and Meet &mdash; Leonard Bielory, M.D.</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none uppercase">
              TREAT THE PATIENT,<br />
              YOU ALWAYS WIN.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Dr. Bielory uses a completely holistic approach to treat his patients. When examining a patient as a whole, and not as a subset of organs or symptoms, we increase the patients quality of life and fight against the real causes behind symptoms.
            </p>
          </div>

          {/* Call-to-actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => {
                setView("about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center justify-center gap-2 bg-dominant-orange hover:bg-dominant-orange-dark text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={onBookClick}
              className="flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl hover:bg-white/5 transition-all duration-300"
            >
              <Calendar className="w-4 h-4 text-dominant-orange" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Minimal Key Badges list */}
          <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="font-serif text-2xl font-bold text-white">30+</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Years Practice</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-serif text-2xl font-bold text-white">150+</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Publications</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-serif text-2xl font-bold text-white">10k+</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Patients Helped</div>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Accent / Clinical Trust Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[380px] bg-slate-900/60 backdrop-blur-md rounded-3xl border border-white/10 p-6 shadow-2xl relative overflow-hidden group">
            {/* Top graphic block showing Dr. Bielory's portrait */}
            <div className="aspect-[4/3] rounded-2xl relative overflow-hidden border border-white/10">
              <img 
                src="/dr-bielory-portrait.png" 
                alt="Dr. Leonard Bielory"
                className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="font-serif font-bold text-white text-base leading-tight">
                    Leonard Bielory, M.D.
                  </h3>
                  <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mt-0.5">
                    Allergy &amp; Immunology Expert
                  </p>
                </div>
                <button
                  onClick={() => {
                    setView("about");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-white/15 hover:bg-white/25 text-white border border-white/25 text-[10px] font-bold px-3 py-1.5 rounded-lg backdrop-blur-xs transition-all duration-300 shadow-sm"
                >
                  View Bio
                </button>
              </div>
            </div>

            {/* Credential highlight blocks */}
            <div className="mt-6 space-y-4">
              <div className="flex gap-3 items-start">
                <div className="bg-emerald-950/60 text-emerald-400 border border-emerald-500/20 p-1.5 rounded-lg shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs">Triple Board Fellowship Training</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                    Trained at the National Institutes of Health (NIH) with advanced specialized fellowships in ocular immunology.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="bg-orange-950/60 text-dominant-orange border border-dominant-orange/20 p-1.5 rounded-lg shrink-0">
                  <Star className="w-4 h-4 fill-dominant-orange/20" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs">Consecutive 'Top Doctor' Awards</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                    Consistently elected by peers to the annual New Jersey &amp; New York Metro Area Top Doctors list.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
