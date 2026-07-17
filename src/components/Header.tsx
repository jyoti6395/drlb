import { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X, ChevronDown, Calendar } from "lucide-react";

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
    <header className="w-full z-50 sticky top-0">
      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-1.5 border-b border-slate-100"
            : "bg-white py-3 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center text-left group"
          >
            <img
              src="/Dr.-B-Private-Practice-logo-FINAL-2.26_410x.avif"
              alt="Dr. Leonard Bielory, MD - Allergy, Immunology & Ocular Care"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
                isScrolled ? "h-8 md:h-9" : "h-9 md:h-11"
              }`}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6 animate-in fade-in duration-300">
              {navItems.map((item) => {
                if (item.id === "services") {
                  return (
                    <div
                      key={item.id}
                      className="relative group py-1.5"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => handleNavClick("services")}
                        className={`text-sm font-medium transition-colors flex items-center gap-0.5 cursor-pointer ${
                          currentView === "services" || currentView === "immune-disorders" || currentView === "sinusitis"
                            ? "text-dominant-green font-semibold"
                            : "text-slate-600 hover:text-dominant-green"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      {(currentView === "services" || currentView === "immune-disorders" || currentView === "sinusitis") && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-dominant-green rounded-full" />
                      )}

                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-slate-100 shadow-xl rounded-2xl py-2.5 w-60 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        {/* <button
                          onClick={() => handleNavClick("services")}
                          className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer ${
                            currentView === "services" ? "text-dominant-green bg-dominant-green-light" : "text-slate-700"
                          }`}
                        >
                          <span>All Services Index</span>
                          <span className="text-[9px] uppercase font-bold text-slate-400">All</span>
                        </button>
                        <hr className="border-slate-100 my-1.5" /> */}
                        <button
                          onClick={() => handleNavClick("immune-disorders")}
                          className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer ${
                            currentView === "immune-disorders" ? "text-dominant-green bg-dominant-green-light" : "text-slate-700"
                          }`}
                        >
                          <span>Immune Disorders</span>
                          <span className="text-[9px] bg-dominant-orange-light text-dominant-orange px-1.5 py-0.5 rounded font-bold">EoE</span>
                        </button>
                        <button
                          onClick={() => handleNavClick("sinusitis")}
                          className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer ${
                            currentView === "sinusitis" ? "text-dominant-green bg-dominant-green-light" : "text-slate-700"
                          }`}
                        >
                          <span>Sinusitis (Spotlight)</span>
                          <span className="text-[9px] bg-dominant-green-light text-dominant-green px-1.5 py-0.5 rounded font-bold">Sinusol</span>
                        </button>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-sm font-medium transition-colors relative py-1.5 cursor-pointer ${
                      currentView === item.id
                        ? "text-dominant-green font-semibold"
                        : "text-slate-600 hover:text-dominant-green"
                    }`}
                  >
                    {item.label}
                    {currentView === item.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-dominant-green rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Prominent CTA */}
            <button
              onClick={onBookClick}
              className="flex items-center gap-2 bg-dominant-orange hover:bg-dominant-orange-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-dominant-green hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                if (item.id === "services") {
                  return (
                    <div key={item.id} className="flex flex-col">
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className={`flex items-center justify-between text-left px-3 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                          currentView === "services" || currentView === "immune-disorders" || currentView === "sinusitis"
                            ? "bg-dominant-green-light text-dominant-green-dark font-bold"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      {/* Mobile Submenu */}
                      {isServicesDropdownOpen && (
                        <div className="pl-4 flex flex-col gap-0.5 border-l border-slate-100 ml-5 mt-1 pb-2">
                          <button
                            onClick={() => handleNavClick("services")}
                            className={`text-left px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer ${
                              currentView === "services" ? "text-dominant-green bg-dominant-green-light/40" : "text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            All Allergy Services
                          </button>
                          <button
                            onClick={() => handleNavClick("immune-disorders")}
                            className={`text-left px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer ${
                              currentView === "immune-disorders" ? "text-dominant-green bg-dominant-green-light/40" : "text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            Immune Disorders (EoE)
                          </button>
                          <button
                            onClick={() => handleNavClick("sinusitis")}
                            className={`text-left px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer ${
                              currentView === "sinusitis" ? "text-dominant-green bg-dominant-green-light/40" : "text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            Sinusitis (Spotlight)
                          </button>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between text-left px-3 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      currentView === item.id
                        ? "bg-dominant-green-light text-dominant-green-dark font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-dominant-green"
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="flex items-center justify-center gap-2 w-full bg-dominant-orange hover:bg-dominant-orange-dark text-white font-semibold py-3 rounded-lg shadow-sm transition-colors"
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
