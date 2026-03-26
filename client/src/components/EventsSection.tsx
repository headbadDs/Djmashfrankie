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
      className="relative py-32 bg-void overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-purple-900/10 to-transparent pointer-events-none" />

      <div className="container-max container-px relative">
        {/* Header */}
        <FadeUp>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="section-tag">Tour & Events</div>
              <h2 className="section-title text-5xl">
                Upcoming{" "}
                <span className="neon-purple">
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
            >
              Request Private Event
            </a>
          </div>
        </FadeUp>

        {/* Filter tabs */}
        <FadeUp delay={0.1}>
          <div className="events-filter-group">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`event-filter-btn ${activeFilter === f ? "active" : ""}`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Events list */}
        <div className="events-list">
          {filtered.map((event, i) => (
            <FadeUp key={event.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 8 }}
                className="event-item"
                style={{
                  borderLeftColor: typeColors[event.type] || "#00D4FF",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                }}
              >
                {/* Date block */}
                <div className="text-center w-20 flex-shrink-0">
                  <div
                    className="font-black text-3xl leading-tight"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: typeColors[event.type] || "#00D4FF",
                      textShadow: `0 0 15px ${typeColors[event.type]}66`,
                    }}
                  >
                    {event.date.day}
                  </div>
                  <div className="font-bold text-xs tracking-widest text-white/40 uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {event.date.month}
                  </div>
                  <div className="text-xs text-white/25" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {event.date.year}
                  </div>
                </div>

                {/* Event info */}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-xs tracking-widest uppercase px-2 py-1 rounded-sm border"
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        color: typeColors[event.type] || "#00D4FF",
                        borderColor: `${typeColors[event.type]}44`,
                      }}
                    >
                      {event.type}
                    </span>
                  </div>
                  <div className="font-black text-lg text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {event.title}
                  </div>
                  <div className="flex gap-6 flex-wrap">
                    <span className="event-detail-item">
                      <MapPin size={12} className="event-detail-icon" />
                      {event.venue}
                    </span>
                    <span className="event-detail-item">
                      <Clock size={12} className="event-detail-icon" />
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Ticket CTA */}
                <div className="text-right flex-shrink-0">
                  <div
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: event.status === "Sold Out"
                        ? "rgba(255,255,255,0.25)"
                        : event.status === "Limited"
                        ? "#FFD700"
                        : "#10B981",
                    }}
                  >
                    {event.status}
                  </div>
                  {event.status !== "Sold Out" ? (
                    <a
                      href={event.ticketUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 font-bold text-xs tracking-widest uppercase text-cyan-400 no-underline border border-cyan-400/30 px-4 py-2 rounded-sm transition-all duration-300" style={{ fontFamily: "'Syne', sans-serif" }}
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
                    <span className="inline-block font-bold text-xs tracking-widest uppercase text-white/20 border border-white/8 px-4 py-2 rounded-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                      Sold Out
                    </span>
                  )}
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/30" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            No events in this category. Check back soon.
          </div>
        )}
      </div>
    </section>
  );
}
