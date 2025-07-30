import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ImageModal = ({ image, isOpen, onClose, onNext, onPrevious, totalImages, currentIndex }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setImageLoaded(false);
    } else {
      document.body.style.overflow = 'unset';
      setIsZoomed(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !image) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-60 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 smooth-transition"
      >
        <Icon name="X" size={24} />
      </button>

      {/* Navigation Buttons */}
      {totalImages > 1 && (
        <>
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-60 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 smooth-transition"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-60 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 smooth-transition"
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </>
      )}

      {/* Image Counter */}
      {totalImages > 1 && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-60 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium">
          {currentIndex + 1} of {totalImages}
        </div>
      )}

      {/* Main Content */}
      <div className="w-full h-full flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center relative">
          <div 
            className={`relative max-w-full max-h-full cursor-pointer smooth-transition ${
              isZoomed ? 'scale-150 lg:scale-200' : 'scale-100'
            }`}
            onClick={toggleZoom}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="max-w-full max-h-[80vh] lg:max-h-full object-contain"
              onLoad={() => setImageLoaded(true)}
            />
            
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center rounded-lg">
                <Icon name="Image" size={48} className="text-gray-400" />
              </div>
            )}
          </div>

          {/* Zoom Indicator */}
          <div className="absolute bottom-4 left-4 px-3 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center space-x-2">
            <Icon name={isZoomed ? "ZoomOut" : "ZoomIn"} size={16} />
            <span>{isZoomed ? 'Click to zoom out' : 'Click to zoom in'}</span>
          </div>
        </div>

        {/* Image Details Sidebar */}
        <div className="lg:w-80 lg:flex-shrink-0 bg-card lg:bg-black/20 lg:backdrop-blur-sm p-6 lg:overflow-y-auto">
          <div className="space-y-6">
            {/* Category Badge */}
            <div className="flex items-center space-x-2">
              <Icon name={image.categoryIcon} size={20} className="text-secondary" />
              <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                {image.category}
              </span>
            </div>

            {/* Title and Description */}
            <div>
              <h2 className="text-2xl font-oswald font-semibold text-text-primary lg:text-white mb-3">
                {image.title}
              </h2>
              <p className="text-text-secondary lg:text-gray-300 leading-relaxed">
                {image.description}
              </p>
            </div>

            {/* Image Details */}
            <div className="space-y-3">
              <h3 className="font-semibold text-text-primary lg:text-white">Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary lg:text-gray-400">Date:</span>
                  <span className="text-text-primary lg:text-white">{image.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary lg:text-gray-400">Location:</span>
                  <span className="text-text-primary lg:text-white">{image.location}</span>
                </div>
                {image.photographer && (
                  <div className="flex justify-between">
                    <span className="text-text-secondary lg:text-gray-400">Photographer:</span>
                    <span className="text-text-primary lg:text-white">{image.photographer}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            {image.tags && image.tags.length > 0 && (
              <div>
                <h3 className="font-semibold text-text-primary lg:text-white mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {image.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted lg:bg-white/10 text-text-primary lg:text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-border lg:border-white/20">
              <Button
                variant="default"
                fullWidth
                className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Your Experience
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="border-border lg:border-white/30 text-text-primary lg:text-white hover:bg-muted lg:hover:bg-white/10"
                  iconName="Share2"
                  iconPosition="left"
                >
                  Share
                </Button>
                <Button
                  variant="outline"
                  className="border-border lg:border-white/30 text-text-primary lg:text-white hover:bg-muted lg:hover:bg-white/10"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;