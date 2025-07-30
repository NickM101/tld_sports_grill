import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WhatToExpect = () => {
  const [activeExpectation, setActiveExpectation] = useState('atmosphere');

  const expectations = {
    atmosphere: {
      title: "Atmosphere & Ambiance",
      subtitle: "What you\'ll feel when you walk in",
      image: "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg",
      details: [
        {
          icon: "Volume2",
          title: "Sound Levels",
          description: "Moderate during dining hours, energetic during games",
          level: "Comfortable conversation always possible"
        },
        {
          icon: "Lightbulb",
          title: "Lighting",
          description: "Warm, inviting lighting with focused sports viewing areas",
          level: "Perfect for both dining and watching"
        },
        {
          icon: "Users",
          title: "Crowd",
          description: "Professional, diverse, and sports-passionate clientele",
          level: "Welcoming and inclusive environment"
        },
        {
          icon: "Music",
          title: "Entertainment",
          description: "Curated music between games, live sports commentary",
          level: "Enhanced but never overwhelming"
        }
      ]
    },
    service: {
      title: "Service Experience",
      subtitle: "Our commitment to exceptional hospitality",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      details: [
        {
          icon: "Clock",
          title: "Response Time",
          description: "Prompt greeting within 2 minutes of seating",
          level: "Efficient without being rushed"
        },
        {
          icon: "Heart",
          title: "Personal Touch",
          description: "Staff remember preferences and provide recommendations",
          level: "Genuine care for your experience"
        },
        {
          icon: "Award",
          title: "Expertise",
          description: "Knowledgeable about menu, sports, and local area",
          level: "Professional and passionate team"
        },
        {
          icon: "MessageCircle",
          title: "Communication",
          description: "Clear updates on orders and game schedules",
          level: "Transparent and helpful"
        }
      ]
    },
    dining: {
      title: "Dining Experience",
      subtitle: "Quality and presentation standards",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      details: [
        {
          icon: "ChefHat",
          title: "Food Quality",
          description: "Fresh, organic ingredients prepared to order",
          level: "Premium quality guaranteed"
        },
        {
          icon: "Clock",
          title: "Preparation Time",
          description: "15-25 minutes for most dishes, communicated upfront",
          level: "Worth the wait for quality"
        },
        {
          icon: "Utensils",
          title: "Presentation",
          description: "Instagram-worthy plating with attention to detail",
          level: "Visual appeal matches taste"
        },
        {
          icon: "Leaf",
          title: "Dietary Options",
          description: "Vegetarian, gluten-free, and healthy choices available",
          level: "Something delicious for everyone"
        }
      ]
    }
  };

  const dressCode = {
    recommended: [
      "Smart casual attire",
      "Business casual for lunch",
      "Comfortable shoes for mall walking",
      "Light jacket for air conditioning"
    ],
    avoid: [
      "Overly formal business suits",
      "Beach wear or flip-flops",
      "Torn or dirty clothing",
      "Offensive graphics or text"
    ]
  };

  const firstTimeVisitorTips = [
    {
      icon: "MapPin",
      title: "Finding Us",
      tip: "Enter M-Square Mall through the main entrance and follow signs to the ground floor dining area"
    },
    {
      icon: "Car",
      title: "Parking",
      tip: "Use the covered parking and keep your ticket - we validate for diners"
    },
    {
      icon: "Clock",
      title: "Timing",
      tip: "Arrive 15 minutes early for reservations, especially during game days"
    },
    {
      icon: "Smartphone",
      title: "Connectivity",
      tip: "Free WiFi available - ask staff for the password"
    },
    {
      icon: "CreditCard",
      title: "Payment",
      tip: "We accept cash, cards, and mobile money (M-Pesa)"
    },
    {
      icon: "Camera",
      title: "Photos",
      tip: "Feel free to take photos - tag us @tldsportsgrill for a chance to be featured"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
            What to Expect
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Your first visit should feel familiar and exciting. Here's what awaits you at TLD Sports Grill.
          </p>
        </div>

        {/* Expectation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-lg p-1 inline-flex">
            {Object.keys(expectations).map((key) => (
              <button
                key={key}
                onClick={() => setActiveExpectation(key)}
                className={`px-6 py-3 rounded-md font-medium transition-all capitalize ${
                  activeExpectation === key
                    ? 'bg-white text-primary premium-shadow'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {expectations[key].title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Expectation */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-xl p-8 premium-shadow">
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  {expectations[activeExpectation].title}
                </h3>
                <p className="text-text-secondary mb-6">{expectations[activeExpectation].subtitle}</p>
                
                <div className="space-y-6">
                  {expectations[activeExpectation].details.map((detail, index) => (
                    <div key={index} className="border-l-4 border-secondary/20 pl-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <Icon name={detail.icon} size={18} className="text-secondary" />
                        <h4 className="font-semibold text-primary">{detail.title}</h4>
                      </div>
                      <p className="text-text-secondary mb-2">{detail.description}</p>
                      <div className="text-sm text-secondary font-medium">{detail.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden premium-shadow-lg">
                <Image
                  src={expectations[activeExpectation].image}
                  alt={`${expectations[activeExpectation].title} at TLD Sports Grill`}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-lg font-semibold">{expectations[activeExpectation].title}</div>
                  <div className="text-white/80 text-sm">{expectations[activeExpectation].subtitle}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dress Code */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-xl p-8 premium-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <Icon name="Shirt" size={24} className="text-secondary" />
              <h3 className="text-2xl font-semibold text-primary">Dress Code</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-success mb-3 flex items-center">
                  <Icon name="Check" size={18} className="text-success mr-2" />
                  Recommended
                </h4>
                <div className="space-y-2">
                  {dressCode.recommended.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="ArrowRight" size={16} className="text-secondary" />
                      <span className="text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-error mb-3 flex items-center">
                  <Icon name="X" size={18} className="text-error mr-2" />
                  Please Avoid
                </h4>
                <div className="space-y-2">
                  {dressCode.avoid.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="ArrowRight" size={16} className="text-error" />
                      <span className="text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-secondary/5 rounded-lg border border-secondary/20">
              <p className="text-sm text-text-secondary">
                <strong className="text-primary">Bottom line:</strong> Dress comfortably and appropriately 
                for a premium casual dining experience. When in doubt, smart casual is always perfect.
              </p>
            </div>
          </div>

          {/* First Time Visitor Tips */}
          <div className="bg-card rounded-xl p-8 premium-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <Icon name="Lightbulb" size={24} className="text-accent" />
              <h3 className="text-2xl font-semibold text-primary">First-Time Visitor Tips</h3>
            </div>
            
            <div className="space-y-4">
              {firstTimeVisitorTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={tip.icon} size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">{tip.title}</h4>
                    <p className="text-sm text-text-secondary">{tip.tip}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-lg border border-secondary/20">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Heart" size={16} className="text-secondary" />
                <span className="font-medium text-primary">Still have questions?</span>
              </div>
              <p className="text-sm text-text-secondary">
                Don't hesitate to call us at +254 700 123 456 or message us on WhatsApp. We're here to make your first visit perfect.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-br from-primary to-primary/80 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-4">Ready for Your Visit?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            We can't wait to welcome you to TLD Sports Grill. Come experience Nairobi's premier 
            sports dining destination for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary hover:bg-cta-hover text-secondary-foreground px-8 py-3 rounded-lg font-semibold cta-hover transition-all">
              Book Your Table
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;