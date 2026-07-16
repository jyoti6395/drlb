import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { PatientReview } from "../types";

interface TestimonialsProps {
  reviews: PatientReview[];
}

export default function Testimonials({ reviews }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-dominant-green bg-dominant-green-light px-3 py-1.5 rounded-full">
            Patient Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-4">
            Patient Stories of Life-Changing Relief
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg">
            Hear directly from individuals who recovered from chronic hives, ocular surface pain, severe breathing issues, and complex allergy symptoms under Dr. Bielory's guidance.
          </p>
        </div>

        {/* Carousel Style on Desktop / Elegant Grid Card */}
        <div className="relative max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
          {/* Background decoration quote icon */}
          <div className="absolute top-6 right-8 text-slate-200">
            <Quote className="w-20 h-20 fill-slate-200/50" />
          </div>

          <div className="relative z-10">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
              ))}
            </div>

            {/* Testimonial text */}
            <blockquote className="font-serif text-lg md:text-xl text-slate-800 italic leading-relaxed mb-6">
              "{reviews[activeIndex].text}"
            </blockquote>

            {/* Patient Info Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200/60 pt-6">
              <div>
                <div className="font-bold text-slate-900 text-base">
                  {reviews[activeIndex].name}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Verified Patient &bull; {reviews[activeIndex].location}
                </div>
              </div>

              {/* Treatment Badge */}
              <div className="self-start sm:self-center bg-dominant-green-light border border-dominant-green-light text-dominant-green-dark text-xs font-semibold px-3 py-1.5 rounded-lg">
                Condition: <span className="font-bold">{reviews[activeIndex].condition}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={prevReview}
              className="p-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 hover:text-dominant-green border border-slate-200 shadow-sm transition-all"
              aria-label="Previous patient story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextReview}
              className="p-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 hover:text-dominant-green border border-slate-200 shadow-sm transition-all"
              aria-label="Next patient story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Supporting Grid of Other Reviews below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {reviews.filter((_, i) => i !== activeIndex).slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <div className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-1 rounded-md mb-3 inline-block">
                  {review.condition}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic mb-4">
                  "{review.text.substring(0, 160)}..."
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-xs">
                <div>
                  <span className="font-semibold text-slate-900">{review.name}</span>
                  <span className="text-slate-400 block text-[10px]">{review.location}</span>
                </div>
                <span className="text-slate-400 text-[10px]">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
