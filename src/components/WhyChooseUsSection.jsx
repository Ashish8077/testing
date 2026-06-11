import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { reasons } from "../data/homepage";

const WhyChooseUsSection = () => {
  return (
    <div className="relative">
      {/* ── Green header band ─────────────────────────────── */}
      <div className="bg-green-50 pt-14 sm:pt-20 pb-32 sm:pb-40">
        <div className="mx-auto max-w-[1170px] px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-3">
                <span className="h-px w-6 bg-orange-500 rounded-full" />
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[#081a4b]">
                3 Reasons Why Webmatic Technology is Your{" "}
                <span className="text-orange-500">
                  Ideal Digital Marketing Partner
                </span>
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#081a4b]/60">
                Three core commitments that set us apart from every other
                digital marketing agency.
              </p>
            </div>
            <NavLink
              to="/about"
              className="shrink-0 self-start sm:self-end inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors duration-200 group"
            >
              Learn more about us
              <ArrowRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </NavLink>
          </div>
        </div>

        {/* Diagonal cut into white */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="w-full h-12 sm:h-16"
          >
            <polygon points="0,60 1200,0 1200,60" fill="white" />
          </svg>
        </div>
      </div>

      {/* ── Cards — pulled up over the green band ────────── */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1170px] px-5 sm:px-8 -mt-24 sm:-mt-32 pb-16 sm:pb-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <article
                  key={reason.title}
                  className="group flex flex-col gap-4 rounded-2xl bg-white ring-1 ring-green-100 p-7 shadow-lg shadow-green-100/80 hover:shadow-xl hover:shadow-green-200/60 hover:ring-green-300 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon + number row */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-primary group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <span className="text-4xl font-black text-slate-200 select-none leading-none group-hover:text-slate-300 transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Accent line */}
                  <div className="h-[2px] w-8 bg-green-300 rounded-full" />

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#081a4b] leading-snug group-hover:text-primary transition-colors duration-200">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-500 flex-1">
                    {reason.description}
                  </p>

                  {/* CTA */}
                  <NavLink
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors duration-200 group/link mt-1"
                  >
                    {reason.cta}
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                    />
                  </NavLink>
                </article>
              );
            })}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-8">
            <p className="text-sm text-slate-500 text-center sm:text-left">
              Still not sure? Let's talk — no pressure, no commitment.
            </p>
            <NavLink
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 active:bg-primary-active active:translate-y-0"
            >
              Talk to Us
              <ArrowRight size={14} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
