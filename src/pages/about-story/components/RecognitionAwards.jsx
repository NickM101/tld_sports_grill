import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const RecognitionAwards = () => {
  const awards = [
    {
      title: "Best Sports Bar 2023",
      organization: "Nairobi Dining Awards",
      year: "2023",
      description: "Recognized for exceptional atmosphere, quality food, and outstanding sports viewing experience.",
      icon: "Trophy",
      image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg"
    },
    {
      title: "Sustainable Restaurant Award",
      organization: "Kenya Green Business Council",
      year: "2023",
      description: "Honored for commitment to organic sourcing, waste reduction, and environmental sustainability.",
      icon: "Leaf",
      image: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg"
    },
    {
      title: "Community Impact Recognition",
      organization: "Lavington Business Association",
      year: "2022",
      description: "Acknowledged for outstanding contribution to local community development and youth sports support.",
      icon: "Heart",
      image: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg"
    },
    {
      title: "Excellence in Hospitality",
      organization: "Kenya Tourism Board",
      year: "2022",
      description: "Celebrated for exceptional service standards and contribution to Nairobi\'s hospitality sector.",
      icon: "Star",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
    }
  ];

  const mediaFeatures = [
    {
      publication: "Nairobi Gourmet Magazine",
      title: "The Rise of Sports Dining Culture",
      date: "March 2024",
      excerpt: "TLD Sports Grill is redefining what it means to be a sports bar in Nairobi, elevating the experience with organic ingredients and premium atmosphere...",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      type: "Feature Article"
    },
    {
      publication: "Kenya Business Weekly",
      title: "Local Partnerships Drive Success",
      date: "January 2024",
      excerpt: "How TLD Sports Grill's commitment to local sourcing is creating a sustainable business model while supporting Kenyan farmers...",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      type: "Business Profile"
    },
    {
      publication: "Nairobi Lifestyle",
      title: "Where Sports Meets Fine Dining",
      date: "November 2023",
      excerpt: "A deep dive into the culinary philosophy that makes TLD Sports Grill stand out in Nairobi\'s competitive dining scene...",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      type: "Restaurant Review"
    }
  ];

  const certifications = [
    {
      name: "Organic Certification",
      issuer: "Kenya Organic Agriculture Network",
      validity: "Valid until Dec 2024",
      icon: "Shield"
    },
    {
      name: "Food Safety Excellence",
      issuer: "Kenya Bureau of Standards",
      validity: "Valid until Jun 2024",
      icon: "CheckCircle"
    },
    {
      name: "Sustainable Business Practices",
      issuer: "Kenya Green Business Council",
      validity: "Valid until Sep 2024",
      icon: "Leaf"
    },
    {
      name: "Tourism Quality Assurance",
      issuer: "Kenya Tourism Board",
      validity: "Valid until Mar 2025",
      icon: "Star"
    }
  ];

  const customerStats = [
    {
      metric: "4.8/5",
      label: "Google Reviews",
      icon: "Star",
      count: "500+ Reviews"
    },
    {
      metric: "4.9/5",
      label: "TripAdvisor Rating",
      icon: "MapPin",
      count: "300+ Reviews"
    },
    {
      metric: "95%",
      label: "Customer Satisfaction",
      icon: "Heart",
      count: "Based on surveys"
    },
    {
      metric: "85%",
      label: "Repeat Customers",
      icon: "Users",
      count: "Monthly average"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-6">
            Recognition & Awards
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders, 
            media publications, and most importantly, our valued customers.
          </p>
        </div>

        {/* Customer Satisfaction Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {customerStats.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl p-6 premium-shadow text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={32} className="text-secondary" />
              </div>
              <div className="text-3xl lg:text-4xl font-oswald font-semibold text-secondary mb-2">
                {stat.metric}
              </div>
              <h3 className="font-inter font-semibold text-primary mb-1">
                {stat.label}
              </h3>
              <p className="text-text-secondary text-sm">
                {stat.count}
              </p>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-12 text-center">
            Industry Awards
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden premium-shadow">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-oswald font-semibold text-primary mb-2">
                        {award.title}
                      </h4>
                      <p className="text-secondary font-medium mb-1">
                        {award.organization}
                      </p>
                      <p className="text-text-secondary text-sm">
                        {award.year}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={award.icon} size={24} className="text-secondary" />
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Features */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-12 text-center">
            Media Features
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden premium-shadow">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full mb-3">
                      {feature.type}
                    </span>
                    <h4 className="text-lg font-oswald font-semibold text-primary mb-2">
                      {feature.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-text-secondary mb-3">
                      <span className="font-medium">{feature.publication}</span>
                      <span>{feature.date}</span>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.excerpt}
                  </p>
                  <button className="mt-4 text-secondary hover:text-cta-hover font-medium text-sm flex items-center space-x-1 transition-colors duration-300">
                    <span>Read Full Article</span>
                    <Icon name="ExternalLink" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-12 text-center">
            Certifications & Standards
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 premium-shadow text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert.icon} size={32} className="text-secondary" />
                </div>
                <h4 className="font-inter font-semibold text-primary mb-2">
                  {cert.name}
                </h4>
                <p className="text-text-secondary text-sm mb-2">
                  {cert.issuer}
                </p>
                <p className="text-secondary text-xs font-medium">
                  {cert.validity}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition CTA */}
        <div className="bg-card rounded-xl p-8 lg:p-12 premium-shadow text-center">
          <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-4">
            Experience Award-Winning Excellence
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have experienced the quality and service 
            that has earned us recognition across Nairobi's dining scene.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-secondary hover:bg-cta-hover text-secondary-foreground font-inter font-semibold rounded-lg cta-hover transition-all duration-300">
              Visit Us Today
            </button>
            <button className="px-8 py-3 border border-border text-primary hover:bg-muted font-inter font-medium rounded-lg transition-all duration-300">
              View Our Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionAwards;