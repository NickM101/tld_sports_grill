import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LiveSportsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const upcomingMatches = [
    {
      id: 1,
      date: "2025-01-30",
      time: "21:00",
      competition: "Champions League",
      homeTeam: "Manchester City",
      awayTeam: "Real Madrid",
      homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      awayFlag: "🇪🇸",
      venue: "Main Sports Bar",
      featured: true,
      bookingAvailable: true
    },
    {
      id: 2,
      date: "2025-01-31",
      time: "18:30",
      competition: "Premier League",
      homeTeam: "Arsenal",
      awayTeam: "Chelsea",
      homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      awayFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      venue: "Premium Viewing Area",
      featured: true,
      bookingAvailable: true
    },
    {
      id: 3,
      date: "2025-02-01",
      time: "16:00",
      competition: "La Liga",
      homeTeam: "Barcelona",
      awayTeam: "Atletico Madrid",
      homeFlag: "🇪🇸",
      awayFlag: "🇪🇸",
      venue: "Sports Lounge",
      featured: false,
      bookingAvailable: true
    },
    {
      id: 4,
      date: "2025-02-02",
      time: "19:00",
      competition: "Kenyan Premier League",
      homeTeam: "Gor Mahia",
      awayTeam: "AFC Leopards",
      homeFlag: "🇰🇪",
      awayFlag: "🇰🇪",
      venue: "Local Sports Corner",
      featured: true,
      bookingAvailable: true
    },
    {
      id: 5,
      date: "2025-02-03",
      time: "20:45",
      competition: "Serie A",
      homeTeam: "Juventus",
      awayTeam: "Inter Milan",
      homeFlag: "🇮🇹",
      awayFlag: "🇮🇹",
      venue: "Main Sports Bar",
      featured: false,
      bookingAvailable: false
    }
  ];

  const getMatchesForDate = (date) => {
    return upcomingMatches.filter(match => match.date === date);
  };

  const formatTime = (time) => {
    return new Date(`2025-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getNextSevenDays = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNumber: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' })
      });
    }
    
    return dates;
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-oswald font-semibold text-primary mb-6">
            Live Sports <span className="text-secondary">Calendar</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Never miss the action! Plan your visit around the biggest matches and secure your perfect viewing spot for the games that matter most.
          </p>
        </div>

        {/* Date Selector */}
        <div className="flex overflow-x-auto pb-4 mb-12 scroll-snap-x">
          <div className="flex space-x-4 mx-auto">
            {getNextSevenDays().map((dateObj) => {
              const matchCount = getMatchesForDate(dateObj.date).length;
              const isSelected = selectedDate === dateObj.date;
              
              return (
                <button
                  key={dateObj.date}
                  onClick={() => setSelectedDate(dateObj.date)}
                  className={`flex-shrink-0 p-4 rounded-xl text-center min-w-[100px] smooth-transition scroll-snap-center ${
                    isSelected
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-card text-text-primary hover:bg-background border border-border'
                  }`}
                >
                  <div className="font-medium text-sm">{dateObj.day}</div>
                  <div className="font-bold text-2xl my-1">{dateObj.dayNumber}</div>
                  <div className="text-xs opacity-75">{dateObj.month}</div>
                  {matchCount > 0 && (
                    <div className={`text-xs mt-2 px-2 py-1 rounded-full ${
                      isSelected ? 'bg-secondary-foreground/20' : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {matchCount} match{matchCount > 1 ? 'es' : ''}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Matches for Selected Date */}
        <div className="space-y-6">
          {getMatchesForDate(selectedDate).length === 0 ? (
            <div className="text-center py-12">
              <Icon name="Calendar" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">No matches scheduled</h3>
              <p className="text-text-secondary">Check other dates for upcoming games</p>
            </div>
          ) : (
            getMatchesForDate(selectedDate).map((match) => (
              <div
                key={match.id}
                className={`bg-card rounded-xl p-6 premium-shadow hover:premium-shadow-lg smooth-transition ${
                  match.featured ? 'ring-2 ring-secondary/20' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Match Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        match.competition === 'Champions League' ? 'bg-blue-100 text-blue-800' :
                        match.competition === 'Premier League' ? 'bg-purple-100 text-purple-800' :
                        match.competition === 'Kenyan Premier League'? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {match.competition}
                      </span>
                      {match.featured && (
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                          Featured Match
                        </span>
                      )}
                    </div>

                    {/* Teams */}
                    <div className="flex items-center justify-center lg:justify-start gap-6 mb-4">
                      <div className="text-center">
                        <div className="text-2xl mb-2">{match.homeFlag}</div>
                        <div className="font-semibold text-text-primary">{match.homeTeam}</div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold text-secondary mb-1">VS</div>
                        <div className="text-sm text-text-secondary">{formatTime(match.time)}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl mb-2">{match.awayFlag}</div>
                        <div className="font-semibold text-text-primary">{match.awayTeam}</div>
                      </div>
                    </div>

                    {/* Venue */}
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Icon name="MapPin" size={16} />
                      <span className="text-sm">Viewing at: {match.venue}</span>
                    </div>
                  </div>

                  {/* Booking Section */}
                  <div className="flex flex-col items-center lg:items-end gap-3">
                    {match.bookingAvailable ? (
                      <>
                        <Button
                          variant="default"
                          size="lg"
                          className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold cta-hover w-full lg:w-auto"
                        >
                          Reserve Table
                        </Button>
                        <div className="flex items-center gap-2 text-sm text-success">
                          <Icon name="CheckCircle" size={16} />
                          <span>Tables Available</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="outline"
                          size="lg"
                          disabled
                          className="w-full lg:w-auto"
                        >
                          Fully Booked
                        </Button>
                        <div className="flex items-center gap-2 text-sm text-error">
                          <Icon name="XCircle" size={16} />
                          <span>No Tables Available</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-xl p-8 premium-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Don't Miss the Action!
            </h3>
            <p className="text-text-secondary mb-6">
              Book your table in advance for the biggest matches. Our premium viewing areas fill up fast during major tournaments and local derbies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold cta-hover"
              >
                Book Now
              </Button>
              <Button
                variant="outline"
                size="lg"
              >
                View Full Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSportsCalendar;