import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QualityPromise = () => {
  const [activeSupplier, setActiveSupplier] = useState(0);

  const suppliers = [
    {
      name: "Kiambu Organic Farms",
      location: "Kiambu County",
      specialty: "Organic Vegetables & Herbs",
      image: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg",
      description: "Family-owned farm providing fresh, pesticide-free vegetables and aromatic herbs that form the foundation of our signature dishes.",
      certifications: ["Organic Certified", "Fair Trade", "Sustainable Farming"],
      coordinates: { lat: -1.1719, lng: 36.8356 }
    },
    {
      name: "Nakuru Free-Range Poultry",
      location: "Nakuru County",
      specialty: "Premium Chicken & Eggs",
      image: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg",
      description: "Ethical poultry farm raising free-range chickens in natural environments, ensuring the highest quality protein for our famous grilled dishes.",
      certifications: ["Free-Range Certified", "Animal Welfare Approved", "Antibiotic-Free"],
      coordinates: { lat: -0.3031, lng: 36.0800 }
    },
    {
      name: "Meru Highland Dairy",
      location: "Meru County",
      specialty: "Artisan Cheeses & Dairy",
      image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg",
      description: "High-altitude dairy farm producing rich, creamy milk and artisan cheeses that enhance our gourmet burger and appetizer selections.",
      certifications: ["Organic Dairy", "Grass-Fed", "Local Cooperative"],
      coordinates: { lat: 0.0469, lng: 37.6553 }
    }
  ];

  const qualityStandards = [
    {
      icon: "Leaf",
      title: "100% Organic Sourcing",
      description: "Every ingredient is carefully selected from certified organic suppliers within Kenya, ensuring freshness and supporting local agriculture."
    },
    {
      icon: "Shield",
      title: "Quality Assurance",
      description: "Rigorous testing and inspection processes guarantee that only the finest ingredients make it to your plate."
    },
    {
      icon: "Clock",
      title: "Farm-to-Table Freshness",
      description: "Direct partnerships with local farms ensure ingredients reach our kitchen within 24-48 hours of harvest."
    },
    {
      icon: "Heart",
      title: "Ethical Practices",
      description: "We support fair trade, sustainable farming, and ethical treatment of animals across our entire supply chain."
    }
  ];

  const preparationMethods = [
    {
      title: "Signature Grilling",
      description: "Our custom-built grills use natural hardwood charcoal to impart authentic smoky flavors while maintaining optimal temperatures.",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      techniques: ["Hardwood Charcoal", "Temperature Control", "Smoke Infusion"]
    },
    {
      title: "Fresh Preparation",
      description: "All sauces, marinades, and seasonings are prepared daily in-house using traditional methods and organic ingredients.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
      techniques: ["Daily Fresh Prep", "Traditional Methods", "House-Made Sauces"]
    },
    {
      title: "Artisan Crafting",
      description: "Our skilled chefs hand-craft each dish with attention to detail, ensuring consistent quality and presentation.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      techniques: ["Hand-Crafted", "Artisan Skills", "Quality Control"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-6">
            Our Quality Promise
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From farm to table, every ingredient tells a story of quality, sustainability, 
            and our unwavering commitment to excellence.
          </p>
        </div>

        {/* Quality Standards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {qualityStandards.map((standard, index) => (
            <div key={index} className="bg-card rounded-xl p-6 premium-shadow text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={standard.icon} size={24} className="text-secondary" />
              </div>
              <h3 className="font-inter font-semibold text-primary mb-3">
                {standard.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {standard.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supplier Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-8 text-center">
            Our Trusted Partners
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Supplier Selection */}
            <div>
              <div className="space-y-4 mb-8">
                {suppliers.map((supplier, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSupplier(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeSupplier === index
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-card hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={supplier.image}
                          alt={supplier.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-inter font-semibold mb-1">{supplier.name}</h4>
                        <p className="text-sm opacity-80">{supplier.specialty}</p>
                      </div>
                      <Icon 
                        name="ChevronRight" 
                        size={20} 
                        className={`transition-transform duration-300 ${
                          activeSupplier === index ? 'rotate-90' : ''
                        }`} 
                      />
                    </div>
                  </button>
                ))}
              </div>

              {/* Interactive Map */}
              <div className="bg-card rounded-xl p-6 premium-shadow">
                <h4 className="font-inter font-semibold text-primary mb-4 flex items-center">
                  <Icon name="MapPin" size={20} className="text-secondary mr-2" />
                  Supplier Locations
                </h4>
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="TLD Sports Grill Suppliers Map"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=-1.1719,36.8356&z=8&output=embed"
                    className="border-0"
                  />
                </div>
              </div>
            </div>

            {/* Supplier Details */}
            <div className="bg-card rounded-xl p-8 premium-shadow">
              <div className="mb-6">
                <div className="h-48 rounded-lg overflow-hidden mb-6">
                  <Image
                    src={suppliers[activeSupplier].image}
                    alt={suppliers[activeSupplier].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-oswald font-semibold text-primary mb-2">
                  {suppliers[activeSupplier].name}
                </h4>
                <div className="flex items-center text-text-secondary mb-4">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span className="text-sm">{suppliers[activeSupplier].location}</span>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {suppliers[activeSupplier].description}
                </p>
              </div>

              <div>
                <h5 className="font-inter font-semibold text-primary mb-3">Certifications</h5>
                <div className="flex flex-wrap gap-2">
                  {suppliers[activeSupplier].certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preparation Methods */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-12 text-center">
            Our Preparation Philosophy
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {preparationMethods.map((method, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden premium-shadow">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={method.image}
                    alt={method.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-oswald font-semibold text-primary mb-3">
                    {method.title}
                  </h4>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    {method.techniques.map((technique, techIndex) => (
                      <div key={techIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        <span className="text-sm text-text-secondary">{technique}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Commitment CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-xl p-8 lg:p-12 premium-shadow">
            <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-4">
              Taste the Difference Quality Makes
            </h3>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Experience the exceptional flavors that come from our commitment to organic sourcing, 
              ethical partnerships, and artisan preparation methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-inter font-semibold cta-hover"
              >
                View Our Menu
              </Button>
              <Button 
                variant="outline"
                className="font-inter font-medium"
              >
                Visit Our Kitchen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPromise;