/**
 * DJ NEXUS — TestimonialsSection
 * Midnight Luxe: client reviews with star ratings, auto-sliding carousel,
 * glassmorphism cards, quote typography
 */
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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

const testimonials = [
  {
    id: 1,
    name: "Morgan Kipchumba",
    role: "Wedding Client",
    rating: 5,
    text: "DJ Mashfrankie absolutely made our wedding night. The way he read the room and transitioned between genres was seamless — from our first dance to the last song, every moment was perfect. Our guests are still talking about it months later.",
    event: "Weston Hotel, Nairobi",
  },
  {
    id: 2,
    name: "Cosmas Ochibo",
    role: "Night Reveller",
    rating:4,
    text:"Music at its finest",
    event:"Habanos, Thika"

  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? "#FFD700" : "none"}
          style={{
            color: i < rating ? "#FFD700" : "rgba(255,215,0,0.2)",
            filter: i < rating ? "drop-shadow(0 0 4px rgba(255,215,0,0.5))" : "none",
          }}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        padding: "8rem 0",
        background: "linear-gradient(180deg, #050508 0%, #080612 50%, #050508 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-tag" style={{ justifyContent: "center", display: "flex" }}>Testimonials</div>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff" }}>
              What Clients{" "}
              <span style={{ color: "#8B5CF6", textShadow: "0 0 20px rgba(139,92,246,0.5)" }}>
                Say
              </span>
            </h2>
          </div>
        </FadeUp>

        {/* Main testimonial slider */}
        <FadeUp delay={0.1}>
          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
            {/* Quote icon */}
            <div
              style={{
                position: "absolute",
                top: "-1rem",
                left: "2rem",
                color: "rgba(139,92,246,0.3)",
                zIndex: 1,
              }}
            >
              <Quote size={60} />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="testimonial-card"
                style={{ position: "relative", zIndex: 2 }}
              >
                <div style={{ marginBottom: "1.5rem" }}>
                  <StarRating rating={t.rating} />
                </div>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.8)",
                    fontStyle: "italic",
                    marginBottom: "2rem",
                  }}
                >
                  "{t.text}"
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #8B5CF6, #FF2D78)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#fff",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.8rem",
                        color: "#8B5CF6",
                      }}
                    >
                      {t.role}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.3)",
                        marginTop: "0.1rem",
                      }}
                    >
                      {t.event}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              {/* Dots */}
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    style={{
                      width: i === current ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background: i === current
                        ? "linear-gradient(90deg, #8B5CF6, #FF2D78)"
                        : "rgba(255,255,255,0.15)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <button
                  onClick={prev}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.6)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.2)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#8B5CF6";
                    (e.currentTarget as HTMLElement).style.color = "#8B5CF6";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.6)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.2)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#8B5CF6";
                    (e.currentTarget as HTMLElement).style.color = "#8B5CF6";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Mini testimonial cards */}
        <FadeUp delay={0.2}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginTop: "4rem",
            }}
          >
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                onClick={() => goTo(i)}
                whileHover={{ y: -4 }}
                style={{
                  padding: "1.25rem",
                  borderRadius: "12px",
                  background: current === i ? "rgba(139,92,246,0.08)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${current === i ? "rgba(139,92,246,0.3)" : "rgba(255,255,255,0.06)"}`,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <StarRating rating={t.rating} />
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.5)",
                    marginTop: "0.75rem",
                    lineHeight: 1.6,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  "{t.text}"
                </p>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: current === i ? "#8B5CF6" : "rgba(255,255,255,0.4)",
                    marginTop: "0.75rem",
                  }}
                >
                  — {t.name}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
