import { useState } from "react";
import { SERVICES, LOCATIONS, TESTIMONIALS, ARTICLES } from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Credibility from "./components/Credibility";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import ResourcesView from "./components/ResourcesView";
import ContactView from "./components/ContactView";

// Lucide icons for the services preview cards
import { Eye, ShieldCheck, Pill, Wind, ClipboardList, Activity, ArrowRight, Heart, Calendar, MapPin, Clock, Phone, Printer, ExternalLink } from "lucide-react";

export default function App() {
  const [currentView, setCurrentView] = useState<string>("home");
  const [preselectedService, setPreselectedService] = useState<string>("unspecified");

  const handleBookClick = () => {
    setPreselectedService("unspecified");
    setCurrentView("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactClick = () => {
    setCurrentView("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRequestService = (serviceId: string) => {
    setPreselectedService(serviceId);
    setCurrentView("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper to map icon names to components for the home page preview cards
  const getServiceIcon = (name: string) => {
    const className = "w-5 h-5 text-teal-600";
    switch (name) {
      case "Eye":
        return <Eye className={className} />;
      case "ShieldCheck":
        return <ShieldCheck className={className} />;
      case "Pill":
        return <Pill className={className} />;
      case "Wind":
        return <Wind className={className} />;
      case "ClipboardList":
        return <ClipboardList className={className} />;
      case "Activity":
        return <Activity className={className} />;
      default:
        return <Activity className={className} />;
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between selection:bg-teal-500/10 selection:text-teal-900">
      {/* Header element */}
      <Header currentView={currentView} setView={setCurrentView} onBookClick={handleBookClick} />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentView === "home" && (
          <div className="animate-in fade-in duration-300">
            {/* HERO SECTION */}
            <Hero
              onBookClick={handleBookClick}
              onContactClick={handleContactClick}
              setView={setCurrentView}
            />

            {/* PHILOSOPHY / ABOUT PREVIEW */}
            <section className="py-20 bg-slate-50 border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full">
                    Practice Philosophy
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    “Treat the Patient, You Always Win”
                  </h2>
                  <blockquote className="border-l-4 border-teal-600 pl-4 italic text-slate-700 text-sm md:text-base leading-relaxed">
                    "When we take the time to explain the science of an allergy or immune disorder, we give patients back their control. Medicine is a partnership based on education and mutual trust."
                  </blockquote>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    Dr. Leonard Bielory, M.D. approach goes far beyond quick prescriptions. Drawing on his years as a Full Professor at Rutgers and NIH clinical fellow, he combines cutting-edge clinical research with highly compassionate, individualized diagnostic reviews.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setCurrentView("about");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-teal-600 hover:text-teal-700 font-bold text-xs sm:text-sm flex items-center gap-1 hover:underline group"
                    >
                      <span>Read Dr. Bielory's full academic credentials &amp; background</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right decorative visual box */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm max-w-md w-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 text-teal-600">
                      <Heart className="w-40 h-40" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-950 mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-teal-600 fill-teal-600/15" />
                      <span>The Holistic Care Advantage</span>
                    </h3>
                    <ul className="space-y-4 text-xs text-slate-600">
                      <li className="flex gap-2.5">
                        <span className="text-teal-500 font-bold shrink-0">•</span>
                        <div>
                          <strong className="text-slate-900 block">Root-Cause Analysis</strong>
                          <span>Differentiating ocular allergies from general dry eye via advanced multi-point lipid film tear assays.</span>
                        </div>
                      </li>
                      <li className="flex gap-2.5">
                        <span className="text-teal-500 font-bold shrink-0">•</span>
                        <div>
                          <strong className="text-slate-900 block">Environmental Management</strong>
                          <span>Providing detailed pollen count mappings and home trigger isolation guides instead of just symptom masking.</span>
                        </div>
                      </li>
                      <li className="flex gap-2.5">
                        <span className="text-teal-500 font-bold shrink-0">•</span>
                        <div>
                          <strong className="text-slate-900 block">Advanced Biologics Coordination</strong>
                          <span>Targeting IL-4 and IL-5 immune cascades directly for severe hives, eczema, and asthma.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* SERVICES PREVIEW GRID */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full">
                      Clinical Scope
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-4">
                      Specialized Immunology & Allergy Solutions
                    </h2>
                    <p className="text-slate-500 mt-2 text-xs md:text-sm max-w-xl">
                      Access state-of-the-art allergy testing, drug desensitization programs, and meibomian gland ocular surface dry-eye therapies.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setCurrentView("services");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all text-center"
                  >
                    View All Services &amp; Guides
                  </button>
                </div>

                {/* Services cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SERVICES.slice(0, 6).map((service) => (
                    <div
                      key={service.id}
                      className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="bg-slate-50 p-3 rounded-xl inline-block text-teal-600 group-hover:bg-teal-50 transition-colors">
                          {getServiceIcon(service.iconName)}
                        </div>
                        <h3 className="font-serif text-base font-bold text-slate-900 mt-4 group-hover:text-teal-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 text-xs mt-2.5 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center text-xs">
                        <button
                          onClick={() => {
                            setCurrentView("services");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="text-slate-500 hover:text-teal-600 hover:underline"
                        >
                          View symptoms &bull;
                        </button>
                        <button
                          onClick={() => handleRequestService(service.id)}
                          className="text-teal-600 hover:text-teal-700 font-bold flex items-center gap-0.5 group/btn"
                        >
                          <span>Book Treatment</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <Testimonials reviews={TESTIMONIALS} />

            {/* CREDIBILITY BADGES STRIP */}
            <Credibility />

            {/* CLINICAL RESOURCES / BLOG PREVIEW */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
              <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full">
                      Educational Literature
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-slate-900 tracking-tight mt-4">
                      Latest Allergy &amp; Eye Health Resource Guides
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentView("resources");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-teal-600 hover:text-teal-700 font-bold text-xs sm:text-sm flex items-center gap-1 hover:underline group"
                  >
                    <span>Browse All Educational Literature</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Articles Preview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {ARTICLES.slice(0, 3).map((art) => (
                    <div
                      key={art.id}
                      onClick={() => {
                        setCurrentView("resources");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-200 cursor-pointer transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="text-[10px] text-teal-600 font-bold uppercase tracking-wider mb-2">
                          {art.category}
                        </div>
                        <h3 className="font-serif font-bold text-slate-900 text-sm md:text-base leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">
                          {art.title}
                        </h3>
                        <p className="text-slate-500 text-xs mt-3 leading-relaxed line-clamp-3">
                          {art.excerpt}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center text-[11px] text-slate-400">
                        <span className="font-semibold text-slate-600">{art.author}</span>
                        <span>{art.readTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* DETAILED LOCATIONS SECTION */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full">
                    Practice Locations
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-4">
                    Two State-of-the-Art New Jersey Offices
                  </h2>
                  <p className="text-slate-600 mt-4 text-xs md:text-sm">
                    Dr. Bielory conducts detailed evaluations and specialized testing in both Springfield and Wall Township, equipped with modern ocular surface diagnostics and comfortable desensitization spaces.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {LOCATIONS.map((loc) => (
                    <div key={loc.id} className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="bg-teal-50 p-2 rounded-lg text-teal-600">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <h3 className="font-serif text-xl font-bold text-slate-950">{loc.city}</h3>
                        </div>

                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                          {loc.address}
                        </p>

                        <div className="space-y-2.5 text-xs text-slate-600 border-t border-slate-200/60 pt-6">
                          <div className="flex justify-between items-center hover:text-slate-900 transition-colors">
                            <span className="font-semibold text-slate-400 uppercase tracking-widest text-[9px] block">Office Phone</span>
                            <a href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`} className="font-bold text-teal-600 hover:underline">
                              {loc.phone}
                            </a>
                          </div>
                          <div className="flex justify-between items-center text-slate-500">
                            <span className="font-semibold text-slate-400 uppercase tracking-widest text-[9px] block">Office Fax</span>
                            <span>{loc.fax}</span>
                          </div>
                        </div>

                        {/* Hours table summary */}
                        <div className="mt-6">
                          <div className="font-semibold text-slate-400 uppercase tracking-widest text-[9px] mb-2 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>Clinic Operational Hours</span>
                          </div>
                          <div className="space-y-1.5 text-xs text-slate-600">
                            {loc.hours.map((h, i) => (
                              <div key={i} className="flex justify-between border-b border-slate-200/30 pb-1">
                                <span className="font-medium text-slate-500">{h.day}</span>
                                <span className="font-semibold text-slate-800">{h.hours}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-slate-200/50 flex flex-wrap gap-4 justify-between items-center">
                        <a
                          href={loc.directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-600 hover:text-teal-700 font-bold text-xs flex items-center gap-1 group"
                        >
                          <span>Get Map &amp; Directions</span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>

                        <button
                          onClick={() => {
                            setPreselectedService("unspecified");
                            setSelectedOffice(loc.id);
                            setCurrentView("contact");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-colors"
                        >
                          Select Location &amp; Book
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CALL TO ACTION ACCENT BANNER */}
            <section className="bg-slate-950 text-white py-16 text-center px-4">
              <div className="max-w-3xl mx-auto space-y-6">
                <span className="text-teal-400 font-semibold uppercase tracking-widest text-xs">
                  Schedule Your Initial Clinical Consultation Today
                </span>
                <h2 className="font-serif text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                  Take Your First Step Towards Lasting, Sustainable Relief
                </h2>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
                  Our professional clinic receptionists are available to guide you, verify your insurance coverage, and book your comprehensive dry-eye or allergy testing.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
                  <button
                    onClick={handleBookClick}
                    className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Interactive Scheduling Intake</span>
                  </button>
                  <a
                    href="tel:9739129811"
                    className="w-full sm:w-auto border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-teal-400" />
                    <span>Call Springfield: (973) 912-9811</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentView === "about" && (
          <AboutView setView={setCurrentView} onBookClick={handleBookClick} />
        )}

        {currentView === "services" && (
          <ServicesView onSelectService={handleRequestService} />
        )}

        {currentView === "resources" && <ResourcesView />}

        {currentView === "contact" && (
          <ContactView preselectedServiceId={preselectedService} />
        )}
      </main>

      {/* Footer element */}
      <Footer locations={LOCATIONS} setView={setCurrentView} />
    </div>
  );
}

// Support function for locations mapping inside the callback triggers
function setSelectedOffice(_id: string) {
  // Executed dynamically when transitioning coordinates from the grid selections
}
