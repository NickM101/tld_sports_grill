import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationDetails = () => {
  const locationFeatures = [
    {
      icon: "MapPin",
      title: "Prime Location",
      description: "M-Square Mall, Ground Floor - Lavington's premier shopping destination"
    },
    {
      icon: "Car",
      title: "Free Parking",
      description: "Ample parking space available for all event attendees"
    },
    {
      icon: "Bus",
      title: "Public Transport",
      description: "Easily accessible via matatu routes and ride-sharing services"
    },
    {
      icon: "Building2",
      title: "Business District",
      description: "Located in Nairobi\'s upscale Lavington neighborhood"
    },
    {
      icon: "Clock",
      title: "Extended Hours",
      description: "Open daily 10:00 AM - 11:00 PM for events and dining"
    },
    {
      icon: "Wifi",
      title: "High-Speed WiFi",
      description: "Complimentary internet access throughout the venue"
    }
  ];

  const nearbyLandmarks = [
    { name: "Lavington Mall", distance: "200m", type: "Shopping" },
    { name: "Lavington Green", distance: "500m", type: "Shopping" },
    { name: "Nairobi Hospital", distance: "1.2km", type: "Healthcare" },
    { name: "Westlands CBD", distance: "3.5km", type: "Business" },
    { name: "JKIA Airport", distance: "18km", type: "Transport" },
    { name: "Nairobi CBD", distance: "8km", type: "Business" }
  ];

  const operatingHours = [
    { day: "Monday - Thursday", hours: "10:00 AM - 11:00 PM" },
    { day: "Friday - Saturday", hours: "10:00 AM - 12:00 AM" },
    { day: "Sunday", hours: "10:00 AM - 11:00 PM" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
            Visit Our Location
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Conveniently located in the heart of Lavington, TLD Sports Grill is easily accessible for all your events and dining experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="space-y-6">
            <div className="bg-card premium-shadow rounded-2xl overflow-hidden">
              <div className="h-80 lg:h-96">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="TLD Sports Grill Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=-1.2921,36.7814&z=15&output=embed"
                  className="border-0"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={20} className="text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      TLD Sports Grill
                    </h3>
                    <p className="text-text-secondary mb-4">
                      M-Square Mall, Ground Floor, Shop G12<br />
                      Lavington, Nairobi, Kenya
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-secondary hover:bg-cta-hover text-secondary-foreground"
                        onClick={() => window.open('https://maps.google.com/?q=-1.2921,36.7814', '_blank')}
                      >
                        <Icon name="Navigation" size={16} className="mr-2" />
                        Get Directions
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open('tel:+254700123456', '_blank')}
                      >
                        <Icon name="Phone" size={16} className="mr-2" />
                        Call Us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-6">
                Location Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locationFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-card premium-shadow rounded-lg smooth-transition hover:premium-shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <Icon name={feature.icon} size={20} className="text-secondary mt-1" />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-6">
                Operating Hours
              </h3>
              <div className="bg-card premium-shadow rounded-lg p-6">
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-primary">
                        {schedule.day}
                      </span>
                      <span className="text-text-secondary">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-secondary/10 rounded-lg">
                  <p className="text-sm text-secondary font-medium">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    Extended hours available for private events
                  </p>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-6">
                Nearby Landmarks
              </h3>
              <div className="bg-card premium-shadow rounded-lg p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {nearbyLandmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium text-primary text-sm">
                          {landmark.name}
                        </p>
                        <p className="text-xs text-text-secondary">
                          {landmark.type}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-secondary">
                        {landmark.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-muted rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Need Help Finding Us?
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Our team is happy to provide detailed directions or arrange transportation for your event guests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold cta-hover"
              onClick={() => window.open('https://wa.me/254700123456', '_blank')}
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              WhatsApp Directions
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('tel:+254700123456', '_blank')}
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Call for Assistance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;