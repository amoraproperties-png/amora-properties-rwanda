import { useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { AboutSection } from '@/components/about-section';
import { BrandSection } from '@/components/brand-section';
import { WhyInvestSection } from '@/components/why-invest-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function About() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'About Amora Properties™ | Amora Properties™';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative overflow-hidden bg-[#0d2424] px-6 py-24 text-white md:py-32">
          <div className="container mx-auto max-w-6xl">
            <p className="mb-5 text-xs font-bold tracking-[0.3em] text-[#c9a060]">
              OUR STORY &amp; VISION
            </p>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
              Building a better way to belong.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-300">
              Discover the people, purpose, and perspective behind Amora&apos;s
              approach to real estate in Rwanda and beyond.
            </p>
          </div>
        </section>
        <AboutSection />
        <BrandSection />
        <WhyInvestSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}