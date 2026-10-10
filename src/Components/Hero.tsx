import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const stats = [
    { label: "Organic Traffic Growth", value: "+340%", subtext: "Average client surge in 90 days" },
    { label: "Average Ad ROAS", value: "4.8x", subtext: "Across Google & Meta campaigns" },
    { label: "Google Indexing Speed", value: "< 24h", subtext: "Fast-track Search Console setup" },
    { label: "Keywords in Top 3", value: "85%+", subtext: "Targeted high-intent search terms" },
  ];

  return (
    <section className="relative min-h-screen flex items-center px-5 md:px-10 pt-36 pb-20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-lime-400/10 blur-[150px] rounded-full pointer-events-none transition-opacity duration-700" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-5xl">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 border border-lime-400/20 bg-lime-400/5 rounded-full px-4 py-2 mb-8 backdrop-blur-md hover:border-lime-400/40 transition-colors">
            <span className="w-2.5 h-2.5 bg-lime-400 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-lime-300 tracking-wide">
              SEO Optimization &amp; High-Converting Paid Ads
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[clamp(3.2rem,8.5vw,7.8rem)] leading-[0.88] tracking-[-0.05em] font-semibold">
            Get seen.
            <br />
            Get <span className="text-lime-400">found</span> first.
            <br />
            Get customers.
          </h1>

          {/* Subtext and CTAs */}
          <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-xl text-lg md:text-xl text-white/60 leading-relaxed font-light">
              When someone goes online looking for what you do, your website should appear right
              at the top without delay. We engineer data-driven{" "}
              <span className="text-white font-medium">Google Ads</span>,{" "}
              <span className="text-white font-medium">SEO Optimization</span>, and{" "}
              <span className="text-white font-medium">Instagram Campaigns</span> built for instant
              discoverability and measurable revenue.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#serp-preview"
                className="group flex items-center justify-center gap-3 bg-lime-400 text-black px-7 py-4 rounded-full font-semibold hover:bg-white transition duration-300 shadow-lg shadow-lime-400/20 active:scale-95"
              >
                See How You Rank
                <ArrowUpRight
                  size={20}
                  className="group-hover:rotate-45 transition-transform duration-300"
                />
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:border-white/40 active:scale-95"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col group">
              <span className="text-3xl md:text-5xl font-bold tracking-tight text-white group-hover:text-lime-400 transition-colors duration-300">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-lime-400 mt-1">{stat.label}</span>
              <span className="text-xs text-white/40 mt-0.5">{stat.subtext}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
