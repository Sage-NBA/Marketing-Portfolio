import { ArrowUpRight } from "lucide-react";

export function ContactCta() {
  return (
    <section id="contact" className="px-5 md:px-10 py-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[2.5rem] bg-lime-400 text-black p-8 md:p-16 min-h-[500px] flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-300">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg tracking-tight">
              Growth<span className="opacity-40">.</span>
            </span>

            <span className="text-xs uppercase tracking-widest font-semibold bg-black/10 px-3.5 py-1.5 rounded-full">
              Available for new projects
            </span>
          </div>

          <div className="my-10">
            <h2 className="text-4xl md:text-8xl font-bold tracking-[-0.05em] leading-[0.88] max-w-5xl">
              Your next customer
              <br />
              is searching right now.
            </h2>
            <p className="mt-6 text-black/80 max-w-xl text-base md:text-lg leading-relaxed font-normal">
              Don't let competitors steal high-intent traffic. Let's get your website indexed,
              optimized, and ranking at the very top.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="mailto:hello@example.com?subject=Inquiry:%20SEO%20and%20Digital%20Growth%20Optimization"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 shadow-xl active:scale-95"
              >
                Start a Conversation
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#serp-preview"
                className="inline-flex items-center gap-2 border border-black/20 bg-black/5 hover:bg-black/10 text-black px-6 py-4 rounded-full text-sm font-semibold transition active:scale-95"
              >
                Review Search Snippet
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row justify-between text-xs text-black/70 gap-2">
            <span>Primary response time: Within 2 hours</span>
            <span>Available worldwide (Remote)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCta;
