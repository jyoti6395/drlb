import { useState } from "react";
import { SERVICES } from "../data";
import { Service } from "../types";
import { Eye, ShieldCheck, Pill, Wind, ClipboardList, Activity, ChevronDown, ChevronUp, AlertCircle, Sparkles, CheckCircle2 } from "lucide-react";

interface ServicesViewProps {
  onSelectService: (serviceId: string) => void;
  setView: (view: string) => void;
  onBookClick: () => void;
}

export default function ServicesView({ onSelectService, setView, onBookClick }: ServicesViewProps) {
  const [selectedTab, setSelectedTab] = useState<"all" | "ocular" | "testing" | "immunology">("all");
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  // Helper function to map string names to Lucide Icon components
  const getServiceIcon = (name: string, className: string = "w-6 h-6 text-dominant-green") => {
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

  const tabs = [
    { id: "all", label: "All Specializations" },
    { id: "ocular", label: "Ocular surface / Allergy eyes" },
    { id: "testing", label: "Allergy & Patch Testing" },
    { id: "immunology", label: "Immunology & Biologics" }
  ] as const;

  const filteredServices = SERVICES.filter((service) => {
    if (selectedTab === "all") return true;
    if (selectedTab === "ocular") return service.id === "ocular-allergies" || service.id === "airway-skin-allergies";
    if (selectedTab === "testing") return service.id === "allergy-testing" || service.id === "drug-allergies";
    if (selectedTab === "immunology") return service.id === "immunological-treatments" || service.id === "immune-disorders";
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      {/* Page Header Banner */}
      <div className="relative bg-slate-950 py-12 md:py-16 px-4 border-b border-slate-900 shadow-md overflow-hidden">
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
          <div className="max-w-3xl space-y-4">
            <span className="text-dominant-orange font-bold tracking-widest uppercase text-xs px-2.5 py-1 rounded bg-dominant-orange-glow border border-dominant-orange/20 inline-block animate-pulse">
              Clinical Scope of Practice
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mt-1">
              Allergy, Immunology &amp; Dry Eye Services
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Dr. Bielory provides state-of-the-art diagnostic evaluations and highly targeted therapeutic interventions, specialized particularly in ocular surface diseases, drug desensitizations, and biologic treatments.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onBookClick}
                className="bg-dominant-orange hover:bg-dominant-orange-dark text-white font-semibold text-xs md:text-sm px-5 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-dominant-orange-glow cursor-pointer"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Directory Area */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Navigation Filters */}
        <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4 justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedTab(tab.id);
                setExpandedCardId(null);
              }}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                selectedTab === tab.id
                  ? "bg-dominant-green text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Informational Notice */}
        <div className="mt-8 bg-dominant-green-light/50 border border-dominant-green/20 rounded-2xl p-4 flex items-start gap-3 text-xs md:text-sm text-dominant-green-dark">
          <AlertCircle className="w-5 h-5 text-dominant-green shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Holistic Patient-Centered Care</span>: Our diagnostics go deep to find the biological root cause. Clicking any service below reveals full symptoms profiles, specialized treatments, and clinical testing guidelines.
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredServices.map((service) => {
            const isExpanded = expandedCardId === service.id;
            return (
              <div
                key={service.id}
                className={`bg-white border rounded-2xl p-6 transition-all duration-300 ${
                  isExpanded
                    ? "border-dominant-green shadow-md ring-1 ring-dominant-green-glow md:col-span-2 lg:col-span-3"
                    : "border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-dominant-green-light p-3 rounded-xl text-dominant-green">
                      {getServiceIcon(service.iconName, "w-6 h-6")}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-dominant-green">
                        {service.title}
                      </h3>
                      <span className="text-[10px] text-dominant-green uppercase font-bold tracking-wider">
                        Medical Specialty
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="p-1.5 rounded-lg hover:bg-slate-50 text-slate-500 hover:text-dominant-green transition-colors shrink-0"
                    aria-label={isExpanded ? "Collapse service details" : "Expand service details"}
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                <p className="text-slate-600 text-xs md:text-sm mt-4 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Expanded Details section */}
                {isExpanded ? (
                  <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="lg:col-span-6 space-y-4">
                      <h4 className="font-serif text-base font-bold text-slate-900">
                        Detailed Clinical Overview
                      </h4>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        {service.longDescription}
                      </p>

                      <div className="pt-4 flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => onSelectService(service.id)}
                          className="bg-dominant-orange hover:bg-dominant-orange-dark text-white font-semibold text-xs px-4 py-3 rounded-lg shadow-sm transition-colors text-center"
                        >
                          Request Appointment for This
                        </button>
                        <button
                          onClick={() => toggleExpand(service.id)}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs px-4 py-3 rounded-lg transition-colors text-center"
                        >
                          Close Details
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-3 space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100">
                      <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 text-dominant-green-dark">
                        <AlertCircle className="w-4 h-4" />
                        <span>Common Symptoms</span>
                      </h5>
                      <ul className="space-y-2">
                        {service.symptoms.map((sym, i) => (
                          <li key={i} className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5">
                            <span className="text-dominant-green font-bold">•</span>
                            <span>{sym}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-3 space-y-3 bg-dominant-orange-light p-5 rounded-xl border border-dominant-orange-glow">
                      <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 text-dominant-orange-dark">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Diagnostics & Care</span>
                      </h5>
                      <ul className="space-y-2">
                        {service.treatments.map((t, i) => (
                          <li key={i} className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5">
                            <span className="text-dominant-orange font-bold">•</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 flex justify-between items-center text-xs">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="text-dominant-green hover:text-dominant-green-dark font-bold flex items-center gap-1 hover:underline"
                    >
                      <span>Learn more about symptoms & treatments</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onSelectService(service.id)}
                      className="text-dominant-orange hover:text-dominant-orange-dark font-semibold hover:underline"
                    >
                      Request treatment &bull;
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing trust banner */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 p-4 opacity-5">
            <Sparkles className="w-24 h-24" />
          </div>
          <h3 className="font-serif text-xl md:text-3xl font-bold tracking-tight">
            Not sure which allergy panel or treatment applies?
          </h3>
          <p className="text-slate-400 text-xs md:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Allergy pathways are complex. In your initial comprehensive consultation, Dr. Bielory will review your clinical history, perform targeted diagnostic screening, and guide you to a precise plan.
          </p>
          <button
            onClick={() => onSelectService("unspecified")}
            className="mt-6 bg-dominant-orange hover:bg-dominant-orange-dark text-white font-semibold text-xs md:text-sm px-6 py-3 rounded-lg shadow-md transition-all inline-block"
          >
            Schedule a Diagnostic Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
