import { motion } from 'framer-motion';

export function TaglineSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative rule */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px w-16 origin-right"
                style={{ backgroundColor: '#c9a060' }}
              />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">Since 2019 · Camex Group</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px w-16 origin-left"
                style={{ backgroundColor: '#c9a060' }}
              />
            </div>

            <h2
              className="font-black uppercase text-foreground leading-none mb-6"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)', letterSpacing: '-0.02em' }}
            >
              YEARS OF BUILDING DREAMS
            </h2>

            <h3
              className="text-xl md:text-2xl font-light"
              style={{ color: '#c9a060' }}
            >
              Delivering across East Africa &amp; beyond
            </h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
