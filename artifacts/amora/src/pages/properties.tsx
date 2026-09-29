import { useEffect, useMemo, useState } from 'react';
import { ArrowDownRight, ArrowRight, Search, SlidersHorizontal } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { properties, type PropertyCategory, type PropertyStatus } from '@/lib/properties-data';

const categories: Array<'All' | PropertyCategory> = ['All', 'Residential Apartments', 'Commercial', 'Gated Neighbourhoods'];
const statuses: Array<'All' | PropertyStatus> = ['All', 'Completed', 'Under Construction'];

function StatusPill({ status }: { status: PropertyStatus }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${
      status === 'Completed'
        ? 'border-[#a7c6b6]/70 bg-[#edf5ef] text-[#2e6650]'
        : 'border-[#dac292]/70 bg-[#f8f1e2] text-[#876b35]'
    }`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export default function Properties() {
  const [location] = useLocation();
  const [category, setCategory] = useState<'All' | PropertyCategory>('All');
  const [status, setStatus] = useState<'All' | PropertyStatus>('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Property Portfolio | Amora Properties™';
    return () => { document.title = previousTitle; };
  }, []);

  useEffect(() => {
    const requestedCategory = new URLSearchParams(location.split('?')[1] ?? '').get('category');
    if (requestedCategory && categories.includes(requestedCategory as 'All' | PropertyCategory)) {
      setCategory(requestedCategory as PropertyCategory);
    }
  }, [location]);

  const filteredProperties = useMemo(() => properties.filter((property) => {
    const matchesCategory = category === 'All' || property.category === category;
    const matchesStatus = status === 'All' || property.status === status;
    const searchTarget = `${property.name} ${property.location} ${property.category}`.toLowerCase();
    return matchesCategory && matchesStatus && searchTarget.includes(query.toLowerCase().trim());
  }), [category, query, status]);

  return (
    <div className="amora-grain min-h-[100dvh] bg-background text-foreground">
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative overflow-hidden bg-[#102b2a] text-[#f7f1e6]">
          <div className="absolute inset-0 amora-grid opacity-20" />
          <div className="absolute -right-20 -top-36 h-[520px] w-[520px] rounded-full border border-[#c9a060]/25" />
          <div className="absolute -right-10 -top-26 h-[410px] w-[410px] rounded-full border border-[#c9a060]/15" />
          <div className="container relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <p className="mb-6 text-[11px] font-bold tracking-[0.35em] text-[#d1ad70]">THE AMORA PROPERTIES™ PORTFOLIO · RWANDA</p>
              <h1 className="property-display max-w-4xl text-5xl font-semibold leading-[0.95] md:text-8xl">
                Places with a<br /><span className="text-[#d5b67b]">point of view.</span>
              </h1>
              <div className="mt-10 flex max-w-2xl flex-col justify-between gap-7 border-t border-white/20 pt-6 md:flex-row md:items-end">
                <p className="max-w-md text-base leading-relaxed text-[#d5d9ce] md:text-lg">
                  Explore a considered selection of residential, commercial and neighbourhood opportunities shaping life in Rwanda.
                </p>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c7cbbd]">{properties.length} projects · Kigali and beyond</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
          <div className="mb-9 flex flex-col gap-6 border-b border-[#dcd4c5] pb-7 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.27em] text-primary">Browse the collection</p>
              <h2 className="property-display text-3xl font-semibold md:text-4xl">Find your next address.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="flex min-w-[230px] items-center gap-3 border-b border-[#bdb6a9] px-1 py-2.5 focus-within:border-[#9f7940]">
                <Search className="h-4 w-4 text-[#8b8b7c]" />
                <span className="sr-only">Search projects</span>
                <input
                  data-testid="input-search-properties"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search projects or places"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[#9b9b90]"
                />
              </label>
              <button
                type="button"
                data-testid="button-clear-filters"
                onClick={() => { setCategory('All'); setStatus('All'); setQuery(''); }}
                className="inline-flex items-center justify-center gap-2 border border-[#d1c8b8] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#5e6863] transition-colors hover:border-primary hover:text-primary"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" /> Reset
              </button>
            </div>
          </div>

          <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Property categories">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  role="tab"
                  aria-selected={category === item}
                  data-testid={`button-category-${item.toLowerCase().replaceAll(' ', '-')}`}
                  onClick={() => setCategory(item)}
                  className={`rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] transition-all ${
                    category === item ? 'border-[#102b2a] bg-[#102b2a] text-[#f7f1e6]' : 'border-[#d5cdbf] text-[#65716b] hover:border-[#9f7940] hover:text-[#896d3b]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#929288]">Project stage</span>
              <div className="flex gap-1 rounded-full bg-[#eee9df] p-1">
                {statuses.map((item) => (
                  <button
                    type="button"
                    key={item}
                    data-testid={`button-status-${item.toLowerCase().replaceAll(' ', '-')}`}
                    onClick={() => setStatus(item)}
                    className={`rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] transition-colors ${status === item ? 'bg-[#faf8f2] text-[#2b544f] shadow-sm' : 'text-[#7d8179] hover:text-[#2b544f]'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredProperties.length ? (
            <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
              {filteredProperties.map((property, index) => (
                <motion.article
                  key={property.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.18) }}
                  data-testid={`card-property-${property.slug}`}
                  className="group"
                >
                  <Link href={`/properties/${property.slug}`} className="block">
                    <div className="relative mb-5 aspect-[1.18] overflow-hidden bg-[#d8d8cd]">
                      <img src={property.image} alt={`${property.name}, ${property.location}`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                      <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t ${property.accent} opacity-30 mix-blend-multiply`} />
                      <div className="absolute left-4 top-4"><StatusPill status={property.status} /></div>
                      <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#f7f1e6] text-[#102b2a] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{property.category}</p>
                        <h3 className="property-display text-2xl font-semibold leading-tight group-hover:text-[#9b763d]">{property.name}</h3>
                        <p className="mt-2 text-sm text-[#7f827b]">{property.location}</p>
                      </div>
                      <ArrowDownRight className="mt-1 h-5 w-5 text-[#a58b62] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-[#cfc6b8] bg-[#f3efe6] px-6 py-20 text-center">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">No close matches</p>
              <h3 className="property-display text-3xl font-semibold">Try a different point of view.</h3>
              <button type="button" data-testid="button-empty-reset" onClick={() => { setCategory('All'); setStatus('All'); setQuery(''); }} className="mt-6 text-xs font-bold uppercase tracking-[0.17em] text-[#896d3b] underline underline-offset-4">Show every project</button>
            </div>
          )}
        </section>

        <section className="border-y border-[#dcd4c5] bg-[#e9e3d7]">
          <div className="container mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10 md:py-20">
            <div className="max-w-xl">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.27em] text-primary">A clearer way to look</p>
              <h2 className="property-display text-3xl font-semibold leading-tight md:text-5xl">Not just a pin on a map.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-[#66716b]">Every project is a different proposition. Start with the place, understand the stage, then ask the right questions.</p>
            </div>
            <Link href="/about" data-testid="link-about-approach" className="inline-flex items-center gap-3 self-start border-b border-[#9a793f] pb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#765d34] transition-all hover:gap-5">About Amora Properties™ approach <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}