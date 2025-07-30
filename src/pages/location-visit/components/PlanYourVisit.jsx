import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PlanYourVisit = () => {
  const [activeTab, setActiveTab] = useState('dining');

  const visitTypes = {
    dining: {
      title: "Intimate Dining",
      subtitle: "Perfect for dates, business meals, and quiet conversations",
      image: "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg",
      bestTimes: ["Weekday Lunch (12-3 PM)", "Early Evening (5-7 PM)", "Sunday Afternoons"],
      atmosphere: "Relaxed and sophisticated",
      recommendations: [
        "Arrive early for window seating",
        "Try our signature organic chicken dishes",
        "Perfect for business discussions",
        "Quieter atmosphere for conversations"
      ]
    },
    sports: {
      title: "Sports Viewing",
      subtitle: "High-energy atmosphere for game day excitement",
      image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg",
      bestTimes: ["Match Days (2 hours before kickoff)", "Weekend Evenings", "Tournament Finals"],
      atmosphere: "Electric and energetic",
      recommendations: [
        "Book tables for major matches",
        "Arrive early for best viewing spots",
        "Join our sports community",
        "Perfect for group celebrations"
      ]
    },
    groups: {
      title: "Group Events",
      subtitle: "Celebrations, team outings, and special occasions",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      bestTimes: ["Weekend Evenings", "After Work Hours", "Special Event Days"],
      atmosphere: "Celebratory and social",
      recommendations: [
        "Advance booking required for 8+ people",
        "Customizable menu options available",
        "Private area arrangements possible",
        "Special occasion packages available"
      ]
    }
  };

  const accessibilityFeatures = [
    {
      icon: "Wheelchair",
      title: "Wheelchair Accessible",
      description: "Ground floor location with wide entrances and accessible restrooms"
    },
    {
      icon: "Car",
      title: "Accessible Parking",
      description: "Designated parking spaces close to mall entrance"
    },
    {
      icon: "Volume2",
      title: "Hearing Assistance",
      description: "Visual displays for sports commentary and reduced noise zones"
    },
    {
      icon: "Eye",
      title: "Visual Assistance",
      description: "High contrast menus and clear signage throughout"
    }
  ];

  const weatherTips = [
    {
      season: "Dry Season (Dec-Mar, Jun-Oct)",
      icon: "Sun",
      tips: ["Perfect for outdoor mall walking", "Comfortable temperatures", "Clear sports viewing weather"],
      color: "text-yellow-600"
    },
    {
      season: "Rainy Season (Apr-May, Nov)",
      icon: "CloudRain",
      tips: ["Covered mall parking available", "Cozy indoor atmosphere", "Perfect for extended dining"],
      color: "text-blue-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
            Plan Your Perfect Visit
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Whether you're seeking intimate dining or energetic sports viewing, we'll help you choose the perfect time
          </p>
        </div>

        {/* Visit Type Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-lg p-1 inline-flex">
            {Object.keys(visitTypes).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-md font-medium transition-all capitalize ${
                  activeTab === key
                    ? 'bg-white text-primary premium-shadow'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {visitTypes[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Visit Type */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-xl p-8 premium-shadow">
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  {visitTypes[activeTab].title}
                </h3>
                <p className="text-text-secondary mb-6">{visitTypes[activeTab].subtitle}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <Icon name="Clock" size={18} className="text-secondary mr-2" />
                      Best Times to Visit
                    </h4>
                    <div className="space-y-2">
                      {visitTypes[activeTab].bestTimes.map((time, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="ArrowRight" size={16} className="text-secondary" />
                          <span className="text-text-secondary">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <Icon name="Heart" size={18} className="text-accent mr-2" />
                      Atmosphere
                    </h4>
                    <p className="text-text-secondary">{visitTypes[activeTab].atmosphere}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <Icon name="Lightbulb" size={18} className="text-secondary mr-2" />
                      Our Recommendations
                    </h4>
                    <div className="space-y-2">
                      {visitTypes[activeTab].recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden premium-shadow-lg">
                <Image
                  src={visitTypes[activeTab].image}
                  alt={`${visitTypes[activeTab].title} atmosphere at TLD Sports Grill`}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-lg font-semibold">{visitTypes[activeTab].atmosphere}</div>
                  <div className="text-white/80 text-sm">Experience the perfect ambiance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Information */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
              Accessible for Everyone
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We're committed to providing an inclusive experience for all our guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 premium-shadow text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size={24} className="text-secondary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">{feature.title}</h4>
                <p className="text-sm text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Considerations */}
        <div className="bg-muted rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Weather & Seasonal Tips
            </h3>
            <p className="text-text-secondary">
              Make the most of your visit regardless of Nairobi's weather
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weatherTips.map((tip, index) => (
              <div key={index} className="bg-card rounded-lg p-6 premium-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name={tip.icon} size={24} className={tip.color} />
                  <h4 className="font-semibold text-primary">{tip.season}</h4>
                </div>
                <div className="space-y-2">
                  {tip.tips.map((tipText, tipIndex) => (
                    <div key={tipIndex} className="flex items-center space-x-2">
                      <Icon name="ArrowRight" size={16} className="text-secondary" />
                      <span className="text-text-secondary text-sm">{tipText}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanYourVisit;