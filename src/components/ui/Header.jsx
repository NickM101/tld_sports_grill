import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Our Story', path: '/about-story', icon: 'BookOpen' },
    { name: 'Sports Atmosphere', path: '/sports-atmosphere', icon: 'Trophy' },
    { name: 'Visit Us', path: '/location-visit', icon: 'MapPin' },
    { name: 'Gallery', path: '/gallery-showcase', icon: 'Camera' }
  ];

  const secondaryItems = [
    { name: 'Contact & Events', path: '/contact-events', icon: 'Calendar' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const FlameIcon = () => (
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
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md premium-shadow' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20 pr-4 lg:pr-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 pl-4 lg:pl-0 smooth-transition hover:opacity-80"
            onClick={closeMenu}
          >
            <FlameIcon />
            <div className="flex flex-col">
              <span className="font-oswald font-semibold text-lg lg:text-xl text-primary leading-none">
                TLD SPORTS
              </span>
              <span className="font-inter text-xs lg:text-sm text-secondary font-medium leading-none">
                GRILL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-inter font-medium text-sm smooth-transition relative group ${
                  isActivePath(item.path)
                    ? 'text-secondary' :'text-text-primary hover:text-secondary'
                }`}
              >
                {item.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                    isActivePath(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 font-inter font-medium text-sm text-text-primary hover:text-secondary smooth-transition">
                <span>More</span>
                <Icon name="ChevronDown" size={16} />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-card premium-shadow rounded-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {secondaryItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm smooth-transition ${
                        isActivePath(item.path)
                          ? 'text-secondary bg-muted' :'text-text-primary hover:text-secondary hover:bg-muted'
                      }`}
                    >
                      <Icon name={item.icon} size={16} />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="font-inter font-medium"
            >
              Book Table
            </Button>
            <Button 
              variant="default" 
              size="sm"
              className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-inter font-semibold cta-hover"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-text-primary hover:text-secondary hover:bg-muted smooth-transition"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-card border-t border-border premium-shadow transition-all duration-300 ${
            isMenuOpen 
              ? 'opacity-100 visible transform translate-y-0' 
              : 'opacity-0 invisible transform -translate-y-4'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {/* Primary Navigation */}
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg smooth-transition ${
                    isActivePath(item.path)
                      ? 'text-secondary bg-muted' :'text-text-primary hover:text-secondary hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-inter font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Secondary Navigation */}
            <div className="border-t border-border pt-4 space-y-2">
              {secondaryItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg smooth-transition ${
                    isActivePath(item.path)
                      ? 'text-secondary bg-muted' :'text-text-primary hover:text-secondary hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-inter font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="border-t border-border pt-4 space-y-3">
              <Button 
                variant="outline" 
                fullWidth
                className="font-inter font-medium"
                onClick={closeMenu}
              >
                Book Table
              </Button>
              <Button 
                variant="default" 
                fullWidth
                className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-inter font-semibold cta-hover"
                onClick={closeMenu}
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;