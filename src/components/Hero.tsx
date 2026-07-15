import { Calendar, ArrowRight, ShieldCheck, Award, Star, BookOpen } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
  onContactClick: () => void;
  setView: (view: string) => void;
}

export default function Hero({ onBookClick, onContactClick, setView }: HeroProps) {
  return (
    <section className="relative bg-white pt-10 pb-20 md:py-24 border-b border-slate-50 font-sans overflow-hidden">
      {/* Background soft color flares */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Pitch and Headings */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
          {/* Subtitle intro */}
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-2 duration-300">
            <Award className="w-4 h-4 text-teal-600" />
            <span>Come In and Meet &mdash; Leonard Bielory, M.D.</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-none">
              The Leading Expert <br className="hidden sm:inline" />
              in <span className="text-teal-600 relative">Allergies &amp; Asthma</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              With over 35 years of clinical and academic excellence at the NIH and Rutgers, Dr. Bielory provides elite diagnostics and advanced biologic therapies, specialized for dry eyes, chronic hives, and complex immunologies.
            </p>
          </div>

          {/* Call-to-actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={onBookClick}
              className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={onContactClick}
              className="flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-all duration-300"
            >
              <span>Contact Our Clinics</span>
            </button>
          </div>

          {/* Minimal Key Badges list */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="font-serif text-2xl font-bold text-slate-900">35+</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Years Practice</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-serif text-2xl font-bold text-slate-900">150+</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Publications</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-serif text-2xl font-bold text-slate-900">10k+</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Patients Helped</div>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Accent / Clinical Trust Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[380px] bg-slate-50 rounded-3xl border border-slate-150 p-6 shadow-sm relative overflow-hidden group">
            {/* Top graphic block */}
            <div className="aspect-[4/3] bg-teal-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-teal-600/5 group-hover:bg-teal-600/0 transition-all duration-300" />
              <div className="text-center p-4">
                <BookOpen className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                <h3 className="font-serif font-bold text-slate-900 text-base">Nationally Renowned Scholar</h3>
                <p className="text-[11px] text-teal-700 font-bold uppercase tracking-wider mt-1">Ocular Surface Disease Expert</p>
                <button
                  onClick={() => {
                    setView("about");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="mt-4 bg-white hover:bg-teal-50 text-slate-800 border border-slate-200 text-[10px] font-bold px-4 py-2 rounded-lg transition-colors shadow-sm inline-block"
                >
                  Read Doctor Biography
                </button>
              </div>
            </div>

            {/* Credential highlight blocks */}
            <div className="mt-6 space-y-4">
              <div className="flex gap-3 items-start">
                <div className="bg-emerald-50 text-emerald-600 p-1.5 rounded-lg shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Triple Board Fellowship Training</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Trained at the National Institutes of Health (NIH) with advanced specialized fellowships in ocular immunology.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="bg-amber-50 text-amber-600 p-1.5 rounded-lg shrink-0">
                  <Star className="w-4 h-4 fill-amber-500/20" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Consecutive 'Top Doctor' Awards</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
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
