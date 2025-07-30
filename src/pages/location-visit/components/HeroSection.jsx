import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg"
          alt="M-Square Mall exterior view with modern architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-medium text-sm mb-4">
            Located in M-Square Mall, Lavington
          </span>
        </div>
        
        <h1 className="clamp-headline font-oswald font-semibold mb-6 text-balance">
          Visit Nairobi's Premier Sports Dining Destination
        </h1>
        
        <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Perfectly positioned in Lavington's sophisticated M-Square Mall, we're your gateway to elevated sports entertainment and exceptional organic dining.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default"
            size="lg"
            className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold cta-hover"
            iconName="MapPin"
            iconPosition="left"
          >
            Get Directions
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            iconName="Phone"
            iconPosition="left"
          >
            Call Now
          </Button>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-secondary text-2xl font-bold">Open Daily</div>
            <div className="text-white/80 text-sm">11:00 AM - 11:00 PM</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-secondary text-2xl font-bold">Free Parking</div>
            <div className="text-white/80 text-sm">Secure Mall Parking</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-secondary text-2xl font-bold">Easy Access</div>
            <div className="text-white/80 text-sm">Ground Floor Location</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;