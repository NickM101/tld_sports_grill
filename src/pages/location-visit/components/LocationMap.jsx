import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationMap = () => {
  const [activeTab, setActiveTab] = useState('map');

  const locationDetails = {
    address: "M-Square Mall, Ground Floor, Lavington, Nairobi",
    coordinates: "-1.2921, 36.8219",
    phone: "+254 700 123 456",
    email: "visit@tldsportsgrill.co.ke"
  };

  const transportOptions = [
    {
      type: "Matatu",
      routes: ["Route 46 (CBD - Lavington)", "Route 102 (Westlands - Lavington)"],
      dropOff: "Lavington Shopping Centre"
    },
    {
      type: "Uber/Bolt",
      routes: ["Available 24/7"],
      dropOff: "M-Square Mall Main Entrance"
    },
    {
      type: "Personal Vehicle",
      routes: ["Gitanga Road", "James Gichuru Road"],
      dropOff: "M-Square Mall Parking"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
            Find Us in the Heart of Lavington
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Strategically located in M-Square Mall for easy access from anywhere in Nairobi
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab('map')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'map' ?'bg-white text-primary premium-shadow' :'text-text-secondary hover:text-primary'
              }`}
            >
              Interactive Map
            </button>
            <button
              onClick={() => setActiveTab('transport')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'transport' ?'bg-white text-primary premium-shadow' :'text-text-secondary hover:text-primary'
              }`}
            >
              Transport Options
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            {activeTab === 'map' && (
              <div className="bg-card rounded-xl premium-shadow overflow-hidden">
                <div className="h-96 lg:h-[500px] relative">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="TLD Sports Grill Location - M-Square Mall Lavington"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=-1.2921,36.8219&z=16&output=embed"
                    className="border-0"
                  />
                  
                  {/* Map Overlay Controls */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-white text-primary hover:bg-gray-50 premium-shadow"
                      iconName="Navigation"
                      iconPosition="left"
                    >
                      Directions
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'transport' && (
              <div className="space-y-6">
                {transportOptions.map((option, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 premium-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon 
                          name={option.type === 'Matatu' ? 'Bus' : option.type === 'Personal Vehicle' ? 'Car' : 'Smartphone'} 
                          size={24} 
                          className="text-secondary" 
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-2">{option.type}</h3>
                        <div className="space-y-2">
                          {option.routes.map((route, routeIndex) => (
                            <div key={routeIndex} className="flex items-center space-x-2">
                              <Icon name="ArrowRight" size={16} className="text-secondary" />
                              <span className="text-text-secondary">{route}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 flex items-center space-x-2">
                          <Icon name="MapPin" size={16} className="text-accent" />
                          <span className="text-sm text-text-secondary font-medium">Drop-off: {option.dropOff}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-card rounded-xl p-6 premium-shadow">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <Icon name="MapPin" size={20} className="text-secondary mr-2" />
                Location Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-text-secondary mb-1">Address</div>
                  <div className="text-primary font-medium">{locationDetails.address}</div>
                </div>
                
                <div>
                  <div className="text-sm text-text-secondary mb-1">Coordinates</div>
                  <div className="text-primary font-mono text-sm">{locationDetails.coordinates}</div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <Button
                    variant="outline"
                    fullWidth
                    className="mb-3"
                    iconName="Phone"
                    iconPosition="left"
                  >
                    {locationDetails.phone}
                  </Button>
                  
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Mail"
                    iconPosition="left"
                  >
                    {locationDetails.email}
                  </Button>
                </div>
              </div>
            </div>

            {/* Parking Information */}
            <div className="bg-card rounded-xl p-6 premium-shadow">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <Icon name="Car" size={20} className="text-secondary mr-2" />
                Parking & Access
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-text-secondary">Free parking for diners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-text-secondary">24/7 security coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-text-secondary">Wheelchair accessible</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-text-secondary">Ground floor location</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl p-6 border border-secondary/20">
              <h3 className="text-lg font-semibold text-primary mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  className="bg-secondary hover:bg-cta-hover text-secondary-foreground cta-hover"
                  iconName="Navigation"
                  iconPosition="left"
                >
                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;