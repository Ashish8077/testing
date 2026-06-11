import { ArrowRight, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import img from "../assets/images/ready-to-grow.jpg";

const GrowthBannerSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <img
        src={img}
        alt="Team collaborating"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1170px] px-5 sm:px-8 py-20 sm:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* ── Left ──────────────────────────────────────── */}
          <div className="max-w-2xl">
            <span className="inline-block mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              Take the Next Step
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              Ready to Grow
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80 max-w-xl">
              Reach us today and start working with a digital marketing agency
              dedicated to driving measurable results.
            </p>
          </div>

          {/*  Right  CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
            {/* Primary — transparent at rest, white sweeps left→right on hover */}
            <NavLink
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-white px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-orange-500 transition-colors duration-150 delay-100">
                Get to Know Us Better
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </span>
            </NavLink>

            {/* Secondary — same sweep pattern */}
            <a
              href="tel:+919289351703"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-white px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-orange-500 transition-colors duration-150 delay-100">
                <Phone size={15} />
                +91-9289351703
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthBannerSection;
