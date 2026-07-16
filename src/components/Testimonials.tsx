import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { PatientReview } from "../types";

interface TestimonialsProps {
  reviews: PatientReview[];
}

export default function Testimonials({ reviews }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Drag and swipe states
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const minSwipeDistance = 50;

  // Track the resize to handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCards);

  // Ensure index remains in bounds when screen size changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, maxIndex, currentIndex]);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextReview();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, maxIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStart === null) return;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStart === null) return;
    const touchEndClientX = e.changedTouches[0].clientX;
    const distance = dragStart - touchEndClientX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextReview();
    } else if (isRightSwipe) {
      prevReview();
    }

    setDragStart(null);
    setIsPaused(false);
  };

  // Mouse handlers for desktop swipe/drag
  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    // Don't trigger drag on button clicks
    if (target.closest("button") || target.closest("a")) return;
    
    setDragStart(e.clientX);
    setIsDragging(true);
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStart === null) return;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || dragStart === null) return;
    const distance = dragStart - e.clientX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextReview();
    } else if (isRightSwipe) {
      prevReview();
    }

    setIsDragging(false);
    setDragStart(null);
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setDragStart(null);
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-dominant-green bg-dominant-green-light px-3.5 py-1.5 rounded-full font-sans">
              Patient Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-3">
              Hear directly from our patients
            </h2>
            <p className="text-slate-600 mt-2 text-xs md:text-sm leading-relaxed font-sans">
              Discover real recovery journeys from chronic hives, ocular surface pain, severe breathing issues, and complex allergy symptoms under Dr. Bielory's expert guidance.
            </p>
          </div>

          {/* Navigation Controls in Header */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={prevReview}
              className="p-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-dominant-green border border-slate-200 shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="p-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-dominant-green border border-slate-200 shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className={`relative select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Viewport wrapper */}
          <div className="overflow-hidden py-4 -my-4 px-1 -mx-1">
            {/* Sliding Track */}
            <div 
              className="flex transition-transform duration-500 ease-out -mx-4 items-stretch"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {reviews.map((review) => {
                return (
                  <div 
                    key={review.id} 
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    <div className="bg-slate-50/70 hover:bg-white h-full flex flex-col justify-between p-4 md:p-5 rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group">
                      
                      {/* Decorative Background Quote Icon */}
                      <div className="absolute top-4 right-4 text-slate-200/50 group-hover:text-dominant-green-light/40 transition-colors duration-300">
                        <Quote className="w-10 h-10 fill-current" />
                      </div>

                      <div className="relative z-10 flex-grow flex flex-col justify-between">
                        <div>
                          {/* Rating Stars */}
                          <div className="flex gap-1 mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                            ))}
                          </div>

                          {/* Testimonial Quote */}
                          <blockquote className="font-serif text-xs md:text-sm text-slate-700 italic leading-relaxed mb-4">
                            "{review.text}"
                          </blockquote>
                        </div>
                      </div>

                      {/* Patient metadata / Card footer */}
                      <div className="border-t border-slate-200/60 pt-3 mt-3 flex flex-col gap-2 relative z-10">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                              {review.name}
                            </div>
                            <div className="text-[10px] text-slate-400 font-sans mt-0.5">
                              {review.location}
                            </div>
                          </div>
                          
                          <span className="text-[9px] text-slate-400 font-sans shrink-0">
                            {review.date}
                          </span>
                        </div>

                        {/* Condition Badge */}
                        <div className="self-start">
                          <span className="bg-dominant-green-light text-dominant-green-dark text-[9px] font-bold px-2 py-0.5 rounded-lg border border-dominant-green/10">
                            Condition: {review.condition}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-2.5 mt-6">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx 
                    ? "w-8 bg-dominant-green" 
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
