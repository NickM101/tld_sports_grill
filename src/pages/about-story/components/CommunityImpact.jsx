import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CommunityImpact = () => {
  const [activeInitiative, setActiveInitiative] = useState(0);

  const initiatives = [
    {
      title: "Youth Sports Sponsorship",
      category: "Sports Development",
      image: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg",
      description: "Supporting local youth football and basketball teams with equipment, uniforms, and training facilities to nurture the next generation of Kenyan sports talent.",
      impact: {
        teams: "12",
        youth: "300+",
        equipment: "KES 500,000"
      },
      details: `Our youth sports program partners with schools and community centers across Nairobi to provide comprehensive support for young athletes. We believe that sports build character, teach teamwork, and create opportunities for personal growth.\n\nBeyond financial support, our team members volunteer as mentors and coaches, sharing their passion for sports while helping young people develop both athletic skills and life skills.`,
      partnerships: ["Lavington Primary School", "Kileleshwa Sports Club", "Nairobi Youth Football League"]
    },
    {
      title: "Local Supplier Network",
      category: "Economic Development",
      image: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg",
      description: "Building sustainable partnerships with over 20 local farmers and suppliers, creating a reliable income stream while ensuring the freshest organic ingredients.",
      impact: {
        suppliers: "25+",
        farmers: "150+",
        investment: "KES 2M+"
      },
      details: `Our farm-to-table commitment goes beyond quality—it's about building a sustainable local economy. We work directly with small-scale farmers, providing them with guaranteed purchase agreements and fair pricing.\n\nThis partnership model helps farmers plan their crops, invest in better equipment, and support their families while ensuring we receive the highest quality organic ingredients for our dishes.`,
      partnerships: ["Kiambu Farmers Cooperative", "Nakuru Organic Alliance", "Meru Highland Producers"]
    },
    {
      title: "Community Events & Fundraising",
      category: "Social Responsibility",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      description: "Hosting charity events, fundraising drives, and community gatherings that bring people together while supporting local causes and organizations.",
      impact: {
        events: "24",
        raised: "KES 800,000",
        beneficiaries: "500+"
      },
      details: `Every month, we host special events that combine great food, sports entertainment, and community support. From charity football viewing parties to fundraising dinners, these events strengthen community bonds.\n\nOur 'Game for Good' series donates a portion of proceeds from major sporting events to local charities, while our community space hosts meetings for local organizations and support groups.`,
      partnerships: ["Kenya Red Cross", "Lavington Community Center", "Nairobi Children\'s Home"]
    }
  ];

  const impactStats = [
    {
      number: "50,000+",
      label: "Community Members Served",
      icon: "Users"
    },
    {
      number: "KES 3.2M",
      label: "Local Economic Impact",
      icon: "TrendingUp"
    },
    {
      number: "25+",
      label: "Local Partnerships",
      icon: "Handshake"
    },
    {
      number: "300+",
      label: "Youth Athletes Supported",
      icon: "Trophy"
    }
  ];

  const sustainabilityPractices = [
    {
      icon: "Recycle",
      title: "Waste Reduction",
      description: "Comprehensive recycling program and composting system that diverts 80% of waste from landfills."
    },
    {
      icon: "Leaf",
      title: "Sustainable Sourcing",
      description: "100% organic ingredients sourced from local suppliers within 100km radius to reduce carbon footprint."
    },
    {
      icon: "Droplets",
      title: "Water Conservation",
      description: "Rainwater harvesting and greywater recycling systems reduce water consumption by 40%."
    },
    {
      icon: "Zap",
      title: "Energy Efficiency",
      description: "Solar panels and LED lighting systems minimize environmental impact while reducing operational costs."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-6">
            Community Impact
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Beyond serving exceptional food, we're committed to building stronger communities, 
            supporting local development, and creating positive change in Nairobi.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl p-6 premium-shadow text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={32} className="text-secondary" />
              </div>
              <div className="text-3xl lg:text-4xl font-oswald font-semibold text-secondary mb-2">
                {stat.number}
              </div>
              <p className="text-text-secondary font-inter font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Community Initiatives */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-8 text-center">
            Our Initiatives
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Initiative Selection */}
            <div className="space-y-4">
              {initiatives.map((initiative, index) => (
                <button
                  key={index}
                  onClick={() => setActiveInitiative(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeInitiative === index
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-card hover:bg-background'
                  }`}
                >
                  <div className="space-y-2">
                    <h4 className="font-inter font-semibold">{initiative.title}</h4>
                    <p className="text-sm opacity-80">{initiative.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs opacity-70">Learn More</span>
                      <Icon 
                        name="ChevronRight" 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          activeInitiative === index ? 'rotate-90' : ''
                        }`} 
                      />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Initiative Details */}
            <div className="lg:col-span-2 bg-card rounded-xl overflow-hidden premium-shadow">
              {/* Initiative Image */}
              <div className="h-64 overflow-hidden">
                <Image
                  src={initiatives[activeInitiative].image}
                  alt={initiatives[activeInitiative].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                {/* Initiative Header */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-3">
                    {initiatives[activeInitiative].category}
                  </span>
                  <h4 className="text-2xl font-oswald font-semibold text-primary mb-3">
                    {initiatives[activeInitiative].title}
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {initiatives[activeInitiative].description}
                  </p>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(initiatives[activeInitiative].impact).map(([key, value], index) => (
                    <div key={index} className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-xl font-oswald font-semibold text-secondary mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-text-secondary capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Detailed Description */}
                <div className="mb-6">
                  <h5 className="font-inter font-semibold text-primary mb-3">About This Initiative</h5>
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {initiatives[activeInitiative].details}
                  </div>
                </div>

                {/* Partnerships */}
                <div>
                  <h5 className="font-inter font-semibold text-primary mb-3">Key Partnerships</h5>
                  <div className="space-y-2">
                    {initiatives[activeInitiative].partnerships.map((partner, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        <span className="text-text-secondary text-sm">{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability Practices */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-12 text-center">
            Sustainability Commitment
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityPractices.map((practice, index) => (
              <div key={index} className="bg-card rounded-xl p-6 premium-shadow text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={practice.icon} size={32} className="text-secondary" />
                </div>
                <h4 className="text-lg font-oswald font-semibold text-primary mb-4">
                  {practice.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Testimonials */}
        <div className="bg-card rounded-xl p-8 lg:p-12 premium-shadow">
          <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-8 text-center">
            Community Voices
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <blockquote className="text-lg text-text-secondary italic leading-relaxed">
                "TLD Sports Grill has been instrumental in supporting our youth football program. Their sponsorship allowed us to purchase new equipment and uniforms, but more importantly, their team members volunteer as mentors for our young athletes."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                    alt="Peter Kamau"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-primary">Peter Kamau</h4>
                  <p className="text-text-secondary text-sm">Coach, Lavington Youth FC</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <blockquote className="text-lg text-text-secondary italic leading-relaxed">
                "As a local farmer, partnering with TLD Sports Grill has transformed my business. Their commitment to organic sourcing and fair pricing has provided stable income for my family and allowed me to expand my operations."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                    alt="Mary Njeri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-primary">Mary Njeri</h4>
                  <p className="text-text-secondary text-sm">Organic Farmer, Kiambu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;