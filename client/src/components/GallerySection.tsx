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
      className="relative py-32 bg-gradient-to-b from-void via-gray-900 to-void overflow-hidden"
    >
      <div className="container-max container-px relative">
        {/* Header */}
        <FadeUp>
          <div className="gallery-header">
            <div className="section-tag">Gallery</div>
            <h2 className="section-title text-5xl">
              Behind the{" "}
              <span className="neon-magenta">
                Decks
              </span>
            </h2>
          </div>
        </FadeUp>

        {/* Masonry grid */}
        <FadeUp delay={0.1}>
          <div className="masonry-grid">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onClick={() => setLightboxItem(item)}
                className="gallery-item"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="gallery-image"
                  style={{
                    height: item.span === "tall" ? "420px" : item.span === "wide" ? "280px" : "240px",
                  }}
                />

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="gallery-overlay"
                >
                  <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white">
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
            className="fixed inset-0 bg-black/95 z-9000 flex items-center justify-center p-8"
            style={{
              backdropFilter: "blur(10px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh]"
            >
              <img
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                style={{
                  boxShadow: "0 0 60px rgba(0,212,255,0.2)",
                }}
              />
              <button
                onClick={() => setLightboxItem(null)}
                title="Close gallery"
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white cursor-pointer flex items-center justify-center transition-all duration-200"
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
