import { Award, BookOpen, ShieldCheck, CheckCircle2, Star } from "lucide-react";

export default function Credibility() {
  const credentials = [
    {
      icon: <Award className="w-8 h-8 text-dominant-orange" />,
      org: "AAAAI Fellow",
      detail: "American Academy of Allergy, Asthma & Immunology",
      type: "Distinguished Fellow"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-dominant-green" />,
      org: "ACAAI Fellow",
      detail: "American College of Allergy, Asthma & Immunology",
      type: "Board Certified Specialist"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-dominant-orange" />,
      org: "Rutgers NJMS",
      detail: "Former Professor of Medicine & Ophthalmic Immunology",
      type: "Academic Pioneer"
    },
    {
      icon: <Star className="w-8 h-8 text-dominant-orange fill-dominant-orange/20" />,
      org: "Castle Connolly",
      detail: "Recognized as 'Top Doctor' for Allergy & Immunology",
      type: "20+ Consecutive Years"
    }
  ];

  return (
    <section className="bg-slate-50 py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <p className="text-center text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-8">
          Affiliations & Certified Credentials of Clinical Distinction
        </p>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-slate-100 flex items-start gap-4 hover:shadow-sm hover:border-slate-200 transition-all duration-300"
            >
              <div className="bg-slate-50 p-2.5 rounded-lg shrink-0">
                {cred.icon}
              </div>
              <div>
                <div className="font-serif font-bold text-slate-900 text-sm flex items-center gap-1">
                  <span>{cred.org}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-dominant-green" />
                </div>
                <div className="text-[10px] text-dominant-green font-semibold uppercase tracking-wider mt-0.5">
                  {cred.type}
                </div>
                <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {cred.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Press Quote */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 italic">
            Dr. Bielory has been featured in leading national publications, including <span className="font-semibold text-slate-500">The New York Times</span>, <span className="font-semibold text-slate-500">Wall Street Journal</span>, and <span className="font-semibold text-slate-500">NJ Monthly</span> as a preeminent national expert on environmental allergy trends and ocular surface pathology.
          </p>
        </div>
      </div>
    </section>
  );
}
