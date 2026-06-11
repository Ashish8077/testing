import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { reasons } from "../data/homepage";

const WhyChooseUsSection = () => {
  return (
    <div className="relative">
<<<<<<< HEAD
      {/* ── Compact dark header band ──────────────────────── */}
      <div className="[background:linear-gradient(to_right,#1f0757,#3354a4,#1f0757)] pt-14 sm:pt-20 pb-32 sm:pb-40">
=======
      {/* ── Green header band ─────────────────────────────── */}
      <div className="bg-green-50 pt-14 sm:pt-20 pb-32 sm:pb-40">
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
        <div className="mx-auto max-w-[1170px] px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-3">
                <span className="h-px w-6 bg-orange-500 rounded-full" />
                Why Choose Us
              </span>
<<<<<<< HEAD
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
                3 Reasons Why Webmatic is Your{" "}
                <span className="text-orange-500">Ideal Partner</span>
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400">
=======
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[#081a4b]">
                3 Reasons Why Webmatic Technology is Your{" "}
                <span className="text-orange-500">
                  Ideal Digital Marketing Partner
                </span>
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#081a4b]/60">
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
                Three core commitments that set us apart from every other
                digital marketing agency.
              </p>
            </div>
            <NavLink
              to="/about"
<<<<<<< HEAD
              className="shrink-0 self-start sm:self-end inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors duration-200 group"
=======
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
        {/* Diagonal cut — clips bottom of dark band */}
=======
        {/* Diagonal cut into white */}
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
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

<<<<<<< HEAD
      {/* ── Cards — pulled up over the boundary ──────────── */}
=======
      {/* ── Cards — pulled up over the green band ────────── */}
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
      <div className="bg-white">
        <div className="mx-auto max-w-[1170px] px-5 sm:px-8 -mt-24 sm:-mt-32 pb-16 sm:pb-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <article
                  key={reason.title}
<<<<<<< HEAD
                  className="group flex flex-col gap-4 rounded-2xl bg-white border border-slate-100 p-7 shadow-lg shadow-slate-200/80 hover:shadow-xl hover:shadow-orange-100/60 hover:border-orange-200 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon + number row */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <span className="text-4xl font-black text-slate-100 select-none leading-none group-hover:text-orange-100 transition-colors duration-300">
=======
                  className="group flex flex-col gap-4 rounded-2xl bg-white ring-1 ring-green-100 p-7 shadow-lg shadow-green-100/80 hover:shadow-xl hover:shadow-green-200/60 hover:ring-green-300 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon + number row */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-primary group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <span className="text-4xl font-black text-green-100 select-none leading-none group-hover:text-green-200 transition-colors duration-300">
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

<<<<<<< HEAD
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-orange-500 transition-colors duration-200">
=======
                  {/* Accent line */}
                  <div className="h-[2px] w-8 bg-green-300 rounded-full" />

                  {/* Title */}
                  <h3 className="text-lg font-bold text-green-950 leading-snug group-hover:text-primary transition-colors duration-200">
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-500 flex-1">
                    {reason.description}
                  </p>

                  {/* CTA */}
                  <NavLink
                    to="/about"
<<<<<<< HEAD
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200 group/link mt-1"
=======
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors duration-200 group/link mt-1"
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
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
<<<<<<< HEAD
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-8">
=======
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-8">
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
            <p className="text-sm text-slate-500 text-center sm:text-left">
              Still not sure? Let's talk — no pressure, no commitment.
            </p>
            <NavLink
              to="/contact"
<<<<<<< HEAD
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-200 hover:bg-orange-600 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
=======
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 active:bg-primary-active active:translate-y-0"
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
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
