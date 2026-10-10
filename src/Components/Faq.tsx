import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Faq() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why is my website not appearing when people search on Google?",
      answer:
        "Websites fail to show up in search results when they lack technical SEO foundation—such as a registered sitemap.xml, robots.txt crawl permissions, proper meta tags, and structured Schema markup. Without these, search bots like Googlebot either don't know the site exists or can't understand what it offers. Submitting via Google Search Console and optimizing on-page keywords solves this rapidly.",
    },
    {
      question: "How fast can SEO optimization make my site findable?",
      answer:
        "Once technical SEO, sitemaps, and canonical tags are deployed and submitted to Google Search Console, initial crawling and indexing typically occurs within 24 to 72 hours. For competitive commercial keywords, ranking momentum compounds as domain authority and organic engagement build over 30 to 90 days.",
    },
    {
      question: "What is the difference between Google Ads and SEO for getting found?",
      answer:
        "Google Ads is immediate: your ad appears at the very top of page 1 within hours of launching your campaign. SEO is sustainable: it builds long-term organic equity so you gain steady, free clicks 24/7 without paying per click. The best growth strategy combines Google Ads for immediate cash flow with SEO for compounding free traffic.",
    },
    {
      question: "How do you ensure my site ranks for the right customers?",
      answer:
        "We focus on 'buyer-intent keywords'—the specific phrases people type when they are ready to purchase or hire, rather than broad informational searches. We embed these keywords naturally into titles, headings, metadata, schema markup, and content to guarantee high conversion rates.",
    },
    {
      question: "Can you optimize my existing website or do I need to rebuild it?",
      answer:
        "Most existing websites can be fully optimized without starting from scratch. We audit your site speed, metadata, heading hierarchies, mobile responsiveness, and indexing status to apply high-impact fixes directly.",
    },
  ];

  return (
    <section id="faq" className="px-5 md:px-10 py-32 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lime-400 text-sm uppercase tracking-widest font-semibold mb-4">
            Answers to Common Questions
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Frequently Asked <span className="text-lime-400">SEO Questions</span>
          </h2>
          <p className="text-white/50 mt-4 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about getting your website discovered, crawled, and ranked on Google.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-lime-400/40 bg-white/[0.04] shadow-lg shadow-lime-400/5"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-lime-400 rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`font-medium text-base md:text-lg transition-colors ${
                    isOpen ? "text-lime-300" : "text-white"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-lime-400/10 border-lime-400/30 text-lime-400" : "text-white/50"
                  }`}>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-lime-400" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 md:px-7 pb-6 pt-1 text-sm text-white/60 leading-relaxed border-t border-white/5 animate-in fade-in slide-in-from-top-1 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
