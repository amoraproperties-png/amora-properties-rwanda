import { useState } from 'react';
import amoraLogo from "@assets/amora_logo-removebg-preview_(1)_1786699922030.png";

const usefulLinks = [
  { label: 'About', href: '/about' },
  { label: 'Invest with Amora', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Residential Apartments', href: '#' },
  { label: 'Residential Communities', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

const locationLinks = [
  'Rwanda', 'Uganda', 'Kenya', 'Tanzania',
  'Nigeria', 'Ghana', 'Ivory Coast', 'Congo Brazzaville',
  'USA', 'United Kingdom', 'Cyprus',
];

// Downward chevron for section headers — matches Reportage
function ChevronDown() {
  return (
    <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 inline-block">
      <path d="M1.33301 1.33301L12.0682 13.0441C14.182 15.3501 17.8174 15.3501 19.9312 13.0441L30.6663 1.33301"
        stroke="white" strokeWidth="2.66667" strokeLinecap="round"/>
    </svg>
  );
}

function SocialIcon({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#c9a060] hover:text-[#c9a060] transition-colors">
      {children}
    </a>
  );
}

export function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer className="relative overflow-hidden bg-[#0a1414] text-white">

      {/* ── Main content ── */}
      <div className="container mx-auto px-6 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">

          {/* USEFUL LINKS */}
          <div className="lg:col-span-4">
            <h6 className="text-sm font-bold tracking-widest text-white uppercase mb-6 flex items-center">
              USEFUL LINKS <ChevronDown />
            </h6>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {usefulLinks.map(link => (
                <a key={link.label} href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* LOCATIONS */}
          <div className="lg:col-span-4">
            <h6 className="text-sm font-bold tracking-widest text-white uppercase mb-6 flex items-center">
              LOCATIONS <ChevronDown />
            </h6>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {locationLinks.map(loc => (
                <a key={loc} href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                  {loc}
                </a>
              ))}
            </div>
          </div>

          {/* STAY UPDATED */}
          <div className="lg:col-span-4">
            <h6 className="text-sm font-bold tracking-widest text-white uppercase mb-6 flex items-center">
              STAY UPDATED <ChevronDown />
            </h6>
            {sent ? (
              <p className="text-[#c9a060] text-sm font-semibold">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleEmail} className="flex items-center gap-0">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-transparent border-b border-white/20 focus:border-[#c9a060] outline-none py-2 text-sm text-white placeholder-gray-500 transition-colors"
                />
                <button type="submit"
                  className="text-white hover:text-[#c9a060] transition-colors text-lg pl-3 font-bold">
                  →
                </button>
              </form>
            )}

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-8">
              <SocialIcon href="https://facebook.com">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M8.5 2.333H10V0h-2C6.343 0 5 1.343 5 3v1H3v2.333h2V14h2.333V6.333H9.5l.5-2.333H7.333V3c0-.368.299-.667.667-.667H8.5z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://linkedin.com">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M1.556 3.111c.859 0 1.555-.696 1.555-1.555C3.111.696 2.415 0 1.556 0 .696 0 0 .696 0 1.556c0 .859.696 1.555 1.556 1.555zM.311 4.667H2.8V14H.311V4.667zM5.133 4.667H7.56v1.285h.035c.336-.636 1.157-1.307 2.38-1.307 2.548 0 3.014 1.677 3.014 3.858V14h-2.49v-5.04c0-.927-.016-2.12-1.292-2.12-1.294 0-1.493.981-1.493 2.05V14H5.133V4.667z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://instagram.com">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M7 0C5.098 0 4.861.008 4.116.042 3.372.077 2.87.194 2.43.368A3.548 3.548 0 001.15 1.15 3.548 3.548 0 00.368 2.43C.194 2.87.077 3.372.042 4.116.008 4.861 0 5.098 0 7s.008 2.139.042 2.884c.035.744.152 1.246.326 1.686.18.462.42.855.782 1.218.363.362.756.601 1.218.782.44.174.942.291 1.686.326C4.861 13.992 5.098 14 7 14s2.139-.008 2.884-.042c.744-.035 1.246-.152 1.686-.326a3.548 3.548 0 001.218-.782 3.548 3.548 0 00.782-1.218c.174-.44.291-.942.326-1.686C13.992 9.139 14 8.902 14 7s-.008-2.139-.042-2.884c-.035-.744-.152-1.246-.326-1.686a3.548 3.548 0 00-.782-1.218A3.548 3.548 0 0011.57.368C11.13.194 10.628.077 9.884.042 9.139.008 8.902 0 7 0zm0 1.261c1.87 0 2.09.007 2.828.04.682.031 1.052.145 1.298.24.326.127.559.279.803.523.244.244.396.477.523.803.095.246.209.616.24 1.298.033.738.04.96.04 2.828s-.007 2.09-.04 2.828c-.031.682-.145 1.052-.24 1.298a2.165 2.165 0 01-.523.803 2.165 2.165 0 01-.803.523c-.246.095-.616.209-1.298.24-.738.033-.96.04-2.828.04s-2.09-.007-2.828-.04c-.682-.031-1.052-.145-1.298-.24a2.165 2.165 0 01-.803-.523 2.165 2.165 0 01-.523-.803c-.095-.246-.209-.616-.24-1.298-.033-.738-.04-.96-.04-2.828s.007-2.09.04-2.828c.031-.682.145-1.052.24-1.298.127-.326.279-.559.523-.803.244-.244.477-.396.803-.523.246-.095.616-.209 1.298-.24.738-.033.96-.04 2.828-.04zM7 3.405a3.595 3.595 0 100 7.19 3.595 3.595 0 000-7.19zM7 9.333A2.333 2.333 0 117 4.667 2.333 2.333 0 017 9.333zm4.58-5.585a.84.84 0 11-1.68 0 .84.84 0 011.68 0z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://youtube.com">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
                  <path d="M15.666 1.877A2.015 2.015 0 0014.24.451C13.005.12 8 .12 8 .12S2.995.12 1.76.45A2.015 2.015 0 00.334 1.878C0 3.113 0 5.685 0 5.685s0 2.572.334 3.807a2.015 2.015 0 001.426 1.426C2.995 11.25 8 11.25 8 11.25s5.005 0 6.24-.332a2.015 2.015 0 001.426-1.426C16 8.257 16 5.685 16 5.685s0-2.572-.334-3.808zM6.4 8.114V3.257l4.16 2.428L6.4 8.115z"/>
                </svg>
              </SocialIcon>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Copyright © 2026 Amora Properties™ · A{' '}
              <a href="https://camex.co.rw" target="_blank" rel="noreferrer" className="hover:text-[#c9a060] transition-colors underline underline-offset-2">
                Camex Group
              </a>{' '}
              Company. All rights reserved
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* ── Large background logo — matches Reportage footer-logo ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pointer-events-none overflow-hidden opacity-[0.04] select-none" aria-hidden="true">
        <img
          src={amoraLogo}
          alt=""
          className="w-[70vw] max-w-3xl mx-auto block"
          style={{ filter: 'brightness(10)' }}
        />
      </div>

    </footer>
  );
}
