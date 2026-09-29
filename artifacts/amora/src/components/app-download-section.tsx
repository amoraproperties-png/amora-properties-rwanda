import { motion } from 'framer-motion';
import { Heart, Home, Search, UserRound } from 'lucide-react';

const appNavIcons = [Home, Search, Heart, UserRound];

export function AppDownloadSection() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-0 lg:min-h-[70vh] flex items-center"
      style={{
        background: 'radial-gradient(ellipse at 10% 50%, #0d2424 0%, #0a1414 60%, #000 100%)',
      }}
    >
      {/* Decorative SVG grid / bg pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='%23c9a060' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end lg:items-end"
          >
            {/* CSS phone frame mockup */}
            <div
              className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10"
              style={{ width: 260, height: 540, background: '#0d2424' }}
            >
              {/* Status bar */}
              <div className="h-10 flex items-center justify-between px-6 text-white text-xs font-medium">
                <span>9:41</span>
                <div className="flex gap-1">
                  <div className="w-3 h-1.5 bg-white rounded-sm" />
                  <div className="w-1 h-1.5 bg-white/50 rounded-sm" />
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl" />

              {/* App screen */}
              <div className="px-5 py-4 flex flex-col gap-4">
                {/* App logo */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#c9a060' }}>
                    <span className="text-white font-black text-lg">A</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">AMORA</p>
                    <p className="text-gray-400 text-[10px]">Real Estate</p>
                  </div>
                </div>

                {/* Mock property card */}
                <div className="rounded-xl overflow-hidden" style={{ background: '#1a3535' }}>
                  <div className="h-28 bg-gradient-to-br from-[#c9a060]/30 to-[#0d2424]/80 flex items-end p-3">
                    <span className="text-white text-xs font-bold">NEW CAIRO · ELYSIAN</span>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <p className="text-white text-xs font-bold">From EGP 4.2M</p>
                      <p className="text-gray-400 text-[10px]">3 BR · 220 m²</p>
                    </div>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c9a060' }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5h6M6 3l2 2-2 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Mini stat row */}
                <div className="grid grid-cols-3 gap-2">
                  {['24 Projects', '5K+ Clients', '10+ Years'].map(s => (
                    <div key={s} className="rounded-lg p-2 text-center" style={{ background: '#1a3535' }}>
                      <p className="text-white text-[9px] font-bold">{s}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-around px-5">
                  {appNavIcons.map((Icon, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <Icon
                        className="w-4 h-4 text-white/80"
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                      {i === 0 && <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#c9a060' }} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Text + Download */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-white"
          >
            <h2
              className="font-black uppercase leading-none mb-4"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              A Smarter Way to Connect
            </h2>
            <h3
              className="text-xl md:text-2xl font-light mb-8 italic"
              style={{ color: '#c9a060' }}
            >
              One Platform. One Experience.
            </h3>

            <div className="w-16 h-0.5 mb-8" style={{ backgroundColor: '#c9a060' }} />

            <p className="text-gray-300 leading-relaxed mb-10 text-lg max-w-md">
              The Amora App brings key information, updates, and communication into a single digital platform. Designed to support your full property journey — from discovery to ownership.
            </p>

            {/* App store buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/20 hover:border-[#c9a060] transition-colors bg-white/5 backdrop-blur-sm"
              >
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.38.07 2.33.71 3.12.73.96-.12 1.87-.8 3.17-.86 1.56-.08 2.73.6 3.47 1.54-3.21 2.03-2.58 6.47.51 7.99-.56 1.65-1.33 3.27-2.27 4.46zM13 3.5c.11 1.5-.43 3-1.5 4-.98.92-2.24 1.5-3.5 1.5-.07-1.38.5-2.86 1.45-3.82C10.43 4.16 11.84 3.54 13 3.5z" />
                </svg>
                <div>
                  <p className="text-[10px] text-gray-400 leading-none mb-0.5">Download on the</p>
                  <p className="text-white text-sm font-bold leading-none">App Store</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/20 hover:border-[#c9a060] transition-colors bg-white/5 backdrop-blur-sm"
              >
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76a1.99 1.99 0 0 0 2.07-.22l11.59-6.69-2.37-2.37-11.29 9.28zm16.1-9.24L5.65 7.23a1.99 1.99 0 0 0-2.47.17v9.2l16.1-1.88zM21.5 10.5l-3.2-1.84-2.67 2.67 2.67 2.67 3.22-1.85a1.14 1.14 0 0 0-.02-1.65zM5.17.46a1.99 1.99 0 0 0-2.02.23L14.55 9.7l2.37-2.37L5.17.46z" />
                </svg>
                <div>
                  <p className="text-[10px] text-gray-400 leading-none mb-0.5">Get it on</p>
                  <p className="text-white text-sm font-bold leading-none">Google Play</p>
                </div>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
