import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoContent = [
    {
      id: 1,
      title: "Behind the Flames: Our Kitchen Story",
      description: "Watch our chefs prepare signature organic dishes with passion and precision. From flame-grilling to final plating, see the artistry behind every meal.",
      thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      duration: "3:45",
      category: "Behind the Scenes",
      categoryIcon: "ChefHat",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "12.5K"
    },
    {
      id: 2,
      title: "Game Day Energy: Champions League Final",
      description: "Experience the electric atmosphere during the Champions League final. Feel the energy, hear the cheers, and see why TLD is Nairobi's premier sports destination.",
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
      duration: "2:30",
      category: "Game Day",
      categoryIcon: "Trophy",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "8.9K"
    },
    {
      id: 3,
      title: "Customer Stories: Why We Love TLD",
      description: "Hear from our amazing customers about their favorite moments, dishes, and experiences at TLD Sports Grill. Real stories from real people.",
      thumbnail: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600&h=400&fit=crop',
      duration: "4:12",
      category: "Testimonials",
      categoryIcon: "Users",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "6.2K"
    },
    {
      id: 4,
      title: "Organic Promise: From Farm to Flame",
      description: "Discover our commitment to organic, locally-sourced ingredients. Meet our suppliers and see how we maintain the highest quality standards.",
      thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
      duration: "5:20",
      category: "Quality Story",
      categoryIcon: "Leaf",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "4.7K"
    },
    {
      id: 5,
      title: "Private Events: Corporate Excellence",
      description: "See how we transform our space for corporate events, celebrations, and private gatherings. Professional service meets sports entertainment.",
      thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
      duration: "3:15",
      category: "Events",
      categoryIcon: "Calendar",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "3.8K"
    },
    {
      id: 6,
      title: "The TLD Experience: A Day in the Life",
      description: "From morning prep to late-night celebrations, experience a full day at TLD Sports Grill. See what makes us Nairobi's favorite sports dining destination.",
      thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      duration: "6:30",
      category: "Experience",
      categoryIcon: "Play",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "15.3K"
    }
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  return (
    <div className="bg-background py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Play" size={24} className="text-secondary" />
            <span className="text-secondary font-oswald font-semibold text-lg tracking-wide">
              VIDEO STORIES
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
            Experience TLD Through Motion
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Immerse yourself in our world through compelling video content that brings our story, atmosphere, and passion to life.
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <div 
            className="relative aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer group premium-shadow hover:premium-shadow-lg smooth-transition"
            onClick={() => handleVideoClick(videoContent[0])}
          >
            <Image
              src={videoContent[0].thumbnail}
              alt={videoContent[0].title}
              className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 smooth-transition">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 smooth-transition">
                <Icon name="Play" size={32} className="text-secondary-foreground ml-1" />
              </div>
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name={videoContent[0].categoryIcon} size={16} className="text-secondary" />
                <span className="text-secondary text-sm font-medium uppercase tracking-wide">
                  {videoContent[0].category}
                </span>
                <span className="text-white text-sm">•</span>
                <span className="text-white text-sm">{videoContent[0].duration}</span>
                <span className="text-white text-sm">•</span>
                <span className="text-white text-sm">{videoContent[0].views} views</span>
              </div>
              <h3 className="text-white text-xl lg:text-2xl font-oswald font-semibold mb-2">
                {videoContent[0].title}
              </h3>
              <p className="text-gray-200 text-sm lg:text-base line-clamp-2">
                {videoContent[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoContent.slice(1).map((video) => (
            <div
              key={video.id}
              className="bg-card rounded-lg overflow-hidden premium-shadow cursor-pointer group hover:premium-shadow-lg hover:-translate-y-1 smooth-transition"
              onClick={() => handleVideoClick(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 smooth-transition">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 smooth-transition">
                    <Icon name="Play" size={20} className="text-secondary-foreground ml-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-xs font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name={video.categoryIcon} size={14} className="text-secondary" />
                  <span className="text-secondary text-xs font-medium uppercase tracking-wide">
                    {video.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-secondary smooth-transition">
                  {video.title}
                </h3>
                
                <p className="text-text-secondary text-sm line-clamp-2 mb-3">
                  {video.description}
                </p>

                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span>{video.views} views</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Play" size={12} />
                    <span>Watch now</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="Youtube"
            iconPosition="left"
          >
            View All Videos on YouTube
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl mx-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Icon name={selectedVideo.categoryIcon} size={20} className="text-secondary" />
                <span className="text-secondary font-medium">{selectedVideo.category}</span>
              </div>
              <button
                onClick={closeVideoModal}
                className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 smooth-transition"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
              {isPlaying ? (
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center hover:scale-110 smooth-transition"
                  >
                    <Icon name="Play" size={32} className="text-secondary-foreground ml-1" />
                  </button>
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="text-white">
              <h3 className="text-xl lg:text-2xl font-oswald font-semibold mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {selectedVideo.description}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>{selectedVideo.views} views</span>
                <span>•</span>
                <span>{selectedVideo.duration}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;