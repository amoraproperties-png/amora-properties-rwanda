import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import construction1 from '@assets/generated_images/construction1.jpg';
import construction2 from '@assets/generated_images/construction2.jpg';
import hero2 from '@assets/generated_images/hero2.jpg';
import project1 from '@assets/generated_images/project1.jpg';

const stories = [
  {
    img: construction1,
    date: 'August 10, 2026',
    tag: 'Construction',
    title: 'Kigali Heights Reaches Milestone — 60% Complete',
    excerpt: 'Our flagship Kigali development crosses a major construction threshold with structural work progressing ahead of schedule.',
  },
  {
    img: hero2,
    date: 'July 28, 2026',
    tag: 'Market Insights',
    title: "Rwanda's Real Estate Market Sees Record Q2 Growth",
    excerpt: 'With sustained GDP growth and rising demand, Kigali continues to attract international investors seeking stable long-term returns.',
  },
  {
    img: project1,
    date: 'July 15, 2026',
    tag: 'Community',
    title: 'Amora Launches Exclusive Owner Lounge in Kigali',
    excerpt: 'A first for Rwandan real estate — Amora property owners now enjoy a dedicated luxury concierge and lounge experience.',
  },
  {
    img: construction2,
    date: 'June 30, 2026',
    tag: 'Awards',
    title: 'Amora Named Best Developer at East Africa Property Awards',
    excerpt: 'Recognized for design excellence and innovation, Amora takes home the prestigious East Africa Property Developer of the Year award.',
  },
];

export function StoriesSection() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (dir: 'prev' | 'next') => {
    const next = dir === 'next'
      ? Math.min(active + 1, stories.length - 1)
      : Math.max(active - 1, 0);
    setActive(next);
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="stories">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-black uppercase text-foreground leading-none mb-2"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              STORIES FROM AMORA GROUP
            </h2>
            <h3 className="text-base text-gray-500 font-light italic">
              Editorial insights &amp; corporate perspectives
            </h3>
          </motion.div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scrollTo('prev')}
              disabled={active === 0}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#c9a060] hover:text-[#c9a060] transition-colors disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('next')}
              disabled={active >= stories.length - 1}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#c9a060] hover:text-[#c9a060] transition-colors disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div ref={scrollRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group cursor-pointer transition-all duration-300 ${
                i < active + 1 ? 'block' : 'hidden md:block'
              }`}
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-5 aspect-[4/3]">
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#c9a060', color: '#fff' }}
                >
                  {story.tag}
                </span>
                <span className="text-xs text-gray-400">{story.date}</span>
              </div>

              <h4 className="text-sm font-bold text-foreground leading-snug mb-2 group-hover:text-[#c9a060] transition-colors">
                {story.title}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">{story.excerpt}</p>
            </motion.div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                backgroundColor: i === active ? '#c9a060' : '#d1d5db',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
