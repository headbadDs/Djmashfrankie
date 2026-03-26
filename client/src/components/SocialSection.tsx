/**
 * DJ NEXUS — SocialSection
 * Midnight Luxe: Instagram feed preview grid, social platform links
 * with neon hover effects, follower counts
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Youtube, Music2, ExternalLink } from "lucide-react";

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

const socialPlatforms = [
  {
    name: "Instagram",
    handle: "@djmashfrankie",
    followers: "5K",
    icon: <Instagram size={24} />,
    color: "#E1306C",
    gradient: "linear-gradient(135deg, #833AB4, #E1306C, #F77737)",
    url: "https://instagram.com/?igsh=MWhvbTM3Zc2cDRicw==",
  },
  {
    name: "TikTok",
    handle: "@djmashfrankie",
    followers: "12k",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
    color: "#69C9D0",
    gradient: "linear-gradient(135deg, #010101, #69C9D0)",
    url: "https://tiktok.com/djmashfrankie",
  },
  {
    name: "YouTube",
    handle: "@djmashfrankie",
    followers: "50k",
    icon: <Youtube size={24} />,
    color: "#FF0000",
    gradient: "linear-gradient(135deg, #FF0000, #cc0000)",
    url: "https://youtube.com/@djmashfrankie_kif?si=INjys_nHIb0Xegl3",
  },
  {
    name: "Spotify",
    handle: "Djmashfrankie",
    followers: "89K",
    icon: <Music2 size={24} />,
    color: "#1DB954",
    gradient: "linear-gradient(135deg, #1DB954, #158a3e)",
    url: "https://spotify.com",
  },
];

const instagramPosts = [
  "/pics/SaveClip.App_640317656_18079404044587486_9172159331396000391_n.jpg.webp",
  "/pics/SaveClip.App_641079496_18079426913587486_6351340567961635320_n.jpg.webp",
  "/pics/SaveClip.App_640979854_18079404053587486_2152144439873232625_n.jpg.webp",
  "/pics/IMG-20260326-WA0003.jpg",
  "/pics/IMG-20260326-WA0004.jpg",
  "/pics/SaveClip.App_641177434_18079486841587486_1301773692130514448_n.jpg.webp",
];

export default function SocialSection() {
  return (
    <section
      id="social"
      className="relative py-32 bg-void overflow-hidden"
    >
      <div className="container-max container-px">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-16">
            <div className="section-tag flex justify-center">Follow the Journey</div>
            <h2 className="section-title text-4xl md:text-5xl text-white">
              Stay{" "}
              <span className="neon-blue">
                Connected
              </span>
            </h2>
          </div>
        </FadeUp>

        {/* Social platform cards */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {socialPlatforms.map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                className="social-card"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${platform.color}44`;
                  (e.currentTarget as HTMLElement).style.background = `${platform.color}0a`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${platform.color}22`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="social-icon-box"
                  style={{
                    background: platform.gradient,
                    boxShadow: `0 4px 20px ${platform.color}44`,
                  }}
                >
                  {platform.icon}
                </div>
                <div className="social-followers">
                  {platform.followers}
                </div>
                <div className="social-platform">
                  {platform.name}
                </div>
                <div
                  className="social-handle"
                  style={{ color: platform.color }}
                >
                  {platform.handle}
                </div>
                <ExternalLink
                  size={12}
                  className="social-external-icon"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                />
              </motion.a>
            ))}
          </div>
        </FadeUp>

        {/* Instagram feed preview */}
        <FadeUp delay={0.2}>
          <div>
            <div className="instagram-header">
              <div className="flex items-center gap-3">
                <Instagram size={20} style={{ color: "#E1306C" }} />
                <span className="font-bold text-sm text-white/70" style={{ fontFamily: "'Syne', sans-serif" }}>
                  @djmashfrankie on Instagram
                </span>
              </div>
              <a
                href="https://instagram.com"
                target="https://instagram.com/?igsh=MWhvbTM3Zc2cDRicw=="
                rel="noopener noreferrer"
                className="font-bold text-xs tracking-widest uppercase flex items-center gap-1"
                style={{ fontFamily: "'Syne', sans-serif", color: "#E1306C" }}
              >
                View All <ExternalLink size={12} />
              </a>
            </div>

            <div className="instagram-grid">
              {instagramPosts.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="instagram-post"
                >
                  <img
                    src={src}
                    alt={`Instagram post ${i + 1}`}
                    loading="lazy"
                    className="gallery-image"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="instagram-overlay"
                  >
                    <Instagram size={20} color="#fff" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
