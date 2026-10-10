import { CheckCircle2, Search, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

export function SerpSimulator() {
  const [searchQuery, setSearchQuery] = useState("Best SEO & Google Ads specialist");

  const sampleSearchQueries = [
    "Best SEO & Google Ads specialist",
    "Hire Instagram advertising expert",
    "How to rank #1 on Google search",
    "PPC agency with high ROAS",
  ];

  return (
    <section
      id="serp-preview"
      className="px-5 md:px-10 py-24 bg-[#0d0d0d] border-y border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-lime-400 text-xs uppercase tracking-widest font-semibold mb-3">
              <Sparkles size={14} />
              Live Search Experience
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              How Your Website Appears on Google
            </h2>
          </div>
          <p className="max-w-md text-white/50 text-sm leading-relaxed">
            When prospective clients search for keywords related to your services, this is the optimized rich snippet
            and page-1 ranking card they see instantly.
          </p>
        </div>

        {/* Interactive Search Console Simulator Container */}
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl transition-all duration-300 hover:border-white/20">
          {/* Query Suggestion Pills */}
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="text-xs text-white/40 uppercase tracking-wider font-medium mr-1">
              Try Search Queries:
            </span>
            {sampleSearchQueries.map((query, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSearchQuery(query)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
                  searchQuery === query
                    ? "bg-lime-400 text-black border-lime-400 font-semibold shadow-sm shadow-lime-400/30 scale-105"
                    : "border-white/10 text-white/60 hover:text-white hover:border-white/30 bg-white/[0.02]"
                }`}
              >
                {query}
              </button>
            ))}
          </div>

          {/* Google Search Bar Mockup */}
          <div className="flex items-center gap-3 bg-[#1e1e1e] border border-white/15 rounded-full px-5 py-3.5 mb-8 focus-within:border-lime-400 focus-within:ring-2 focus-within:ring-lime-400/20 transition-all duration-300 shadow-inner">
            <Search size={18} className="text-lime-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type any search query..."
              className="bg-transparent text-white w-full text-sm outline-none placeholder:text-white/30"
              aria-label="Google Search Mockup Input"
            />
            <span className="text-xs bg-white/10 text-white/60 px-2.5 py-1 rounded-md font-mono hidden sm:inline-block">
              Google Search
            </span>
          </div>

          {/* Realistic SERP Card */}
          <div className="border border-white/10 bg-[#181818] rounded-xl p-5 md:p-7 space-y-3 relative overflow-hidden transition-all duration-300 hover:border-white/25">
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-lime-400/10 text-lime-400 border border-lime-400/20 text-xs px-2.5 py-1 rounded-full font-medium">
              <Zap size={12} />
              Rank #1 Featured
            </div>

            {/* URL & Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-white/50">
              <div className="w-5 h-5 rounded-full bg-lime-400/20 border border-lime-400/40 flex items-center justify-center text-lime-400 font-bold text-[10px]">
                G
              </div>
              <span>https://growthmarketing.example.com</span>
              <span className="text-white/20">›</span>
              <span className="text-lime-400/90 font-medium">services › search-optimization</span>
            </div>

            {/* Title Tag with Google Blue */}
            <h3 className="text-lg md:text-xl font-medium text-[#8ab4f8] hover:underline cursor-pointer flex items-center gap-2">
              Growth. | Digital Marketing Specialist &amp; SEO Optimization Agency
            </h3>

            {/* Meta Description */}
            <p className="text-sm text-[#bdc1c6] leading-relaxed">
              Scale your visibility fast with expert Google Ads management, top-ranking Search Engine
              Optimization (SEO), and high-converting Instagram campaigns. Discoverable 24/7 by customers
              actively searching for your services.
            </p>

            {/* Rich snippet review stars */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-amber-400 font-medium pt-1">
              <span>★★★★★</span>
              <span className="text-white/80 font-bold">4.9</span>
              <span className="text-white/40">(48 verified client reviews)</span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-lime-400 font-normal">Indexed in Google Search Console</span>
            </div>

            {/* Sitelinks for Rich Snippet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="p-3 bg-white/[0.03] rounded-lg border border-white/5 hover:border-lime-400/30 transition-colors">
                <a href="#services" className="text-xs font-semibold text-[#8ab4f8] hover:underline block">
                  Google Ads (PPC) Management →
                </a>
                <p className="text-[11px] text-white/50 mt-1">
                  Put your brand in front of ready-to-buy searchers today.
                </p>
              </div>
              <div className="p-3 bg-white/[0.03] rounded-lg border border-white/5 hover:border-lime-400/30 transition-colors">
                <a href="#services" className="text-xs font-semibold text-[#8ab4f8] hover:underline block">
                  Technical SEO Auditing →
                </a>
                <p className="text-[11px] text-white/50 mt-1">
                  Full XML sitemaps, robots.txt, and Core Web Vitals optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Discoverability Guarantee Checklist */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50 pt-2 border-t border-white/10">
            <span className="flex items-center gap-1.5 text-lime-400">
              <CheckCircle2 size={15} /> Valid Schema.org JSON-LD Markup
            </span>
            <span className="flex items-center gap-1.5 text-lime-400">
              <CheckCircle2 size={15} /> XML Sitemap &amp; Robots.txt Live
            </span>
            <span className="flex items-center gap-1.5 text-lime-400">
              <CheckCircle2 size={15} /> Mobile-First Core Web Vitals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SerpSimulator;
