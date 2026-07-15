import { useState, FormEvent } from "react";
import { LOCATIONS, SERVICES } from "../data";
import { MapPin, Phone, Printer, Clock, ExternalLink, Check, Calendar, CheckCircle, User, ArrowRight, ClipboardList, Shield } from "lucide-react";

interface ContactViewProps {
  preselectedServiceId?: string;
}

export default function ContactView({ preselectedServiceId = "unspecified" }: ContactViewProps) {
  // Booking Form State
  const [step, setStep] = useState(1);
  const [selectedOffice, setSelectedOffice] = useState("springfield");
  const [selectedService, setSelectedService] = useState(preselectedServiceId);
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientDob, setPatientDob] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [preferredTime, setPreferredTime] = useState("morning");
  const [specialNotes, setSpecialNotes] = useState("");

  // Simple Contact Form State
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

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (patientName && patientPhone && patientEmail && patientDob) {
      setStep(4); // Receipt step
    }
  };

  const resetBooking = () => {
    setStep(1);
    setPatientName("");
    setPatientDob("");
    setPatientPhone("");
    setPatientEmail("");
    setInsuranceProvider("");
    setSpecialNotes("");
  };

  const activeServiceObj = SERVICES.find((s) => s.id === selectedService);

  return (
    <div className="bg-white min-h-screen pt-6 pb-20 font-sans">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <span className="text-teal-400 font-semibold tracking-widest uppercase text-xs">
            Connect With Our Clinics
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
            Locations & Appointment Booking
          </h1>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-2xl leading-relaxed">
            Ready to live allergy-free? Schedule a clinical evaluation at our Springfield or Wall Township offices, or submit a message to our administrative staff.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left column: 2 Locations & Contact Message Form */}
        <div className="lg:col-span-6 space-y-12">
          {/* 2 Locations cards */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              Our Professional Medical Offices
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.id}
                  className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-950 flex items-center gap-1.5">
                      <MapPin className="w-5 h-5 text-teal-600 shrink-0" />
                      <span>{loc.city}</span>
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {loc.address}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-600 mt-4 border-t border-slate-200/50 pt-4">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="font-semibold">Phone:</span>
                        <a href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`} className="hover:underline text-teal-700 font-medium">
                          {loc.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Printer className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="font-semibold">Fax:</span>
                        <span>{loc.fax}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/50">
                    <a
                      href={loc.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 font-bold text-xs flex items-center gap-1 group"
                    >
                      <span>Get Detailed Directions</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    <div className="mt-4">
                      <div className="text-[10px] font-bold uppercase text-slate-400 mb-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Hours of Operation</span>
                      </div>
                      <div className="space-y-0.5 text-[10px] text-slate-500">
                        {loc.hours.map((h, i) => (
                          <div key={i} className="flex justify-between">
                            <span className="font-semibold">{h.day}:</span>
                            <span>{h.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
              Send a Secure Administrative Message
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              For general billing questions, records transfers, or general inquiries, please fill out the administrative form below. Our clinical coordinators will respond within 24 business hours.
            </p>

            {isContactSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-500/20 text-emerald-800 p-6 rounded-2xl flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                    Thank you for contacting Dr. Bielory's administrative team. Your inquiry has been routed to our medical coordinator. We will review your message and reply shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Mary Smith"
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="e.g. mary@gmail.com"
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="e.g. (973) 555-0199"
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Please specify any billing queries, generic requests, or administrative questions. Do not enter sensitive HIPAA-protected diagnostic details here."
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-teal-500 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-850 text-white font-bold text-xs px-5 py-3 rounded-lg shadow-sm transition-all w-full text-center"
                >
                  Send Administrative Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right column: Interactive Clinical Appointment Intake Form */}
        <div className="lg:col-span-6">
          <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm relative overflow-hidden">
            {/* Header / Step indicator */}
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-6">
              <div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-slate-900">
                  Appointment Booking Intake
                </h3>
                <p className="text-[10px] text-teal-600 font-bold uppercase tracking-wider mt-0.5">
                  Zocdoc-Integrated Scheduling Portal
                </p>
              </div>
              {step < 4 && (
                <div className="text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full">
                  Step <span className="text-teal-600">{step}</span> of 3
                </div>
              )}
            </div>

            {/* PROGRESS BAR */}
            {step < 4 && (
              <div className="w-full bg-slate-100 h-1.5 rounded-full mb-6">
                <div
                  className="bg-teal-600 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            )}

            {/* STEP 1: Select Location & Concern */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-1 duration-200">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-widest mb-3">
                    1. Select Preferred Clinic Location
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {LOCATIONS.map((loc) => (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() => setSelectedOffice(loc.id)}
                        className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                          selectedOffice === loc.id
                            ? "border-teal-500 bg-teal-50/40 ring-1 ring-teal-500/10"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="font-bold text-slate-900 text-sm">{loc.city}</span>
                          {selectedOffice === loc.id && (
                            <span className="bg-teal-600 text-white p-0.5 rounded-full shrink-0">
                              <Check className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-500 mt-2 block leading-snug line-clamp-2">
                          {loc.address}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-widest mb-3">
                    2. Select Primary Clinical Concern
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-3 text-xs md:text-sm text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all font-medium"
                  >
                    <option value="unspecified">General Allergy & Immune Consultation</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-widest mb-2 flex justify-between items-center">
                    <span>3. Insurance Provider</span>
                    <span className="text-[10px] text-slate-400 lowercase font-medium">Most major insurances accepted</span>
                  </label>
                  <input
                    type="text"
                    value={insuranceProvider}
                    onChange={(e) => setInsuranceProvider(e.target.value)}
                    placeholder="e.g., Blue Cross Blue Shield, Aetna, Cigna, Medicare"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
                  />
                  <span className="text-[10px] text-slate-400 mt-1.5 block italic leading-snug">
                    *Dr. Bielory is an in-network provider for most Medicare, Horizon BCBS, Aetna, and Cigna plans. We will verify your benefits prior to your visit.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs md:text-sm px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition-all w-full flex items-center justify-center gap-2"
                >
                  <span>Continue to Patient Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* STEP 2: Personal Details & Time */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-1 duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Patient's Legal Name
                    </label>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Mary Smith"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      required
                      value={patientDob}
                      onChange={(e) => setPatientDob(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="e.g. (973) 555-0199"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      placeholder="e.g. mary@gmail.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-widest mb-3">
                    Preferred Time of Day
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "morning", label: "Morning", hours: "9:00 AM - 12:00 PM" },
                      { id: "afternoon", label: "Afternoon", hours: "12:00 PM - 4:00 PM" },
                      { id: "evening", label: "Late Evening", hours: "4:00 PM - 7:00 PM" }
                    ].map((time) => (
                      <button
                        key={time.id}
                        type="button"
                        onClick={() => setPreferredTime(time.id)}
                        className={`p-3 rounded-lg border text-center flex flex-col justify-between transition-all ${
                          preferredTime === time.id
                            ? "border-teal-500 bg-teal-50/40 font-semibold"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                      >
                        <span className="text-xs text-slate-900 block">{time.label}</span>
                        <span className="text-[9px] text-slate-400 mt-1 block">{time.hours}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-4 py-3 rounded-lg transition-colors shrink-0"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs md:text-sm px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition-all flex-1 text-center"
                  >
                    Review Booking Summary
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Summary Review */}
            {step === 3 && (
              <form onSubmit={handleBookingSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-1 duration-200">
                <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl space-y-4 text-xs">
                  <h4 className="font-serif font-bold text-slate-900 text-sm border-b border-slate-200 pb-1.5">
                    Consultation Summary Review
                  </h4>

                  <div className="grid grid-cols-2 gap-y-3 text-slate-600">
                    <div>
                      <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px] block">Patient Name</span>
                      <span className="font-bold text-slate-900">{patientName}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px] block">Date of Birth</span>
                      <span className="font-bold text-slate-900">{patientDob}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px] block">Clinic Location</span>
                      <span className="font-bold text-slate-900 uppercase">
                        {selectedOffice === "springfield" ? "Springfield, NJ" : "Wall Township, NJ"}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px] block">Insurance Provider</span>
                      <span className="font-bold text-slate-900">{insuranceProvider || "None / Self-pay"}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px] block">Primary Clinical Concern</span>
                      <span className="font-bold text-slate-900">
                        {activeServiceObj ? activeServiceObj.title : "General Allergy & Immune Consultation"}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px] block">Mobile Phone</span>
                      <span className="font-bold text-slate-900">{patientPhone}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px] block">Preferred Slot</span>
                      <span className="font-bold text-slate-900 capitalize">{preferredTime} Block</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Clinical Symptoms / Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    placeholder="Briefly describe your symptoms (e.g. chronic red itchy eyes, persistent hives) to help us prepare your clinical chart."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
                  ></textarea>
                </div>

                {/* HIPAA consent */}
                <div className="flex items-start gap-2 text-[10px] text-slate-500 leading-normal">
                  <input type="checkbox" required className="mt-0.5" />
                  <span>
                    I authorize Dr. Bielory's clinics to contact me regarding my scheduling request, and certify that this information is transmitted securely.
                  </span>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-4 py-3 rounded-lg transition-colors shrink-0"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs md:text-sm px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition-all flex-1 text-center"
                  >
                    Request Appointment Slot
                  </button>
                </div>
              </form>
            )}

            {/* STEP 4: Appointment Receipt / Confirmation */}
            {step === 4 && (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-slate-950">
                    Booking Intake Complete!
                  </h4>
                  <p className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-full inline-block mt-2">
                    Reference ID: DB-2026-{(Math.random() * 10000).toFixed(0)}
                  </p>
                </div>

                {/* Secure Receipt block */}
                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 space-y-4 text-xs relative">
                  {/* Decorative badge watermark */}
                  <div className="absolute top-4 right-4 text-slate-300 opacity-20">
                    <Shield className="w-12 h-12" />
                  </div>

                  <h5 className="font-bold text-slate-900 border-b border-slate-200 pb-1.5 uppercase tracking-wide">
                    Patient Consultation Voucher
                  </h5>

                  <div className="space-y-2 text-slate-600 leading-normal">
                    <p>
                      <strong className="text-slate-800">Patient:</strong> {patientName} (DOB: {patientDob})
                    </p>
                    <p>
                      <strong className="text-slate-800">Assigned Clinic:</strong>{" "}
                      {selectedOffice === "springfield" ? "Springfield, NJ" : "Wall Township, NJ"}
                    </p>
                    <p>
                      <strong className="text-slate-800">Consultation Category:</strong>{" "}
                      {activeServiceObj ? activeServiceObj.title : "General Allergy & Immunology"}
                    </p>
                    <p>
                      <strong className="text-slate-800">Preference:</strong> {preferredTime.toUpperCase()} Block
                    </p>
                    <p>
                      <strong className="text-slate-800">Status:</strong>{" "}
                      <span className="text-emerald-700 font-bold">Awaiting Coordinator Confirmation</span>
                    </p>
                  </div>
                </div>

                {/* Patient checklist */}
                <div className="space-y-3 bg-teal-50/40 border border-teal-100 p-5 rounded-2xl">
                  <h5 className="font-serif text-slate-950 text-xs font-bold flex items-center gap-1.5">
                    <ClipboardList className="w-4 h-4 text-teal-600" />
                    <span>Important Preparation Checklist:</span>
                  </h5>
                  <ul className="space-y-2 text-[11px] text-slate-600 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>
                        <strong>Allergy Testing Preparation:</strong> If scheduled for skin prick testing, please stop all oral antihistamines <strong>5 to 7 days prior</strong> to this appointment.
                      </span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>
                        <strong>What to Bring:</strong> Government photo ID, physical health insurance cards, and a printed list of your active medications and dosages.
                      </span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>
                        <strong>Coordination Notice:</strong> Our medical receptionist will contact you via phone or email within <strong>4 to 8 business hours</strong> to lock in your exact arrival time.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-xs px-4 py-3 rounded-lg transition-colors flex-1 text-center"
                  >
                    Print Intake Voucher
                  </button>
                  <button
                    type="button"
                    onClick={resetBooking}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-3 rounded-lg transition-colors flex-1 text-center"
                  >
                    Submit Another Intake
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
