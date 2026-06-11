import { ArrowRight, User, Calendar, BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";
import { blogPosts, featured } from "../data/homepage";

const LatestInsightsSection = () => {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-[1170px] px-5 sm:px-8">
        {/* ── Section header ──────────────────────────────── */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-3">
              <span className="h-px w-6 bg-orange-500 rounded-full" />
              Latest News & Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[#081a4b]">
              The latest News, Developments and{" "}
              <span className="text-orange-500">Insights from our Experts</span>
            </h2>
          </div>
          <NavLink
            to="/blog"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#081a4b] hover:text-orange-500 transition-colors duration-200 group"
          >
            View all articles
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </NavLink>
        </div>

        {/* ── Asymmetric layout — featured left, 2×2 grid right ── */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Featured post — tall card */}
          <NavLink
            to="/blog"
            className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-slate-100 h-56 sm:h-64 shrink-0">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="absolute top-4 left-4 bg-primary rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                Featured
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6 gap-3">
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <User size={11} strokeWidth={1.8} />
                  {featured.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={11} strokeWidth={1.8} />
                  {featured.date}
                </span>
              </div>
              <h3 className="text-lg font-bold leading-snug text-[#081a4b] group-hover:text-orange-500 transition-colors duration-200">
                {featured.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 line-clamp-3 flex-1">
                {featured.excerpt}
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500">
                Read More
                <ArrowRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </div>
            </div>
          </NavLink>

          {/* 2×2 grid of regular posts */}
          <div className="grid grid-cols-2 gap-5">
            {blogPosts.slice(0, 4).map((post) => (
              <NavLink
                key={post.title}
                to="/blog"
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-32 overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-4 gap-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <User size={10} strokeWidth={1.8} />
                      Admin
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={10} strokeWidth={1.8} />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold leading-snug text-[#081a4b] group-hover:text-orange-500 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA strip ────────────────────────────── */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-10">
          <p className="text-sm text-slate-500 text-center sm:text-left flex items-center gap-2">
            <BookOpen size={15} className="text-orange-500 shrink-0" />
            Insights, tips and strategies — straight from our team.
          </p>
          <NavLink
            to="/blog"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Visit Our Blog
            <ArrowRight size={14} />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsSection;
