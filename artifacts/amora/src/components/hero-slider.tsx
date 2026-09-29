import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'wouter';
import { getProperty } from '@/lib/properties-data';

// Tagline is split into two lines — exactly like Reportage's "INSPIRATION / SURROUNDS"
function propertySlide(
  slug: string,
  id: number,
  location: string,
  title: string,
  tagline1: string,
  tagline2: string,
) {
  const property = getProperty(slug);
  if (!property) {
    throw new Error(`Hero project "${slug}" is missing from the property portfolio.`);
  }

  return {
    id,
    image: property.image,
    location,
    title,
    tagline1,
    tagline2,
    href: `/properties/${slug}`,
  };
}

const slides = [
  propertySlide('kigali-heights', 1, 'KIMIHURURA, KIGALI', 'KIGALI HEIGHTS', 'WORK, LIVE,', 'CONNECT'),
  propertySlide('jsr-golf-village', 2, 'KIGALI, RWANDA', 'JSR GOLF VILLAGE', 'ELEVATED', 'LIVING'),
  propertySlide('la-casa', 3, 'KIGALI, RWANDA', 'LA CASA', 'EVERYDAY LIVING', 'ELEVATED'),
  propertySlide('brilliant-tower', 4, 'KIGALI CBD, RWANDA', 'BRILLIANT TOWER', 'THE FUTURE OF', 'BUSINESS'),
];

const GOLD = '#c9a060';

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-10 bg-background overflow-hidden">

      {/* ── Pill / stadium container — matches Reportage exactly ── */}
      <div className="relative w-[92vw] h-[80vh] max-h-[800px] min-h-[560px] rounded-[48px] md:rounded-[72px] overflow-hidden shadow-2xl">

        {/* Sliding image */}
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Subtle dark vignette */}
        <div className="absolute inset-0 bg-black/15" />

        {/* ── Right circular info card — matches Reportage circle exactly ── */}
        <div
          className="absolute right-[4%] md:right-[7%] lg:right-[10%] top-1/2 -translate-y-1/2
                     w-[260px] h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]
                     rounded-full backdrop-blur-2xl bg-white/10 border border-white/20
                     flex flex-col justify-center items-center text-center px-10 md:px-14 shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="flex flex-col items-center w-full"
            >
              {/* Location badge — gold bg + white text, matching Reportage */}
              <div
                className="px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-white mb-4 shadow-sm"
                style={{ backgroundColor: GOLD }}
              >
                {slides[currentSlide].location}
              </div>

              {/* Project name — heavy sans-serif, matching Reportage's bold style */}
              <h2
                className="text-white font-black uppercase leading-none mb-3"
                style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)', letterSpacing: '-0.01em' }}
              >
                {slides[currentSlide].title}
              </h2>

              {/* Two-line tagline — no italic, uppercase, matching Reportage exactly */}
              <div className="mb-7">
                <p className="text-white/85 font-semibold uppercase tracking-widest leading-snug"
                  style={{ fontSize: 'clamp(0.7rem, 1.3vw, 1rem)' }}>
                  {slides[currentSlide].tagline1}
                </p>
                <p className="text-white/85 font-semibold uppercase tracking-widest leading-snug"
                  style={{ fontSize: 'clamp(0.7rem, 1.3vw, 1rem)' }}>
                  {slides[currentSlide].tagline2}
                </p>
              </div>

              {/* EXPLORE button — dark pill + gold circle arrow, matching Reportage exactly */}
              <Link
                href={slides[currentSlide].href}
                data-testid={`link-hero-project-${slides[currentSlide].id}`}
                aria-label={`Explore ${slides[currentSlide].title}`}
                className="flex items-center gap-0 group"
              >
                <span
                  className="text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase
                             bg-black/50 backdrop-blur-sm px-5 py-3 rounded-l-full
                             group-hover:bg-black/70 transition-colors duration-200"
                >
                  EXPLORE
                </span>
                <span
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0
                             transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: GOLD }}
                >
                  {/* Right arrow SVG matching Reportage's button icon */}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                      stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Slide indicators — bottom left, matching Reportage ── */}
      <div className="absolute left-[5vw] bottom-[2vh] md:bottom-[5vh] flex gap-4 md:gap-6">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <div className="h-10 md:h-14 w-px bg-border relative overflow-hidden">
              {currentSlide === index && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full"
                  style={{ backgroundColor: GOLD }}
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                />
              )}
            </div>
            <span
              className="text-[10px] md:text-xs font-bold"
              style={{ color: currentSlide === index ? GOLD : '#9ca3af' }}
            >
              0{slide.id}
            </span>
          </button>
        ))}
      </div>

      {/* ── Floating action buttons — right side, matching Reportage ── */}
      <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">
        <button
          className="w-10 h-10 md:w-12 md:h-12 rounded-full text-white flex items-center justify-center
                     transition-all duration-200 hover:scale-110 shadow-lg"
          style={{ backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)' }}
        >
          <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button
          className="w-10 h-10 md:w-12 md:h-12 rounded-full text-white flex items-center justify-center
                     transition-all duration-200 hover:scale-110 shadow-lg"
          style={{ backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)' }}
        >
          <Phone className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button
          className="w-10 h-10 md:w-12 md:h-12 rounded-full text-white flex items-center justify-center
                     transition-all duration-200 hover:scale-110 shadow-lg"
          style={{ backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)' }}
        >
          <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

    </div>
  );
}
