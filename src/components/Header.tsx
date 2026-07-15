import { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X, ChevronDown, Calendar, Stethoscope } from "lucide-react";

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
  onBookClick: () => void;
}

export default function Header({ currentView, setView, onBookClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Dr. Bielory" },
    { id: "services", label: "Services" },
    { id: "resources", label: "Patient Resources" },
    { id: "contact", label: "Contact & Locations" },
  ];

  const handleNavClick = (id: string) => {
    setView(id);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="w-full z-50">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 lg:gap-6 text-slate-300">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Springfield, NJ: <a href="tel:9739129811" className="font-semibold hover:underline hover:text-teal-400">(973) 912-9811</a></span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Wall Township, NJ: <a href="tel:7324490111" className="font-semibold hover:underline hover:text-teal-400">(732) 449-0111</a></span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium tracking-wider uppercase text-slate-400">
            <span>Holistic Allergy Care & Ocular Surface Disorders</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline">Fellow, ACAAI & AAAAI</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
            : "bg-white py-5 border-b border-slate-100"
        } sticky top-0`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 text-left group"
          >
            <div className="bg-teal-50 p-2 rounded-lg text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-none">
                Dr. Leonard Bielory, MD
              </div>
              <div className="text-[10px] md:text-xs text-teal-600 font-semibold uppercase tracking-wider mt-0.5">
                Allergy, Immunology & Ocular Care
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors relative py-1.5 ${
                    currentView === item.id
                      ? "text-teal-600 font-semibold"
                      : "text-slate-600 hover:text-teal-600"
                  }`}
                >
                  {item.label}
                  {currentView === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Prominent CTA */}
            <button
              onClick={onBookClick}
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between text-left px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                    currentView === item.id
                      ? "bg-teal-50 text-teal-700 font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-teal-600"
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
