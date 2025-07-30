import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PrivateEventsSection = () => {
  const eventTypes = [
    {
      id: 1,
      title: "Corporate Events",
      description: "Team building, client entertainment, product launches, and business celebrations",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
      features: ["Dedicated service staff", "AV equipment included", "Custom menu options", "Private dining areas"],
      capacity: "10-100 guests",
      icon: "Building2"
    },
    {
      id: 2,
      title: "Private Celebrations",
      description: "Birthdays, anniversaries, graduations, and milestone celebrations",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
      features: ["Personalized decorations", "Custom cake arrangements", "Photo opportunities", "Flexible timing"],
      capacity: "5-50 guests",
      icon: "PartyPopper"
    },
    {
      id: 3,
      title: "Sports Viewing Parties",
      description: "Watch major games with your group on our premium screens",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      features: ["Reserved seating area", "Game day specials", "Group ordering", "Live commentary"],
      capacity: "15-80 guests",
      icon: "Trophy"
    }
  ];

  const amenities = [
    { icon: "Wifi", title: "High-Speed WiFi", description: "Complimentary internet access" },
    { icon: "Car", title: "Free Parking", description: "Ample parking space available" },
    { icon: "Utensils", title: "Custom Catering", description: "Tailored menu options" },
    { icon: "Music", title: "Sound System", description: "Professional audio equipment" },
    { icon: "Camera", title: "Photo Areas", description: "Instagram-worthy backdrops" },
    { icon: "Shield", title: "Private Security", description: "Dedicated event security" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
            Private Events & Celebrations
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Transform your special occasions into unforgettable experiences at Nairobi's premier sports entertainment venue. From intimate gatherings to large corporate events, we create moments that matter.
          </p>
        </div>

        {/* Event Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((event) => (
            <div
              key={event.id}
              className="bg-card premium-shadow rounded-2xl overflow-hidden smooth-transition hover:premium-shadow-lg hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={`${event.title} at TLD Sports Grill`}
                  className="w-full h-full object-cover smooth-transition hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-secondary/90 backdrop-blur-sm rounded-full p-2">
                    <Icon name={event.icon} size={20} className="text-secondary-foreground" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary">
                    {event.title}
                  </h3>
                  <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {event.capacity}
                  </span>
                </div>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {event.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  className="hover:bg-secondary hover:text-secondary-foreground"
                >
                  Plan This Event
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-4">
              Event Amenities & Services
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Everything you need for a successful event, included in our comprehensive packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-card rounded-lg smooth-transition hover:premium-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name={amenity.icon} size={20} className="text-secondary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">
                    {amenity.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-oswald font-semibold mb-4">
              Ready to Plan Your Event?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our event planning team is ready to help you create an unforgettable experience. Get a custom quote and venue tour today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold cta-hover"
              >
                Schedule Venue Tour
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Download Event Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateEventsSection;