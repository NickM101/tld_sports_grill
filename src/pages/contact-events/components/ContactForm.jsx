import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    eventDate: '',
    guestCount: '',
    message: '',
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'private', label: 'Private Celebration' },
    { value: 'sports', label: 'Sports Viewing Party' },
    { value: 'catering', label: 'Catering Services' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'media', label: 'Media & Press' }
  ];

  const guestCountOptions = [
    { value: '1-10', label: '1-10 guests' },
    { value: '11-25', label: '11-25 guests' },
    { value: '26-50', label: '26-50 guests' },
    { value: '51-100', label: '51-100 guests' },
    { value: '100+', label: '100+ guests' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        eventDate: '',
        guestCount: '',
        message: '',
        newsletter: false
      });
      
      alert('Thank you for your message! We\'ll get back to you within 2 hours.');
    } catch (error) {
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-oswald font-semibold text-primary mb-4">
            Send Us a Message
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tell us about your event or inquiry. Our team will respond within 2 hours during business hours.
          </p>
        </div>

        <div className="bg-card premium-shadow rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                required
              />
              
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="+254 700 123 456"
                value={formData.phone}
                onChange={handleInputChange}
                error={errors.phone}
                required
              />
              
              <Select
                label="Inquiry Type"
                name="inquiryType"
                options={inquiryTypes}
                value={formData.inquiryType}
                onChange={(value) => setFormData(prev => ({ ...prev, inquiryType: value }))}
                placeholder="Select inquiry type"
                error={errors.inquiryType}
                required
              />
            </div>

            {/* Event Details (conditional) */}
            {(formData.inquiryType === 'corporate' || formData.inquiryType === 'private' || formData.inquiryType === 'sports') && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-muted rounded-lg">
                <Input
                  label="Preferred Event Date"
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                />
                
                <Select
                  label="Expected Guest Count"
                  name="guestCount"
                  options={guestCountOptions}
                  value={formData.guestCount}
                  onChange={(value) => setFormData(prev => ({ ...prev, guestCount: value }))}
                  placeholder="Select guest count"
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Message <span className="text-error">*</span>
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your event, special requirements, or any questions you have..."
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors ${
                  errors.message ? 'border-error' : 'border-border'
                }`}
                required
              />
              {errors.message && (
                <p className="mt-1 text-sm text-error">{errors.message}</p>
              )}
            </div>

            {/* Newsletter Subscription */}
            <Checkbox
              label="Subscribe to our newsletter for event updates and special offers"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleInputChange}
            />

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                className="bg-secondary hover:bg-cta-hover text-secondary-foreground font-semibold cta-hover"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </div>
          </form>

          {/* Contact Info Footer */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-text-secondary">
              Need immediate assistance? Call us at{' '}
              <a href="tel:+254700123456" className="text-secondary hover:underline font-medium">
                +254 700 123 456
              </a>{' '}
              or WhatsApp us for instant support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;