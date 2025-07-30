import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import HeritageVision from './components/HeritageVision';
import QualityPromise from './components/QualityPromise';
import TeamSpotlight from './components/TeamSpotlight';
import CommunityImpact from './components/CommunityImpact';
import RecognitionAwards from './components/RecognitionAwards';

const AboutStoryPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Story - TLD Sports Grill | Nairobi's Premier Sports Dining Destination</title>
        <meta 
          name="description" 
          content="Discover the story behind TLD Sports Grill - from vision to Nairobi's premier sports dining destination. Learn about our commitment to quality, community, and elevated togetherness." 
        />
        <meta name="keywords" content="TLD Sports Grill story, Nairobi sports bar history, organic restaurant Lavington, community impact, team spotlight, quality promise" />
        <meta property="og:title" content="Our Story - TLD Sports Grill | Premium Sports Dining Experience" />
        <meta property="og:description" content="From humble beginnings to Nairobi's premier sports dining destination. Discover our journey of elevated togetherness, quality commitment, and community impact." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tldsportsgrill.com/about-story" />
        <link rel="canonical" href="https://tldsportsgrill.com/about-story" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Heritage & Vision */}
        <HeritageVision />
        
        {/* Quality Promise */}
        <QualityPromise />
        
        {/* Team Spotlight */}
        <TeamSpotlight />
        
        {/* Community Impact */}
        <CommunityImpact />
        
        {/* Recognition & Awards */}
        <RecognitionAwards />
      </div>
    </>
  );
};

export default AboutStoryPage;