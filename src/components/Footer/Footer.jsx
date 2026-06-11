import { Phone, Send, ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

/* Dark navy — readable on sky blue */
const dark = "text-[#0c2340]";
const muted = "text-[#0c2340]/60";
const divider = "border-[#0c2340]/15";

const Footer = () => {
  return (
    <footer className="bg-[#6EC1E4]">
      {/* ── Trusted brands strip ──────────────────────────── */}
      <div className={`border-b ${divider}`}>
        <div className="mx-auto max-w-[1170px] px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className={`text-sm font-semibold ${muted} shrink-0`}>
            Trusted by over 6,000 Ambitious Brands Across the US
          </p>
          <div
            className={`flex flex-wrap items-center gap-8 sm:gap-12 ${muted}`}
          >
            <span className="text-base font-semibold tracking-wide">
              Metrik Finance Services.
            </span>
            <span className="text-lg font-bold tracking-widest">MODEN</span>
            <span className="text-base font-bold tracking-widest">H N K N</span>
            <span className="text-2xl leading-none">◖</span>
          </div>
          <NavLink
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(113deg,_#dd154d_0%,_#fd0036_50%,_#fe613f_100%)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#0c2340]/80 transition-all duration-200 hover:-translate-y-0.5 shadow-md"
          >
            Need Help? <ArrowRight size={14} />
          </NavLink>
        </div>
      </div>

      {/* ── Main footer ───────────────────────────────────── */}
      <div className="mx-auto max-w-[1170px] px-5 sm:px-8 py-14 sm:py-18">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Left — CTA */}
          <div>
            <h2
              className={`text-3xl sm:text-4xl font-bold leading-tight ${dark}`}
            >
              Ready to Grow Your{" "}
<<<<<<< HEAD
              <span className="text-orange-600">Business?</span>
=======
              <span className="text-orange-500">Business?</span>
>>>>>>> 3f0f9e1 (fix the button colour to blue and backround colour to green)
            </h2>
            <p className={`mt-4 text-sm leading-relaxed ${muted} max-w-sm`}>
              Contact us to work with a results-driven digital marketing agency.
            </p>
            <NavLink
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0c2340] px-7 py-3 text-sm font-semibold text-white hover:bg-[#0c2340]/80 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
            >
              Get My Free Proposal
              <ArrowRight size={14} />
            </NavLink>
          </div>

          {/* Right — nav + contact */}
          <div className="flex flex-col gap-10">
            {/* Nav links */}
            <div className="grid grid-cols-3 gap-y-4 gap-x-6">
              {[
                { label: "Brand Strategy", to: "/services" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Website Design", to: "/services" },
                { label: "Our Work", to: "/work" },
                { label: "Contact Us", to: "/contact" },
                { label: "Digital Marketing", to: "/services" },
                { label: "Forum Support", to: "/contact" },
              ].map(({ label, to }) => (
                <NavLink
                  key={label}
                  to={to}
                  className={`text-sm ${muted} hover:${dark} hover:font-semibold transition-all duration-200`}
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <div className={`border-t ${divider}`} />

            {/* Contact info */}
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c2340]/10 text-[#0c2340]">
                  <Phone size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${dark}`}>
                    Talk to an Expert
                  </h4>
                  <p className={`mt-1.5 text-sm ${muted}`}>
                    Toll Free +91-9289351703
                  </p>
                  <p className={`text-sm ${muted}`}>Toll Free 0120-4283270</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0c2340]/10 text-[#0c2340]">
                  <Send size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${dark}`}>
                    Have any Question?
                  </h4>
                  <p className={`mt-1.5 text-sm ${muted}`}>Mail us</p>
                  <p className={`text-sm ${muted}`}>
                    info@webmatictechnology.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────── */}
      <div className={`border-t ${divider}`}>
        <div className="mx-auto max-w-[1170px] px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-xs ${muted}`}>
            Copyright © {new Date().getFullYear()} Webmatic Technology Pvt Ltd
          </p>
          <div className="flex items-center gap-3">
            {[
              {
                icon: FaFacebookF,
                href: "https://www.facebook.com/webmatictechnologyofficial",
                label: "Facebook",
              },
              {
                icon: FaInstagram,
                href: "https://www.instagram.com/webmatictechnology/",
                label: "Instagram",
              },
              {
                icon: FaLinkedinIn,
                href: "https://www.linkedin.com/company/webmatic-technology-ltd",
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0c2340]/10 text-[#0c2340]/60 hover:bg-[#0c2340] hover:text-white transition-all duration-200"
              >
                <Icon size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
