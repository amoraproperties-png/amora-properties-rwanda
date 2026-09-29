import { useState } from 'react';
import { motion } from 'framer-motion';
import heroBg from '@assets/generated_images/hero1.jpg';

const GOLD = '#c9a060';

export function OfferSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section
      id="offer"
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Offer Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: GOLD, color: '#fff' }}
            >
              5% Discount
            </span>

            <h2
              className="font-black uppercase leading-none mb-3"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
            >
              Kigali Heights
            </h2>
            <h3 className="text-xl md:text-2xl font-light italic text-gray-300 mb-6">
              Rwanda's Finest Address
            </h3>
            <p className="text-gray-300 leading-relaxed mb-10 max-w-md">
              A contemporary masterpiece in the heart of Kigali, Kigali Heights blends world-class architecture with unmatched lifestyle amenities — your sanctuary above Rwanda's skyline.
            </p>

            {/* Feature icons */}
            <div className="flex flex-wrap gap-8">
              {[
                {
                  label: 'Apartments & Penthouses',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 22V12h6v10"/><path d="M3 9h18"/>
                    </svg>
                  ),
                },
                {
                  label: '10% Down Payment',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
                    </svg>
                  ),
                },
                {
                  label: '7 Years Payment Plan',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  ),
                },
              ].map(f => (
                <div key={f.label} className="flex items-center gap-2">
                  <span className="text-white/80 flex-shrink-0">{f.icon}</span>
                  <p className="text-sm text-gray-300 font-medium">{f.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h4 className="text-white text-lg font-bold tracking-widest uppercase mb-6">Get In Touch</h4>

            {submitted ? (
              <div className="text-center py-10">
                <p className="text-2xl mb-2">✓</p>
                <p className="text-white font-semibold">Thank you! We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#c9a060] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#c9a060] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#c9a060] transition-colors"
                />
                <textarea
                  placeholder="Message (optional)"
                  rows={3}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#c9a060] transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-bold text-sm tracking-widest uppercase text-white transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: GOLD }}
                >
                  Request a Callback →
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
