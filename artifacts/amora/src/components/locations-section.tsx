import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { geoMercator, geoPath, type GeoPermissibleObjects } from 'd3-geo';
import { feature } from 'topojson-client';

// asset imports
import imgRwanda   from '@assets/064-1-1-scaled_1788878110425.jpg';
import imgHero2    from '@assets/generated_images/hero2.jpg';
import imgHero3    from '@assets/generated_images/hero3.jpg';
import imgHero4    from '@assets/generated_images/hero4.jpg';
import imgP1       from '@assets/generated_images/project1.jpg';
import imgP2       from '@assets/generated_images/project2.jpg';
import imgP3       from '@assets/generated_images/project3.jpg';
import imgP4       from '@assets/generated_images/project4.jpg';
import imgC1       from '@assets/generated_images/construction1.jpg';
import imgC2       from '@assets/generated_images/construction2.jpg';

const GEO_URL      = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
const AMORA_GOLD   = '#c9a060';
const AMORA_HOVER  = '#e0bb82';
const AMORA_GREEN  = '#0d2424';   // selected state — Amora brand green

// ── Country data: ISO numeric → metadata ────────────────────────────────────
const AMORA_COUNTRIES: Record<string, {
  name: string; projects: number; flag: string; image: string;
}> = {
  '646': { name: 'Rwanda',            projects: 24, flag: '🇷🇼', image: imgRwanda },
  '800': { name: 'Uganda',            projects:  4, flag: '🇺🇬', image: imgP1   },
  '404': { name: 'Kenya',             projects:  3, flag: '🇰🇪', image: imgHero2 },
  '834': { name: 'Tanzania',          projects:  3, flag: '🇹🇿', image: imgP2   },
  '566': { name: 'Nigeria',           projects:  2, flag: '🇳🇬', image: imgC1   },
  '288': { name: 'Ghana',             projects:  2, flag: '🇬🇭', image: imgP3   },
  '384': { name: 'Ivory Coast',       projects:  1, flag: '🇨🇮', image: imgP4   },
  '178': { name: 'Congo Brazzaville', projects:  1, flag: '🇨🇬', image: imgC2   },
  '840': { name: 'USA',               projects:  2, flag: '🇺🇸', image: imgHero3 },
  '826': { name: 'United Kingdom',    projects:  1, flag: '🇬🇧', image: imgHero4 },
  '196': { name: 'Cyprus',            projects:  1, flag: '🇨🇾', image: imgP1   },
};

const COUNTRY_ROWS = [
  ['Rwanda', 'Uganda', 'Kenya', 'Tanzania', 'Nigeria', 'Ghana'],
  ['Ivory Coast', 'Congo Brazzaville', 'USA', 'United Kingdom', 'Cyprus'],
];

// name → ISO id lookup
const nameToId: Record<string, string> = Object.fromEntries(
  Object.entries(AMORA_COUNTRIES).map(([id, v]) => [v.name, id])
);

interface TopoFeature {
  type: string;
  id: string | number;
  geometry: GeoPermissibleObjects;
  properties: Record<string, unknown>;
}
interface GeoData { type: string; features: TopoFeature[]; }

