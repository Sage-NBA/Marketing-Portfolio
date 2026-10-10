import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#serp-preview", label: "Search Preview" },
    { href: "#services", label: "Services" },
    { href: "#approach", label: "Strategy" },
    { href: "#faq", label: "SEO FAQ" },
    { href: "#audit", label: "Free Audit" },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between border border-white/10 bg-black/75 backdrop-blur-xl rounded-full px-5 py-3 shadow-2xl transition-all duration-300">
          {/* LOGO */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-lime-400 rounded-lg"
            title="Growth. Home - Digital Marketing & SEO Optimization"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400 group-hover:scale-125 transition-transform duration-300" />
            <span>
              Growth<span className="text-lime-400">.</span>
            </span>
          </a>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-lime-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* DESKTOP CTA BUTTON */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-lime-400 transition duration-300 shadow-md hover:shadow-lime-400/20"
          >
            Get Found Fast
            <ArrowUpRight size={16} />
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1.5 text-white/80 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE SLIDE-DOWN DRAWER */}
        {menuOpen && (
          <div className="md:hidden mt-2 rounded-3xl border border-white/10 bg-[#111]/95 backdrop-blur-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-4 text-white/80 font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-1 hover:text-lime-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-lime-400 text-black py-3 rounded-full font-semibold mt-2 hover:bg-white transition duration-300 shadow-lg"
              >
                Start Getting Found
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
