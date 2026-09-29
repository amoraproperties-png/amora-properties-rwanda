import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { getProperty } from '@/lib/properties-data';

import iuDevelopers from "@assets/064-1-1-scaled_1788878110425.jpg";
import evergreenApartments from "@assets/Image_1_1788878175116.jpg";
import kigaliHeights from "@assets/image_1788878325598.png";
import cascades from "@assets/image_1788878442076.png";

function sourcedProject(slug: string, id: number, title: string, location: string) {
  const property = getProperty(slug);
  if (!property) {
    throw new Error(`Featured project "${slug}" is missing from the property portfolio.`);
  }

  return {
    id,
    slug,
    title,
    location,
    image: property.image,
  };
}

const projects = [
  {
    slug: "dnd",
    id: 1,
    title: "IU DEVELOPERS",
    location: "KIGALI",
    image: iuDevelopers
  },
  {
    slug: "evergreen-apartments",
    id: 2,
    title: "EVERGREEN APARTMENTS",
    location: "KIGALI",
    image: evergreenApartments
  },
  {
    slug: "kigali-heights",
    id: 3,
    title: "KIGALI HEIGHTS",
    location: "KIMIHURURA",
    image: kigaliHeights
  },
  {
    slug: "harrington-golf",
    id: 4,
    title: "HARRINGTON GOLF",
    location: "NYARUTARAMA",
    image: cascades
  },
  sourcedProject("jsr-golf-village", 5, "JSR GOLF VILLAGE", "KIGALI"),
  sourcedProject("vision-city-phase-two", 6, "VISION CITY PHASE TWO", "KIGALI"),
  sourcedProject("girinzu-gahanga", 7, "AHEZA URBAN VILLAGE", "GAHANGA")
];

export function ProjectsGrid() {
  return (
    <section className="py-24 bg-white" id="projects">
      <div className="container mx-auto px-6">
        
        <div className="mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.3em] text-primary mb-4"
            >
              FEATURED RWANDA DEVELOPMENTS
            </motion.p>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-foreground"
            >
              REAL PLACES. CLEAR OPPORTUNITY.
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-primary mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/properties/${project.slug}`} className="block">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
              
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4">
                      {project.location}
                    </span>
                    <h3 className="text-3xl font-bold text-white tracking-wide">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
        
          <div className="mt-16 text-center">
          <Link href="/properties" data-testid="link-view-all-projects" className="inline-flex border-2 border-primary px-8 py-3 text-sm font-bold tracking-widest text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
            VIEW ALL PROJECTS
          </Link>
        </div>

      </div>
    </section>
  );
}
