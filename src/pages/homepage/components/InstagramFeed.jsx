import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const InstagramFeed = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop&crop=center",
      caption: "Our signature organic chicken wings - crispy perfection! 🔥 #TLDSportsGrill #OrganicEats",
      likes: 234,
      comments: 18,
      timestamp: "2h",
      type: "image"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=400&h=400&fit=crop&crop=center",
      caption: "Game day atmosphere at its finest! Arsenal vs Chelsea tonight 🏆 #GameDay #PremierLeague",
      likes: 189,
      comments: 25,
      timestamp: "4h",
      type: "image"
    },
    {
      id: 3,
      image: "https://images.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg?w=400&h=400&fit=crop&crop=center",
      caption: "Fresh from our kitchen to your table 🍽️ Farm-to-table excellence #FreshFood #Organic",
      likes: 156,
      comments: 12,
      timestamp: "6h",
      type: "image"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop&crop=center",
      caption: "Craft cocktails that complement every game 🍹 #CraftCocktails #SportsBar",
      likes: 203,
      comments: 31,
      timestamp: "8h",
      type: "image"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?w=400&h=400&fit=crop&crop=center",
      caption: "Sunday brunch vibes with the squad 🥂 Perfect start to game day! #SundayBrunch #Friends",
      likes: 178,
      comments: 22,
      timestamp: "12h",
      type: "image"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=400&fit=crop&crop=center",
      caption: "Behind the scenes: Our chefs preparing today's specials 👨‍🍳 #BehindTheScenes #ChefLife",
      likes: 145,
      comments: 15,
      timestamp: "1d",
      type: "image"
    }
  ];

  const openPost = (post) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Instagram" size={32} className="text-accent" />
            <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary">
              Live From Our Kitchen
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Follow our daily specials, behind-the-scenes moments, and the vibrant community that makes TLD Sports Grill special
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => openPost(post)}
            >
              <Image
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover smooth-transition group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 smooth-transition flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 smooth-transition text-white text-center">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={16} />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                  <Icon name="Instagram" size={24} />
                </div>
              </div>

              {/* Time Badge */}
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                {post.timestamp}
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-6 py-4 premium-shadow">
            <Icon name="Instagram" size={24} className="text-accent" />
            <span className="font-inter font-semibold text-primary">@tldsportsgrill</span>
            <button className="bg-accent text-white px-4 py-2 rounded-full font-medium hover:bg-accent/90 smooth-transition">
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Instagram" size={16} className="text-white" />
                </div>
                <span className="font-semibold text-primary">tldsportsgrill</span>
                <span className="text-sm text-text-secondary">• {selectedPost.timestamp}</span>
              </div>
              <button
                onClick={closePost}
                className="p-2 hover:bg-muted rounded-full smooth-transition"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            {/* Image */}
            <div className="aspect-square">
              <Image
                src={selectedPost.image}
                alt="Instagram post"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Actions */}
              <div className="flex items-center space-x-4 mb-3">
                <button className="hover:text-accent smooth-transition">
                  <Icon name="Heart" size={24} />
                </button>
                <button className="hover:text-accent smooth-transition">
                  <Icon name="MessageCircle" size={24} />
                </button>
                <button className="hover:text-accent smooth-transition">
                  <Icon name="Share" size={24} />
                </button>
              </div>

              {/* Likes */}
              <div className="font-semibold text-primary mb-2">
                {selectedPost.likes} likes
              </div>

              {/* Caption */}
              <div className="text-text-primary">
                <span className="font-semibold">tldsportsgrill</span>{' '}
                <span>{selectedPost.caption}</span>
              </div>

              {/* Comments */}
              <button className="text-text-secondary text-sm mt-2 hover:text-primary smooth-transition">
                View all {selectedPost.comments} comments
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramFeed;