import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | undefined;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
}

export function AboutSection() {
  const stats = [
    { label: "Years of Excellence", value: 6, suffix: "+" },
    { label: "Projects Delivered", value: 24, suffix: "+" },
    { label: "Happy Clients", value: 1200, suffix: "+" },
    { label: "Awards Won", value: 8, suffix: "+" },
  ];

  return (
    <section className="py-24 bg-[#0d2424] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              ABOUT AMORA PROPERTIES™
            </h2>
            <div className="h-1 bg-primary w-20 mb-8" />
            
            <a
              href="https://camex.co.rw"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold mb-4 hover:opacity-80 transition-opacity"
              style={{ color: '#c9a060' }}
            >
              ↗ Part of Camex Group · Gateway to Rwanda's Future
            </a>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Amora Properties™ is Rwanda's leading real estate brand, established in 2019 under the Camex Group. We craft exceptional residences and integrated communities built for modern living — blending architectural precision with a distinctly African spirit.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From Kigali to East Africa and beyond, we are redefining what it means to invest in property — with integrity, innovation, and a relentless focus on the client experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-10">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col"
              >
                <div className="mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <span className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
