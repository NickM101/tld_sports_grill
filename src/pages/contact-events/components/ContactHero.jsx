import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
          alt="Corporate event at TLD Sports Grill with team celebrating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <div className="space-y-6">
          <h1 className="clamp-headline font-oswald font-semibold text-white">
            Your Event, Our Passion
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            From corporate celebrations to private parties, TLD Sports Grill creates unforgettable experiences in Nairobi's premier sports entertainment venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="default"
              size="lg"
              className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold cta-hover"
            >
              Plan Your Event
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;