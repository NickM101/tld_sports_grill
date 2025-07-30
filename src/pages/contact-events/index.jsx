import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactOptions from './components/ContactOptions';
import ContactForm from './components/ContactForm';
import PrivateEventsSection from './components/PrivateEventsSection';
import EventTestimonials from './components/EventTestimonials';
import LocationDetails from './components/LocationDetails';

const ContactEvents = () => {
  return (
    <>
      <Helmet>
        <title>Contact & Events - TLD Sports Grill | Premier Event Venue in Nairobi</title>
        <meta 
          name="description" 
          content="Contact TLD Sports Grill for private events, corporate celebrations, and inquiries. Located in M-Square Mall, Lavington. Professional event planning services available." 
        />
        <meta 
          name="keywords" 
          content="TLD Sports Grill contact, private events Nairobi, corporate events, event venue Lavington, sports bar events, party venue" 
        />
        <meta property="og:title" content="Contact & Events - TLD Sports Grill" />
        <meta 
          property="og:description" 
          content="Plan your perfect event at Nairobi's premier sports entertainment venue. Corporate events, private celebrations, and sports viewing parties." 
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://tldsportsgrill.co.ke/contact-events" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <ContactHero />
          <ContactOptions />
          <ContactForm />
          <PrivateEventsSection />
          <EventTestimonials />
          <LocationDetails />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 32 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="flame-pulse"
                  >
                    <path 
                      d="M16 2C16 2 8 8 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 8 16 2 16 2Z" 
                      fill="var(--color-secondary)"
                    />
                    <path 
                      d="M16 6C16 6 12 10 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 10 16 6 16 6Z" 
                      fill="var(--color-accent)"
                    />
                    <path 
                      d="M16 10C16 10 14 12 14 16C14 17.1046 14.8954 18 16 18C17.1046 18 18 17.1046 18 16C18 12 16 10 16 10Z" 
                      fill="var(--color-primary)"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-oswald font-semibold text-lg text-white leading-none">
                      TLD SPORTS
                    </span>
                    <span className="font-inter text-sm text-secondary font-medium leading-none">
                      GRILL
                    </span>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Nairobi's premier sports entertainment destination where quality meets passion.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Contact Info</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <p>M-Square Mall, Ground Floor</p>
                  <p>Lavington, Nairobi</p>
                  <p>+254 700 123 456</p>
                  <p>hello@tldsportsgrill.co.ke</p>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Operating Hours</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <p>Mon-Thu: 10:00 AM - 11:00 PM</p>
                  <p>Fri-Sat: 10:00 AM - 12:00 AM</p>
                  <p>Sunday: 10:00 AM - 11:00 PM</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Quick Actions</h4>
                <div className="space-y-2">
                  <a 
                    href="tel:+254700123456" 
                    className="block text-sm text-white/80 hover:text-secondary smooth-transition"
                  >
                    Call for Reservations
                  </a>
                  <a 
                    href="https://wa.me/254700123456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-white/80 hover:text-secondary smooth-transition"
                  >
                    WhatsApp Us
                  </a>
                  <a 
                    href="https://maps.google.com/?q=-1.2921,36.7814" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-white/80 hover:text-secondary smooth-transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} TLD Sports Grill. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactEvents;