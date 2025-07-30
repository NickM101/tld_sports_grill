import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GalleryHeader = () => {
  return (
    <div className="bg-gradient-to-br from-primary via-primary to-gray-700 text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Icon name="Camera" size={32} className="text-secondary" />
            <span className="text-secondary font-oswald font-semibold text-lg tracking-wide">
              VISUAL STORIES
            </span>
          </div>
          
          <h1 className="clamp-headline font-oswald font-semibold text-white mb-6 text-balance">
            Experience TLD Sports Grill Through Our Gallery
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the passion, energy, and craftsmanship that defines Nairobi's premier sports dining destination through stunning visual storytelling.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="default" 
              size="lg"
              className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold cta-hover"
              iconName="Calendar"
              iconPosition="left"
            >
              Book Your Experience
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold"
              iconName="Share2"
              iconPosition="left"
            >
              Share Gallery
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryHeader;