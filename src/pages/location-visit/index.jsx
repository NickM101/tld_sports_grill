import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LocationMap from './components/LocationMap';
import OperatingHours from './components/OperatingHours';
import PlanYourVisit from './components/PlanYourVisit';
import LavingtonLifestyle from './components/LavingtonLifestyle';


const LocationVisit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Visit Us - TLD Sports Grill | Location, Hours & Directions</title>
        <meta 
          name="description" 
          content="Visit TLD Sports Grill in M-Square Mall, Lavington. Get directions, parking info, operating hours, and plan your perfect sports dining experience in Nairobi's premier location." 
        />
        <meta name="keywords" content="TLD Sports Grill location, M-Square Mall, Lavington restaurant, Nairobi sports bar directions, parking, operating hours" />
        <meta property="og:title" content="Visit TLD Sports Grill - Premier Sports Dining in Lavington" />
        <meta property="og:description" content="Located in M-Square Mall, Lavington. Easy parking, accessible location, and the perfect atmosphere for sports dining in Nairobi." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tldsportsgrill.co.ke/location-visit" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <LocationMap />
          <OperatingHours />
          <PlanYourVisit />
          <LavingtonLifestyle />
          <WhatToExpected />
        </main>
      </div>
    </>
  );
};

export default LocationVisit;