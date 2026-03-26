/**
 * DJMASHFRANKIE — Home Page
 * Midnight Luxe design: assembles all sections with loading screen,
 * custom cursor, and smooth section transitions
 */
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Loading screen */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Main site */}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.5s ease",
          background: "#050508",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <HeroSection />

        {/* Section divider */}
        <div className="section-divider" />

        <AboutSection />

        <div className="section-divider" />

        <MusicSection />

        <div className="section-divider" />

        <EventsSection />

        <div className="section-divider" />

        <GallerySection />

        <div className="section-divider" />

        <BookingSection />

        <div className="section-divider" />

        <TestimonialsSection />

        <div className="section-divider" />

        <SocialSection />

        <Footer />
      </div>
    </>
  );
}
