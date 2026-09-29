import { motion } from 'framer-motion';
import amoraLogo from '@assets/amora_logo-removebg-preview_(1)_1786699922030.png';

export function BrandSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Animated background gradient blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c9a060 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0d2424 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[50vh]">

          {/* Left — Logo animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 -m-8 rounded-full border-2 border-[#c9a060]"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.2, 0.08] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute inset-0 -m-16 rounded-full border border-[#c9a060]"
              />

              {/* Logo in circle */}
              <div
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
                style={{ backgroundColor: '#ffffff', border: '4px solid #0d2424' }}
              >
                <img
                  src={amoraLogo}
                  alt="Amora Properties™"
                  className="w-44 lg:w-56 object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className="font-black uppercase text-foreground leading-none mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              AMORA GROUP
            </h2>
            <a
              href="https://camex.co.rw"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-gray-400 hover:text-[#c9a060] transition-colors mb-3 group"
            >
              Part of{' '}
              <span style={{ color: '#c9a060' }} className="group-hover:underline">Camex Group</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-50 group-hover:opacity-100 transition-opacity">
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <h3
              className="text-xl md:text-2xl font-light mb-6 italic"
              style={{ color: '#c9a060' }}
            >
              Own your story
            </h3>

            <div
              className="w-16 h-0.5 mb-8"
              style={{ backgroundColor: '#c9a060' }}
            />

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We are Amora — Rwanda's premier real estate brand, a proud subsidiary of{' '}
              <a href="https://camex.co.rw" target="_blank" rel="noreferrer" className="font-semibold hover:underline" style={{ color: '#c9a060' }}>
                Camex Group
              </a>
              , the gateway to Rwanda's future. Founded in 2019, we build residences and integrated communities across East Africa, combining world-class design with a deep commitment to local excellence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Our mission is simple: to make owning a quality home a reality for everyone who dares to dream — from Kigali to the world.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase text-white transition-all duration-300 hover:opacity-90 hover:gap-5"
              style={{ backgroundColor: '#0d2424' }}
            >
              OUR STORY
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
