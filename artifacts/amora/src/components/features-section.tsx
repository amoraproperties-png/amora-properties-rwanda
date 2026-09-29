import { motion } from 'framer-motion';
import { Map, Paintbrush, TrendingUp, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: "PRIME LOCATIONS",
    description: "Strategically situated in Egypt's most sought-after neighborhoods, ensuring lifestyle convenience and long-term value.",
    icon: Map
  },
  {
    title: "WORLD-CLASS DESIGN",
    description: "Architectural masterpieces crafted by renowned designers, blending modern aesthetics with functional luxury.",
    icon: Paintbrush
  },
  {
    title: "PROVEN ROI",
    description: "Consistent high returns on investment with exceptional capital appreciation across all our property portfolios.",
    icon: TrendingUp
  },
  {
    title: "TRUSTED DEVELOPERS",
    description: "A decade of excellence, transparent processes, and on-time delivery making us the region's most reliable developer.",
    icon: ShieldCheck
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-foreground uppercase"
          >
            Why Invest With Amora
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-primary mx-auto mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full border-2 border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold tracking-wide mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
