import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg"
          alt="TLD Sports Grill interior with warm lighting and sports atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Flame Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="flame-pulse">
                <svg 
                  width="80" 
                  height="80" 
                  viewBox="0 0 80 80" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M40 5C40 5 20 20 20 40C20 51.0457 28.9543 60 40 60C51.0457 60 60 51.0457 60 40C60 20 40 5 40 5Z" 
                    fill="var(--color-secondary)"
                  />
                  <path 
                    d="M40 15C40 15 30 25 30 40C30 45.5228 34.4772 50 40 50C45.5228 50 50 45.5228 50 40C50 25 40 15 40 15Z" 
                    fill="var(--color-accent)"
                  />
                  <path 
                    d="M40 25C40 25 35 30 35 40C35 42.7614 37.2386 45 40 45C42.7614 45 45 42.7614 45 40C45 30 40 25 40 25Z" 
                    fill="var(--color-primary)"
                  />
                </svg>
              </div>
            </div>

            <h1 className="clamp-headline font-oswald font-semibold text-white mb-6">
              Our Story of
              <span className="block text-secondary">Elevated Togetherness</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From a vision to create Nairobi's premier sports dining destination to becoming the cultural epicenter where quality meets passion, discover the journey that transformed TLD Sports Grill into more than just a restaurant.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-3 text-secondary">
                <Icon name="Calendar" size={20} />
                <span className="font-inter font-medium">Est. 2019</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary">
                <Icon name="MapPin" size={20} />
                <span className="font-inter font-medium">Lavington, Nairobi</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary">
                <Icon name="Users" size={20} />
                <span className="font-inter font-medium">50,000+ Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 premium-shadow text-center">
              <div className="text-3xl lg:text-4xl font-oswald font-semibold text-secondary mb-2">5+</div>
              <p className="text-text-secondary font-inter text-sm">Years of Excellence</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 premium-shadow text-center">
              <div className="text-3xl lg:text-4xl font-oswald font-semibold text-secondary mb-2">100%</div>
              <p className="text-text-secondary font-inter text-sm">Organic Ingredients</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 premium-shadow text-center">
              <div className="text-3xl lg:text-4xl font-oswald font-semibold text-secondary mb-2">25+</div>
              <p className="text-text-secondary font-inter text-sm">Team Members</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 premium-shadow text-center">
              <div className="text-3xl lg:text-4xl font-oswald font-semibold text-secondary mb-2">15+</div>
              <p className="text-text-secondary font-inter text-sm">Sports Screens</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-secondary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;