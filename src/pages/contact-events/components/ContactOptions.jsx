import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactOptions = () => {
  const contactMethods = [
    {
      id: 1,
      icon: "Phone",
      title: "Call Us",
      description: "Speak directly with our team",
      primary: "+254 700 123 456",
      secondary: "Mon-Sun: 10:00 AM - 11:00 PM",
      action: "Call Now",
      href: "tel:+254700123456",
      color: "text-secondary"
    },
    {
      id: 2,
      icon: "MessageCircle",
      title: "WhatsApp",
      description: "Quick responses for urgent inquiries",
      primary: "+254 700 123 456",
      secondary: "Available 24/7",
      action: "Chat Now",
      href: "https://wa.me/254700123456",
      color: "text-green-600"
    },
    {
      id: 3,
      icon: "Mail",
      title: "Email",
      description: "Detailed inquiries and event planning",
      primary: "hello@tldsportsgrill.co.ke",
      secondary: "Response within 2 hours",
      action: "Send Email",
      href: "mailto:hello@tldsportsgrill.co.ke",
      color: "text-blue-600"
    },
    {
      id: 4,
      icon: "MapPin",
      title: "Visit Us",
      description: "M-Square Mall, Lavington",
      primary: "Ground Floor, Shop G12",
      secondary: "Free parking available",
      action: "Get Directions",
      href: "https://maps.google.com/?q=-1.2921,36.7814",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Multiple ways to reach us for all your inquiries, from quick questions to detailed event planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-card premium-shadow rounded-xl p-6 text-center smooth-transition hover:premium-shadow-lg hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 ${method.color}`}>
                <Icon name={method.icon} size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-2">
                {method.title}
              </h3>
              
              <p className="text-text-secondary text-sm mb-4">
                {method.description}
              </p>
              
              <div className="space-y-1 mb-6">
                <p className="font-medium text-primary">
                  {method.primary}
                </p>
                <p className="text-sm text-text-secondary">
                  {method.secondary}
                </p>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => window.open(method.href, '_blank')}
              >
                {method.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">
              &lt; 2 Hours
            </div>
            <p className="text-text-secondary">
              Average Email Response Time
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">
              24/7
            </div>
            <p className="text-text-secondary">
              WhatsApp Support Available
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">
              100+
            </div>
            <p className="text-text-secondary">
              Successful Events Hosted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;