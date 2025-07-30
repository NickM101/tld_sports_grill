import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import GalleryHeader from './components/GalleryHeader';
import GalleryFilters from './components/GalleryFilters';
import GalleryGrid from './components/GalleryGrid';
import ImageModal from './components/ImageModal';
import VideoGallery from './components/VideoGallery';
import SocialFeed from './components/SocialFeed';
import GalleryStats from './components/GalleryStats';

const GalleryShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filteredImages, setFilteredImages] = useState([]);

  // Mock gallery data
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&h=800&fit=crop',
      alt: 'Flame-grilled organic chicken wings with signature sauce',
      title: 'Signature Organic Wings',
      description: 'Our famous flame-grilled organic chicken wings served with our house-made signature sauce, garnished with fresh herbs and served on artisanal wooden boards.',
      category: 'Culinary Artistry',
      categoryIcon: 'ChefHat',
      categoryId: 'culinary',
      date: 'January 25, 2025',
      location: 'TLD Sports Grill Kitchen',
      photographer: 'Chef Marcus K.',
      tags: ['Organic', 'Flame-grilled', 'Signature Dish', 'Wings']
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop',
      alt: 'Packed sports bar during Champions League final',
      title: 'Champions League Final Energy',
      description: 'The electric atmosphere during the Champions League final with fans cheering, multiple screens showing the action, and the energy that makes TLD Sports Grill special.',
      category: 'Game Day Energy',
      categoryIcon: 'Trophy',
      categoryId: 'gameday',
      date: 'January 20, 2025',
      location: 'Main Dining Area',
      photographer: 'Events Team',
      tags: ['Champions League', 'Crowd', 'Energy', 'Sports']
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop',
      alt: 'Chef preparing organic ingredients in kitchen',
      title: 'Kitchen Craftsmanship',
      description: 'Behind the scenes in our kitchen where our skilled chefs prepare every dish with precision, using only the finest organic ingredients sourced locally.',
      category: 'Behind the Scenes',
      categoryIcon: 'Eye',
      categoryId: 'behind-scenes',
      date: 'January 22, 2025',
      location: 'TLD Kitchen',
      photographer: 'Kitchen Staff',
      tags: ['Kitchen', 'Chef', 'Preparation', 'Organic']
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&h=800&fit=crop',
      alt: 'Family celebrating birthday at TLD Sports Grill',
      title: 'Birthday Celebration Joy',
      description: 'A wonderful family birthday celebration with our signature dessert, showing the warm and welcoming atmosphere that makes every occasion special at TLD.',
      category: 'Customer Moments',
      categoryIcon: 'Users',
      categoryId: 'customer-moments',
      date: 'January 18, 2025',
      location: 'Private Dining Section',
      photographer: 'Service Team',
      tags: ['Birthday', 'Family', 'Celebration', 'Dessert']
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=800&fit=crop',
      alt: 'Corporate team building event setup',
      title: 'Corporate Excellence',
      description: 'Professional corporate event setup showcasing our ability to transform the space for business gatherings while maintaining the sports atmosphere.',
      category: 'Special Events',
      categoryIcon: 'Calendar',
      categoryId: 'events',
      date: 'January 15, 2025',
      location: 'Private Event Space',
      photographer: 'Events Team',
      tags: ['Corporate', 'Team Building', 'Professional', 'Setup']
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=800&fit=crop',
      alt: 'Organic beef burger with sweet potato fries',
      title: 'Premium Organic Burger',
      description: 'Our signature organic beef burger made from locally sourced grass-fed beef, served with crispy sweet potato fries and house-made pickles.',
      category: 'Culinary Artistry',
      categoryIcon: 'ChefHat',
      categoryId: 'culinary',
      date: 'January 24, 2025',
      location: 'TLD Kitchen',
      photographer: 'Chef Sarah M.',
      tags: ['Burger', 'Organic Beef', 'Sweet Potato', 'Signature']
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=800&fit=crop',
      alt: 'Romantic dinner setup with sports viewing',
      title: 'Date Night Perfection',
      description: 'Intimate dinner setting that proves you can have romance and sports viewing in perfect harmony, featuring our premium wine selection and candlelit ambiance.',
      category: 'Customer Moments',
      categoryIcon: 'Users',
      categoryId: 'customer-moments',
      date: 'January 21, 2025',
      location: 'Intimate Dining Area',
      photographer: 'Service Team',
      tags: ['Date Night', 'Romance', 'Wine', 'Intimate']
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=800&fit=crop',
      alt: 'Restaurant interior during busy evening service',
      title: 'Evening Service Excellence',
      description: 'The bustling energy of our evening service with attentive staff, satisfied customers, and the perfect blend of dining and sports entertainment.',
      category: 'Behind the Scenes',
      categoryIcon: 'Eye',
      categoryId: 'behind-scenes',
      date: 'January 19, 2025',
      location: 'Main Dining Area',
      photographer: 'Management Team',
      tags: ['Service', 'Evening', 'Staff', 'Atmosphere']
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop',
      alt: 'Grilled salmon with organic vegetables',
      title: 'Healthy Organic Salmon',
      description: 'Fresh Atlantic salmon grilled to perfection, served with a medley of organic seasonal vegetables and our signature herb butter sauce.',
      category: 'Culinary Artistry',
      categoryIcon: 'ChefHat',
      categoryId: 'culinary',
      date: 'January 23, 2025',
      location: 'TLD Kitchen',
      photographer: 'Chef Marcus K.',
      tags: ['Salmon', 'Healthy', 'Organic Vegetables', 'Grilled']
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=800&fit=crop',
      alt: 'Friends watching football match with drinks',
      title: 'Game Day Brotherhood',
      description: 'Friends enjoying the big game with our craft beer selection, showing the camaraderie and community spirit that defines the TLD experience.',
      category: 'Game Day Energy',
      categoryIcon: 'Trophy',
      categoryId: 'gameday',
      date: 'January 17, 2025',
      location: 'Sports Viewing Area',
      photographer: 'Events Team',
      tags: ['Friends', 'Football', 'Craft Beer', 'Community']
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=800&fit=crop',
      alt: 'Fresh organic ingredients display',
      title: 'Farm Fresh Ingredients',
      description: 'A beautiful display of our daily fresh organic ingredients sourced from local farms, showcasing our commitment to quality and sustainability.',
      category: 'Behind the Scenes',
      categoryIcon: 'Eye',
      categoryId: 'behind-scenes',
      date: 'January 26, 2025',
      location: 'Prep Kitchen',
      photographer: 'Chef Team',
      tags: ['Organic', 'Fresh', 'Local', 'Ingredients']
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop',
      alt: 'Weekend brunch spread with mimosas',
      title: 'Weekend Brunch Bliss',
      description: 'Our popular weekend brunch featuring organic eggs benedict, fresh fruit, artisanal pastries, and signature mimosas in a relaxed sports atmosphere.',
      category: 'Customer Moments',
      categoryIcon: 'Users',
      categoryId: 'customer-moments',
      date: 'January 16, 2025',
      location: 'Brunch Section',
      photographer: 'Service Team',
      tags: ['Brunch', 'Weekend', 'Mimosas', 'Organic Eggs']
    }
  ];

  // Filter images based on active filter
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(image => image.categoryId === activeFilter));
    }
  }, [activeFilter]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleImageClick = (image) => {
    const imageIndex = filteredImages.findIndex(img => img.id === image.id);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(image);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePreviousImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gallery Showcase - TLD Sports Grill | Visual Stories & Experiences</title>
        <meta name="description" content="Explore TLD Sports Grill through stunning photography and videos. See our culinary artistry, game day energy, behind-the-scenes moments, and customer celebrations in Nairobi's premier sports dining destination." />
        <meta name="keywords" content="TLD Sports Grill gallery, Nairobi sports bar photos, organic food photography, game day atmosphere, restaurant gallery, sports dining experience" />
        <meta property="og:title" content="Gallery Showcase - TLD Sports Grill" />
        <meta property="og:description" content="Experience TLD Sports Grill through our visual gallery featuring culinary artistry, game day energy, and unforgettable customer moments." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tldsportsgrill.com/gallery-showcase" />
      </Helmet>

      <Header />
      
      <main>
        <GalleryHeader />
        
        <GalleryFilters
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
        />
        
        <GalleryGrid
          images={filteredImages}
          viewMode={viewMode}
          onImageClick={handleImageClick}
        />
        
        <VideoGallery />
        
        <GalleryStats />
        
        <SocialFeed />
      </main>

      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={closeModal}
        onNext={handleNextImage}
        onPrevious={handlePreviousImage}
        totalImages={filteredImages.length}
        currentIndex={currentImageIndex}
      />
    </div>
  );
};

export default GalleryShowcase;