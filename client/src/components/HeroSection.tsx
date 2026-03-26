/**
 * DJ NEXUS — HeroSection
 * Midnight Luxe: fullscreen cinematic hero, Orbitron DJ name, pulsing waveform,
 * electric blue + magenta neon accents, parallax overlay, scroll indicator
 */
import { motion } from "framer-motion";
import { Play, Calendar } from "lucide-react";
import { useRef, useEffect } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663476050854/92KjHRi2KQXcxvgdykAgQi/dj-hero-bg-MuVjvgJP2dYq3yLQnuEXF4.webp";

function AnimatedWaveform() {
  const bars = Array.from({ length: 40 }, (_, i) => ({
    height: Math.random() * 0.7 + 0.3,
    delay: i * 0.04,
    duration: 0.6 + Math.random() * 0.6,
  }));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "3px",
        height: "50px",
        opacity: 0.7,
      }}
    >
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          animate={{ scaleY: [bar.height, 1, bar.height * 0.4, bar.height] }}
          transition={{
            duration: bar.duration,
            repeat: Infinity,
            delay: bar.delay,
            ease: "easeInOut",
          }}
          style={{
            width: "3px",
            height: "100%",
            background: i % 3 === 0
              ? "linear-gradient(to top, #FF2D78, #FF2D78aa)"
              : "linear-gradient(to top, #00D4FF, #00D4FFaa)",
            borderRadius: "2px",
            transformOrigin: "bottom",
          }}
        />
      ))}
    </div>
  );
}

function ParticleField() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    color: i % 2 === 0 ? "#00D4FF" : "#FF2D78",
  }));

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ y: "110vh", x: `${p.x}vw`, opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 0.8, 0.8, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  function scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "#050508",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Multi-layer overlay for cinematic depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(5,5,8,0.3) 0%, rgba(5,5,8,0.1) 40%, rgba(5,5,8,0.7) 70%, rgba(5,5,8,0.97) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(5,5,8,0.6) 0%, transparent 60%)",
        }}
      />

      {/* Floating particles */}
      <ParticleField />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem 5rem",
          width: "100%",
        }}
      >
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#00D4FF",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "40px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #00D4FF)",
            }}
          />
          World-Class DJ Experience
        </motion.div>

        {/* DJ Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            lineHeight: 0.95,
            letterSpacing: "0.05em",
            color: "#fff",
            textShadow: "0 0 60px rgba(0,212,255,0.15)",
            marginBottom: "0.5rem",
          }}
        >
          <span
            style={{
              color: "#00D4FF",
              textShadow: "0 0 30px rgba(0,212,255,0.8), 0 0 60px rgba(0,212,255,0.4)",
            }}
          >
            VIBES FROM THE HAT
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "0.08em",
            marginBottom: "2rem",
            textTransform: "uppercase",
          }}
        >
          Feel the{" "}
          <span style={{ color: "#FF2D78", textShadow: "0 0 20px rgba(255,45,120,0.6)" }}>
            Beat.
          </span>{" "}
          Live the{" "}
          <span style={{ color: "#FF2D78", textShadow: "0 0 20px rgba(255,45,120,0.6)" }}>
            Night.
          </span>
        </motion.p>

        {/* Waveform */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <AnimatedWaveform />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <button
            onClick={() => scrollTo("#booking")}
            className="btn-neon-magenta"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.85rem",
            }}
          >
            <Calendar size={16} />
            Book Now
          </button>
          <button
            onClick={() => scrollTo("#music")}
            className="btn-neon-blue"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.85rem",
            }}
          >
            <Play size={16} />
            Listen to Mix
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            display: "flex",
            gap: "3rem",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Events Performed" },
            { value: "50+", label: "Cities Worldwide" },
            { value: "1M+", label: "Streams" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.8rem",
                  color: "#00D4FF",
                  textShadow: "0 0 15px rgba(0,212,255,0.5)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "0.25rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(0,212,255,0.8), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
