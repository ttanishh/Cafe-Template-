import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-coffee-shop.jpg';

interface HeroProps {
  onAIRecommenderOpen?: () => void;
}

const Hero = ({ onAIRecommenderOpen }: HeroProps) => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Koe-The Kafe
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 font-light">
            Where AI meets artisan coffee
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the future of coffee with our AI-powered recommendations, 
            immersive ambiance, and artisan quality in every cup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/menu" className="btn-gold text-lg px-8 py-4 animate-glow hover:scale-110 transform transition-all duration-300 shadow-2xl">
              <span className="flex items-center gap-2">
                Explore Menu
                <span className="animate-bounce">📋</span>
              </span>
            </Link>
            <button 
              onClick={onAIRecommenderOpen}
              className="glass-morphism text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-lg font-medium transition-all duration-300 neon-border hover:scale-105 transform"
            >
              <span className="flex items-center gap-2">
                AI Recommender 
                <span className="animate-pulse">✨</span>
              </span>
            </button>
          </div>
        </div>
        
        {/* Floating Coffee Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-2xl">☕</span>
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-xl">🫘</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToFeatures}
          className="animate-bounce text-white/70 hover:text-white transition-colors duration-200"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
      
      {/* Steam Animation */}
      <div className="absolute bottom-1/4 left-1/4 animate-steam">
        <div className="w-2 h-8 bg-white/20 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/3 animate-steam" style={{ animationDelay: '0.5s' }}>
        <div className="w-1 h-6 bg-white/15 rounded-full blur-sm"></div>
      </div>
    </section>
  );
};

export default Hero;