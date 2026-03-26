/**
 * DJMASHFRANKIE — AboutSection
 * Midnight Luxe: asymmetric layout, DJ portrait with neon glow frame,
 * glassmorphism bio card, genre tags, achievement stats
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Globe, Award, Headphones } from "lucide-react";

const DJ_PORTRAIT = "/pics/SaveClip.App_610753574_17872867281473949_768569644978716861_n.jpg.webp";
const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663476050854/92KjHRi2KQXcxvgdykAgQi/dj-about-bg-iX6VHpZBU5yxwfie42VFM6.webp";

const genres = ["Amapiano", "Afrobeat", "Afro-House", "House", "R&B", "Hip-Hop", "Dancehall", "EDM"];

const achievements = [
  /*icon: <Award size={20} />, label: "Best DJ Award", sub: "City Music Awards 2023" },*/
 /* icon: <Globe size={20} />, label: "50+ Counties", sub: "International Tours" },*/
  { icon: <Music size={20} />, label: "50+ Events", sub: "Clubs, Festivals & Private" },
  { icon: <Headphones size={20} />, label: "10k+ Streams", sub: "Across All Platforms" },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "8rem 0",
        overflow: "hidden",
        background: "#050508",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 80% 50%, rgba(0,212,255,0.04) 0%, transparent 60%)",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "clamp(280px, 45%, 600px) 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Left: Portrait */}
          <FadeUp>
            <div style={{ position: "relative" }}>
              {/* Decorative corner accents */}
              <div
                style={{
                  position: "absolute",
                  top: -16,
                  left: -16,
                  width: 60,
                  height: 60,
                  borderTop: "2px solid #00D4FF",
                  borderLeft: "2px solid #00D4FF",
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -16,
                  right: -16,
                  width: 60,
                  height: 60,
                  borderBottom: "2px solid #FF2D78",
                  borderRight: "2px solid #FF2D78",
                  zIndex: 2,
                }}
              />

              {/* Portrait image */}
              <div
                style={{
                  borderRadius: "4px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={DJ_PORTRAIT}
                  alt="DJMASHFRANKIE"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "600px",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                  }}
                />
                {/* Image overlay gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(5,5,8,0.6) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Floating achievement badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  left: "-2rem",
                  background: "rgba(5,5,8,0.9)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(0,212,255,0.3)",
                  borderRadius: "12px",
                  padding: "1rem 1.5rem",
                  zIndex: 3,
                  boxShadow: "0 0 30px rgba(0,212,255,0.15)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.8rem",
                    color: "#00D4FF",
                    textShadow: "0 0 15px rgba(0,212,255,0.6)",
                    lineHeight: 1,
                  }}
                >
                  2+
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "0.25rem",
                  }}
                >
                  Years of Mastery
                </div>
              </motion.div>
            </div>
          </FadeUp>

          {/* Right: Bio content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <FadeUp delay={0.1}>
              <div className="section-tag">About the Artist</div>
              <h2
                className="section-title"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#fff",
                  marginBottom: "1.5rem",
                }}
              >
                The Sound That{" "}
                <span style={{ color: "#00D4FF", textShadow: "0 0 20px rgba(0,212,255,0.5)" }}>
                  Moves
                </span>{" "}
                the World
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.65)",
                  marginBottom: "1rem",
                }}
              >
                Djmashfrankie is a globally recognized Amapiano DJ and music curator who has spent over a decade
                redefining the nightlife experience. Born from the vibrant underground music scene,
                Djmashfrankie has evolved into one of the most sought-after performers in the world — blending
                Amapiano with surgical precision and an unmatched ability to read the crowd.
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                From intimate rooftop sessions to headline slots at international festivals, Djmashfrankie
                delivers a sonic journey that transcends music — it's a full sensory experience.
                Residencies at top clubs across Thika, Nairobi and Kitengela have cemented
                his reputation as a true master of Amapiano.
              </p>
            </FadeUp>

            {/* Genre tags */}
            <FadeUp delay={0.2}>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Genres
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {genres.map((genre) => (
                    <span
                      key={genre}
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "0.4rem 1rem",
                        borderRadius: "2px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.7)",
                        transition: "all 0.3s ease",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.borderColor = "#00D4FF";
                        (e.target as HTMLElement).style.color = "#00D4FF";
                        (e.target as HTMLElement).style.boxShadow = "0 0 10px rgba(0,212,255,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                        (e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                        (e.target as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Achievement grid */}
            <FadeUp delay={0.3}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                {achievements.map((a) => (
                  <div
                    key={a.label}
                    className="glass-card glass-card-hover"
                    style={{ padding: "1.25rem" }}
                  >
                    <div style={{ color: "#00D4FF", marginBottom: "0.5rem" }}>{a.icon}</div>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "#fff",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {a.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {a.sub}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
