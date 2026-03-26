/**
 * DJ NEXUS — MusicSection
 * Midnight Luxe: custom playlist UI, animated waveform visualizer,
 * glassmorphism player card, SoundCloud embed, track list
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, Download, ExternalLink } from "lucide-react";

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

const tracks = [
  { id: 1, title: "DjmashFrankie --- VIBES FROM THE HAT ----- TOP AMAPIANO MIX", genre: "Amapiano", duration: "37:45", bpm: 126, plays: "142K" },
  { id: 2, title: "DJ MASHFRANKIE---VIBES FROM THE HAT 2: TOP AMAPIANO MIX", genre: "Amapiano", duration: "34:58", bpm: 118, plays: "98K" },
  { id: 3, title: "DJ MASHFRANKIE VIBES FROM THE HAT #1: 2010 - 2016 THROWBACK HIPHOP RNB MIX", genre: "RNB", duration: "20:38", bpm: 138, plays: "215K" },
  { id: 4, title: "DJ MASHFRANKIE --- VIBES FROM THE HAT 4 --- 3 STEP TOP MIX uValo,Isaka,Thukuthela", genre: "Amapiano", duration: "9:05", bpm: 112, plays: "187K" },
  { id: 5, title: "DJMASHFRANKIE ---- VIBES FROM THE HAT ---- LATEST AMAPIANO MIX", genre: "Amapiano", duration: "34:58", bpm: 95, plays: "76K" },
  { id: 6, title: "Piano Dreams", genre: "House", duration: "10:33", bpm: 124, plays: "134K" },
];

function AnimatedWaveformPlayer({ isPlaying }: { isPlaying: boolean }) {
  const bars = Array.from({ length: 60 }, (_, i) => ({
    height: Math.random() * 0.7 + 0.3,
    delay: i * 0.02,
    duration: 0.5 + Math.random() * 0.5,
  }));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2px",
        height: "60px",
        width: "100%",
      }}
    >
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          animate={isPlaying ? { scaleY: [bar.height, 1, bar.height * 0.3, bar.height] } : { scaleY: bar.height * 0.3 }}
          transition={isPlaying ? {
            duration: bar.duration,
            repeat: Infinity,
            delay: bar.delay,
            ease: "easeInOut",
          } : { duration: 0.3 }}
          style={{
            flex: 1,
            height: "100%",
            background: i < 30
              ? "linear-gradient(to top, #FF2D78, rgba(255,45,120,0.4))"
              : "linear-gradient(to top, #00D4FF, rgba(0,212,255,0.4))",
            borderRadius: "1px",
            transformOrigin: "bottom",
            minWidth: "2px",
          }}
        />
      ))}
    </div>
  );
}

export default function MusicSection() {
  const [activeTrack, setActiveTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);

  const track = tracks[activeTrack];

  return (
    <section
      id="music"
      style={{
        position: "relative",
        padding: "8rem 0",
        background: "linear-gradient(180deg, #050508 0%, #080610 50%, #050508 100%)",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255,45,120,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <FadeUp>
          <div style={{ marginBottom: "4rem" }}>
            <div className="section-tag">Mixes & Tracks</div>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff" }}>
              Feel the{" "}
              <span style={{ color: "#FF2D78", textShadow: "0 0 20px rgba(255,45,120,0.5)" }}>
                Sound
              </span>
            </h2>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(300px, 1fr) minmax(300px, 1fr)", gap: "3rem", alignItems: "start" }}>

          {/* Left: Custom Player */}
          <FadeUp delay={0.1}>
            <div
              className="glass-card"
              style={{ padding: "2rem", position: "sticky", top: "100px" }}
            >
              {/* Now playing */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    color: "#FF2D78",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  Now Playing
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    color: "#fff",
                    marginBottom: "0.25rem",
                  }}
                >
                  {track.title}
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8rem",
                      color: "#00D4FF",
                    }}
                  >
                    {track.genre}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                  <span
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {track.bpm} BPM
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {track.plays} plays
                  </span>
                </div>
              </div>

              {/* Waveform */}
              <div style={{ marginBottom: "1.5rem" }}>
                <AnimatedWaveformPlayer isPlaying={isPlaying} />
              </div>

              {/* Progress bar */}
              <div
                style={{
                  height: "3px",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "2px",
                  marginBottom: "0.5rem",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "35%",
                    height: "100%",
                    background: "linear-gradient(90deg, #FF2D78, #00D4FF)",
                    borderRadius: "2px",
                    boxShadow: "0 0 8px rgba(0,212,255,0.5)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "35%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#00D4FF",
                    boxShadow: "0 0 8px rgba(0,212,255,0.8)",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: "1.5rem",
                }}
              >
                <span>2:36</span>
                <span>{track.duration}</span>
              </div>

              {/* Controls */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <button
                  onClick={() => setActiveTrack((prev) => (prev - 1 + tracks.length) % tracks.length)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    transition: "color 0.2s",
                    padding: "0.5rem",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
                >
                  <SkipBack size={20} />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: isPlaying
                      ? "linear-gradient(135deg, #FF2D78, #cc1a5a)"
                      : "linear-gradient(135deg, #00D4FF, #0099cc)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    boxShadow: isPlaying
                      ? "0 0 20px rgba(255,45,120,0.5)"
                      : "0 0 20px rgba(0,212,255,0.5)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {isPlaying ? <Pause size={22} /> : <Play size={22} style={{ marginLeft: "2px" }} />}
                </button>

                <button
                  onClick={() => setActiveTrack((prev) => (prev + 1) % tracks.length)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    transition: "color 0.2s",
                    padding: "0.5rem",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
                >
                  <SkipForward size={20} />
                </button>
              </div>

              {/* Volume */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Volume2 size={16} style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }} />
                <div
                  style={{
                    flex: 1,
                    height: "3px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "2px",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pct = ((e.clientX - rect.left) / rect.width) * 100;
                    setVolume(Math.round(Math.max(0, Math.min(100, pct))));
                  }}
                >
                  <div
                    style={{
                      width: `${volume}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, #00D4FF, #8B5CF6)",
                      borderRadius: "2px",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: "0.6rem",
                    color: "rgba(255,255,255,0.3)",
                    minWidth: "28px",
                    textAlign: "right",
                  }}
                >
                  {volume}%
                </span>
              </div>

              {/* External links */}
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
                <a
                  href="https://soundcloud.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.4rem",
                    padding: "0.6rem",
                    background: "rgba(255,87,34,0.1)",
                    border: "1px solid rgba(255,87,34,0.2)",
                    borderRadius: "6px",
                    color: "#ff5722",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,87,34,0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(255,87,34,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,87,34,0.1)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <ExternalLink size={12} />
                  SoundCloud
                </a>
                <a
                  href="https://mixcloud.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.4rem",
                    padding: "0.6rem",
                    background: "rgba(82,145,255,0.1)",
                    border: "1px solid rgba(82,145,255,0.2)",
                    borderRadius: "6px",
                    color: "#5291ff",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(82,145,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(82,145,255,0.1)";
                  }}
                >
                  <ExternalLink size={12} />
                  Mixcloud
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Right: Track list */}
          <FadeUp delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {tracks.map((t, i) => (
                <motion.div
                  key={t.id}
                  onClick={() => { setActiveTrack(i); setIsPlaying(true); }}
                  whileHover={{ x: 6 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    borderRadius: "8px",
                    background: activeTrack === i
                      ? "rgba(0,212,255,0.08)"
                      : "rgba(255,255,255,0.02)",
                    border: `1px solid ${activeTrack === i ? "rgba(0,212,255,0.3)" : "rgba(255,255,255,0.06)"}`,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: activeTrack === i ? "0 0 20px rgba(0,212,255,0.08)" : "none",
                  }}
                >
                  {/* Track number / play indicator */}
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: activeTrack === i
                        ? "linear-gradient(135deg, #00D4FF, #0099cc)"
                        : "rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: activeTrack === i ? "0 0 12px rgba(0,212,255,0.4)" : "none",
                    }}
                  >
                    {activeTrack === i && isPlaying ? (
                      <div style={{ display: "flex", gap: "2px", alignItems: "center", height: "14px" }}>
                        {[0, 1, 2].map((b) => (
                          <motion.div
                            key={b}
                            animate={{ scaleY: [0.3, 1, 0.3] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: b * 0.15 }}
                            style={{
                              width: "2px",
                              height: "100%",
                              background: "#fff",
                              borderRadius: "1px",
                              transformOrigin: "bottom",
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <span
                        style={{
                          fontFamily: "'Orbitron', sans-serif",
                          fontSize: "0.65rem",
                          color: activeTrack === i ? "#fff" : "rgba(255,255,255,0.3)",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>

                  {/* Track info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: activeTrack === i ? "#fff" : "rgba(255,255,255,0.8)",
                        marginBottom: "0.2rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                        color: activeTrack === i ? "#00D4FF" : "rgba(255,255,255,0.35)",
                      }}
                    >
                      {t.genre} · {t.bpm} BPM
                    </div>
                  </div>

                  {/* Plays & duration */}
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: "0.65rem",
                        color: "rgba(255,255,255,0.3)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {t.duration}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.7rem",
                        color: "rgba(255,255,255,0.25)",
                      }}
                    >
                      {t.plays}
                    </div>
                  </div>

                  {/* Download icon */}
                  <button
                    onClick={(e) => { e.stopPropagation(); }}
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(255,255,255,0.2)",
                      cursor: "pointer",
                      padding: "0.25rem",
                      transition: "color 0.2s",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00D4FF")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.2)")}
                  >
                    <Download size={14} />
                  </button>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
