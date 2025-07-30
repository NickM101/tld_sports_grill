import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SportsTicker from './components/SportsTicker';
import CoreDifferentiators from './components/CoreDifferentiators';
import InstagramFeed from './components/InstagramFeed';
import DeliverySection from './components/DeliverySection';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>TLD Sports Grill - Where Quality Meets Passion | Nairobi's Premier Sports Dining</title>
        <meta 
          name="description" 
          content="Experience Nairobi's premier sports dining destination. Organic excellence, premium sports atmosphere, and unforgettable moments at TLD Sports Grill in Lavington. Book your table or order delivery now." 
        />
        <meta name="keywords" content="sports bar Nairobi, organic restaurant, Lavington dining, sports grill, premium dining, game day, delivery" />
        <meta property="og:title" content="TLD Sports Grill - Where Quality Meets Passion" />
        <meta property="og:description" content="Nairobi's premier sports dining destination with organic excellence and premium atmosphere" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tldsportsgrill.com/homepage" />
        <link rel="canonical" href="https://tldsportsgrill.com/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section with Video Background */}
          <HeroSection />
          
          {/* Dynamic Sports Schedule Ticker */}
          <SportsTicker />
          
          {/* Core Differentiators Showcase */}
          <CoreDifferentiators />
          
          {/* Live Instagram Feed */}
          <InstagramFeed />
          
          {/* Delivery & Ordering Section */}
          <DeliverySection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 32 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M16 2C16 2 8 8 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 8 16 2 16 2Z" 
                      fill="var(--color-secondary)"
                    />
                    <path 
                      d="M16 6C16 6 12 10 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 10 16 6 16 6Z" 
                      fill="var(--color-accent)"
                    />
                  </svg>
                  <div>
                    <div className="font-oswald font-semibold text-xl">TLD SPORTS GRILL</div>
                    <div className="text-secondary text-sm">Where Quality Meets Passion</div>
                  </div>
                </div>
                <p className="text-white/80 mb-4 max-w-md">
                  Nairobi's premier sports dining destination, serving organic excellence with authentic atmosphere since 2016.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/60 hover:text-secondary smooth-transition">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white/60 hover:text-secondary smooth-transition">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white/60 hover:text-secondary smooth-transition">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/about-story" className="text-white/80 hover:text-secondary smooth-transition">Our Story</a></li>
                  <li><a href="/sports-atmosphere" className="text-white/80 hover:text-secondary smooth-transition">Sports Atmosphere</a></li>
                  <li><a href="/location-visit" className="text-white/80 hover:text-secondary smooth-transition">Visit Us</a></li>
                  <li><a href="/gallery-showcase" className="text-white/80 hover:text-secondary smooth-transition">Gallery</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Contact</h4>
                <ul className="space-y-2 text-white/80">
                  <li>M-Square Mall, Lavington</li>
                  <li>Nairobi, Kenya</li>
                  <li>+254 700 123 456</li>
                  <li>info@tldsportsgrill.com</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} TLD Sports Grill. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-white/60 hover:text-secondary text-sm smooth-transition">Privacy Policy</a>
                <a href="#" className="text-white/60 hover:text-secondary text-sm smooth-transition">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;