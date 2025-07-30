import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const EventTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Kimani",
      position: "Marketing Director, TechHub Kenya",
      company: "TechHub Kenya",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
      rating: 5,
      event: "Corporate Team Building",
      date: "December 2024",
      testimonial: `TLD Sports Grill exceeded our expectations for our year-end team building event. The private dining area was perfect, the service was impeccable, and the sports atmosphere kept everyone engaged. Our team of 45 had an amazing time, and the custom menu was outstanding. We'll definitely be back for future corporate events.`,
      highlight: "Perfect venue for corporate events"
    },
    {
      id: 2,
      name: "Michael Ochieng",
      position: "Event Organizer",
      company: "Nairobi Sports Club",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5,
      event: "Sports Viewing Party",
      date: "January 2025",
      testimonial: `Organized a Champions League final viewing party for 60 people at TLD Sports Grill. The atmosphere was electric, the screens were perfect, and the staff went above and beyond to ensure everyone had a great experience. The food was exceptional and the service was seamless throughout the entire event.`,
      highlight: "Unmatched sports viewing experience"
    },
    {
      id: 3,
      name: "Grace Wanjiku",
      position: "Birthday Celebrant",
      company: "Private Celebration",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 5,
      event: "30th Birthday Party",
      date: "November 2024",
      testimonial: `My 30th birthday celebration at TLD Sports Grill was absolutely perfect! The team helped with decorations, the custom cake was beautiful, and the private area gave us the perfect intimate setting while still enjoying the vibrant atmosphere. All 25 of my guests were impressed with the quality of food and service.`,
      highlight: "Made my special day unforgettable"
    }
  ];

  const stats = [
    { number: "150+", label: "Events Hosted", icon: "Calendar" },
    { number: "98%", label: "Client Satisfaction", icon: "Heart" },
    { number: "4.9/5", label: "Average Rating", icon: "Star" },
    { number: "24hrs", label: "Event Planning Support", icon: "Clock" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
            Event Success Stories
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Hear from our clients who trusted us with their special moments and corporate celebrations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card premium-shadow rounded-xl p-6 text-center smooth-transition hover:premium-shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-4">
                <Icon name={stat.icon} size={20} className="text-secondary" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <p className="text-sm text-text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-card premium-shadow rounded-2xl p-8 lg:p-10 ${
                index % 2 === 1 ? 'lg:ml-12' : 'lg:mr-12'
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Avatar and Info */}
                <div className="flex-shrink-0">
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center lg:text-left">
                      <h4 className="font-semibold text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-text-secondary mt-1">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Event Details */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.event}
                    </span>
                    <span className="text-sm text-text-secondary">
                      {testimonial.date}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-secondary fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Highlight */}
                  <div className="bg-secondary/5 border-l-4 border-secondary p-4 mb-4 rounded-r-lg">
                    <p className="text-secondary font-medium text-sm">
                      "{testimonial.highlight}"
                    </p>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-text-secondary leading-relaxed">
                    "{testimonial.testimonial}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-text-secondary mb-4">
            <Icon name="MessageCircle" size={20} />
            <span>Join our satisfied clients</span>
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-6">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Let us help you plan an event that your guests will remember for years to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254700123456"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold rounded-lg smooth-transition cta-hover"
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Call Event Planner
            </a>
            <a
              href="https://wa.me/254700123456"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-primary hover:bg-muted font-semibold rounded-lg smooth-transition"
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTestimonials;