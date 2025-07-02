import Navbar from '@/components/Navbar';
import heroImage from '@/assets/hero-coffee-shop.jpg';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where passion for coffee meets innovation in technology
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-coffee mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Where AI Meets Artisan Coffee
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded in 2024, Koe-The Kafe emerged from a simple vision: to create a space where 
                  cutting-edge technology enhances rather than replaces the human art of coffee making.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our name "Koe" (声) means "voice" in Japanese, representing our belief that every 
                  cup of coffee should tell a story and create a connection between people.
                </p>
                <blockquote className="border-l-4 border-accent pl-6 italic text-xl text-primary">
                  "Each cup, a connection"
                </blockquote>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={heroImage} 
                  alt="Koe-The Kafe interior"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="card-coffee">
            <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
              Our Journey
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">2024</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">The Beginning</h3>
                  <p className="text-muted-foreground">
                    Koe-The Kafe opens its doors, introducing the world's first AI-powered coffee 
                    recommendation system alongside traditional brewing methods.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">Q2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">Innovation Lab</h3>
                  <p className="text-muted-foreground">
                    Launch of our Latte Art Studio and Ambient Sound Studio, creating multi-sensory 
                    coffee experiences that engage all the senses.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary border-2 border-accent rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold">Q3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">Future Plans</h3>
                  <p className="text-muted-foreground">
                    Expanding our AI capabilities with mood recognition and weather-adaptive 
                    brewing techniques for the ultimate personalized coffee experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-coffee">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-lg text-primary mb-2">Precision</h3>
              <p className="text-muted-foreground">
                Every bean measured, every temperature calibrated, every moment crafted with purpose.
              </p>
            </div>
            <div className="card-coffee">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-lg text-primary mb-2">Connection</h3>
              <p className="text-muted-foreground">
                Technology brings us together, creating meaningful interactions over exceptional coffee.
              </p>
            </div>
            <div className="card-coffee">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-semibold text-lg text-primary mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly evolving while honoring the timeless traditions of coffee craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;