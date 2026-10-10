import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-5 md:px-10 py-10 border-t border-white/10 bg-[#080808]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <div>
          © 2026 Growth. Marketing Studio. All rights reserved. Built for search engine excellence.
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400 transition-colors flex items-center gap-1"
          >
            XML Sitemap <ExternalLink size={12} />
          </a>
          <a
            href="/robots.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400 transition-colors flex items-center gap-1"
          >
            Robots.txt <ExternalLink size={12} />
          </a>
          <a href="#services" className="hover:text-lime-400 transition-colors">
            Google Ads
          </a>
          <a href="#services" className="hover:text-lime-400 transition-colors">
            SEO Optimization
          </a>
          <a href="#services" className="hover:text-lime-400 transition-colors">
            Instagram Ads
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
