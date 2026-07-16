export default function Credibility() {
  const logos = [
    {
      src: "/turst1.png",
      alt: "National Institutes of Health",
      className: "h-9 sm:h-12 md:h-14 w-auto object-contain"
    },
    {
      src: "/trust2.avif",
      alt: "United States Environmental Protection Agency",
      className: "h-14 sm:h-18 md:h-22 w-auto object-contain"
    },
    {
      src: "/trust3.avif",
      alt: "Allergy and Immunology Specialty",
      className: "h-14 sm:h-18 md:h-22 w-auto object-contain"
    },
    {
      src: "/trust4.avif",
      alt: "Centers for Disease Control and Prevention",
      className: "h-14 sm:h-18 md:h-22 w-auto object-contain"
    },
    {
      src: "/trust5.webp",
      alt: "National Allergy Bureau Mold Counts Certified Station",
      className: "h-16 sm:h-20 md:h-24 w-auto object-contain"
    }
  ];

  return (
    <section className="bg-slate-50 py-10 sm:py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <p className="text-center text-xs font-bold tracking-widest uppercase text-slate-400 mb-8 sm:mb-10 font-sans">
          Build credibility and trust with
        </p>

        {/* Logos Flexbox Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 md:gap-x-16 lg:gap-x-20">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all duration-300 hover:scale-105 hover:brightness-105 select-none"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={logo.className}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

