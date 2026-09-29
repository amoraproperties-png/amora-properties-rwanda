import { useRef } from 'react';
import { motion } from 'framer-motion';

const partners = [
  'Bank of Kigali', 'Equity Bank Rwanda', 'I&M Bank Rwanda',
  'KCB Rwanda', 'BPR Atlas Mara', 'Cogebanque',
  'Camex Group', 'Rwanda Development Board', 'Rwanda Housing Authority',
  'Onatracom', 'Prime Insurance', 'UAP Old Mutual',
];

// Duplicate for seamless loop
const all = [...partners, ...partners];

export function PartnershipsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden" id="partnerships">
      <div className="container mx-auto px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-black uppercase text-foreground leading-none"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
        >
          Partnerships
        </motion.h2>
      </div>

      {/* Infinite scroll track */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #f9fafb, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #f9fafb, transparent)' }} />

        <motion.div
          ref={trackRef}
          className="flex gap-8 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          style={{ width: 'max-content' }}
        >
          {all.map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-16 px-10 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-[#c9a060]/30 hover:shadow-md transition-all duration-300"
              style={{ minWidth: 200 }}
            >
              <span className="text-sm font-bold text-gray-500 tracking-wide whitespace-nowrap">{partner}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
