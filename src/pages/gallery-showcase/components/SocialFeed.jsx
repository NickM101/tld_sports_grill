import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialFeed = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const socialPosts = [
    {
      id: 1,
      platform: 'instagram',
      username: '@sarah_foodie_ke',
      userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: `Amazing game night at @tldsportsgrill! The organic chicken wings were absolutely perfect and the atmosphere during the Arsenal match was electric! ⚽🔥`,
      image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=400&fit=crop',
      likes: 234,
      comments: 18,
      timestamp: '2 hours ago',
      hashtags: ['#TLDSportsGrill', '#GameNight', '#OrganicFood', '#NairobiEats']
    },
    {
      id: 2,
      platform: 'instagram',
      username: '@corporate_events_ke',
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: `Hosted our quarterly team celebration at TLD Sports Grill. Exceptional service, premium atmosphere, and the flame-grilled dishes were a hit with everyone! 🏆`,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop',
      likes: 156,
      comments: 12,
      timestamp: '5 hours ago',
      hashtags: ['#CorporateEvents', '#TeamCelebration', '#PremiumDining']
    },
    {
      id: 3,
      platform: 'instagram',
      username: '@nairobi_sports_fan',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: `The energy here during Champions League nights is unmatched! Great screens, better food, and the best sports crowd in Lavington 🏆⚽`,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop',
      likes: 189,
      comments: 24,
      timestamp: '1 day ago',
      hashtags: ['#ChampionsLeague', '#SportsBar', '#Lavington', '#GameDay']
    },
    {
      id: 4,
      platform: 'instagram',
      username: '@weekend_vibes_ke',
      userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: `Sunday brunch goals! The organic ingredients really make a difference in taste. Perfect spot for catching up with friends while watching the game 🥂`,
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
      likes: 267,
      comments: 31,
      timestamp: '2 days ago',
      hashtags: ['#SundayBrunch', '#OrganicFood', '#FriendsTime', '#WeekendVibes']
    },
    {
      id: 5,
      platform: 'instagram',
      username: '@date_night_nairobi',
      userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      content: `Romantic dinner with a sports twist! Who knew you could have both premium dining and catch the game? TLD Sports Grill nailed it! 💕⚽`,
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop',
      likes: 198,
      comments: 15,
      timestamp: '3 days ago',
      hashtags: ['#DateNight', '#RomanticDinner', '#SportsAndDining', '#PremiumExperience']
    },
    {
      id: 6,
      platform: 'instagram',
      username: '@family_fun_ke',
      userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      content: `Family Sunday at TLD! Kids loved the atmosphere, adults enjoyed the game, and everyone was happy with the food. Perfect family spot! 👨‍👩‍👧‍👦`,
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=400&h=400&fit=crop',
      likes: 145,
      comments: 22,
      timestamp: '4 days ago',
      hashtags: ['#FamilyTime', '#SundayFun', '#KidsWelcome', '#FamilyDining']
    }
  ];

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'instagram':
        return 'Instagram';
      case 'twitter':
        return 'Twitter';
      case 'facebook':
        return 'Facebook';
      default:
        return 'Share2';
    }
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="bg-muted py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Hash" size={24} className="text-secondary" />
            <span className="text-secondary font-oswald font-semibold text-lg tracking-wide">
              SOCIAL MOMENTS
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
            See What Our Community is Sharing
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real experiences from real customers. Join the conversation and share your TLD Sports Grill moments.
          </p>
        </div>

        {/* Social Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="bg-card rounded-lg premium-shadow overflow-hidden cursor-pointer smooth-transition hover:premium-shadow-lg hover:-translate-y-1"
              onClick={() => handlePostClick(post)}
            >
              {/* Post Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src={post.userAvatar}
                      alt={post.username}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Icon name={getPlatformIcon(post.platform)} size={12} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary">{post.username}</h4>
                    <p className="text-sm text-text-secondary">{post.timestamp}</p>
                  </div>
                </div>
              </div>

              {/* Post Image */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={post.image}
                  alt="Social post"
                  className="w-full h-full object-cover smooth-transition hover:scale-105"
                />
              </div>

              {/* Post Content */}
              <div className="p-4">
                <p className="text-text-primary mb-3 line-clamp-3 leading-relaxed">
                  {post.content}
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.hashtags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="text-secondary text-sm font-medium hover:underline cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.hashtags.length > 3 && (
                    <span className="text-text-secondary text-sm">
                      +{post.hashtags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Post Stats */}
                <div className="flex items-center justify-between text-text-secondary">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={16} />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                  <button className="p-1 hover:text-text-primary smooth-transition">
                    <Icon name="Share2" size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-lg p-8 premium-shadow">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-oswald font-semibold text-primary mb-4">
              Share Your TLD Sports Grill Experience
            </h3>
            <p className="text-text-secondary mb-6">
              Tag us in your posts and use #TLDSportsGrill to be featured in our gallery. 
              We love seeing your memorable moments!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold cta-hover"
                iconName="Camera"
                iconPosition="left"
              >
                Visit & Share
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Instagram"
                iconPosition="left"
              >
                Follow @tldsportsgrill
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;