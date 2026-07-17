import { useState, FormEvent } from "react";
import { LOCATIONS } from "../data";
import { MapPin, Phone, Clock, ExternalLink, CheckCircle, ArrowRight } from "lucide-react";

interface ContactViewProps {
  preselectedServiceId?: string; // Kept for prop compatibility
  setView: (view: string) => void;
  onBookClick: () => void;
}

export default function ContactView({ 
  onBookClick
}: ContactViewProps) {
  // Contact Form State
  const [contactLocation, setContactLocation] = useState("springfield");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (contactName && contactEmail && contactMessage) {
      setIsContactSubmitted(true);
      setContactName("");
      setContactEmail("");
      setContactPhone("");
      setContactMessage("");
      setTimeout(() => setIsContactSubmitted(false), 8000);
    }
  };

  return (
    <div className="bg-slate-50/50 min-h-screen pb-12 font-sans">
      {/* Page Header Banner */}
      <div className="relative bg-slate-950 py-10 md:py-12 px-4 border-b border-slate-900 shadow-md overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
          style={{
            backgroundImage: "url('/clinic_interior.png')",
          }}
        />
        {/* Dark gradient overlay for extreme readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/60 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto">
          {/* Header text content */}
          <div className="max-w-3xl space-y-3">
            <span className="text-dominant-orange font-bold tracking-widest uppercase text-xs px-2.5 py-1 rounded bg-dominant-orange-glow border border-dominant-orange/20 inline-block animate-pulse">
              Connect With Our Clinics
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mt-1">
              Locations &amp; Contact Us
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Have a question or want to get in touch? Select an office location and send us a message, or book your appointment online.
            </p>
            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="bg-dominant-orange hover:bg-dominant-orange-dark text-white font-semibold text-xs md:text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:shadow-dominant-orange-glow/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                Book Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Instant Scheduling Callout Banner */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="p-5 rounded-2xl bg-gradient-to-r from-dominant-green-light to-dominant-green-light/40 border border-dominant-green/10 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-dominant-green bg-white/80 border border-dominant-green/10 px-2.5 py-1 rounded-md inline-block">
              Need to Schedule an Appointment?
            </span>
            <h2 className="font-serif text-lg md:text-xl font-bold text-slate-900">
              Secure your clinical slot instantly via Zocdoc.
            </h2>
            <p className="text-xs text-slate-550 max-w-xl leading-relaxed">
              Skip the queue and book online to instantly confirm your clinical appointment time at either of our locations.
            </p>
          </div>
          <button
            type="button"
            onClick={onBookClick}
            className="bg-dominant-orange hover:bg-dominant-orange-dark text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-dominant-orange-glow transition-all duration-300 flex items-center gap-1.5 cursor-pointer shrink-0 animate-pulse"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left column: 2 Locations - Stacked Vertically for generous space */}
        <div className="lg:col-span-5 space-y-4">
          <h2 id="locations-section" className="font-serif text-xl font-bold text-slate-900 border-b border-slate-100 pb-1.5">
            Our Professional Medical Offices
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-white border border-slate-150 p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-slate-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="space-y-3 flex-1">
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-dominant-green bg-dominant-green-light px-2.5 py-1 rounded-md mb-1.5 inline-block">
                        Clinical Facility
                      </span>
                      <h3 className="font-serif text-lg font-bold text-slate-950 flex items-center gap-2">
                        <MapPin className="w-4.5 h-4.5 text-dominant-green shrink-0" />
                        <span>{loc.city}, NJ</span>
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {loc.address}
                      </p>
                    </div>

                    <div className="space-y-1.5 border-t border-slate-100 pt-3 max-w-sm">
                      <div className="flex items-center gap-2 text-xs">
                        <Phone className="w-4 h-4 text-dominant-green shrink-0" />
                        <span className="font-medium text-slate-400">Phone:</span>
                        <a href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`} className="hover:underline font-bold text-dominant-green-dark">
                          {loc.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-3 shrink-0 w-full sm:w-auto">
                    <a
                      href={loc.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-dominant-green-light hover:bg-dominant-green/20 text-dominant-green-dark font-bold text-[11px] px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-1 border border-dominant-green/10 w-full sm:w-auto justify-center"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <div className="w-full">
                      <div className="text-[10px] font-bold uppercase text-slate-400 mb-1 flex items-center sm:justify-end gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Clinic Hours</span>
                      </div>
                      <div className="space-y-0.5 text-[10px] text-slate-600 bg-slate-50/80 p-2 rounded-xl border border-slate-100/60 min-w-[150px]">
                        {loc.hours.map((h, i) => (
                          <div key={i} className="flex justify-between gap-4">
                            <span className="font-bold text-slate-500">{h.day}</span>
                            <span className="text-slate-800 font-medium">{h.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Contact Section */}
        <div id="contact-form-section" className="lg:col-span-7 space-y-4">
          <div>
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-dominant-green bg-dominant-green-light px-2.5 py-1 rounded-md mb-3 inline-block">
              Get in touch today.
            </span>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-1.5">
              Get in touch with us today!
            </h3>
            <p className="text-xs text-slate-550 leading-relaxed">
              Use this form to send us any general questions you may have. If you would like to book online, please visit our booking page for more details.
            </p>
          </div>

          {/* Interactive Office Location Tabs - Outside the Form Card */}
          <div className="bg-white border border-slate-150 p-4 rounded-xl shadow-sm">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
              Select Clinic Office Location
            </label>
            <div className="grid grid-cols-2 gap-1.5 bg-slate-100/60 p-1 rounded-lg border border-slate-200/40">
              <button
                type="button"
                onClick={() => setContactLocation("springfield")}
                className={`py-2 px-2.5 text-xs font-bold rounded-md transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                  contactLocation === "springfield"
                    ? "bg-white text-dominant-green shadow-sm ring-1 ring-slate-200/50 scale-[1.01]"
                    : "text-slate-500 hover:text-slate-800 hover:bg-white/30"
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${contactLocation === "springfield" ? "text-dominant-green" : "text-slate-400"}`} />
                <span>Springfield Office</span>
              </button>
              <button
                type="button"
                onClick={() => setContactLocation("wall")}
                className={`py-2 px-2.5 text-xs font-bold rounded-md transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                  contactLocation === "wall"
                    ? "bg-white text-dominant-green shadow-sm ring-1 ring-slate-200/50 scale-[1.01]"
                    : "text-slate-500 hover:text-slate-800 hover:bg-white/30"
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${contactLocation === "wall" ? "text-dominant-green" : "text-slate-400"}`} />
                <span>Wall Township Office</span>
              </button>
            </div>
          </div>

          {/* Contact Message Form Card */}
          <div className="bg-white border border-slate-150 p-6 md:p-8 rounded-2xl shadow-lg shadow-slate-100/30 relative overflow-hidden">
            {/* Decorative colored blobs for rich visual appeal */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-dominant-green-glow rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-dominant-green-glow/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {isContactSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-500/20 text-emerald-800 p-6 rounded-2xl flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                      Thank you for contacting Dr. Bielory's {contactLocation === "springfield" ? "Springfield" : "Wall Township"} office team. Your inquiry has been routed to our medical coordinator. We will review your message and reply shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Mary Smith"
                        className="w-full bg-slate-50/50 border border-slate-200/80 rounded-lg px-3 py-2 text-xs md:text-sm text-slate-850 focus:outline-none focus:border-dominant-green focus:bg-white focus:ring-4 focus:ring-dominant-green-glow/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="e.g. mary@gmail.com"
                        className="w-full bg-slate-50/50 border border-slate-200/80 rounded-lg px-3 py-2 text-xs md:text-sm text-slate-850 focus:outline-none focus:border-dominant-green focus:bg-white focus:ring-4 focus:ring-dominant-green-glow/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="e.g. (973) 555-0199"
                      className="w-full bg-slate-50/50 border border-slate-200/80 rounded-lg px-3 py-2 text-xs md:text-sm text-slate-850 focus:outline-none focus:border-dominant-green focus:bg-white focus:ring-4 focus:ring-dominant-green-glow/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Please specify any billing queries, generic requests, or administrative questions. Do not enter sensitive HIPAA-protected diagnostic details here."
                      className="w-full bg-slate-50/50 border border-slate-200/80 rounded-lg px-3 py-2 text-xs md:text-sm text-slate-850 focus:outline-none focus:border-dominant-green focus:bg-white focus:ring-4 focus:ring-dominant-green-glow/20 transition-all duration-300"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-dominant-green hover:bg-dominant-green-dark text-white font-bold text-xs md:text-sm px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full text-center cursor-pointer border-t border-white/10"
                  >
                    Send Secure Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
