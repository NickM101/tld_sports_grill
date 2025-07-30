import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CoreDifferentiators = () => {
  const differentiators = [
    {
      id: 1,
      title: "Organic Excellence",
      subtitle: "Farm-to-Table Sourcing",
      description: `Every dish starts with premium organic ingredients sourced directly from trusted Kenyan farms.\n\nOur signature organic chicken is free-range, hormone-free, and prepared with artisanal techniques that preserve natural flavors while delivering the quality you deserve.`,
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop&crop=center",
      icon: "Leaf",
      cta: "Discover Our Story",
      link: "/about-story",
      stats: [
        { label: "Local Farms", value: "15+" },
        { label: "Organic Certified", value: "100%" },
        { label: "Fresh Daily", value: "Always" }
      ]
    },
    {
      id: 2,
      title: "Premium Sports Experience",
      subtitle: "360° Venue Excellence",
      description: `Immerse yourself in Nairobi's most sophisticated sports viewing environment.\n\nMultiple HD screens, premium sound systems, and carefully designed seating ensure every game feels like a VIP experience. From intimate booths to communal viewing areas, we've crafted spaces for every type of sports fan.`,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=600&h=400&fit=crop&crop=center",
      icon: "Trophy",
      cta: "Explore Atmosphere",
      link: "/sports-atmosphere",
      stats: [
        { label: "HD Screens", value: "12" },
        { label: "Seating Capacity", value: "150+" },
        { label: "Sports Channels", value: "25+" }
      ]
    },
    {
      id: 3,
      title: "Lavington\'s Favorite",
      subtitle: "Community Choice",
      description: `Rated #1 sports dining destination by our community for three consecutive years.\n\nOur commitment to exceptional service, consistent quality, and creating memorable experiences has made us the go-to destination for celebrations, corporate events, and casual dining in the heart of Lavington.`,
      image: "https://images.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg?w=600&h=400&fit=crop&crop=center",
      icon: "Star",
      cta: "See What They Say",
      link: "/gallery-showcase",
      stats: [
        { label: "Customer Rating", value: "4.8/5" },
        { label: "Happy Customers", value: "5000+" },
        { label: "Years Serving", value: "8+" }
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-oswald font-semibold text-primary mb-6">
            Why TLD Sports Grill?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto text-balance">
            Three pillars of excellence that make us Nairobi's premier sports dining destination
          </p>
        </div>

        {/* Differentiators */}
        <div className="space-y-24">
          {differentiators.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-16`}
            >
              {/* Image Section */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="overflow-hidden rounded-2xl premium-shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[400px] lg:h-[500px] object-cover smooth-transition group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Floating Icon */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary rounded-full flex items-center justify-center premium-shadow-lg">
                    <Icon name={item.icon} size={32} className="text-secondary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 w-full">
                <div className="max-w-xl">
                  <div className="mb-6">
                    <span className="text-secondary font-inter font-semibold text-lg mb-2 block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
                      {item.title}
                    </h3>
                  </div>

                  <div className="prose prose-lg text-text-secondary mb-8">
                    {item.description.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {item.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-text-secondary font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={item.link}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground cta-hover"
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      {item.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-surface rounded-2xl p-8 lg:p-12 premium-shadow">
            <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-4">
              Experience the Difference
            </h3>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who've made TLD Sports Grill their home for exceptional dining and sports entertainment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/location-visit">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-secondary hover:bg-cta-hover text-secondary-foreground cta-hover"
                  iconName="MapPin"
                  iconPosition="left"
                >
                  Visit Us Today
                </Button>
              </Link>
              
              <Link to="/contact-events">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Plan Your Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreDifferentiators;