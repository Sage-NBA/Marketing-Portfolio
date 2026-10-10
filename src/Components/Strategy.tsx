import { Globe, Search, TrendingUp, Zap } from "lucide-react";

export function Strategy() {
  const steps = [
    {
      step: "01",
      title: "Technical SEO & Sitemaps",
      desc: "We generate canonical tags, robots.txt, and XML sitemaps, then submit directly to Google Search Console and IndexNow for rapid crawling.",
      icon: Globe,
    },
    {
      step: "02",
      title: "Keyword & Intent Mapping",
      desc: "We extract the high-value search queries customers type when ready to buy, infusing them into on-page titles, descriptions, and headings.",
      icon: Search,
    },
    {
      step: "03",
      title: "Speed & Schema Markup",
      desc: "We inject Schema.org JSON-LD data so Google knows your exact services, business profile, and FAQs for instant rich snippet eligibility.",
      icon: Zap,
    },
    {
      step: "04",
      title: "Paid Amplification & Scale",
      desc: "We launch targeted Google Ads and Instagram campaigns to generate instant top-of-page traffic while organic rankings compound.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="approach" className="px-5 md:px-10 py-32 bg-[#0c0c0c] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-lime-400 text-sm uppercase tracking-widest font-semibold mb-4">
            Search Engine Optimization Roadmap
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            How We Make You Appear <span className="text-lime-400">Fast.</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl mt-4 leading-relaxed">
            Getting to page 1 on Google and appearing instantly when searched follows a repeatable,
            technical blueprint.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between hover:border-lime-400/30 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lime-400 font-mono text-sm font-semibold">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-lime-400 border border-white/10 group-hover:scale-105 transition-transform">
                      <ItemIcon size={18} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Strategy;
