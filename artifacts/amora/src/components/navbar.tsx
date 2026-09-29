import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Home, MapPinned, ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'wouter';
import amoraLogo from "@assets/amora_logo-removebg-preview_(1)_1786699922030.png";

// ── Icon helpers ──────────────────────────────────────────────
function TwoLineMenu({ className }: { className?: string }) {
  return (
    <svg width="22" height="14" viewBox="0 0 22 14" fill="none" className={className}>
      <line x1="0" y1="2"  x2="22" y2="2"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="0" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function Caret({ open }: { open?: boolean }) {
  return (
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none"
      className={`ml-1 inline-block transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
      <path d="M1 1L4.5 5L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────
const projectCategories = [
  { icon: 'apartments', label: 'Residential Apartments', href: '/properties?category=Residential%20Apartments' },
  { icon: 'neighbourhoods', label: 'Gated Neighbourhoods', href: '/properties?category=Gated%20Neighbourhoods' },
  { icon: 'commercial', label: 'Commercial', href: '/properties?category=Commercial' },
];
const featuredProjects = [
  { name: 'Kigali Heights', location: 'Kimihurura', tag: 'FEATURED', href: '/properties/kigali-heights' },
  { name: 'Evergreen Apartments', location: 'Kigali', tag: '', href: '/properties/evergreen-apartments' },
  { name: 'Harrington Golf', location: 'Nyarutarama', tag: 'NEW', href: '/properties/harrington-golf' },
  { name: 'Vision City Phase Two', location: 'Kigali', tag: '', href: '/properties/vision-city-phase-two' },
  { name: 'JSR Golf Village', location: 'Kigali', tag: 'NEW', href: '/properties/jsr-golf-village' },
  { name: 'Aheza Urban Village', location: 'Gahanga', tag: '', href: '/properties/girinzu-gahanga' },
];
const locationsList = [
  'Rwanda','Uganda','Kenya','Tanzania','Nigeria',
  'Ghana','Ivory Coast','Congo Brazzaville',
  'USA','United Kingdom','Cyprus',
];
const overlayLinks = [
  { name: 'PROPERTIES',          sub: 'Explore our portfolio',       hasArrow: true },
  { name: 'OUR LOCATIONS',       sub: 'Egypt & beyond',              hasArrow: true },
  { name: 'CONSTRUCTION UPDATES',sub: 'Live project progress',       hasArrow: false },
  { name: 'INVEST WITH AMORA',   sub: 'Opportunities & returns',     hasArrow: false },
  { name: 'ABOUT US',            sub: 'Our story & vision',          hasArrow: false },
  { name: 'CONTACT',             sub: 'Get in touch',                hasArrow: false },
];
const internationalLinks = [
  'Rwanda (HQ)', 'Uganda', 'Kenya', 'Tanzania',
  'Nigeria', 'Ghana', 'Ivory Coast', 'Congo Brazzaville',
  'USA', 'United Kingdom', 'Cyprus',
];

// ── Component ─────────────────────────────────────────────────
export function Navbar() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const projectsRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  // Scroll shadow
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (projectsRef.current && !projectsRef.current.contains(e.target as Node)) setProjectsOpen(false);
      if (locationsRef.current && !locationsRef.current.contains(e.target as Node)) setLocationsOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  // Lock body scroll when overlay open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeDropdowns = () => { setProjectsOpen(false); setLocationsOpen(false); };

  return (
    <>
      {/* ══════════════ NAVBAR ══════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-[72px]">

          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img src={amoraLogo} alt="Amora" className="h-10 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">

            {/* PROPERTIES dropdown */}
            <div ref={projectsRef} className="relative">
              <button
                onClick={() => { setProjectsOpen(p => !p); setLocationsOpen(false); }}
                className={`flex items-center text-[13px] font-semibold tracking-widest whitespace-nowrap transition-colors duration-200 ${
                  projectsOpen ? 'text-[#c9a060]' : 'text-gray-900 hover:text-[#c9a060]'
                }`}
              >
                PROPERTIES <Caret open={projectsOpen} />
              </button>

              <AnimatePresence>
                {projectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[680px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    onMouseLeave={() => setProjectsOpen(false)}
                  >
                    <div className="grid grid-cols-3 gap-0">
                      {/* Left — categories */}
                      <div className="col-span-1 border-r border-gray-100 p-6">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Category</p>
                        {projectCategories.map(cat => (
                          <Link key={cat.label} href={cat.href}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group mb-1"
                            onClick={closeDropdowns}
                          >
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f3eee4] text-[#9d7942]">
                              {cat.icon === 'apartments' && <Home className="h-4 w-4" />}
                              {cat.icon === 'neighbourhoods' && <MapPinned className="h-4 w-4" />}
                              {cat.icon === 'commercial' && <Building2 className="h-4 w-4" />}
                            </span>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-[#c9a060] transition-colors">
                              {cat.label}
                            </span>
                          </Link>
                        ))}
                      </div>

                      {/* Right — featured projects */}
                      <div className="col-span-2 p-6">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Featured Projects</p>
                        <div className="grid grid-cols-2 gap-3">
                          {featuredProjects.map(p => (
                            <Link key={p.name} href={p.href}
                              className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                              onClick={closeDropdowns}
                            >
                              <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                                style={{ background: 'linear-gradient(135deg, #0d2424, #c9a060)' }}>
                                {p.name[0]}
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-bold text-gray-800 group-hover:text-[#c9a060] transition-colors truncate">{p.name}</span>
                                  {p.tag && (
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white flex-shrink-0"
                                      style={{ backgroundColor: p.tag === 'HOT' ? '#ef4444' : '#c9a060' }}>
                                      {p.tag}
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs text-gray-400">{p.location}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <Link href="/properties" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#c9a060] hover:gap-2 transition-all"
                          onClick={closeDropdowns}>
                          View all projects <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* OUR LOCATIONS dropdown */}
            <div ref={locationsRef} className="relative">
              <button
                onClick={() => { setLocationsOpen(l => !l); setProjectsOpen(false); }}
                className={`flex items-center text-[13px] font-semibold tracking-widest whitespace-nowrap transition-colors duration-200 ${
                  locationsOpen ? 'text-[#c9a060]' : 'text-gray-900 hover:text-[#c9a060]'
                }`}
              >
                OUR LOCATIONS <Caret open={locationsOpen} />
              </button>

              <AnimatePresence>
                {locationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 z-50"
                    onMouseLeave={() => setLocationsOpen(false)}
                  >
                    <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-5">Our Presence</p>
                    <div className="flex flex-wrap gap-2">
                      {locationsList.map(loc => (
                        <a key={loc} href="#"
                          className="text-sm font-medium text-gray-700 hover:text-[#c9a060] transition-colors px-3 py-1.5 rounded-full border border-gray-100 hover:border-[#c9a060]/30"
                          onClick={closeDropdowns}>
                          {loc}
                        </a>
                      ))}
                    </div>
                    <div className="mt-5 pt-5 border-t border-gray-100">
                      <a href="#locations" className="inline-flex items-center gap-1 text-xs font-bold text-[#c9a060] hover:gap-2 transition-all"
                        onClick={closeDropdowns}>
                        View global map →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button className="text-[13px] font-semibold tracking-widest text-gray-900 hover:text-[#c9a060] transition-colors whitespace-nowrap">
              CONSTRUCTION UPDATES
            </button>
            <button className="text-[13px] font-semibold tracking-widest text-gray-900 hover:text-[#c9a060] transition-colors whitespace-nowrap">
              INVEST WITH AMORA
            </button>
          </nav>

          {/* Right — hamburger + AR */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-3 text-gray-900 hover:text-[#c9a060] transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            <TwoLineMenu />
            <span className="text-[13px] font-semibold tracking-widest">AR</span>
          </button>
        </div>

        {/* ── Projects dropdown full-width bar (when open on desktop) */}
      </header>

      {/* ══════════════ FULL OVERLAY MENU ══════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[480px] bg-white flex flex-col overflow-y-auto"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-8 h-[72px] border-b border-gray-100 flex-shrink-0">
                <img src={amoraLogo} alt="Amora" className="h-9 w-auto object-contain" />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Search bar — like Reportage's mob-site-search */}
              <div className="px-8 py-5 border-b border-gray-100 flex-shrink-0">
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400 flex-shrink-0">
                    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search projects, locations..."
                    value={searchVal}
                    onChange={e => setSearchVal(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Nav links */}
              <nav className="px-8 py-4 flex-shrink-0">
                {overlayLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.name === 'ABOUT US' ? '/about' : link.name === 'PROPERTIES' ? '/properties' : '#'}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="group flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div>
                      <p className="text-[13px] font-bold tracking-widest text-gray-900 group-hover:text-[#c9a060] transition-colors">
                        {link.name}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{link.sub}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className="text-gray-300 group-hover:text-[#c9a060] transition-colors flex-shrink-0">
                      <path d="M3 8H13M13 8L8.5 4M13 8L8.5 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                ))}
              </nav>

              {/* Contact section — like Reportage's mob-contact-section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-8 py-6 bg-gray-50 flex-shrink-0"
              >
                <p className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Contact Us</p>

                <div className="space-y-2 mb-5">
                  {[
                    { label: 'CUSTOMER SUPPORT', href: 'tel:+201000000000' },
                    { label: 'MARKETING DEPARTMENT', href: 'mailto:marketing@amora-realestate.com' },
                  ].map(item => (
                    <a key={item.label} href={item.href}
                      className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-xl border border-gray-100 text-xs font-bold text-gray-700 hover:border-[#c9a060] hover:text-[#c9a060] transition-colors">
                      {item.label}
                      <span className="text-lg font-light text-gray-300">+</span>
                    </a>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: '+250 788 000 000', href: 'tel:+250788000000', icon: 'phone' },
                    { label: 'WhatsApp', href: 'https://wa.me/250788000000', icon: 'message' },
                    { label: 'GET IN TOUCH', href: 'mailto:hello@amora-realestate.com', icon: 'arrow' },
                  ].map(btn => (
                    <a key={btn.label} href={btn.href} target={btn.href.startsWith('http') ? '_blank' : undefined} rel={btn.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex flex-col items-center gap-1 p-3 bg-white rounded-xl border border-gray-100 hover:border-[#c9a060] transition-colors text-center">
                      <span className="flex h-5 items-center text-[#9d7942]">
                        {btn.icon === 'phone' && <Phone className="h-4 w-4" />}
                        {btn.icon === 'message' && <MessageCircle className="h-4 w-4" />}
                        {btn.icon === 'arrow' && <ArrowUpRight className="h-4 w-4" />}
                      </span>
                      <span className="text-[10px] font-bold text-gray-600 leading-tight">{btn.label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* International links — like Reportage's mob-international-section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="px-8 py-6 border-t border-gray-100 flex-shrink-0"
              >
                <p className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">AMORA INTERNATIONAL</p>
                <div className="flex flex-wrap gap-2">
                  {internationalLinks.map(loc => (
                    <a key={loc} href="#"
                      className="text-xs font-medium text-gray-600 hover:text-[#c9a060] transition-colors px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 hover:border-[#c9a060]/30">
                      {loc}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Camex Group link */}
              <div className="px-8 py-4 border-t border-gray-100 flex-shrink-0">
                <a
                  href="https://camex.co.rw"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-[#c9a060] transition-colors"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  A Camex Group Company · camex.co.rw
                </a>
              </div>

              {/* Language switcher */}
              <div className="px-8 py-5 border-t border-gray-100 flex items-center gap-3 flex-shrink-0">
                <button className="text-xs font-bold text-[#c9a060] border-b border-[#c9a060] pb-0.5">EN</button>
                <span className="text-gray-200">|</span>
                <button className="text-xs font-bold text-gray-400 hover:text-[#c9a060] transition-colors">AR</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
