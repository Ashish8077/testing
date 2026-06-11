import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const PortfolioCard = ({ project }) => {
  return (
    <NavLink
      to="/work"
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-100 hover:border-[#FF5100]/20 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Orange diagonal sweep on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5100]/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5100]" />
            {project.category}
          </span>
        </div>

        {/* Arrow button — top right */}
        <div className="absolute top-4 right-4 h-9 w-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-[#FF5100] group-hover:border-[#FF5100] transition-all duration-300">
          <ArrowUpRight size={15} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#FF5100] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-xs leading-relaxed text-slate-500 line-clamp-2">
          {project.description}
        </p>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Case Study
          </span>
          <div className="flex items-center gap-1 text-xs font-semibold text-[#FF5100] group-hover:translate-x-0.5 transition-transform duration-200">
            Explore <ArrowUpRight size={11} />
          </div>
        </div>
      </div>

      {/* Bottom edge glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5100] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </NavLink>
  );
};

export default PortfolioCard;
