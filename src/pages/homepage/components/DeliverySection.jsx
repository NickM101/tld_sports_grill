import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const DeliverySection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [estimatedDelivery, setEstimatedDelivery] = useState('25-35');

  const deliveryPartners = [
    {
      id: 1,
      name: "Glovo",
      logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=120&h=60&fit=crop&crop=center",
      deliveryTime: "25-35 min",
      deliveryFee: "KES 150",
      rating: 4.8,
      isAvailable: true,
      promoCode: "SPORTS20",
      discount: "20% off"
    },
    {
      id: 2,
      name: "Uber Eats",
      logo: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?w=120&h=60&fit=crop&crop=center",
      deliveryTime: "30-40 min",
      deliveryFee: "KES 120",
      rating: 4.7,
      isAvailable: true,
      promoCode: "NEWUSER",
      discount: "Free delivery"
    }
  ];

  const popularItems = [
    {
      id: 1,
      name: "Signature Organic Wings",
      description: "Our famous free-range chicken wings with house-made sauces",
      price: "KES 1,200",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop&crop=center",
      rating: 4.9,
      orderCount: "500+ orders this week"
    },
    {
      id: 2,
      name: "Sports Grill Burger",
      description: "Premium beef patty with organic vegetables and artisan bun",
      price: "KES 1,500",
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?w=300&h=200&fit=crop&crop=center",
      rating: 4.8,
      orderCount: "350+ orders this week"
    },
    {
      id: 3,
      name: "Game Day Platter",
      description: "Perfect for sharing - wings, nachos, sliders, and dips",
      price: "KES 2,800",
      image: "https://images.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg?w=300&h=200&fit=crop&crop=center",
      rating: 4.9,
      orderCount: "200+ orders this week"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      // Dynamic delivery time based on current hour
      const hour = new Date().getHours();
      if (hour >= 11 && hour <= 14) {
        setEstimatedDelivery('35-45'); // Lunch rush
      } else if (hour >= 18 && hour <= 21) {
        setEstimatedDelivery('40-50'); // Dinner rush
      } else {
        setEstimatedDelivery('25-35'); // Off-peak
      }
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const isDeliveryAvailable = () => {
    const hour = currentTime.getHours();
    return hour >= 10 && hour <= 23; // 10 AM to 11 PM
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-600 font-semibold text-lg">Now Delivering</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
            TLD Sports Grill to Your Door
          </h2>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Craving our signature organic dishes? Get them delivered fresh and hot to your location in Nairobi
          </p>
        </div>

        {/* Delivery Status */}
        <div className="bg-surface rounded-2xl p-6 mb-12 premium-shadow">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Icon name="Clock" size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-primary text-lg">
                  {isDeliveryAvailable() ? 'Delivery Available Now' : 'Delivery Closed'}
                </h3>
                <p className="text-text-secondary">
                  {isDeliveryAvailable() 
                    ? `Estimated delivery: ${estimatedDelivery} minutes`
                    : 'Delivery hours: 10:00 AM - 11:00 PM'
                  }
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-oswald font-semibold text-primary">
                  {currentTime.toLocaleTimeString('en-GB', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
                <div className="text-sm text-text-secondary">Current Time</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-oswald font-semibold text-secondary">
                  KES 150
                </div>
                <div className="text-sm text-text-secondary">Min. Order</div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Partners */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {deliveryPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-card rounded-xl p-6 premium-shadow hover:shadow-lg smooth-transition border border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-8 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg">{partner.name}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                        <span className="text-sm text-text-secondary">{partner.rating}</span>
                      </div>
                      <span className="text-text-secondary">•</span>
                      <span className="text-sm text-text-secondary">{partner.deliveryTime}</span>
                    </div>
                  </div>
                </div>

                <div className={`w-3 h-3 rounded-full ${
                  partner.isAvailable ? 'bg-green-500' : 'bg-red-500'
                }`} />
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Delivery Fee:</span>
                  <span className="font-medium text-primary">{partner.deliveryFee}</span>
                </div>
                
                {partner.promoCode && (
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-secondary">
                          Code: {partner.promoCode}
                        </span>
                        <p className="text-xs text-text-secondary">{partner.discount}</p>
                      </div>
                      <Icon name="Tag" size={16} className="text-secondary" />
                    </div>
                  </div>
                )}
              </div>

              <Button
                variant="default"
                fullWidth
                className={`${
                  partner.isAvailable
                    ? 'bg-secondary hover:bg-cta-hover text-secondary-foreground'
                    : 'bg-muted text-text-secondary cursor-not-allowed'
                } cta-hover`}
                disabled={!partner.isAvailable}
                iconName="ExternalLink"
                iconPosition="right"
              >
                {partner.isAvailable ? `Order on ${partner.name}` : 'Currently Unavailable'}
              </Button>
            </div>
          ))}
        </div>

        {/* Popular Items */}
        <div className="mb-12">
          <h3 className="text-2xl font-oswald font-semibold text-primary mb-8 text-center">
            Most Ordered This Week
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {popularItems.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-xl overflow-hidden premium-shadow hover:shadow-lg smooth-transition border border-border ingredient-float"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-primary">
                    {item.rating} ★
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-primary text-lg mb-2">{item.name}</h4>
                  <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-oswald font-semibold text-secondary">
                      {item.price}
                    </span>
                    <span className="text-xs text-text-secondary bg-muted px-2 py-1 rounded-full">
                      {item.orderCount}
                    </span>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    iconName="Plus"
                    iconPosition="left"
                  >
                    Add to Order
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu CTA */}
        <div className="text-center bg-primary rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-oswald font-semibold mb-4">
            View Our Complete Menu
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Explore our full range of organic dishes, craft beverages, and game day specials. Download our menu or browse online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-secondary hover:bg-cta-hover text-secondary-foreground cta-hover"
              iconName="Download"
              iconPosition="left"
            >
              Download Menu PDF
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              iconName="Globe"
              iconPosition="left"
            >
              Browse Online Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;