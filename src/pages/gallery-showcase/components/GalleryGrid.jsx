import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GalleryGrid = ({ images, viewMode, onImageClick }) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  const getGridClasses = () => {
    switch (viewMode) {
      case 'masonry':
        return 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4';
      case 'slideshow':
        return 'flex overflow-x-auto scroll-snap-x gap-4 pb-4';
      default:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4';
    }
  };

  const getImageClasses = () => {
    switch (viewMode) {
      case 'masonry':
        return 'w-full break-inside-avoid';
      case 'slideshow':
        return 'flex-none w-80 scroll-snap-center';
      default:
        return 'aspect-square';
    }
  };

  if (viewMode === 'slideshow') {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className={getGridClasses()}>
          {images.map((image) => (
            <div
              key={image.id}
              className={`${getImageClasses()} relative group cursor-pointer`}
              onClick={() => onImageClick(image)}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover smooth-transition group-hover:scale-105"
                  onLoad={() => handleImageLoad(image.id)}
                />
                
                {!loadedImages.has(image.id) && (
                  <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
                    <Icon name="Image" size={32} className="text-text-secondary" />
                  </div>
                )}

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 smooth-transition`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Icon name={image.categoryIcon} size={16} className="text-secondary" />
                      <span className="text-secondary text-sm font-medium">{image.category}</span>
                    </div>
                  </div>
                  
                  <button className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 smooth-transition">
                    <Icon name="Expand" size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <div className={getGridClasses()}>
        {images.map((image) => (
          <div
            key={image.id}
            className={`${getImageClasses()} relative group cursor-pointer`}
            onClick={() => onImageClick(image)}
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className={`relative bg-muted rounded-lg overflow-hidden ${viewMode === 'masonry' ? 'h-auto' : 'h-full'}`}>
              <Image
                src={image.src}
                alt={image.alt}
                className={`w-full ${viewMode === 'masonry' ? 'h-auto' : 'h-full'} object-cover smooth-transition group-hover:scale-105`}
                onLoad={() => handleImageLoad(image.id)}
              />
              
              {!loadedImages.has(image.id) && (
                <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
                  <Icon name="Image" size={32} className="text-text-secondary" />
                </div>
              )}

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 smooth-transition`}>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-2">{image.description}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Icon name={image.categoryIcon} size={16} className="text-secondary" />
                    <span className="text-secondary text-sm font-medium">{image.category}</span>
                  </div>
                </div>
                
                <button className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 smooth-transition">
                  <Icon name="Expand" size={18} />
                </button>
              </div>

              {/* Like Button */}
              <button className="absolute top-4 left-4 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 smooth-transition opacity-0 group-hover:opacity-100">
                <Icon name="Heart" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;