import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SportsCommunityCTA = () => {
  const communityHighlights = [
    {
      id: 1,
      title: "Corporate Teams",
      description: "Business professionals celebrating deals and building relationships",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      icon: "Briefcase",
      stat: "50+ Companies"
    },
    {
      id: 2,
      title: "Sports Families",
      description: "Multi-generation families sharing their love for the beautiful game",
      image: "https://images.pexels.com/photos/3621227/pexels-photo-3621227.jpeg",
      icon: "Users",
      stat: "200+ Families"
    },
    {
      id: 3,
      title: "Fan Groups",
      description: "Passionate supporters creating unforgettable match day experiences",
      image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg",
      icon: "Flag",
      stat: "15+ Fan Clubs"
    }
  ];

  const upcomingEvents = [
    {
      date: "Feb 15",
      title: "Champions League Watch Party",
      description: "Join fellow fans for the quarter-final matches",
      attendees: 120
    },
    {
      date: "Feb 22",
      title: "Local Derby Special",
      description: "Gor Mahia vs AFC Leopards with special offers",
      attendees: 80
    },
    {
      date: "Mar 1",
      title: "Women\'s Football Celebration",
      description: "Supporting women\'s sports with themed menu",
      attendees: 60
    }
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-oswald font-semibold mb-6">
            Join Our Sports <span className="text-secondary">Community</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Be part of Nairobi's most passionate sports community. From corporate celebrations to family traditions, everyone finds their place at TLD Sports Grill.
          </p>
        </div>

        {/* Community Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityHighlights.map((highlight) => (
            <div
              key={highlight.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 smooth-transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name={highlight.icon} size={20} className="text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                </div>
                
                <p className="text-white/80 mb-4">{highlight.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-secondary font-semibold">{highlight.stat}</span>
                  <Icon name="ArrowRight" size={16} className="text-white/60 group-hover:text-secondary smooth-transition" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Community Events */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Upcoming Community Events</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg p-6 hover:bg-white/15 smooth-transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">{event.date.split(' ')[1]}</div>
                    <div className="text-sm text-white/70">{event.date.split(' ')[0]}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{event.title}</h4>
                    <p className="text-sm text-white/80">{event.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Icon name="Users" size={14} />
                    <span>{event.attendees} expected</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white hover:text-primary"
                  >
                    Join Event
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold mb-6">Why Our Community Loves TLD Sports Grill</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" size={20} className="text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Authentic Connections</h4>
                  <p className="text-white/80">Meet like-minded sports enthusiasts and build lasting friendships over shared passion for the game.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Star" size={20} className="text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Premium Experience</h4>
                  <p className="text-white/80">Enjoy top-quality organic food, premium viewing technology, and exceptional service every visit.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Calendar" size={20} className="text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Memorable Moments</h4>
                  <p className="text-white/80">From first dates to business deals, celebrations to commiserations - create stories worth telling.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="TLD Sports Grill community celebrating together"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-secondary rounded-xl p-6 text-secondary-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-sm">Community Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold mb-6">
              Ready to Experience the Energy?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't just watch the game - be part of the atmosphere that makes every match unforgettable. Book your table and join Nairobi's premier sports community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold cta-hover"
              >
                Book Your Table Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                View Upcoming Matches
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>Open Daily 11AM - 2AM</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>M-Square Mall, Lavington</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+254 700 123 456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsCommunityCTA;