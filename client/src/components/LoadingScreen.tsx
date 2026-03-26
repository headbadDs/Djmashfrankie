/**
 * DJ MASHFRANKIE — LoadingScreen
 * Midnight Luxe design: cinematic logo reveal with waveform animation
 * Orbitron font, electric blue neon glow, pulsing waveform bars
 */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  const waveHeights = [0.3, 0.6, 0.9, 0.7, 1, 0.5, 0.8, 0.4, 0.95, 0.65, 0.75, 0.45, 0.85, 0.55, 0.7];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Ambient background glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ textAlign: "center", marginBottom: "2.5rem" }}
          >
            {/* Spinning ring */}
            <div style={{ position: "relative", width: 100, height: 100, margin: "0 auto 1.5rem" }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "2px solid transparent",
                  borderTopColor: "#00D4FF",
                  borderRightColor: "rgba(0,212,255,0.3)",
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: 8,
                  borderRadius: "50%",
                  border: "1px solid transparent",
                  borderTopColor: "#FF2D78",
                  borderLeftColor: "rgba(255,45,120,0.3)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 900,
                  fontSize: "1.2rem",
                  color: "#00D4FF",
                  textShadow: "0 0 20px rgba(0,212,255,0.8)",
                  letterSpacing: "0.05em",
                }}
              >
                MF
              </div>
            </div>

            <div
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 900,
                fontSize: "2.5rem",
                letterSpacing: "0.2em",
                color: "#fff",
                textShadow: "0 0 30px rgba(0,212,255,0.5)",
              }}
            >
              {" "}
              <span
                style={{
                  color: "#00D4FF",
                  textShadow: "0 0 20px rgba(0,212,255,0.9), 0 0 40px rgba(0,212,255,0.5)",
                }}
              >
                THE HAT EXPERIENCE
              </span>
            </div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.4em",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                marginTop: "0.5rem",
              }}
            >
              Feel the Beat. Live the Night.
            </div>
          </motion.div>

          {/* Waveform animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              height: "40px",
              marginBottom: "2rem",
            }}
          >
            {waveHeights.map((h, i) => (
              <motion.div
                key={i}
                animate={{ scaleY: [h, 1, h * 0.5, h] }}
                transition={{
                  duration: 0.8 + Math.random() * 0.4,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut",
                }}
                style={{
                  width: "3px",
                  height: "100%",
                  background: `linear-gradient(to top, #FF2D78, #00D4FF)`,
                  borderRadius: "2px",
                  transformOrigin: "bottom",
                }}
              />
            ))}
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ width: "200px" }}
          >
            <div
              style={{
                height: "2px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "1px",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #00D4FF, #FF2D78)",
                  borderRadius: "1px",
                  boxShadow: "0 0 10px rgba(0,212,255,0.6)",
                }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div
              style={{
                textAlign: "right",
                marginTop: "0.5rem",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "0.65rem",
                color: "rgba(0,212,255,0.7)",
                letterSpacing: "0.1em",
              }}
            >
              {Math.min(Math.round(progress), 100)}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
