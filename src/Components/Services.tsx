import { BarChart3, CheckCircle2, Search, Target } from "lucide-react";

export function Services() {
  const services = [
    {
      number: "01",
      icon: BarChart3,
      badge: "Instant Visibility",
      title: "Google Ads (PPC)",
      text: "Put your business right at the top of Google the moment potential customers search for what you offer.",
      deliverables: [
        "High-Intent Search Campaigns",
        "Performance Max & Display Ads",
        "Negative Keyword Scrubbing",
        "Conversion & ROAS Tracking",
      ],
      tags: ["Search Ads", "Quality Score", "Conversion Tracking", "PPC Management"],
    },
    {
      number: "02",
      icon: Search,
      badge: "Long-Term Authority",
      title: "SEO Optimization",
      text: "Dominate search engine rankings organically so people looking for your services discover you without paying for every click.",
      deliverables: [
        "Technical SEO & Core Web Vitals",
        "High-Intent Keyword Architecture",
        "Structured Schema Markup (JSON-LD)",
        "Google Search Console & Sitemaps",
      ],
      tags: ["On-Page SEO", "Technical Audits", "Keyword Research", "Rich Snippets"],
    },
    {
      number: "03",
      icon: Target,
      badge: "High Conversion",
      title: "Instagram & Meta Ads",
      text: "Reach your ideal customers with high-converting creative and targeted social campaigns built to stop the scroll.",
      deliverables: [
        "Demographic & Interest Targeting",
        "Lookalike & Custom Audiences",
        "Dynamic Video & Carousel Ads",
        "Retargeting Funnels",
      ],
      tags: ["Meta Ads", "Audience Targeting", "Visual Storytelling", "Ad Retargeting"],
    },
  ];

  return (
    <section id="services" className="px-5 md:px-10 py-32 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-20">
          <div>
            <p className="text-lime-400 text-sm uppercase tracking-widest font-semibold mb-4">
              Full-Funnel Search &amp; Growth
            </p>

            <h2 className="text-4xl md:text-7xl tracking-tight font-semibold">
              Three Pillars
              <br />
              to <span className="text-lime-400">Be Found.</span>
            </h2>
          </div>

          <p className="max-w-md text-white/50 leading-relaxed md:pt-10 text-base">
            From search engines to social discovery, we construct a cohesive presence that ensures
            customers actively searching for your solutions find you ahead of competitors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group min-h-[480px] border border-white/10 rounded-[2rem] p-8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:border-lime-400/50 hover:bg-[#111] transition-all duration-500 flex flex-col justify-between hover:shadow-2xl hover:shadow-lime-400/5 hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 group-hover:bg-lime-400 group-hover:text-black transition-all duration-300 flex items-center justify-center text-lime-400 group-hover:scale-105">
                      <Icon size={24} />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-xs uppercase tracking-wider text-lime-400 font-semibold bg-lime-400/10 px-2.5 py-1 rounded-full border border-lime-400/20">
                        {service.badge}
                      </span>
                      <span className="text-xs text-white/30 font-mono mt-1">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold mt-8 text-white group-hover:text-lime-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-white/50 leading-relaxed text-sm">
                    {service.text}
                  </p>

                  {/* Deliverables list */}
                  <div className="mt-6 space-y-2.5">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle2 size={13} className="text-lime-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 rounded-full px-3 py-1 text-xs text-white/60 bg-white/[0.02] group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
