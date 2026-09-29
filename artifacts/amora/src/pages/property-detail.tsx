import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, ExternalLink, MapPin, MessageCircle } from 'lucide-react';
import { Link, useParams } from 'wouter';
import { motion } from 'framer-motion';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { getProperty, properties, type PropertyStatus } from '@/lib/properties-data';

function StatusPill({ status }: { status: PropertyStatus }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${status === 'Completed' ? 'border-[#a7c6b6]/70 bg-[#edf5ef] text-[#2e6650]' : 'border-[#dac292]/70 bg-[#f8f1e2] text-[#876b35]'}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />{status}
    </span>
  );
}

export default function PropertyDetail() {
  const params = useParams<{ slug: string }>();
  const property = params.slug ? getProperty(params.slug) : undefined;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = property ? `${property.name} | Amora Properties™` : 'Property not found | Amora Properties™';
    return () => { document.title = previousTitle; };
  }, [property]);

  if (!property) {
    return (
      <div className="min-h-[100dvh] bg-background text-foreground">
        <Navbar />
        <main className="flex min-h-[70dvh] items-center justify-center px-6 pt-[72px] text-center">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Portfolio note</p>
            <h1 className="property-display text-5xl font-semibold">This place moved on.</h1>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">The project profile could not be found. Return to the portfolio to explore the full collection.</p>
            <Link href="/properties" data-testid="link-back-properties-missing" className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">Back to portfolio <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const related = properties.filter((item) => item.slug !== property.slug && item.category === property.category).slice(0, 3);

  return (
    <div className="amora-grain min-h-[100dvh] bg-background text-foreground">
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative min-h-[610px] overflow-hidden bg-[#102b2a] text-[#f7f1e6] md:min-h-[700px]">
          <img src={property.image} alt={`${property.name} project`} className="absolute inset-0 h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102b2a]/95 via-[#102b2a]/55 to-[#102b2a]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102b2a]/80 via-transparent to-[#102b2a]/20" />
          <div className="container relative mx-auto flex min-h-[610px] max-w-7xl flex-col justify-between px-6 pb-12 pt-10 md:min-h-[700px] md:px-10 md:pb-16 md:pt-12">
            <Link href="/properties" data-testid="link-back-properties" className="inline-flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-[#d1ad70]"><ArrowLeft className="h-4 w-4" /> All properties</Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <div className="mb-5 flex flex-wrap items-center gap-3"><StatusPill status={property.status} /><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{property.category}</span></div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em] text-[#d1ad70]">{property.eyebrow}</p>
              <h1 className="property-display max-w-4xl text-6xl font-semibold leading-[0.9] md:text-9xl">{property.name}</h1>
              <div className="mt-8 flex items-center gap-2 text-sm text-white/75"><MapPin className="h-4 w-4 text-[#d1ad70]" /> {property.coordinates}</div>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-24">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.27em] text-primary">The project</p>
            <h2 className="property-display max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">{property.summary}</h2>
            <p className="mt-8 max-w-2xl text-base leading-[1.9] text-[#69736d] md:text-lg">{property.description}</p>
          </div>
          <aside className="h-fit border-t border-[#d3cbbb] pt-5 md:mt-16">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#888a80]">At a glance</p>
            <div className="space-y-0">
              {property.details.map((detail) => (
                <div key={detail} className="flex items-center gap-3 border-b border-[#e0d9cc] py-4 text-sm text-[#4f615b]"><Check className="h-4 w-4 text-[#a78652]" />{detail}</div>
              ))}
            </div>
            <a href="mailto:hello@amora-realestate.com" data-testid="link-enquire-property" className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-[#102b2a] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f7f1e6] transition-colors hover:bg-[#214f4b]"><MessageCircle className="h-4 w-4 text-[#d1ad70]" /> Enquire about this project</a>
            {property.sourceUrl && (
              <a href={property.sourceUrl} target="_blank" rel="noreferrer" data-testid="link-official-property-source" className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-[#cfc3af] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.17em] text-[#765d34] transition-colors hover:border-[#9a793f] hover:text-[#9a793f]">
                Official project page <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </aside>
        </section>

        <section className="bg-[#e9e3d7]">
          <div className="container mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-10 md:py-24">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.27em] text-primary">A considered perspective</p>
              <h2 className="property-display text-4xl font-semibold leading-tight md:text-6xl">Start with what matters to you.</h2>
            </div>
            <div className="border-l border-[#cfc3af] pl-6 md:pl-12">
              <p className="max-w-xl text-base leading-[1.85] text-[#64716b]">Property decisions are personal. Use this profile as a starting point, then ask for the latest project information, terms and availability before making a decision.</p>
              <Link href="/properties" data-testid="link-explore-more-properties" className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#765d34] transition-all hover:gap-4">Explore the portfolio <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="container mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
            <div className="mb-9 flex items-end justify-between gap-4">
              <div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.27em] text-primary">Keep exploring</p><h2 className="property-display text-4xl font-semibold">More in {property.category.toLowerCase()}.</h2></div>
              <Link href="/properties" data-testid="link-view-all-related" className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#765d34] sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/properties/${item.slug}`} data-testid={`link-related-${item.slug}`} className="group">
                  <div className="mb-4 aspect-[1.2] overflow-hidden bg-[#ddd8cd]"><img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">{item.location}</p>
                  <h3 className="property-display mt-2 text-2xl font-semibold group-hover:text-[#9b763d]">{item.name}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}