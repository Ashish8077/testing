import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { PORTFOLIO_ITEMS } from "../../data/homepage";
import PortfolioCard from "./PortfolioCard";

const FILTERS = ["All", "Web Development", "E-Commerce"];

const PortfolioShowcaseSection = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.category === active);

  return (
    <div className="relative">
      {/* ── Orange header band — compact ─────────────────── */}
      <div className="bg-[#FF5100] pt-16 sm:pt-20 pb-36 sm:pb-44">
        <div className="mx-auto max-w-[1170px] px-5 sm:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-3">
                <span className="h-px w-6 bg-white/70 rounded-full" />
                Our Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
                A Collection of{" "}
                <span className="underline decoration-white/30 underline-offset-4">
                  Our Work
                </span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                We present the following case studies to showcase the solutions
                and services we offer to our diverse customer base. The Tech for
                Good movement leverages technology's potential to create
                positive impact.
              </p>
            </div>

            <NavLink
              to="/work"
              className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors duration-200 group"
            >
              View all projects
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </NavLink>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
<<<<<<< HEAD
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === filter
                    ? "bg-white text-[#FF5100] shadow-lg"
                    : "bg-white/15 text-white hover:bg-white/25"
                }`}
=======
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${active === filter
                    ? "bg-white text-[#FF5100] shadow-lg"
                    : "bg-white/15 text-white hover:bg-white/25"
                  }`}
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
              >
                {filter}
              </button>
            ))}
            <span className="ml-auto text-xs text-white/50 font-medium">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* ── Cards — pulled up, floating over the boundary ── */}
<<<<<<< HEAD
      <div className="bg-gray-50">
=======
      <div className="bg-white">
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
        <div className="mx-auto max-w-[1170px] px-5 sm:px-8 -mt-28 sm:-mt-36 pb-16 sm:pb-24">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-10">
            <p className="text-sm text-slate-500 text-center sm:text-left">
              Curious about what we can build for you?
            </p>
            <NavLink
              to="/contact"
<<<<<<< HEAD
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
=======
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
            >
              Start a Project
              <ArrowRight size={14} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioShowcaseSection;
