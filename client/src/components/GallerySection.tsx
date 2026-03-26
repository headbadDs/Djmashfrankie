/**
 * DJ MASHFRANKIE — GallerySection
 * Midnight Luxe: masonry grid, lightbox preview, hover overlays
 * Uses Unsplash links for gallery items + generated performance image
 */
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn, Play } from "lucide-react";

const DJ_PERFORMANCE = "/pics/SaveClip.App_607190706_18073462439587486_2232516118768866168_n.jpg.webp";

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

const galleryItems = [
  {
    id: 1,
    src: DJ_PERFORMANCE,
    alt: "DJ MASHFRANKIE at the decks",
    type: "photo",
    span: "tall",
  },
  {
    id: 2,
    src: "/pics/Screenshot_20260327-094805.png",
    alt: "Festival crowd",
    type: "photo",
    span: "normal",
  },
  {
    id: 3,
    src: "/pics/Screenshot_20260327-094618.png",
    alt: "Nightclub lights",
    type: "photo",
    span: "normal",
  },
  {
    id: 4,
    src: "/pics/SaveClip.App_626512978_18077115017587486_4007969823769462260_n.png",
    alt: "DJ equipment close-up",
    type: "photo",
    span: "wide",
  },
  {
    id: 5,
    src: "/pics/Screenshot_20260327-094825.png",
    alt: "Concert stage",
    type: "photo",
    span: "tall",
  },
  {
    id: 6,
    src: "/pics/Screenshot_20260327-094708.png",
    alt: "Live performance",
    type: "photo",
    span: "tall",
  },
  {
    id: 7,
    src: "/pics/Screenshot_20260327-094715.png",
    alt: "Crowd energy",
    type: "photo",
    span: "normal",
  },
  {
    id: 8,
    src: "/pics/Screenshot_20260327-094750.png",
    alt: "Stage lights",
    type: "photo",
    span: "normal",
  },
];

export default function GallerySection() {
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section
      id="gallery"
      style={{
        position: "relative",
        padding: "8rem 0",
        background: "linear-gradient(180deg, #050508 0%, #080612 50%, #050508 100%)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <FadeUp>
          <div style={{ marginBottom: "4rem" }}>
            <div className="section-tag">Gallery</div>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff" }}>
              Behind the{" "}
              <span style={{ color: "#FF2D78", textShadow: "0 0 20px rgba(255,45,120,0.5)" }}>
                Decks
              </span>
            </h2>
          </div>
        </FadeUp>

        {/* Masonry grid */}
        <FadeUp delay={0.1}>
          <div
            style={{
              columns: "3 300px",
              columnGap: "1rem",
            }}
          >
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onClick={() => setLightboxItem(item)}
                style={{
                  breakInside: "avoid",
                  marginBottom: "1rem",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "block",
                }}
                className="group"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: item.span === "tall" ? "420px" : item.span === "wide" ? "280px" : "240px",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.transform = "scale(1)";
                  }}
                />

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(0,212,255,0.3), rgba(255,45,120,0.3))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    {item.type === "video" ? <Play size={20} /> : <ZoomIn size={20} />}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.95)",
              zIndex: 9000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "85vh",
              }}
            >
              <img
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "85vh",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "0 0 60px rgba(0,212,255,0.2)",
                }}
              />
              <button
                onClick={() => setLightboxItem(null)}
                style={{
                  position: "absolute",
                  top: "-1rem",
                  right: "-1rem",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,45,120,0.3)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#FF2D78";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
