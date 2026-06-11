import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import TopHeader from "./TopHeader";
import WebmaticLogo from "../../assets/images/webmatic-logo.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Blog", to: "/blog" },
];

/* Reusable active-style resolver for NavLink className prop */
const desktopLinkClass = ({ isActive }) =>
  `relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
    isActive
      ? "text-orange-500"
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `px-4 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 ${
    isActive
      ? "text-orange-500 bg-orange-50"
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
  }`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      // Always show when near the top
      if (currentY < 10) {
        setVisible(true);
        setScrolled(false);
        lastY = currentY;
        return;
      }

      setScrolled(true);

      // Scrolling down past 80px — hide
      if (currentY > lastY && currentY > 80) {
        setVisible(false);
        if (menuOpen) setMenuOpen(false); // close mobile menu when hiding
      } else {
        // Scrolling up — show
        setVisible(true);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <TopHeader />

      {/* Main nav bar */}
      <div
        className={`transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "border-b border-slate-100"
        }`}
      >
        <div className="max-w-[1170px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            aria-label="WebMatic Technology — home"
            className="shrink-0"
          >
            <img
              src={WebmaticLogo}
              alt="WebMatic Technology"
              className="h-10 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className={desktopLinkClass}
                end={to === "/"}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-primary rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <NavLink
            to="/contact"
            className="hidden md:inline-flex px-5 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-hover active:bg-primary-active  rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </NavLink>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-slate-100 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="max-w-[1170px] mx-auto px-5 py-3 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              end={to === "/"}
              className={mobileLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-2.5 text-sm font-semibold text-center text-white bg-primary hover:bg-primary-hover rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
