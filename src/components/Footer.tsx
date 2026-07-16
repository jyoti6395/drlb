import { useState, FormEvent } from "react";
import { Phone, MapPin, Printer, Mail, Send, CheckCircle, Clock } from "lucide-react";
import { OfficeLocation } from "../types";

interface FooterProps {
  locations: OfficeLocation[];
  setView: (view: string) => void;
}

export default function Footer({ locations, setView }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleNavClick = (view: string) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About & Newsletter column */}
        <div className="space-y-6">
          <div>
            <span className="font-serif text-xl font-bold text-white tracking-tight">
              Dr. Leonard Bielory, MD
            </span>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              Allergy, Immunology & Ocular Care
            </p>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Delivering globally recognized, evidence-based diagnoses and customized treatment plans for seasonal allergies, asthma, and dry eye syndromes.
          </p>

          <div className="pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Patient Newsletter
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Receive seasonal allergy alerts, preventative tips, and practice updates.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 p-3 rounded-lg text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are subscribed to our newsletter updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-dominant-green flex-1 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-dominant-orange hover:bg-dominant-orange-dark text-white rounded-lg p-2 flex items-center justify-center transition-all duration-200"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Office Locations */}
        {locations.map((loc) => (
          <div key={loc.id} className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-dominant-green" />
              <span>{loc.city} Office</span>
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              {loc.address}
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-dominant-green shrink-0" />
                <span>P: </span>
                <a href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`} className="hover:underline">
                  {loc.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Printer className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span>F: {loc.fax}</span>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-dominant-green hover:text-dominant-green-dark transition-colors">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-medium">Hours:</span>
              </div>
              <div className="pl-5 space-y-1 text-slate-500 text-[11px]">
                {loc.hours.slice(0, 5).map((h, i) => (
                  <div key={i} className="flex justify-between max-w-[200px]">
                    <span>{h.day}:</span>
                    <span>{h.hours === "Closed" ? "Closed" : h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Navigation & Patient Forms column */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
            Practice Information
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button onClick={() => handleNavClick("home")} className="hover:text-dominant-green transition-colors">
                Home Page
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("about")} className="hover:text-dominant-green transition-colors">
                About Dr. Bielory
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-dominant-green transition-colors">
                Allergy & Dry Eye Services
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("resources")} className="hover:text-dominant-green transition-colors">
                Patient Resources & Articles
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("contact")} className="hover:text-dominant-green transition-colors">
                Contact & Office Locations
              </button>
            </li>
          </ul>

          <div className="pt-4 border-t border-slate-900 text-xs text-slate-500 space-y-1">
            <p>Dr. Leonard Bielory, M.D. is board certified by the American Board of Allergy and Immunology.</p>
          </div>
        </div>
      </div>

      {/* Footer Legal Row */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Dr. Leonard Bielory, M.D. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          <a href="#accessibility" className="hover:text-slate-400 transition-colors">Accessibility Statement</a>
        </div>
      </div>
    </footer>
  );
}
