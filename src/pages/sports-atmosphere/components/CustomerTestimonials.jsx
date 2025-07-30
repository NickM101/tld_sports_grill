import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CustomerTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "James Mwangi",
      role: "Corporate Executive",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      rating: 5,
      story: `The Champions League final at TLD Sports Grill was absolutely electric! We booked the Premium Lounge for our team celebration and it exceeded all expectations. The moment Messi scored, the entire place erupted - it felt like we were in the stadium itself.\n\nThe service was impeccable, the organic chicken wings were the best I've ever had, and the atmosphere was just incredible. We've made it our go-to spot for all major matches now.`,
      match: "Champions League Final 2024",
      memorable_moment: "Celebrating our company\'s biggest deal closure during halftime",
      years_visiting: 3
    },
    {
      id: 2,
      name: "Sarah Wanjiku",
      role: "Marketing Manager",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
      rating: 5,
      story: `What started as a casual first date during an Arsenal match turned into something special. The atmosphere at TLD Sports Grill is so welcoming and energetic - we were both nervous initially, but the excitement of the game and the friendly crowd made us feel right at home.\n\nTwo years later, we're engaged and still come here for every Arsenal match! The staff even remember our usual order now. It's become our special place.`,
      match: "Arsenal vs Manchester United",
      memorable_moment: "First date that led to engagement",
      years_visiting: 2
    },
    {
      id: 3,
      name: "David Kiprotich",
      role: "Sports Enthusiast",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      rating: 5,
      story: `As a die-hard Liverpool fan, I've watched matches all over Nairobi, but nothing compares to TLD Sports Grill. The energy during the Liverpool vs Barcelona comeback was absolutely insane - strangers became friends, everyone was hugging, and the place was shaking with excitement.\n\nThe multiple screens mean you never miss any action, and the sound quality makes you feel like you're at Anfield. Plus, their organic food is actually healthy - perfect for us fitness enthusiasts!`,
      match: "Liverpool vs Barcelona Comeback",
      memorable_moment: "Witnessing the greatest comeback in football history with 200 other fans",
      years_visiting: 4
    },
    {
      id: 4,
      name: "Grace Achieng",
      role: "Family Organizer",
      avatar: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg",
      rating: 5,
      story: `Finding a sports bar that welcomes families is rare, but TLD Sports Grill gets it right. We bring our three kids here for weekend matches, and they have a dedicated family zone with comfortable seating and a kids menu.\n\nLast month, we celebrated my husband's 40th birthday here during the Harambee Stars match. Three generations of our family were cheering together - from my 8-year-old son to my 70-year-old father-in-law. The staff made it so special with a custom cake during halftime!`,
      match: "Harambee Stars vs Tanzania",
      memorable_moment: "Three-generation family celebration during husband\'s 40th birthday",
      years_visiting: 1
    },
    {
      id: 5,
      name: "Michael Ochieng",
      role: "Business Owner",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      rating: 5,
      story: `I've been bringing my business partners here for two years now. There's something about watching football together that breaks down barriers and builds trust. We've closed more deals during halftime conversations at TLD Sports Grill than in any boardroom.\n\nThe premium viewing area is perfect for entertaining clients - professional yet relaxed. The organic menu impresses health-conscious executives, and the atmosphere creates the perfect environment for relationship building.`,
      match: "Manchester City vs Real Madrid",
      memorable_moment: "Closing a KES 50 million deal during the Champions League semi-final",
      years_visiting: 2
    }
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-oswald font-semibold text-primary mb-6">
            Customer <span className="text-secondary">Stories</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real experiences from our sports community. These are the moments that make TLD Sports Grill more than just a venue - it's where memories are made and relationships are built.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 premium-shadow mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Customer Info */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <Image
                  src={currentTestimonial.avatar}
                  alt={`${currentTestimonial.name} profile photo`}
                  className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Quote" size={16} className="text-secondary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-2">
                {currentTestimonial.name}
              </h3>
              <p className="text-text-secondary mb-4">{currentTestimonial.role}</p>
              
              {/* Rating */}
              <div className="flex justify-center lg:justify-start gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-secondary fill-current" />
                ))}
              </div>

              {/* Stats */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Icon name="Calendar" size={14} className="text-text-secondary" />
                  <span className="text-text-secondary">
                    Visiting for {currentTestimonial.years_visiting} year{currentTestimonial.years_visiting > 1 ? 's' : ''}
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Icon name="Trophy" size={14} className="text-text-secondary" />
                  <span className="text-text-secondary">{currentTestimonial.match}</span>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Icon 
                  name="Quote" 
                  size={40} 
                  className="text-secondary/20 absolute -top-4 -left-2" 
                />
                
                <div className="pl-8">
                  <p className="text-text-primary leading-relaxed mb-6 whitespace-pre-line">
                    {currentTestimonial.story}
                  </p>
                  
                  {/* Memorable Moment Highlight */}
                  <div className="bg-muted rounded-lg p-4 border-l-4 border-secondary">
                    <div className="flex items-start gap-3">
                      <Icon name="Heart" size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-text-primary mb-1">Most Memorable Moment</h4>
                        <p className="text-sm text-text-secondary">
                          {currentTestimonial.memorable_moment}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full"
          >
            <Icon name="ChevronLeft" size={20} />
          </Button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full smooth-transition ${
                  index === activeTestimonial ? 'bg-secondary' : 'bg-border hover:bg-secondary/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full"
          >
            <Icon name="ChevronRight" size={20} />
          </Button>
        </div>

        {/* Customer Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-text-secondary">Happy Customers</div>
            <div className="text-sm text-text-secondary mt-1">Monthly regulars</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">4.9</div>
            <div className="text-text-secondary">Average Rating</div>
            <div className="text-sm text-text-secondary mt-1">Based on 200+ reviews</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">95%</div>
            <div className="text-text-secondary">Return Rate</div>
            <div className="text-sm text-text-secondary mt-1">Customers who visit again</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-muted rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-text-secondary mb-6">
              Join our community of sports enthusiasts and experience the atmosphere that creates lasting memories.
            </p>
            <Button
              variant="default"
              size="lg"
              className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold cta-hover"
            >
              Book Your Experience
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;