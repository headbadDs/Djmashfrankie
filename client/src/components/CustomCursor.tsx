/**
 * DJ NEXUS — CustomCursor
 * Midnight Luxe: electric blue dot cursor with trailing ring,
 * glow effect, hover state expansion on interactive elements
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Smooth ring follow
    let ringX = -100, ringY = -100;
    let curX = -100, curY = -100;
    let animId: number;

    const animate = () => {
      ringX += (curX - ringX) * 0.12;
      ringY += (curY - ringY) * 0.12;
      setRing({ x: ringX, y: ringY });
      animId = requestAnimationFrame(animate);
    };

    const trackCursor = (e: MouseEvent) => {
      curX = e.clientX;
      curY = e.clientY;
    };

    document.addEventListener("mousemove", trackCursor);
    animId = requestAnimationFrame(animate);

    // Hover detection
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsHovering(!!isInteractive);
    };

    document.addEventListener("mouseover", onMouseOver);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousemove", trackCursor);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot cursor */}
      <div
        style={{
          position: "fixed",
          left: pos.x - 6,
          top: pos.y - 6,
          width: isHovering ? "16px" : "12px",
          height: isHovering ? "16px" : "12px",
          borderRadius: "50%",
          background: isHovering ? "#FF2D78" : "#00D4FF",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease, left 0.05s linear, top 0.05s linear",
          boxShadow: isHovering
            ? "0 0 15px #FF2D78, 0 0 30px rgba(255,45,120,0.5)"
            : "0 0 15px #00D4FF, 0 0 30px rgba(0,212,255,0.5)",
          opacity: isVisible ? 1 : 0,
          mixBlendMode: "screen",
          transform: `translate(${isHovering ? "-2px" : "0"}, ${isHovering ? "-2px" : "0"})`,
        }}
      />

      {/* Ring cursor */}
      <div
        style={{
          position: "fixed",
          left: ring.x - (isHovering ? 22 : 18),
          top: ring.y - (isHovering ? 22 : 18),
          width: isHovering ? "44px" : "36px",
          height: isHovering ? "44px" : "36px",
          borderRadius: "50%",
          border: `1px solid ${isHovering ? "rgba(255,45,120,0.5)" : "rgba(0,212,255,0.4)"}`,
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
          opacity: isVisible ? 0.8 : 0,
        }}
      />
    </>
  );
}
