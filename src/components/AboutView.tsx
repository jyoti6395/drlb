import { Award, BookOpen, GraduationCap, CheckCircle, Shield, Sparkles, Heart } from "lucide-react";

interface AboutViewProps {
  setView: (view: string) => void;
  onBookClick: () => void;
}

export default function AboutView({ setView, onBookClick }: AboutViewProps) {
  const credentials = {
    education: [
      {
        degree: "Fellowship in Allergy and Immunology",
        institution: "National Institutes of Health (NIH), Bethesda, MD",
        year: "1984 - 1987",
        desc: "Specialized clinical and laboratory research in immunopharmacology and ocular surface allergic reactions."
      },
      {
        degree: "Residency in Internal Medicine",
        institution: "Rutgers New Jersey Medical School (NJMS), Newark, NJ",
        year: "1981 - 1984",
        desc: "Served as Chief Resident, supervising house staff and organizing core medical educational curricula."
      },
      {
        degree: "Doctor of Medicine (M.D.)",
        institution: "Rutgers New Jersey Medical School (NJMS), Newark, NJ",
        year: "1981",
        desc: "Graduated with honors, focusing on physiology, internal medicine, and cellular biology."
      }
    ],
    appointments: [
      {
        role: "Attending Immunologist & Eye Specialist",
        org: "Springfield & Wall Township Offices, NJ",
        year: "1987 - Present",
        desc: "Providing dedicated clinical care to patients with complex allergic and eye disorders."
      },
      {
        role: "Professor of Medicine, Pediatrics & Ophthalmology",
        org: "Rutgers University / New Jersey Medical School",
        year: "1990 - 2018",
        desc: "Led clinical research trials in ocular allergy, taught hundreds of medical students and immunology fellows, and chaired the university research committees."
      },
      {
        role: "Co-Chair, Joint Task Force on Allergy Practice Parameters",
        org: "AAAAI & ACAAI Committees",
        year: "2005 - 2015",
        desc: "Helped write the national clinical guidelines used by doctors across the country to treat allergic eye diseases and asthma."
      }
    ],
    memberships: [
      "Fellow, American Academy of Allergy, Asthma and Immunology (AAAAI)",
      "Fellow, American College of Allergy, Asthma and Immunology (ACAAI)",
      "Member, Association for Research in Vision and Ophthalmology (ARVO)",
      "Member, American Academy of Ophthalmology (Associate)",
      "Board Certified, American Board of Allergy and Immunology",
      "Elected Member, New York Academy of Medicine"
    ]
  };

  return (
    <div className="bg-white min-h-screen pt-6 pb-20 font-sans">
      {/* Page Header Banner */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-dominant-orange font-semibold tracking-widest uppercase text-xs">
              Meet the Doctor & Expert
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
              Leonard Bielory, M.D.
            </h1>
            <p className="text-slate-400 mt-3 text-sm md:text-base max-w-xl">
              An internationally recognized clinician and researcher specializing in allergies, immunology, and dry eye syndromes.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={onBookClick}
              className="bg-dominant-orange hover:bg-dominant-orange-dark text-white font-semibold text-sm px-5 py-3 rounded-lg shadow-sm transition-colors"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => {
                setView("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
            >
              Our Locations
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Biography & Philosophy Card */}
        <div className="lg:col-span-7 space-y-10">
          {/* Clinical Philosophy Card */}
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-dominant-green">
              <Heart className="w-40 h-40" />
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-dominant-green bg-dominant-green-light px-2.5 py-1 rounded-md inline-block mb-4">
              Our Core Philosophy
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-950 tracking-tight leading-snug">
              “Treat the Patient, You Always Win.”
            </h3>
            <p className="text-slate-600 text-sm mt-4 leading-relaxed">
              Dr. Bielory believes in a holistic approach that centers on patient education. In medicine, treating symptoms is only half the battle. When a doctor takes the time to truly listen, explain the underlying biological pathway, and address the whole patient—their environment, lifestyle, and unique concerns—the patient gains the power to manage their condition successfully.
            </p>
          </div>

          {/* Detailed Biography Text */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-3">
              A Lifetime Dedicated to Ocular & Immunological Care
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dr. Leonard Bielory, M.D. is a board-certified allergist and immunologist who has made pioneering contributions to the field of ocular immunology. For over three decades, his research has focused on the complex interface between eye health and systemic allergic responses. He has been instrumental in defining the relationship between seasonal environmental allergies and ocular surface diseases, including meibomian gland dysfunction and dry eye syndrome.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dr. Bielory's research has been funded by the National Institutes of Health (NIH) and various pharmaceutical trials, leading to the development of several widely used anti-inflammatory ophthalmic therapies. He has authored over 150 peer-reviewed journal articles, textbook chapters, and scientific abstracts, and has regularly delivered keynote presentations at prestigious medical conferences worldwide, including the AAAAI, ACAAI, and the Association for Research in Vision and Ophthalmology (ARVO).
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              In addition to his research, Dr. Bielory has spent over 25 years teaching the next generation of physicians as a Full Professor of Medicine, Pediatrics, and Ophthalmology at Rutgers New Jersey Medical School. Today, he channels this extensive clinical knowledge directly into patient care at his private practice clinics located in Springfield and Wall Township, NJ.
            </p>
          </div>

          {/* Academic Affiliations Block */}
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
            <h3 className="font-serif text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-dominant-green" />
              <span>Distinguished Honors & Awards</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-dominant-green shrink-0 mt-0.5" />
                <span>Elected President, New Jersey Allergy, Asthma and Immunology Society</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-dominant-green shrink-0 mt-0.5" />
                <span>Named 'Top Doctor' by Castle Connolly for over 20 consecutive years</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-dominant-green shrink-0 mt-0.5" />
                <span>National NIH Clinical Research Center Fellowship Award recipient</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-dominant-green shrink-0 mt-0.5" />
                <span>Distinguished Service Award from the American Academy of Allergy, Asthma & Immunology</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Educational & Training Timeline */}
        <div className="lg:col-span-5 space-y-8">
          {/* Dr. Portrait Mockup Card */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm text-center">
            <div className="aspect-[3/4] w-full max-w-[280px] mx-auto rounded-2xl bg-dominant-green-light border border-dominant-green-light flex items-center justify-center relative overflow-hidden">
              {/* Fallback elegant sketch/avatar */}
              <div className="absolute inset-0 bg-slate-900/5 hover:bg-slate-900/0 transition-all duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-20 h-20 bg-dominant-green rounded-full flex items-center justify-center mx-auto text-white shadow-md">
                    <span className="font-serif text-2xl font-bold">LB</span>
                  </div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm mt-3">Leonard Bielory, M.D.</h4>
                  <p className="text-[11px] text-dominant-green-dark font-semibold uppercase tracking-wider">Board Certified Allergist</p>
                  <p className="text-[10px] text-slate-400 mt-2 italic px-3">Over 35 Years of Specialty Clinical Experience</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-xs text-slate-500 flex justify-center items-center gap-1.5 font-medium">
                <Shield className="w-3.5 h-3.5 text-dominant-green" />
                <span>Active Licensure: New Jersey & New York</span>
              </div>
            </div>
          </div>

          {/* Education Block */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <GraduationCap className="w-5 h-5 text-dominant-green" />
              <span>Education & Medical Training</span>
            </h3>
            <div className="space-y-6 relative pl-4 border-l border-slate-100">
              {credentials.education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-dominant-green ring-4 ring-white group-hover:bg-dominant-green-dark transition-colors" />
                  <div className="text-xs font-bold text-dominant-green tracking-wide">{edu.year}</div>
                  <h4 className="font-bold text-slate-900 text-sm mt-0.5">{edu.degree}</h4>
                  <div className="text-xs text-slate-500 font-semibold">{edu.institution}</div>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic & Clinical Appointments */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <BookOpen className="w-5 h-5 text-dominant-green" />
              <span>Academic & Clinical Career</span>
            </h3>
            <div className="space-y-6 relative pl-4 border-l border-slate-100">
              {credentials.appointments.map((appt, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-dominant-orange ring-4 ring-white group-hover:bg-dominant-orange-dark transition-colors" />
                  <div className="text-xs font-bold text-dominant-orange tracking-wide">{appt.year}</div>
                  <h4 className="font-bold text-slate-900 text-sm mt-0.5">{appt.role}</h4>
                  <div className="text-xs text-slate-500 font-semibold">{appt.org}</div>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{appt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Memberships & Societies */}
          <div className="bg-slate-950 text-white p-6 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-white">
              <Sparkles className="w-24 h-24" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-dominant-orange mb-4 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Scientific Society Memberships</span>
            </h4>
            <ul className="space-y-2 text-[11px] text-slate-300">
              {credentials.memberships.map((m, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-dominant-orange font-bold">•</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
