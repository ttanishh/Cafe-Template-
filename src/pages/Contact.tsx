import { useState } from 'react';
import Navbar from '@/components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Visit us, call us, or send us a message.
          </p>
        </div>
      </section>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card-coffee">
                <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                  Visit Our Café
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">📍 Address</h3>
                    <p className="text-muted-foreground">
                      123 Innovation Street<br />
                      Tech District, Future City 12345<br />
                      United States
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">⏰ Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                      <p>Saturday: 7:00 AM - 10:00 PM</p>
                      <p>Sunday: 7:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">📞 Contact</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Phone: (555) 123-BREW</p>
                      <p>Email: hello@koethekafe.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card-coffee">
                <h3 className="font-semibold text-lg text-primary mb-4">Find Us</h3>
                <div className="bg-secondary rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p>Interactive Map</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-coffee">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-foreground"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-foreground"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-foreground resize-none"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full btn-coffee text-lg py-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Reserve Table CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="card-coffee">
            <div className="text-6xl mb-4">🪑</div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              Reserve Your Table
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Secure your spot for the ultimate coffee experience. View our real-time table availability.
            </p>
            <button className="btn-gold text-lg px-8 py-4">
              Check Availability
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;