// ── ExploreButton — dark pill + gold circle arrow, matching the hero button ──
function ExploreButton() {
  return (
    <button className="flex items-center gap-0 group mt-4">
      <span className="text-white text-xs font-bold tracking-[0.2em] uppercase bg-[#1a1a1a] px-4 py-2.5 rounded-l-full group-hover:bg-black transition-colors">
        EXPLORE
      </span>
      <span
        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
        style={{ backgroundColor: AMORA_GOLD }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5"
            stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </button>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function LocationsSection() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedId, setSelectedId]   = useState<string | null>('646'); // Rwanda default
  const [hoveredId,  setHoveredId]    = useState<string | null>(null);
  const [geoData,    setGeoData]      = useState<GeoData | null>(null);
  const [dimensions, setDimensions]   = useState({ width: 1200, height: 500 });

  // Load world topojson
  useEffect(() => {
    fetch(GEO_URL)
      .then(r => r.json())
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((topo: any) => {
        const geo = feature(topo, topo.objects.countries);
        setGeoData(geo as unknown as GeoData);
      })
      .catch(console.error);
  }, []);

  // Responsive map dimensions
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setDimensions({ width: w, height: Math.max(360, w * 0.40) });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const { width, height } = dimensions;

  const projection = geoMercator()
    .scale(width / 6.5)
    .center([25, 15])
    .translate([width / 2, height / 2]);

  const pathGen = geoPath(projection);

  const handleClick = (id: string, name: string) => {
    setSelectedId(prev => (prev === id ? null : id));
    void name; // suppress lint
  };

  const selectedEntry = selectedId ? AMORA_COUNTRIES[selectedId] : null;

  return (
    <section className="py-24 bg-white overflow-hidden" id="locations">
      <div className="container mx-auto px-6 mb-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center font-black uppercase text-foreground mb-12 leading-none"
          style={{ fontSize: 'clamp(2.2rem, 6.5vw, 5.5rem)', letterSpacing: '-0.02em' }}
        >
          OUR GLOBAL PRESENCE
        </motion.h2>

        {/* Clickable country name rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 mb-8"
        >
          {COUNTRY_ROWS.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-wrap justify-center gap-x-8 md:gap-x-14 gap-y-2">
              {row.map(country => {
                const id = nameToId[country];
                const isSelected = selectedId === id;
                return (
                  <button
                    key={country}
                    onClick={() => handleClick(id, country)}
                    className="text-base md:text-lg transition-all duration-200 cursor-pointer hover:opacity-70"
                    style={{
                      color:      isSelected ? AMORA_GREEN : '#111827',
                      fontWeight: isSelected ? 800 : 400,
                    }}
                  >
                    {country}
                  </button>
                );
              })}
            </div>
          ))}
        </motion.div>

        {/* "VISIT LOCATION PAGE" button — matching Reportage exactly */}
        <div className="flex justify-center mb-4">
          <button className="flex items-center gap-0 group">
            <span className="text-sm font-bold tracking-[0.18em] uppercase border border-gray-300 px-6 py-3 rounded-l-full group-hover:border-[#c9a060] transition-colors text-gray-700">
              VISIT LOCATION PAGE
            </span>
            <span
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
              style={{ backgroundColor: AMORA_GOLD }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5H11M11 6.5L7 2.5M11 6.5L7 10.5"
                  stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* ── Full-width map + floating info card ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative w-full"
        style={{ lineHeight: 0 }}
      >
        {/* SVG Map */}
        <svg
          ref={svgRef}
          width="100%"
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          style={{ display: 'block' }}
        >
          {geoData?.features.map((feat, i) => {
            const id      = String(feat.id ?? '');
            const isAmora = id in AMORA_COUNTRIES;
            const isSelected = selectedId === id;
            const isHovered  = hoveredId  === id;

            let fill = '#D6D6DA';
            if (isAmora)              fill = AMORA_GOLD;
            if (isAmora && isHovered) fill = AMORA_HOVER;
            if (isSelected)           fill = AMORA_GREEN;  // ← green when clicked

            const pathD = pathGen(feat.geometry);
            if (!pathD) return null;

            return (
              <path
                key={id || i}
                d={pathD}
                fill={fill}
                stroke="#ffffff"
                strokeWidth={0.5}
                style={{ cursor: isAmora ? 'pointer' : 'default', transition: 'fill 0.25s' }}
                onMouseEnter={() => { if (isAmora && !isSelected) setHoveredId(id); }}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => { if (isAmora) handleClick(id, AMORA_COUNTRIES[id].name); }}
              />
            );
          })}
        </svg>

        {/* ── Floating country info card — Reportage style ── */}
        <AnimatePresence mode="wait">
          {selectedEntry && (
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0,  scale: 1    }}
              exit={{    opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-6 right-6 md:right-10 w-[260px] md:w-[300px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 z-10"
            >
              {/* Country photo */}
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={selectedEntry.image}
                  alt={selectedEntry.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info row */}
              <div className="px-5 py-4 flex items-center justify-between gap-3">
                <div>
                  {/* Country name + flag */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl leading-none">{selectedEntry.flag}</span>
                    <span className="text-base font-black text-foreground leading-tight">
                      {selectedEntry.name}
                    </span>
                  </div>
                  {/* Project count */}
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="1" y="5" width="12" height="8" rx="1" stroke="#9ca3af" strokeWidth="1.2"/>
                      <path d="M4 5V3.5a3 3 0 0 1 6 0V5" stroke="#9ca3af" strokeWidth="1.2"/>
                    </svg>
                    <span>
                      {selectedEntry.projects}{' '}
                      {selectedEntry.projects === 1 ? 'Project' : 'Projects'}
                    </span>
                  </div>
                </div>

                {/* Explore button — compact version */}
                <button
                  className="flex items-center gap-0 group flex-shrink-0"
                  aria-label={`Explore ${selectedEntry.name}`}
                >
                  <span className="text-white text-[10px] font-bold tracking-widest uppercase bg-[#1a1a1a] px-3 py-2 rounded-l-full group-hover:bg-black transition-colors">
                    EXPLORE
                  </span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: AMORA_GOLD }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5H8.5M8.5 5L5.5 2M8.5 5L5.5 8"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                aria-label="Close"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
