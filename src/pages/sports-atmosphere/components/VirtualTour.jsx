import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VirtualTour = () => {
  const [activeArea, setActiveArea] = useState('main-bar');

  const viewingAreas = [
    {
      id: 'main-bar',
      name: 'Main Sports Bar',
      description: 'Our flagship viewing area featuring multiple 75-inch 4K screens with premium surround sound. Perfect for the biggest matches and group celebrations.',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      features: [
        '6 x 75-inch 4K screens',
        'Dolby Atmos surround sound',
        'Capacity: 80 guests',
        'Full bar service',
        'Premium seating options'
      ],
      capacity: 80,
      screens: 6,
      bestFor: 'Major tournaments, group events'
    },
    {
      id: 'premium-lounge',
      name: 'Premium Viewing Lounge',
      description: 'Intimate setting with comfortable leather seating and dedicated service. Ideal for corporate events and special celebrations.',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg',
      features: [
        '2 x 65-inch OLED screens',
        'Leather reclining seats',
        'Capacity: 25 guests',
        'Dedicated server',
        'Private bar area'
      ],
      capacity: 25,
      screens: 2,
      bestFor: 'Corporate events, intimate gatherings'
    },
    {
      id: 'family-zone',
      name: 'Family Sports Zone',
      description: 'Family-friendly area with comfortable booth seating and kid-friendly amenities. Great for weekend matches with the whole family.',
      image: 'https://images.pexels.com/photos/3621227/pexels-photo-3621227.jpeg',
      features: [
        '4 x 55-inch screens',
        'Booth seating for families',
        'Capacity: 40 guests',
        'Kids menu available',
        'High chairs provided'
      ],
      capacity: 40,
      screens: 4,
      bestFor: 'Family outings, weekend matches'
    },
    {
      id: 'outdoor-terrace',
      name: 'Outdoor Sports Terrace',
      description: 'Open-air viewing experience with weather-resistant screens and comfortable outdoor furniture. Perfect for pleasant Nairobi evenings.',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
      features: [
        '3 x 65-inch outdoor screens',
        'Weather-resistant setup',
        'Capacity: 50 guests',
        'Outdoor bar',
        'Covered seating areas'
      ],
      capacity: 50,
      screens: 3,
      bestFor: 'Evening matches, casual viewing'
    }
  ];

  const activeAreaData = viewingAreas.find(area => area.id === activeArea);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-oswald font-semibold text-primary mb-6">
            360° Virtual <span className="text-secondary">Tour</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Explore our different viewing areas and find your perfect spot for game day. Each area is designed to provide optimal viewing angles and an unforgettable sports experience.
          </p>
        </div>

        {/* Area Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {viewingAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveArea(area.id)}
              className={`p-4 rounded-xl text-left smooth-transition ${
                activeArea === area.id
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-card text-text-primary hover:bg-muted border border-border'
              }`}
            >
              <h3 className="font-semibold mb-2">{area.name}</h3>
              <div className="flex items-center gap-4 text-sm opacity-75">
                <span className="flex items-center gap-1">
                  <Icon name="Users" size={14} />
                  {area.capacity}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Monitor" size={14} />
                  {area.screens}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Area Display */}
        <div className="bg-card rounded-2xl overflow-hidden premium-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src={activeAreaData.image}
                alt={`${activeAreaData.name} viewing area`}
                className="w-full h-full object-cover"
              />
              
              {/* Virtual Tour Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 smooth-transition">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold cta-hover"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Start Virtual Tour
                </Button>
              </div>

              {/* 360° Badge */}
              <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                360° View Available
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-oswald font-semibold text-primary mb-4">
                {activeAreaData.name}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {activeAreaData.description}
              </p>

              {/* Features List */}
              <div className="mb-8">
                <h4 className="font-semibold text-text-primary mb-4">Features & Amenities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeAreaData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {activeAreaData.capacity}
                  </div>
                  <div className="text-sm text-text-secondary">Max Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {activeAreaData.screens}
                  </div>
                  <div className="text-sm text-text-secondary">HD Screens</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">4K</div>
                  <div className="text-sm text-text-secondary">Resolution</div>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-muted rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Star" size={16} className="text-secondary" />
                  <span className="font-medium text-text-primary">Best For:</span>
                </div>
                <p className="text-sm text-text-secondary">{activeAreaData.bestFor}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold cta-hover flex-1"
                >
                  Book This Area
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 bg-muted rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Technical Specifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Monitor" size={24} className="text-secondary-foreground" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Premium Displays</h4>
              <p className="text-sm text-text-secondary">4K OLED and LED screens with HDR support for crystal-clear viewing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Volume2" size={24} className="text-secondary-foreground" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Surround Sound</h4>
              <p className="text-sm text-text-secondary">Dolby Atmos audio system for immersive match commentary</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wifi" size={24} className="text-secondary-foreground" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">High-Speed WiFi</h4>
              <p className="text-sm text-text-secondary">Complimentary fiber internet for streaming and social sharing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Eye" size={24} className="text-secondary-foreground" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Optimal Viewing</h4>
              <p className="text-sm text-text-secondary">Every seat positioned for perfect screen visibility and comfort</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;