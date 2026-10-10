import { CheckCircle2, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function AuditForm() {
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [auditUrl, setAuditUrl] = useState("");
  const [auditEmail, setAuditEmail] = useState("");

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (auditEmail.trim()) {
      setAuditSubmitted(true);
    }
  };

  return (
    <section id="audit" className="px-5 md:px-10 py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#161616] to-[#0d0d0d] border border-lime-400/20 p-8 md:p-14 relative overflow-hidden shadow-2xl transition-all duration-300 hover:border-lime-400/35">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-lime-400/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-lime-400 text-xs uppercase tracking-wider font-semibold mb-4 bg-lime-400/10 px-3.5 py-1.5 rounded-full border border-lime-400/20">
              <ShieldCheck size={14} /> 100% Free Website Discoverability Check
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Want to know why your site isn't appearing?
            </h2>
            <p className="text-white/60 mt-3 max-w-xl text-sm md:text-base leading-relaxed">
              Submit your website address below. We'll run a full indexing, keyword, and Google
              search crawl audit and send you a personalized report showing exactly what to fix.
            </p>

            {auditSubmitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-lime-400/10 border border-lime-400/30 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime-400 text-black mb-3">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Audit Request Received!</h3>
                <p className="text-sm text-white/60 mt-2 max-w-md mx-auto leading-relaxed">
                  We will inspect your website's search visibility, metadata, and Core Web Vitals,
                  and email your action plan within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setAuditSubmitted(false);
                    setAuditUrl("");
                    setAuditEmail("");
                  }}
                  className="mt-4 text-xs text-lime-400 hover:underline"
                >
                  Submit another website
                </button>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="mt-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">
                      Your Website URL
                    </label>
                    <input
                      type="url"
                      required
                      value={auditUrl}
                      onChange={(e) => setAuditUrl(e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={auditEmail}
                      onChange={(e) => setAuditEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lime-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-white transition duration-300 shadow-lg shadow-lime-400/20 active:scale-95 cursor-pointer"
                >
                  Run My Free SEO Audit
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuditForm;
