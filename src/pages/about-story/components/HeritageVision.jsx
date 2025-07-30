import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';


const HeritageVision = () => {
  const [activeTab, setActiveTab] = useState('heritage');

  const founderStory = {
    name: "James Mwangi",
    title: "Founder & CEO",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    quote: `I envisioned a place where Nairobi's sports enthusiasts could gather without compromising on quality. TLD Sports Grill was born from the belief that great food and passionate sports culture should coexist in perfect harmony.`
  };

  const milestones = [
    {
      year: "2019",
      title: "The Vision",
      description: "Concept development began with extensive research into Nairobi\'s dining and sports entertainment landscape.",
      icon: "Lightbulb"
    },
    {
      year: "2020",
      title: "Foundation Laid",
      description: "Secured prime location in M-Square Mall, Lavington, and began construction with sports-first design principles.",
      icon: "Building"
    },
    {
      year: "2021",
      title: "Grand Opening",
      description: "Opened doors to Nairobi with 15 premium screens and commitment to 100% organic ingredients.",
      icon: "Star"
    },
    {
      year: "2022",
      title: "Community Hub",
      description: "Established partnerships with local sports clubs and became the go-to venue for major sporting events.",
      icon: "Users"
    },
    {
      year: "2023",
      title: "Recognition",
      description: "Awarded 'Best Sports Bar' by Nairobi Dining Awards and featured in Kenya's top lifestyle publications.",
      icon: "Award"
    },
    {
      year: "2024",
      title: "Expansion",
      description: "Launched delivery partnerships and private event services, serving over 50,000 satisfied customers.",
      icon: "TrendingUp"
    }
  ];

  const visionPoints = [
    {
      icon: "Target",
      title: "Our Mission",
      description: "To create elevated sports dining experiences that bring communities together through exceptional food, passionate sports culture, and genuine hospitality."
    },
    {
      icon: "Eye",
      title: "Our Vision",
      description: "To be East Africa's premier sports entertainment destination, setting the standard for quality, atmosphere, and community engagement."
    },
    {
      icon: "Heart",
      title: "Our Values",
      description: "Quality without compromise, authentic community building, sustainable sourcing, and creating memorable moments that last beyond the final whistle."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-6">
            Heritage & Vision
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From humble beginnings to Nairobi's premier sports dining destination, 
            discover the journey that shaped our commitment to excellence.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab('heritage')}
              className={`px-6 py-3 rounded-md font-inter font-medium transition-all duration-300 ${
                activeTab === 'heritage' ?'bg-secondary text-secondary-foreground' :'text-text-secondary hover:text-primary'
              }`}
            >
              Our Heritage
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-6 py-3 rounded-md font-inter font-medium transition-all duration-300 ${
                activeTab === 'vision' ?'bg-secondary text-secondary-foreground' :'text-text-secondary hover:text-primary'
              }`}
            >
              Vision & Values
            </button>
          </div>
        </div>

        {/* Heritage Tab */}
        {activeTab === 'heritage' && (
          <div className="space-y-16">
            {/* Founder Story */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-6">
                  The Founder's Story
                </h3>
                <blockquote className="text-lg text-text-secondary italic mb-6 leading-relaxed">
                  "{founderStory.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={founderStory.image}
                      alt={founderStory.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-primary">{founderStory.name}</h4>
                    <p className="text-text-secondary text-sm">{founderStory.title}</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-xl overflow-hidden premium-shadow">
                  <Image
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                    alt="TLD Sports Grill early construction and planning"
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-12 text-center">
                Our Journey
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border transform lg:-translate-x-0.5"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className={`relative flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}>
                      {/* Timeline Dot */}
                      <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-secondary rounded-full transform -translate-x-2 lg:-translate-x-2 z-10"></div>
                      
                      {/* Content */}
                      <div className={`ml-16 lg:ml-0 lg:w-1/2 ${
                        index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                      }`}>
                        <div className="bg-card rounded-xl p-6 premium-shadow">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                              <Icon name={milestone.icon} size={20} className="text-secondary" />
                            </div>
                            <div>
                              <span className="text-2xl font-oswald font-semibold text-secondary">{milestone.year}</span>
                              <h4 className="font-inter font-semibold text-primary">{milestone.title}</h4>
                            </div>
                          </div>
                          <p className="text-text-secondary leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Vision Tab */}
        {activeTab === 'vision' && (
          <div className="space-y-16">
            {/* Vision Points */}
            <div className="grid lg:grid-cols-3 gap-8">
              {visionPoints.map((point, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={point.icon} size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-oswald font-semibold text-primary mb-4">
                    {point.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Vision Image */}
            <div className="relative rounded-xl overflow-hidden premium-shadow">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="TLD Sports Grill team working together in kitchen"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
                <div className="text-center text-white max-w-2xl px-6">
                  <h3 className="text-2xl lg:text-3xl font-oswald font-semibold mb-4">
                    Building Tomorrow's Sports Culture
                  </h3>
                  <p className="text-lg opacity-90">
                    Every dish we serve, every game we broadcast, and every moment we create 
                    contributes to a legacy of excellence that defines modern Nairobi dining.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeritageVision;