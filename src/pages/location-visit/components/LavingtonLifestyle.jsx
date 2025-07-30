import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LavingtonLifestyle = () => {
  const nearbyAttractions = [
    {
      name: "Lavington Mall",
      type: "Shopping Center",
      distance: "2 min walk",
      description: "Premium shopping with international and local brands",
      image: "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg",
      icon: "ShoppingBag"
    },
    {
      name: "Lavington Green",
      type: "Shopping & Dining",
      distance: "5 min drive",
      description: "Upscale shopping complex with restaurants and cafes",
      image: "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg",
      icon: "Coffee"
    },
    {
      name: "Nairobi Arboretum",
      type: "Nature Reserve",
      distance: "10 min drive",
      description: "Peaceful botanical garden perfect for morning walks",
      image: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg",
      icon: "Trees"
    },
    {
      name: "Westgate Shopping Mall",
      type: "Entertainment Hub",
      distance: "8 min drive",
      description: "Major shopping and entertainment destination",
      image: "https://images.pexels.com/photos/2292953/pexels-photo-2292953.jpeg",
      icon: "Film"
    }
  ];

  const neighborhoodFeatures = [
    {
      title: "Upscale Residential Area",
      description: "Home to Nairobi\'s professionals and expatriate community",
      icon: "Home",
      highlights: ["Gated communities", "International schools", "Embassy district"]
    },
    {
      title: "Business Hub",
      description: "Close to major corporate offices and business centers",
      icon: "Building",
      highlights: ["Corporate headquarters", "Business parks", "Professional services"]
    },
    {
      title: "Cultural Diversity",
      description: "Multicultural neighborhood with international dining",
      icon: "Globe",
      highlights: ["International cuisine", "Cultural events", "Diverse community"]
    },
    {
      title: "Premium Services",
      description: "High-end amenities and service providers",
      icon: "Star",
      highlights: ["Private healthcare", "Luxury services", "Premium retail"]
    }
  ];

  const demographics = [
    { label: "Young Professionals", percentage: 35, color: "bg-secondary" },
    { label: "Business Executives", percentage: 28, color: "bg-accent" },
    { label: "International Residents", percentage: 22, color: "bg-primary" },
    { label: "Families", percentage: 15, color: "bg-success" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
            The Lavington Lifestyle
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover why TLD Sports Grill is perfectly positioned in Nairobi's most sophisticated neighborhood
          </p>
        </div>

        {/* Neighborhood Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Why Lavington?
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Lavington represents the pinnacle of modern Nairobi living. This upscale neighborhood combines 
              international sophistication with Kenyan warmth, creating the perfect environment for our 
              premium sports dining experience.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {neighborhoodFeatures.map((feature, index) => (
                <div key={index} className="bg-card rounded-lg p-4 premium-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name={feature.icon} size={20} className="text-secondary" />
                    <h4 className="font-semibold text-primary text-sm">{feature.title}</h4>
                  </div>
                  <p className="text-xs text-text-secondary mb-3">{feature.description}</p>
                  <div className="space-y-1">
                    {feature.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-secondary rounded-full"></div>
                        <span className="text-xs text-text-secondary">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Our Community
            </h3>
            <div className="bg-card rounded-xl p-6 premium-shadow mb-6">
              <div className="space-y-4">
                {demographics.map((demo, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-primary">{demo.label}</span>
                      <span className="text-sm text-text-secondary">{demo.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`${demo.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${demo.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl p-6 border border-secondary/20">
              <h4 className="font-semibold text-primary mb-3">Perfect Match</h4>
              <p className="text-sm text-text-secondary">
                Our clientele appreciates quality, values authentic experiences, and seeks venues 
                that reflect their sophisticated lifestyle. TLD Sports Grill delivers exactly that.
              </p>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
              Explore the Neighborhood
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Make a day of it with these nearby attractions and amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAttractions.map((attraction, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden premium-shadow group hover:premium-shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={attraction.image}
                    alt={`${attraction.name} - ${attraction.type}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Icon name={attraction.icon} size={16} className="text-secondary" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">{attraction.distance}</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-primary mb-1">{attraction.name}</h4>
                  <div className="text-sm text-secondary mb-2">{attraction.type}</div>
                  <p className="text-sm text-text-secondary">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transportation Hub */}
        <div className="bg-card rounded-xl p-8 premium-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Connected to Everything
              </h3>
              <p className="text-text-secondary mb-6">
                Lavington's strategic location puts you at the center of Nairobi's business and social life, 
                with easy access to all major destinations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Building" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">CBD & Business District</div>
                    <div className="text-sm text-text-secondary">15-20 minutes drive</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Plane" size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">JKIA Airport</div>
                    <div className="text-sm text-text-secondary">25-30 minutes drive</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-success" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">Westlands & Parklands</div>
                    <div className="text-sm text-text-secondary">10-15 minutes drive</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl p-6 border border-secondary/20">
                <h4 className="font-semibold text-primary mb-4">Local Insights</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">
                      Peak hours: 7-9 AM and 5-7 PM on weekdays
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">
                      Weekend shopping is best in the morning
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">
                      Evening dining offers the best atmosphere
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LavingtonLifestyle;