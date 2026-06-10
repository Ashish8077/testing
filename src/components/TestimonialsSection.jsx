import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "../data/homepage";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index) => setCurrent((index + testimonials.length) % testimonials.length),
    [],
  );
  const prev = () => goTo(current - 1);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const t = testimonials[current];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1170px] px-5 sm:px-8">
        {/* ── Section header ──────────────────────────────── */}
        <div className="mb-14 text-center">
          <span className="inline-block mb-4 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[#081a4b]">
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
            Real words from real clients who've grown with Webmatic Technology.
          </p>
        </div>

        {/* ── Testimonial card ────────────────────────────── */}
        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative rounded-2xl bg-slate-50 border border-slate-100 px-8 sm:px-14 py-12 text-center shadow-sm">
            {/* Quote icon */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 shadow-lg shadow-orange-200">
              <Quote size={18} className="text-white fill-white" />
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-orange-500 fill-orange-500"
                />
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#081a4b] leading-snug mb-4">
              "{t.title}"
            </h3>

            {/* Description */}
            <p className="text-base leading-relaxed text-slate-500 max-w-xl mx-auto">
              {t.description}
            </p>

            {/* Author */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <img
                src={t.image}
                alt={t.author}
                className="h-12 w-12 rounded-full object-cover border-2 border-orange-100 shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="text-left">
                <p className="text-sm font-bold text-[#081a4b] uppercase tracking-wide">
                  {t.author.split(" - ")[0]}
                </p>
                {t.author.split(" - ")[1] && (
                  <p className="text-xs text-slate-400 mt-0.5">
                    {t.author.split(" - ")[1]}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-sm hover:border-orange-300 hover:text-orange-500 transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-md shadow-orange-200 hover:bg-orange-600 transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* ── Dot indicators ──────────────────────────────── */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-orange-500"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
