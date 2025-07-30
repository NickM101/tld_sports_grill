import React, { useState, useEffect } from 'react';

import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const heroVideos = [
    {
      id: 1,
      src: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a25b481976c13b00b2c&profile_id=165&oauth2_token_id=57447761",
      title: "Game Day Atmosphere"
    },
    {
      id: 2,
      src: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e49c8a&profile_id=165&oauth2_token_id=57447761",
      title: "Kitchen Excellence"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const FlameIcon = () => (
    <svg 
      width="80" 
      height="80" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="flame-pulse mx-auto mb-6"
    >
      <path 
        d="M16 2C16 2 8 8 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 20.4183 24 24 16C24 8 16 2 16 2Z" 
        fill="var(--color-secondary)"
      />
      <path 
        d="M16 6C16 6 12 10 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 10 16 6 16 6Z" 
        fill="var(--color-accent)"
      />
      <path 
        d="M16 10C16 10 14 12 14 16C14 17.1046 14.8954 18 16 18C17.1046 18 18 17.1046 18 16C18 12 16 10 16 10Z" 
        fill="var(--color-primary)"
      />
    </svg>
  );

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          key={heroVideos[currentVideoIndex].id}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src={heroVideos[currentVideoIndex].src} type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <FlameIcon />
          
          <h1 className="clamp-headline font-oswald font-semibold mb-6 text-balance">
            Where Quality Meets Passion
          </h1>
          
          <p className="text-xl lg:text-2xl font-inter font-medium mb-4 text-balance opacity-90">
            Nairobi's Premier Sports Dining Destination
          </p>
          
          <p className="text-lg lg:text-xl font-inter mb-12 text-balance opacity-80 max-w-2xl mx-auto">
            Experience organic excellence, authentic atmosphere, and unforgettable moments at Lavington's favorite sports grill
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="default"
              size="lg"
              className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-inter font-semibold cta-hover px-8 py-4 text-lg"
              iconName="ShoppingBag"
              iconPosition="left"
            >
              View Menu & Order
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-inter font-semibold px-8 py-4 text-lg smooth-transition"
              iconName="Calendar"
              iconPosition="left"
            >
              Book Your Table
            </Button>
          </div>

          {/* Video Indicators */}
          <div className="flex justify-center space-x-2">
            {heroVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex 
                    ? 'bg-secondary' :'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Switch to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-sm font-inter mb-2">Discover More</span>
          <Icon name="ChevronDown" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;