import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const GalleryFilters = ({ activeFilter, onFilterChange, viewMode, onViewModeChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterCategories = [
    { id: 'all', name: 'All Photos', icon: 'Grid3X3', count: 156 },
    { id: 'culinary', name: 'Culinary Artistry', icon: 'ChefHat', count: 45 },
    { id: 'gameday', name: 'Game Day Energy', icon: 'Trophy', count: 38 },
    { id: 'behind-scenes', name: 'Behind the Scenes', icon: 'Eye', count: 28 },
    { id: 'customer-moments', name: 'Customer Moments', icon: 'Users', count: 32 },
    { id: 'events', name: 'Special Events', icon: 'Calendar', count: 13 }
  ];

  const viewModes = [
    { id: 'grid', icon: 'Grid3X3', label: 'Grid View' },
    { id: 'masonry', icon: 'LayoutGrid', label: 'Masonry View' },
    { id: 'slideshow', icon: 'Play', label: 'Slideshow' }
  ];

  return (
    <div className="bg-card border-b border-border sticky top-16 lg:top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Filter Categories */}
          <div className="flex-1">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-muted rounded-lg text-text-primary hover:bg-border smooth-transition"
              >
                <Icon name="Filter" size={20} />
                <span className="font-medium">
                  {filterCategories.find(cat => cat.id === activeFilter)?.name || 'All Photos'}
                </span>
                <Icon name={isFilterOpen ? "ChevronUp" : "ChevronDown"} size={16} />
              </button>
              
              {isFilterOpen && (
                <div className="absolute top-full left-4 right-4 mt-2 bg-card border border-border rounded-lg premium-shadow z-50">
                  <div className="p-2 space-y-1">
                    {filterCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          onFilterChange(category.id);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md smooth-transition ${
                          activeFilter === category.id
                            ? 'bg-secondary text-secondary-foreground'
                            : 'text-text-primary hover:bg-muted'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon name={category.icon} size={18} />
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span className="text-sm opacity-70">{category.count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Filter Tabs */}
            <div className="hidden lg:flex items-center space-x-1 overflow-x-auto">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onFilterChange(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap smooth-transition ${
                    activeFilter === category.id
                      ? 'bg-secondary text-secondary-foreground'
                      : 'text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={category.icon} size={18} />
                  <span>{category.name}</span>
                  <span className="text-sm opacity-70 bg-black/10 px-2 py-0.5 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* View Mode Controls */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-text-secondary font-medium hidden sm:block">View:</span>
            <div className="flex items-center bg-muted rounded-lg p-1">
              {viewModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => onViewModeChange(mode.id)}
                  className={`p-2 rounded-md smooth-transition ${
                    viewMode === mode.id
                      ? 'bg-card text-primary premium-shadow'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  title={mode.label}
                >
                  <Icon name={mode.icon} size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFilters;