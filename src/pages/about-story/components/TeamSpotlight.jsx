import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSpotlight = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const teamMembers = [
    {
      name: "Chef Samuel Kimani",
      title: "Head Chef & Culinary Director",
      image: "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg",
      experience: "12+ Years",
      specialty: "Organic Fusion Cuisine",
      philosophy: `Cooking is about more than just feeding people—it's about creating experiences that bring communities together. Every dish I create tells a story of Kenya's rich culinary heritage while embracing modern techniques and organic ingredients.`,
      achievements: [
        "Certified Organic Chef - Kenya Culinary Institute",
        "Winner - East Africa Culinary Championship 2022",
        "Featured in Nairobi Gourmet Magazine",
        "Sustainable Cooking Advocate"
      ],
      signature: "Organic Nyama Choma with House-Made Chimichurri",
      background: "Trained at Kenya\'s premier culinary schools and worked in top Nairobi restaurants before joining TLD Sports Grill to revolutionize sports bar dining."
    },
    {
      name: "Grace Wanjiku",
      title: "Service Manager & Guest Experience Lead",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      experience: "8+ Years",
      specialty: "Hospitality Excellence",
      philosophy: `True hospitality means anticipating needs before they're expressed and creating moments that make every guest feel like family. Our service isn't just about taking orders—it's about crafting memorable experiences.`,
      achievements: [
        "Hospitality Management Diploma - Utalii College",
        "Customer Service Excellence Award 2023",
        "Team Leadership Certification",
        "Guest Relations Specialist"
      ],
      signature: "Personalized Game Day Experience Coordination",
      background: "Hospitality veteran with experience in luxury hotels and premium restaurants, passionate about creating welcoming atmospheres for sports enthusiasts."
    },
    {
      name: "David Ochieng",
      title: "Operations Manager & Community Liaison",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      experience: "10+ Years",
      specialty: "Operations & Community Building",
      philosophy: `A restaurant's success isn't measured just in profits, but in the positive impact it has on the community. We're not just serving food—we're building connections and supporting local partnerships.`,
      achievements: [
        "Business Management - University of Nairobi",
        "Community Partnership Award 2023",
        "Sustainable Business Practices Certification",
        "Local Sports Sponsorship Coordinator"
      ],
      signature: "Community Event Planning & Local Partnerships",
      background: "Business operations expert with a passion for community development, leading TLD's initiatives in local sports sponsorship and social responsibility."
    }
  ];

  const departmentStats = [
    {
      department: "Kitchen Team",
      count: "12",
      icon: "ChefHat",
      description: "Skilled culinary professionals"
    },
    {
      department: "Service Team",
      count: "8",
      icon: "Users",
      description: "Guest experience specialists"
    },
    {
      department: "Management",
      count: "5",
      icon: "Settings",
      description: "Operations & leadership"
    }
  ];

  const teamValues = [
    {
      icon: "Heart",
      title: "Passion for Excellence",
      description: "Every team member shares an unwavering commitment to delivering exceptional experiences."
    },
    {
      icon: "Users",
      title: "Collaborative Spirit",
      description: "We work together as one team, supporting each other to create seamless guest experiences."
    },
    {
      icon: "Star",
      title: "Continuous Growth",
      description: "We invest in our team's development through training, mentorship, and career advancement opportunities."
    },
    {
      icon: "Shield",
      title: "Integrity & Trust",
      description: "Honest communication, reliable service, and ethical practices guide everything we do."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            The passionate professionals who bring TLD Sports Grill's vision to life, 
            creating exceptional experiences through expertise, dedication, and genuine care.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {departmentStats.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl p-6 premium-shadow text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={32} className="text-secondary" />
              </div>
              <div className="text-3xl font-oswald font-semibold text-secondary mb-2">
                {stat.count}
              </div>
              <h3 className="font-inter font-semibold text-primary mb-2">
                {stat.department}
              </h3>
              <p className="text-text-secondary text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Member Spotlight */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-8 text-center">
            Leadership Spotlight
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Team Member Selection */}
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTeamMember(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeTeamMember === index
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-card hover:bg-muted'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-inter font-semibold mb-1">{member.name}</h4>
                      <p className="text-sm opacity-80">{member.title}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Team Member Details */}
            <div className="lg:col-span-2 bg-card rounded-xl p-8 premium-shadow">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Profile Image */}
                <div className="md:col-span-1">
                  <div className="aspect-square rounded-xl overflow-hidden mb-6">
                    <Image
                      src={teamMembers[activeTeamMember].image}
                      alt={teamMembers[activeTeamMember].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-oswald font-semibold text-primary mb-2">
                      {teamMembers[activeTeamMember].name}
                    </h4>
                    <p className="text-secondary font-medium mb-4">
                      {teamMembers[activeTeamMember].title}
                    </p>
                    <div className="flex justify-center space-x-6 text-sm text-text-secondary">
                      <div className="text-center">
                        <Icon name="Clock" size={16} className="mx-auto mb-1" />
                        <span>{teamMembers[activeTeamMember].experience}</span>
                      </div>
                      <div className="text-center">
                        <Icon name="Award" size={16} className="mx-auto mb-1" />
                        <span>{teamMembers[activeTeamMember].specialty}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="md:col-span-2 space-y-6">
                  {/* Philosophy */}
                  <div>
                    <h5 className="font-inter font-semibold text-primary mb-3 flex items-center">
                      <Icon name="Quote" size={20} className="text-secondary mr-2" />
                      Philosophy
                    </h5>
                    <blockquote className="text-text-secondary italic leading-relaxed">
                      "{teamMembers[activeTeamMember].philosophy}"
                    </blockquote>
                  </div>

                  {/* Background */}
                  <div>
                    <h5 className="font-inter font-semibold text-primary mb-3 flex items-center">
                      <Icon name="User" size={20} className="text-secondary mr-2" />
                      Background
                    </h5>
                    <p className="text-text-secondary leading-relaxed">
                      {teamMembers[activeTeamMember].background}
                    </p>
                  </div>

                  {/* Signature */}
                  <div>
                    <h5 className="font-inter font-semibold text-primary mb-3 flex items-center">
                      <Icon name="Star" size={20} className="text-secondary mr-2" />
                      Signature Contribution
                    </h5>
                    <p className="text-text-secondary">
                      {teamMembers[activeTeamMember].signature}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="font-inter font-semibold text-primary mb-3 flex items-center">
                      <Icon name="Trophy" size={20} className="text-secondary mr-2" />
                      Achievements
                    </h5>
                    <div className="space-y-2">
                      {teamMembers[activeTeamMember].achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-oswald font-semibold text-primary mb-12 text-center">
            Our Team Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={value.icon} size={32} className="text-secondary" />
                </div>
                <h4 className="text-lg font-oswald font-semibold text-primary mb-4">
                  {value.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Photo & CTA */}
        <div className="mt-16">
          <div className="relative rounded-xl overflow-hidden premium-shadow">
            <Image
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
              alt="TLD Sports Grill team working together"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-6">
                <h3 className="text-2xl lg:text-3xl font-oswald font-semibold mb-4">
                  Join Our Growing Family
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  We're always looking for passionate individuals who share our commitment 
                  to excellence and community building.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-6 py-3 bg-secondary hover:bg-cta-hover text-secondary-foreground font-inter font-semibold rounded-lg cta-hover transition-all duration-300">
                    View Careers
                  </button>
                  <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-primary font-inter font-medium rounded-lg transition-all duration-300">
                    Meet the Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSpotlight;