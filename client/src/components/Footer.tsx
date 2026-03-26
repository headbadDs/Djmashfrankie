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
    <footer
      style={{
        position: "relative",
        background: "#030305",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
      }}
    >
      {/* Top gradient line */}
      <div
        style={{
          height: "2px",
          background: "linear-gradient(90deg, transparent, #00D4FF, #8B5CF6, #FF2D78, transparent)",
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse at center, rgba(0,212,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "5rem 2rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 900,
                fontSize: "1.5rem",
                letterSpacing: "0.15em",
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              
              <span
                style={{
                  color: "#00D4FF",
                  textShadow: "0 0 15px rgba(0,212,255,0.7)",
                }}
              >
               DJMASHFRANKIE
              </span>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.5rem",
                maxWidth: "280px",
              }}
            >
              World-class DJ delivering premium nightlife experiences across the globe. 
              From intimate sets to festival stages.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
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
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#00D4FF")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
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
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: <Mail size={14} />, text: "frankiekip8624@gmail.com" },
                { icon: <Phone size={14} />, text: "+254719277671" },
                { icon: <MapPin size={14} />, text: "Nairobi, Kenya" },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  <span style={{ color: "#00D4FF", flexShrink: 0 }}>{c.icon}</span>
                  {c.text}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "1.25rem",
              }}
            >
              Stay in the Loop
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
                marginBottom: "1rem",
              }}
            >
              Get exclusive updates on new mixes, events, and behind-the-scenes content.
            </p>
            <form onSubmit={handleNewsletter} style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="email"
                className="input-dark"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ flex: 1, fontSize: "0.85rem" }}
              />
              <button
                type="submit"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #00D4FF, #0099cc)",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 0 15px rgba(0,212,255,0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(0,212,255,0.5)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(0,212,255,0.3)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            © {new Date().getFullYear()} DJMASHFRANKIE. All rights reserved.
          </div>
          <div
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.15)",
              textTransform: "uppercase",
            }}
          >
            Feel the Beat. Live the Night.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.25)")}
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
