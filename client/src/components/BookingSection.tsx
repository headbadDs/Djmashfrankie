/**
 * DJ MashFrankie booking section
 * Midnight Luxe: professional booking form, pricing packages,
 * WhatsApp quick contact, glassmorphism cards
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Send, Check, Star } from "lucide-react";
import { toast } from "sonner";

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

const packages = [
  {
    name: "Essential",
    price: "$800",
    duration: "3 hours",
    features: ["3-hour set", "Basic sound system", "Standard lighting", "Music consultation", "1 revision"],
    color: "#00D4FF",
    featured: false,
  },
  {
    name: "Premium",
    price: "$1,800",
    duration: "5 hours",
    features: ["5-hour set", "Pro sound system", "LED lighting rig", "Custom playlist", "MC services", "3 revisions", "Event consultation"],
    color: "#FF2D78",
    featured: true,
  },
  {
    name: "Elite",
    price: "Custom",
    duration: "Full night",
    features: ["Full night residency", "Premium sound & lights", "Custom visuals/VJing", "Full event production", "Travel included", "Unlimited revisions", "Dedicated manager"],
    color: "#FFD700",
    featured: false,
  },
];

const eventTypes = [
  "Club Night", "Wedding", "Corporate Event", "Festival", "Birthday Party",
  "Private Party", "Brand Activation", "Concert", "Other",
];

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    location: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.eventType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Booking request sent! DJ NEXUS will contact you within 24 hours.");
  };

  return (
    <section
      id="booking"
      style={{
        position: "relative",
        padding: "8rem 0",
        background: "#050508",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(255,45,120,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div className="section-tag" style={{ justifyContent: "center", display: "flex" }}>Book DJ NEXUS</div>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#fff" }}>
              Make Your Event{" "}
              <span style={{ color: "#FF2D78", textShadow: "0 0 20px rgba(255,45,120,0.5)" }}>
                Unforgettable
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.5)",
                maxWidth: "500px",
                margin: "1rem auto 0",
                lineHeight: 1.7,
              }}
            >
              From intimate gatherings to massive festivals — DJ NEXUS delivers an experience
              that transcends music.
            </p>
          </div>
        </FadeUp>

        {/* Pricing packages */}
        <FadeUp delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
              marginBottom: "5rem",
            }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`package-card ${pkg.featured ? "featured" : ""}`}
                style={{ position: "relative" }}
              >
                {pkg.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "linear-gradient(135deg, #FF2D78, #cc1a5a)",
                      color: "#fff",
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      padding: "0.3rem 1rem",
                      borderRadius: "2px",
                      boxShadow: "0 0 15px rgba(255,45,120,0.4)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: pkg.color,
                    marginBottom: "1rem",
                  }}
                >
                  {pkg.name}
                </div>

                <div style={{ marginBottom: "0.25rem" }}>
                  <span
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: "2.5rem",
                      color: "#fff",
                    }}
                  >
                    {pkg.price}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {pkg.duration}
                </div>

                <div
                  style={{
                    height: "1px",
                    background: `linear-gradient(90deg, ${pkg.color}44, transparent)`,
                    marginBottom: "1.5rem",
                  }}
                />

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      <Check size={14} style={{ color: pkg.color, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    document.querySelector("#booking-form")?.scrollIntoView({ behavior: "smooth" });
                    setFormData((prev) => ({ ...prev, message: `I'm interested in the ${pkg.name} package.` }));
                  }}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "4px",
                    border: `1px solid ${pkg.color}66`,
                    background: pkg.featured ? `linear-gradient(135deg, ${pkg.color}22, transparent)` : "transparent",
                    color: pkg.color,
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${pkg.color}22`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${pkg.color}33`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = pkg.featured ? `${pkg.color}22` : "transparent";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Booking form */}
        <FadeUp delay={0.2}>
          <div
            id="booking-form"
            className="glass-card"
            style={{ padding: "3rem", maxWidth: "800px", margin: "0 auto" }}
          >
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: "#fff",
                  marginBottom: "0.5rem",
                }}
              >
                Send a Booking Request
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: "center",
                  padding: "3rem",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #00D4FF, #0099cc)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    boxShadow: "0 0 30px rgba(0,212,255,0.4)",
                  }}
                >
                  <Check size={28} color="#fff" />
                </div>
                <h4
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  Request Received!
                </h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)" }}>
                  DJ NEXUS will review your request and contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1.25rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="input-dark"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="input-dark"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Event Type *
                    </label>
                    <select
                      className="input-dark"
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      required
                      style={{ cursor: "pointer" }}
                    >
                      <option value="" disabled style={{ background: "#0D0B1A" }}>
                        Select event type
                      </option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t} style={{ background: "#0D0B1A" }}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      className="input-dark"
                      placeholder="City, Country"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Event Date
                    </label>
                    <input
                      type="date"
                      className="input-dark"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      style={{ colorScheme: "dark" }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    className="input-dark"
                    placeholder="Tell us about your event, expected crowd size, special requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ resize: "vertical", minHeight: "100px" }}
                  />
                </div>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <button
                    type="submit"
                    className="btn-neon-magenta"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                    }}
                  >
                    <Send size={16} />
                    Send Booking Request
                  </button>

                  <a
                    href="https://wa.me/254719277671"
                    target="https://wa.me/254719277671"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "4px",
                      border: "1px solid rgba(37,211,102,0.4)",
                      background: "rgba(37,211,102,0.08)",
                      color: "#25D366",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.15)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(37,211,102,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.08)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
