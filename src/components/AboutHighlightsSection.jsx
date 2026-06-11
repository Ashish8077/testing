import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { CARDS } from "../data/homepage";

const AboutHighlightsSection = () => {
  return (
<<<<<<< HEAD
    <section className="bg-gray-900 py-14 sm:py-20">
      <div className="mx-auto max-w-[1170px] px-5 sm:px-8">
        {/* ── Section header ─────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-3">
              <span className="h-px w-6 bg-orange-500 rounded-full" />
              About Webmatic
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
              Get to Know <span className="text-orange-500">Us Better</span>
            </h2>
          </div>

          <div className="lg:max-w-sm flex flex-col gap-3">
            <p className="text-sm leading-relaxed text-slate-400">
              At Webmatic Technology, we've been dedicated to providing
              exceptional IT solutions and digital marketing services — evolving
              from a simple business plan to a globally recognised,
              award-winning agency.
            </p>
            <NavLink
              to="/about"
              className="self-start inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors duration-200 group"
=======
    <div className="relative">
      {/* ── Compact green header band ─────────────────────── */}
      <div className="bg-green-50 pt-14 sm:pt-20 pb-28 sm:pb-36">
        <div className="mx-auto max-w-[1170px] px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-3">
                <span className="h-px w-8 bg-orange-500 rounded-full" />
                About Webmatic
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[#081a4b]">
                Get to Know <span className="text-orange-500">Us Better</span>
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#081a4b]/60">
                At Webmatic Technology, we've been dedicated to providing
                exceptional IT solutions and digital marketing services —
                evolving from a simple business plan to a globally recognised,
                award-winning agency.
              </p>
            </div>
            <NavLink
              to="/about"
              className="shrink-0 self-start sm:self-end inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors duration-200 group"
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
            >
              Learn more about us
              <ArrowRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </NavLink>
          </div>
        </div>
<<<<<<< HEAD

        {/* ── Cards ───────────────────────────────────────── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <NavLink
              key={card.title}
              to={card.to}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image — reduced height */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-sm">
                  {card.badge}
                </span>
              </div>

              {/* Body — tighter padding */}
              <div className="flex flex-1 flex-col p-5 gap-2.5">
                <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-orange-500 transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500 flex-1 line-clamp-2">
                  {card.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-500 mt-1">
                  {card.cta}
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        {/* ── Bottom strip ────────────────────────────────── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-sm text-slate-400 text-center sm:text-left">
            We serve our clients' best interests with the best marketing
            solutions.
          </p>
          <NavLink
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 hover:bg-orange-600 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Start a Project
            <ArrowRight size={14} />
          </NavLink>
        </div>
      </div>
    </section>
=======
      </div>

      {/* ── Cards — pulled up over the green band ────────── */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1170px] px-5 sm:px-8 -mt-20 sm:-mt-24 pb-14 sm:pb-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map((card) => (
              <NavLink
                key={card.title}
                to={card.to}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-green-100 hover:ring-green-300 hover:shadow-xl hover:shadow-green-100/70 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/25 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-green-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                    {card.badge}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5 gap-3">
                  <div className="h-[2px] w-8 bg-green-300 rounded-full" />
                  <h3 className="text-sm font-bold text-green-950 leading-snug group-hover:text-primary transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500 flex-1 line-clamp-2">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-primary-hover transition-colors duration-200">
                    {card.cta}
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </NavLink>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-8">
            <p className="text-sm text-slate-500 text-center sm:text-left">
              We serve our clients' best interests with the best marketing
              solutions.
            </p>
            <NavLink
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 active:bg-primary-active active:translate-y-0"
            >
              Start a Project
              <ArrowRight size={14} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
  );
};

export default AboutHighlightsSection;
