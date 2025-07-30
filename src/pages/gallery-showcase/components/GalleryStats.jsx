import React from 'react';
import Icon from '../../../components/AppIcon';

const GalleryStats = () => {
  const stats = [
    {
      id: 1,
      icon: 'Camera',
      number: '500+',
      label: 'Photos Captured',
      description: 'Moments of joy, celebration, and culinary excellence'
    },
    {
      id: 2,
      icon: 'Users',
      number: '10K+',
      label: 'Happy Customers',
      description: 'Featured in our gallery and social media'
    },
    {
      id: 3,
      icon: 'Trophy',
      number: '150+',
      label: 'Game Days',
      description: 'Epic sporting events and unforgettable atmospheres'
    },
    {
      id: 4,
      icon: 'Calendar',
      number: '200+',
      label: 'Special Events',
      description: 'Corporate gatherings, celebrations, and private parties'
    },
    {
      id: 5,
      icon: 'ChefHat',
      number: '50+',
      label: 'Signature Dishes',
      description: 'Organic creations showcased in stunning detail'
    },
    {
      id: 6,
      icon: 'Heart',
      number: '25K+',
      label: 'Social Shares',
      description: 'Customer posts featuring their TLD experiences'
    }
  ];

  return (
    <div className="bg-primary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="BarChart3" size={24} className="text-secondary" />
            <span className="text-secondary font-oswald font-semibold text-lg tracking-wide">
              BY THE NUMBERS
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-white mb-4">
            Our Gallery in Numbers
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Every image tells a story, every moment captures an emotion. Here's what our visual journey looks like.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center group"
            >
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4 group-hover:scale-110 smooth-transition">
                <Icon name={stat.icon} size={28} className="text-secondary-foreground" />
              </div>

              {/* Number */}
              <div className="text-4xl lg:text-5xl font-oswald font-bold text-white mb-2 group-hover:text-secondary smooth-transition">
                {stat.number}
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-600">
          <p className="text-gray-300 text-lg mb-4">
            Ready to become part of our visual story?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-secondary">
              <Icon name="MapPin" size={20} />
              <span className="font-medium">M-Square Mall, Lavington</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-secondary">
              <Icon name="Clock" size={20} />
              <span className="font-medium">Open Daily 10AM - 11PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryStats;