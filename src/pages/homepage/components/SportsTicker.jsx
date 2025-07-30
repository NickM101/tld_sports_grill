import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SportsTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const upcomingGames = [
    {
      id: 1,
      homeTeam: "Arsenal",
      awayTeam: "Chelsea",
      league: "Premier League",
      date: "2025-07-30",
      time: "19:30",
      venue: "Emirates Stadium",
      isLive: false,
      isFeatured: true
    },
    {
      id: 2,
      homeTeam: "Lakers",
      awayTeam: "Warriors",
      league: "NBA",
      date: "2025-07-30",
      time: "21:00",
      venue: "Crypto.com Arena",
      isLive: false,
      isFeatured: true
    },
    {
      id: 3,
      homeTeam: "Real Madrid",
      awayTeam: "Barcelona",
      league: "La Liga",
      date: "2025-07-31",
      time: "20:00",
      venue: "Santiago Bernabéu",
      isLive: false,
      isFeatured: true
    },
    {
      id: 4,
      homeTeam: "Chiefs",
      awayTeam: "Bills",
      league: "NFL",
      date: "2025-07-31",
      time: "22:30",
      venue: "Arrowhead Stadium",
      isLive: false,
      isFeatured: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatGameTime = (date, time) => {
    const gameDateTime = new Date(`${date}T${time}`);
    const now = new Date();
    const diffHours = Math.ceil((gameDateTime - now) / (1000 * 60 * 60));
    
    if (diffHours < 0) return "Live";
    if (diffHours < 24) return `${diffHours}h`;
    return gameDateTime.toLocaleDateString('en-GB', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getLeagueIcon = (league) => {
    const icons = {
      "Premier League": "Trophy",
      "NBA": "Zap",
      "La Liga": "Star",
      "NFL": "Shield"
    };
    return icons[league] || "Calendar";
  };

  return (
    <section className="bg-primary text-white py-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <span className="font-inter font-semibold text-lg">Live Sports Schedule</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2 text-sm opacity-80">
            <Icon name="Clock" size={16} />
            <span>Updated: {currentTime.toLocaleTimeString('en-GB', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}</span>
          </div>
        </div>

        {/* Games Ticker */}
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-2 scroll-snap-x">
            {upcomingGames.map((game) => (
              <div
                key={game.id}
                className={`flex-shrink-0 bg-card/10 backdrop-blur-sm rounded-lg p-4 min-w-[280px] border smooth-transition hover:bg-card/20 scroll-snap-center ${
                  game.isFeatured 
                    ? 'border-secondary shadow-lg shadow-secondary/20' 
                    : 'border-white/20'
                }`}
              >
                {/* League & Time */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Icon name={getLeagueIcon(game.league)} size={16} className="text-secondary" />
                    <span className="text-sm font-medium text-secondary">{game.league}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {game.isFeatured && (
                      <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    )}
                    <span className="text-sm font-mono bg-white/10 px-2 py-1 rounded">
                      {formatGameTime(game.date, game.time)}
                    </span>
                  </div>
                </div>

                {/* Teams */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{game.homeTeam}</span>
                    <span className="text-sm opacity-70">vs</span>
                    <span className="font-semibold">{game.awayTeam}</span>
                  </div>
                </div>

                {/* Venue & Actions */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1 opacity-80">
                    <Icon name="MapPin" size={14} />
                    <span className="truncate">{game.venue}</span>
                  </div>
                  
                  <button className="text-secondary hover:text-cta-hover smooth-transition">
                    <Icon name="Bell" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-4 space-x-1">
            {upcomingGames.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/30"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6">
          <p className="text-sm opacity-80 mb-2">
            Don't miss the action! Reserve your spot for the big games.
          </p>
          <button className="text-secondary hover:text-cta-hover font-medium smooth-transition">
            View Full Schedule →
          </button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
    </section>
  );
};

export default SportsTicker;