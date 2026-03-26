/**
 * DJ Mashfrankie — EventsSection
 * Midnight Luxe: upcoming events with date/location/ticket links,
 * filter tabs, past events grid, glassmorphism cards
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar, Ticket, Clock } from "lucide-react";

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

const upcomingEvents = [
  {
    id: 1,
    date: { day: "12", month: "APR", year: "2026" },
    title: "Amapiano tour ke",
    venue: "COACHELA, Nairobi",
    time: "10:00 PM",
    type: "Club",
    status: "Sold out",
    ticketUrl: "#",
  },
  
];

const filters = ["All", "Club", "Festival", "Residency", "Corporate", "Private"];

const typeColors: Record<string, string> = {
  Club: "#00D4FF",
  Festival: "#FF2D78",
  Residency: "#8B5CF6",
  Corporate: "#FFD700",
  Private: "#10B981",
};

export default function EventsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? upcomingEvents
    : upcomingEvents.filter((e) => e.type === activeFilter);

  return (
    <section
      id="events"
      style={{
        position: "relative",
        padding: "8rem 0",
        background: "#050508",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <FadeUp>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <div className="section-tag">Tour & Events</div>
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff" }}>
                Upcoming{" "}
                <span style={{ color: "#8B5CF6", textShadow: "0 0 20px rgba(139,92,246,0.5)" }}>
                  Shows
                </span>
              </h2>
            </div>
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-neon-blue"
              style={{ textDecoration: "none", fontSize: "0.75rem" }}
            >
              Request Private Event
            </a>
          </div>
        </FadeUp>

        {/* Filter tabs */}
        <FadeUp delay={0.1}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "2px",
                  border: `1px solid ${activeFilter === f ? "#00D4FF" : "rgba(255,255,255,0.1)"}`,
                  background: activeFilter === f ? "rgba(0,212,255,0.1)" : "transparent",
                  color: activeFilter === f ? "#00D4FF" : "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: activeFilter === f ? "0 0 15px rgba(0,212,255,0.15)" : "none",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Events list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {filtered.map((event, i) => (
            <FadeUp key={event.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 8 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr auto",
                  gap: "2rem",
                  alignItems: "center",
                  padding: "1.75rem 2rem",
                  background: "rgba(255,255,255,0.02)",
                  borderLeft: `3px solid ${typeColors[event.type] || "#00D4FF"}`,
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                }}
              >
                {/* Date block */}
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontWeight: 900,
                      fontSize: "2rem",
                      color: typeColors[event.type] || "#00D4FF",
                      lineHeight: 1,
                      textShadow: `0 0 15px ${typeColors[event.type]}66`,
                    }}
                  >
                    {event.date.day}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                    }}
                  >
                    {event.date.month}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.25)",
                    }}
                  >
                    {event.date.year}
                  </div>
                </div>

                {/* Event info */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem" }}>
                    <span
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: "0.55rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: typeColors[event.type] || "#00D4FF",
                        padding: "0.2rem 0.6rem",
                        border: `1px solid ${typeColors[event.type]}44`,
                        borderRadius: "2px",
                      }}
                    >
                      {event.type}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: "#fff",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {event.title}
                  </div>
                  <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.8rem",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      <MapPin size={12} style={{ color: "#00D4FF" }} />
                      {event.venue}
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.8rem",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      <Clock size={12} style={{ color: "#00D4FF" }} />
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Ticket CTA */}
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      color: event.status === "Sold Out"
                        ? "rgba(255,255,255,0.25)"
                        : event.status === "Limited"
                        ? "#FFD700"
                        : "#10B981",
                      marginBottom: "0.5rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {event.status}
                  </div>
                  {event.status !== "Sold Out" ? (
                    <a
                      href={event.ticketUrl}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#00D4FF",
                        textDecoration: "none",
                        border: "1px solid rgba(0,212,255,0.3)",
                        padding: "0.5rem 1rem",
                        borderRadius: "2px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.1)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(0,212,255,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      <Ticket size={12} />
                      Get Tickets
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.2)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        padding: "0.5rem 1rem",
                        borderRadius: "2px",
                        display: "inline-block",
                      }}
                    >
                      Sold Out
                    </span>
                  )}
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "4rem",
              color: "rgba(255,255,255,0.3)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            No events in this category. Check back soon.
          </div>
        )}
      </div>
    </section>
  );
}
