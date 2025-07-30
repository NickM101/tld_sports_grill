import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const AtmosphereGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Moments', icon: 'Grid3X3' },
    { id: 'champions', name: 'Champions League', icon: 'Trophy' },
    { id: 'premier', name: 'Premier League', icon: 'Crown' },
    { id: 'local', name: 'Local Derbies', icon: 'MapPin' },
    { id: 'celebrations', name: 'Celebrations', icon: 'PartyPopper' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg",
      alt: "Packed crowd celebrating Champions League final goal",
      category: 'champions',
      title: "Champions League Final 2024",
      description: "The moment Manchester City scored - pure euphoria!"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg",
      alt: "Fans cheering during Premier League match",
      category: 'premier',
      title: "Arsenal vs Tottenham Derby",
      description: "North London Derby atmosphere at its finest"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3621227/pexels-photo-3621227.jpeg",
      alt: "Corporate team celebrating business deal during halftime",
      category: 'celebrations',
      title: "Corporate Victory Celebration",
      description: "When business meets pleasure - deal closed at halftime!"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg",
      alt: "Local Kenyan football fans supporting Harambee Stars",
      category: 'local',
      title: "Harambee Stars Support",
      description: "Supporting our national team with pride"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/3621227/pexels-photo-3621227.jpeg",
      alt: "Family enjoying weekend football match",
      category: 'celebrations',
      title: "Family Game Day",
      description: "Three generations united by football passion"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg",
      alt: "Multiple screens showing different matches simultaneously",
      category: 'all',
      title: "Multi-Screen Experience",
      description: "Never miss a moment with our premium viewing setup"
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-oswald font-semibold text-primary mb-6">
            Game Day <span className="text-secondary">Atmosphere</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Witness the electric energy that makes every match an unforgettable experience. From nail-biting finals to celebratory victories, these moments capture the heart of our sports community.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium smooth-transition ${
                activeCategory === category.id
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-card text-text-primary hover:bg-muted border border-border'
              }`}
            >
              <Icon name={category.icon} size={18} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-card rounded-xl overflow-hidden premium-shadow hover:premium-shadow-lg smooth-transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 smooth-transition">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm text-white/90">{image.description}</p>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 smooth-transition">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Play" size={24} className="text-secondary-foreground ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="font-semibold"
          >
            View Complete Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AtmosphereGallery;