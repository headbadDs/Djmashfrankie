/**
 * DJ NEXUS — Navbar
 * Midnight Luxe: sticky glassmorphism nav, Orbitron logo, Syne nav links
 * Smooth scroll to sections, mobile hamburger menu
 */
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(5, 5, 8, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "none",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="no-underline"
        >
          <span className="font-orbitron font-black text-xl tracking-widest text-white">
            <span className="neon-blue">
              DJMASHFRANKIE
            </span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="nav-link"
              style={{ textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <div className="hidden md:flex">
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); scrollTo("#booking"); }}
            className="btn-neon-magenta"
            style={{ textDecoration: "none", fontSize: "0.75rem" }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            padding: "0.5rem",
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(5, 5, 8, 0.98)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                    setMenuOpen(false);
                  }}
                  className="nav-link"
                  style={{ textDecoration: "none", fontSize: "1rem" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#booking");
                  setMenuOpen(false);
                }}
                className="btn-neon-magenta"
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
