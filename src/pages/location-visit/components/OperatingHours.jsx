import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const OperatingHours = () => {
  const [activeSchedule, setActiveSchedule] = useState('regular');

  const schedules = {
    regular: {
      title: "Regular Hours",
      subtitle: "Our standard operating schedule",
      hours: [
        { day: "Monday - Thursday", time: "11:00 AM - 11:00 PM", status: "open" },
        { day: "Friday - Saturday", time: "11:00 AM - 12:00 AM", status: "open" },
        { day: "Sunday", time: "12:00 PM - 10:00 PM", status: "open" }
      ]
    },
    gameday: {
      title: "Game Day Hours",
      subtitle: "Extended hours for major sports events",
      hours: [
        { day: "Premier League Matches", time: "Opens 2 hours before kickoff", status: "special" },
        { day: "Champions League", time: "Opens 2 hours before kickoff", status: "special" },
        { day: "World Cup/AFCON", time: "Opens 3 hours before kickoff", status: "special" },
        { day: "Local Derby Matches", time: "Opens 2 hours before kickoff", status: "special" }
      ]
    },
    holiday: {
      title: "Holiday Schedule",
      subtitle: "Special hours during holidays",
      hours: [
        { day: "New Year\'s Day", time: "2:00 PM - 11:00 PM", status: "holiday" },
        { day: "Christmas Day", time: "Closed", status: "closed" },
        { day: "Boxing Day", time: "12:00 PM - 11:00 PM", status: "holiday" },
        { day: "Public Holidays", time: "12:00 PM - 11:00 PM", status: "holiday" }
      ]
    }
  };

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const isOpen = currentHour >= 11 && currentHour < 23;

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'text-success';
      case 'closed': return 'text-error';
      case 'special': return 'text-secondary';
      case 'holiday': return 'text-accent';
      default: return 'text-text-secondary';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'open': return 'Clock';
      case 'closed': return 'XCircle';
      case 'special': return 'Star';
      case 'holiday': return 'Calendar';
      default: return 'Clock';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-success' : 'bg-error'} animate-pulse`}></div>
            <span className={`font-medium ${isOpen ? 'text-success' : 'text-error'}`}>
              {isOpen ? 'Currently Open' : 'Currently Closed'}
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
            When We're Open
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Flexible hours to accommodate your dining and sports viewing needs
          </p>
        </div>

        {/* Schedule Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-card rounded-lg p-1 inline-flex premium-shadow">
            {Object.keys(schedules).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSchedule(key)}
                className={`px-6 py-3 rounded-md font-medium transition-all capitalize ${
                  activeSchedule === key
                    ? 'bg-secondary text-secondary-foreground premium-shadow'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                {schedules[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Schedule */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl premium-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6">
              <h3 className="text-2xl font-semibold mb-2">{schedules[activeSchedule].title}</h3>
              <p className="text-white/80">{schedules[activeSchedule].subtitle}</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {schedules[activeSchedule].hours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon 
                        name={getStatusIcon(schedule.status)} 
                        size={20} 
                        className={getStatusColor(schedule.status)} 
                      />
                      <span className="font-medium text-primary">{schedule.day}</span>
                    </div>
                    <span className={`font-semibold ${getStatusColor(schedule.status)}`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-6 premium-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Info" size={20} className="text-secondary" />
              <h3 className="text-lg font-semibold text-primary">Important Notes</h3>
            </div>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start space-x-2">
                <Icon name="ArrowRight" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                <span>Kitchen closes 30 minutes before closing time</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="ArrowRight" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                <span>Last orders taken 45 minutes before closing</span>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="ArrowRight" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                <span>Extended hours during major tournaments</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-xl p-6 premium-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Calendar" size={20} className="text-accent" />
              <h3 className="text-lg font-semibold text-primary">Reservations</h3>
            </div>
            <div className="space-y-3">
              <p className="text-text-secondary">
                Recommended for groups of 6+ and during major sports events
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Phone" size={16} className="text-secondary" />
                <span className="text-primary font-medium">Call: +254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="MessageCircle" size={16} className="text-secondary" />
                <span className="text-primary font-medium">WhatsApp: +254 700 123 456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingHours;