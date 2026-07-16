import React, { useState } from "react";
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
import { Eye, ShieldCheck, Pill, Wind, ClipboardList, Activity, ArrowRight, Heart, Calendar, MapPin, Clock, Phone, Printer, ExternalLink, CheckCircle } from "lucide-react";

export default function App() {
  const [currentView, setCurrentView] = useState<string>("home");
  const [preselectedService, setPreselectedService] = useState<string>("unspecified");

  // Home Contact Form State
  const [homeName, setHomeName] = useState("");
  const [homeEmail, setHomeEmail] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [homeMessage, setHomeMessage] = useState("");
  const [homeContactSubmitted, setHomeContactSubmitted] = useState(false);

  const handleHomeContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (homeName && homeEmail && homePhone) {
      setHomeContactSubmitted(true);
      setHomeName("");
      setHomeEmail("");
      setHomePhone("");
      setHomeMessage("");
      setTimeout(() => setHomeContactSubmitted(false), 8000);
    }
  };

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
    const className = "w-5 h-5 text-dominant-green";
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
    <div className="bg-white min-h-screen flex flex-col justify-between selection:bg-dominant-green/10 selection:text-dominant-green-dark">
      {/* Header element */}
      <Header currentView={currentView} setView={setCurrentView} onBookClick={handleBookClick} />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentView === "home" && (
          <div className="animate-in fade-in duration-300">
            {/* 1. HERO SECTION */}
            <Hero
              onBookClick={handleBookClick}
              onContactClick={handleContactClick}
              setView={setCurrentView}
            />

            {/* 2. TESTIMONIALS SECTION */}
            <Testimonials reviews={TESTIMONIALS} />

            {/* 3. SERVICES GROUP 1: SERVICES WE PROVIDE */}
            <section className="pt-10 pb-6 bg-slate-50/60 border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-dominant-green bg-dominant-green-light px-3.5 py-1.5 rounded-full font-sans">
                    Services we provide
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-3">
                    Featured Services
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {SERVICES.slice(0, 3).map((service) => (
                    <div
                      key={service.id}
                      className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Service Card Top Image Banner */}
                        <div className="h-48 w-full overflow-hidden relative bg-white border-b border-slate-100/60 flex items-center justify-center p-4">
                          {service.imageUrl && (
                            <img
                              src={service.imageUrl}
                              alt={service.title}
                              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2 rounded-xl text-dominant-green shadow-sm shrink-0 border border-slate-100/40">
                            {getServiceIcon(service.iconName)}
                          </div>
                        </div>

                        <div className="p-4">
                          <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-dominant-green transition-colors leading-snug flex items-center">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 text-xs mt-1.5 leading-relaxed font-sans">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <div className="pt-3 border-t border-slate-100 flex justify-end items-center text-xs">
                          {service.id === "immunological-treatments" ? (
                            <button
                              onClick={() => {
                                  setCurrentView("services");
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              className="text-dominant-green hover:text-dominant-green-dark font-bold flex items-center gap-0.5 group/btn font-sans"
                            >
                              <span>Learn More</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                            </button>
                          ) : (
                            <button
                              onClick={() => handleRequestService(service.id)}
                              className="text-dominant-orange hover:text-dominant-orange-dark font-bold flex items-center gap-0.5 group/btn font-sans"
                            >
                              <span>Request Appointment</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. SERVICES GROUP 2: IN THE SPOTLIGHT */}
            <section className="pt-6 pb-10 bg-white border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-dominant-green bg-dominant-green-light px-3.5 py-1.5 rounded-full font-sans">
                    In the spotlight
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-3">
                    Featured services
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {[
                    SERVICES[3], // Eye, Nose, Sinus...
                    SERVICES[5], // Symptoms of Unknown Origin
                    SERVICES[4]  // Specialized Allergy Testing
                  ].map((service) => (
                    <div
                      key={service.id}
                      className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Service Card Top Image Banner */}
                        <div className="h-48 w-full overflow-hidden relative bg-white border-b border-slate-100/60 flex items-center justify-center p-4">
                          {service.imageUrl && (
                            <img
                              src={service.imageUrl}
                              alt={service.title}
                              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2 rounded-xl text-dominant-green shadow-sm shrink-0 border border-slate-100/40">
                            {getServiceIcon(service.iconName)}
                          </div>
                        </div>

                        <div className="p-4">
                          <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-dominant-green transition-colors leading-snug flex items-center">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 text-xs mt-1.5 leading-relaxed font-sans">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <div className="pt-3 border-t border-slate-100 flex justify-end items-center text-xs">
                          <button
                            onClick={() => handleRequestService(service.id)}
                            className="text-dominant-orange hover:text-dominant-orange-dark font-bold flex items-center gap-0.5 group/btn font-sans"
                          >
                            <span>Request Appointment</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 7. SCHEDULING & CONTACT FORM */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
                  
                  {/* Left Column: Phone Scheduling Details */}
                  <div className="lg:col-span-5 space-y-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-dominant-green bg-dominant-green-light px-3 py-1.5 rounded-full">
                      Schedule an Appointment Today!
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                      Get in touch with us today!
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Use this form to send us any general questions you may have.
                    </p>

                    <div className="space-y-4 pt-4">
                      <div className="p-5 bg-white border border-slate-150 rounded-2xl flex items-start gap-4 shadow-sm">
                        <div className="bg-dominant-orange-light p-3 rounded-xl text-dominant-orange shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-slate-950 text-sm">Call Directly to schedule</h4>
                          <a href="tel:9739129817" className="text-base font-bold text-dominant-green hover:underline mt-1 block">
                            973-912-9817
                          </a>
                          <p className="text-[10px] text-slate-500 mt-1">
                            Call now and receive a 20% off all Sinusol Products.
                          </p>
                        </div>
                      </div>

                      <div className="p-5 bg-dominant-green-light/45 border border-dominant-green-light rounded-2xl flex items-start gap-4">
                        <div className="bg-dominant-green-light p-3 rounded-xl text-dominant-green shrink-0">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-slate-950 text-sm">Book Online</h4>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            If you would like to book online please visit our online booking page for more information.
                          </p>
                          <div className="mt-3 flex items-center gap-3">
                            <span className="text-xs font-bold text-slate-400">OR</span>
                            <button
                              onClick={() => {
                                setCurrentView("contact");
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 animate-pulse"
                            >
                              <span>Book an Appointment</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Contact Message Form */}
                  <div className="lg:col-span-7">
                    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
                      <h3 className="font-serif text-lg font-bold text-slate-950 mb-6 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-dominant-green" />
                        <span>Send Us a Message</span>
                      </h3>

                      {homeContactSubmitted ? (
                        <div className="bg-emerald-50 border border-emerald-500/20 text-emerald-800 p-6 rounded-2xl flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                            <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                              Thank you for your message. Our clinical coordinators will review your submission and respond shortly.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <form onSubmit={handleHomeContactSubmit} className="space-y-4 font-sans">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="home-name">
                              Enter your name
                            </label>
                            <input
                              type="text"
                              id="home-name"
                              required
                              value={homeName}
                              onChange={(e) => setHomeName(e.target.value)}
                              placeholder="Name *"
                              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-dominant-green focus:bg-white transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="home-email">
                              Enter your email
                            </label>
                            <input
                              type="email"
                              id="home-email"
                              required
                              value={homeEmail}
                              onChange={(e) => setHomeEmail(e.target.value)}
                              placeholder="Email *"
                              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-dominant-green focus:bg-white transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="home-phone">
                              Phone
                            </label>
                            <input
                              type="tel"
                              id="home-phone"
                              required
                              value={homePhone}
                              onChange={(e) => setHomePhone(e.target.value)}
                              placeholder="Phone *"
                              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-dominant-green focus:bg-white transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5" htmlFor="home-message">
                              Your message
                            </label>
                            <textarea
                              rows={4}
                              id="home-message"
                              value={homeMessage}
                              onChange={(e) => setHomeMessage(e.target.value)}
                              placeholder="Your message"
                              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-dominant-green focus:bg-white transition-colors"
                            ></textarea>
                          </div>

                          <div className="text-[10px] text-slate-400">
                            * Indicates a required field
                          </div>

                          <button
                            type="submit"
                            className="bg-dominant-orange hover:bg-dominant-orange-dark text-white font-bold text-xs md:text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all w-full text-center"
                          >
                            Submit Message
                          </button>
                        </form>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* 8. Recent Blog Posts Section */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 font-sans">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-dominant-green bg-dominant-green-light px-3 py-1.5 rounded-full">
                      News + events
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-slate-900 tracking-tight mt-4">
                      Recent Blog Posts
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentView("resources");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-dominant-green hover:text-dominant-green-dark font-bold text-xs sm:text-sm flex items-center gap-1 hover:underline group"
                  >
                    <span>Browse All Educational Literature</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Articles Preview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {ARTICLES.slice(0, 4).map((art) => (
                    <div
                      key={art.id}
                      onClick={() => {
                        setCurrentView("resources");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-200 cursor-pointer transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {art.imageUrl && (
                          <div className="h-44 w-full overflow-hidden rounded-xl mb-4 border border-slate-200/50">
                            <img
                              src={art.imageUrl}
                              alt={art.title}
                              className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        )}
                        <div className="text-[10px] text-dominant-green font-bold uppercase tracking-wider mb-2 font-sans">
                          {art.category}
                        </div>
                        <h3 className="font-serif font-bold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-dominant-green transition-colors line-clamp-2">
                          {art.title}
                        </h3>
                        <p className="text-slate-500 text-[11px] mt-3 leading-relaxed line-clamp-3 font-sans">
                          {art.excerpt}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-sans">
                        <span className="font-semibold text-slate-600">by {art.author}</span>
                        <span>{art.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 9. CREDIBILITY BADGES STRIP */}
            <Credibility />
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
