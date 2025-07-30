import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import AtmosphereGallery from './components/AtmosphereGallery';
import LiveSportsCalendar from './components/LiveSportsCalendar';
import VirtualTour from './components/VirtualTour';
import CustomerTestimonials from './components/CustomerTestimonials';
import SportsCommunityCTA from './components/SportsCommunityCTA';

const SportsAtmosphere = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AtmosphereGallery />
        <LiveSportsCalendar />
        <VirtualTour />
        <CustomerTestimonials />
        <SportsCommunityCTA />
      </main>
    </div>
  );
};

export default SportsAtmosphere;