import { motion } from 'framer-motion';

import construction1 from "@assets/generated_images/construction1.jpg";
import construction2 from "@assets/generated_images/construction2.jpg";

const updates = [
  {
    id: 1,
    project: "ELYSIAN TOWER",
    date: "OCTOBER 2024",
    image: construction1,
    progress: 75
  },
  {
    id: 2,
    project: "NOVA HEIGHTS",
    date: "SEPTEMBER 2024",
    image: construction2,
    progress: 40
  },
  {
    id: 3,
    project: "AMORA RESIDENCES",
    date: "AUGUST 2024",
    image: construction1, // reusing for layout completion
    progress: 90
  }
];

export function ConstructionUpdates() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold tracking-tight text-foreground"
            >
              CONSTRUCTION UPDATES
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-1 bg-primary mt-4"
            />
          </div>
          
          <button className="hidden md:block border border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-2 rounded-full text-sm font-bold tracking-widest transition-colors duration-300">
            VIEW ALL UPDATES
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={update.image} 
                  alt={`${update.project} construction`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-widest text-foreground">
                  {update.date}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold tracking-wide mb-4 text-foreground">
                  {update.project}
                </h3>
                
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-bold tracking-widest text-muted-foreground mb-2">
                    <span>PROGRESS</span>
                    <span className="text-primary">{update.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${update.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
                
                <button className="w-full border border-gray-200 text-foreground hover:border-primary hover:text-primary py-3 rounded-full text-sm font-bold tracking-widest transition-colors duration-300">
                  VIEW MORE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <button className="border border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-2 rounded-full text-sm font-bold tracking-widest transition-colors duration-300">
            VIEW ALL UPDATES
          </button>
        </div>

      </div>
    </section>
  );
}
