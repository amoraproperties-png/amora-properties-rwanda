import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Fastest-Growing Economy in Africa',
    desc: "Rwanda consistently ranks among Africa's top performers, with sustained GDP growth and a government committed to transparency, stability, and innovation.",
  },
  {
    title: 'High Return on Investment',
    desc: "Kigali's premium residential market delivers strong capital appreciation and rental yields, backed by rising demand from expats, diplomats, and a growing middle class.",
  },
  {
    title: 'Foreign Ownership Rights',
    desc: 'Rwanda welcomes foreign investors with full property ownership rights, long-term land leases, and a streamlined, digitised registration process.',
  },
  {
    title: 'Strategic East African Hub',
    desc: "Kigali is the seat of the East African Community and a top-tier MICE destination, making it a natural gateway to East Africa's 300M+ consumer market.",
  },
];

export function WhyInvestSection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Heading + description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <h2
              className="font-black uppercase text-foreground leading-none mb-4"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              WHY INVEST IN RWANDA
            </h2>
            <h3
              className="text-xl md:text-2xl font-light mb-8 italic"
              style={{ color: '#c9a060' }}
            >
              Africa's rising destination for long-term growth
            </h3>

            <div className="w-16 h-0.5 mb-8" style={{ backgroundColor: '#c9a060' }} />

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Rwanda has transformed into one of Africa's most compelling real estate markets. Kigali — clean, safe, and forward-thinking — is rapidly becoming the continent's most livable capital, attracting international businesses, NGOs, diplomatic missions, and a new generation of African professionals.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Under Camex Group, Amora offers you a curated gateway into this fast-moving market — with projects designed to the highest international standards right in the heart of Kigali.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase text-white transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#0d2424' }}
            >
              INVEST WITH AMORA
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Right — Reason cards */}
          <div className="space-y-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-[#c9a060]/30 hover:shadow-lg transition-all duration-300 bg-gray-50/50"
              >
                <div className="flex items-start gap-5">
                  <span
                    className="text-2xl font-black leading-none flex-shrink-0 mt-1"
                    style={{ color: '#c9a060', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="text-base font-bold tracking-wide mb-2 text-foreground group-hover:text-[#c9a060] transition-colors">
                      {r.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
