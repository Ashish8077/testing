import { ArrowRight, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

const ReadyToGrowthSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5f7ff]">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl bg-" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1170px] px-5 sm:px-8 py-20 sm:py-28 ">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left */}
          <div className="max-w-xl">
            <span className="inline-block mb-4 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Let's Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[#081a4b]">
              Ready to Grow Your{" "}
              <span className="text-orange-500">Business?</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Reach us today and start working with a digital marketing agency
              dedicated to driving measurable results.
            </p>
          </div>

          {/* Right*/}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <NavLink
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get to Know Us Better
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </NavLink>

            <a
              href="tel:+919289351703"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#081a4b] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#081a4b] hover:bg-[#081a4b] hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone size={15} />
              +91-9289351703
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: "200+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Expert Team Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left ">
              <p className="text-3xl font-extrabold text-[#081a4b]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadyToGrowthSection;
