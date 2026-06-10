import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { CARDS } from "../data/homepage";

const AboutHighlightsSection = () => {
  return (
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
            >
              Learn more about us
              <ArrowRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </NavLink>
          </div>
        </div>

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
  );
};

export default AboutHighlightsSection;
