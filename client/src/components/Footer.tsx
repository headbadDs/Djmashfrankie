/**
 * DJMASHFRANKIE — Footer
 * Midnight Luxe: contact info, quick links, newsletter subscription,
 * copyright, social icons with neon hover effects
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Youtube, Music2, ArrowRight, Send } from "lucide-react";
import { toast } from "sonner";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book Now", href: "#booking" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("You're subscribed! Expect exclusive updates from DJMASHFRANKIE.");
    setEmail("");
  };

  return (
    <footer className="relative bg-void border-top-light overflow-hidden">
      {/* Top gradient line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 via-purple-500 to-pink-500" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-80 bg-gradient-glow pointer-events-none" />

      <div className="relative container-max container-px container-py">
        <div className="grid-4-cols mb-16">
          {/* Brand column */}
          <div>
            <div className="font-black text-2xl tracking-widest text-white mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              <span className="neon-blue">DJMASHFRANKIE</span>
            </div>
            <p className="text-sm-light leading-relaxed mb-6 max-w-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              World-class DJ delivering premium nightlife experiences across the globe. 
              From intimate sets to festival stages.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={16} />, color: "#E1306C", url: "https://www.instagram.com/djmashfrankie?igsh=MWhvbTM3Z3c2cDRicw==" },
                { icon: <Youtube size={16} />, color: "#FF0000", url: "https://youtube.com/@djmashfrankie_kif?si=INjys_nHIb0Xegl3" },
                { icon: <Music2 size={16} />, color: "#1DB954", url: "https://spotify.com" },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                    </svg>
                  ),
                  color: "#69C9D0",
                  url: "https://tiktok.com",
                },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = s.color;
                    (e.currentTarget as HTMLElement).style.borderColor = `${s.color}44`;
                    (e.currentTarget as HTMLElement).style.background = `${s.color}11`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 15px ${s.color}33`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-label mb-5">Quick Links</div>
            <ul className="list-none p-0 m-0 flex-col-gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="link-text-light flex items-center gap-1 text-sm hover:text-cyan-400"
                  >
                    <ArrowRight size={12} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-label mb-5">Contact</div>
            <div className="flex-col-gap-3">
              {[
                { icon: <Mail size={14} />, text: "frankiekip8624@gmail.com" },
                { icon: <Phone size={14} />, text: "+254719277671" },
                { icon: <MapPin size={14} />, text: "Nairobi, Kenya" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex-items-center gap-2 text-sm text-white/45" style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="text-cyan-400 flex-shrink-0">{c.icon}</span>
                  {c.text}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="text-label mb-5">Stay in the Loop</div>
            <p className="text-sm text-white/40 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Get exclusive updates on new mixes, events, and behind-the-scenes content.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                className="newsletter-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                title="Subscribe to newsletter"
                className="btn-newsletter"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-gap-3 flex items-center justify-between flex-wrap gap-4">
          <div className="text-xs text-white/25" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            © {new Date().getFullYear()} DJMASHFRANKIE. All rights reserved.
          </div>
          <div className="text-xs tracking-widest uppercase text-white/15" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Feel the Beat. Live the Night.
          </div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-xs text-white/25 no-underline transition-colors duration-300 hover:text-white/60" style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
