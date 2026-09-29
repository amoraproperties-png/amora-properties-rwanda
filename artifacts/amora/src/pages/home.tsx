import { Navbar } from '@/components/navbar';
import { HeroSlider } from '@/components/hero-slider';
import { OfferSection } from '@/components/offer-section';
import { BrandSection } from '@/components/brand-section';
import { ProjectsGrid } from '@/components/projects-grid';
import { TaglineSection } from '@/components/tagline-section';
import { AboutSection } from '@/components/about-section';
import { WhyInvestSection } from '@/components/why-invest-section';
import { LocationsSection } from '@/components/locations-section';
import { PartnershipsSection } from '@/components/partnerships-section';
import { StoriesSection } from '@/components/stories-section';
import { AppDownloadSection } from '@/components/app-download-section';
import { ConstructionUpdates } from '@/components/construction-updates';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* 1. Hero Slider */}
        <HeroSlider />
        {/* 2. Special Offer / Lead Form */}
        <OfferSection />
        {/* 3. Brand / About animation */}
        <BrandSection />
        {/* 4. Our Projects */}
        <ProjectsGrid />
        {/* 5. Tagline — "OVER A DECADE OF DEVELOPMENT" */}
        <TaglineSection />
        {/* 6. Stats */}
        <AboutSection />
        {/* 7. Why Invest */}
        <WhyInvestSection />
        {/* 8. Our Global Presence */}
        <LocationsSection />
        {/* 9. Partnerships */}
        <PartnershipsSection />
        {/* 10. Stories */}
        <StoriesSection />
        {/* 11. App Download */}
        <AppDownloadSection />
        {/* 12. Construction Updates */}
        <ConstructionUpdates />
        {/* 13. Contact */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
