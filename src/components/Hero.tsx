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
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-parallax-slow opacity-20">
          <span className="text-6xl">☕</span>
        </div>
        <div className="absolute top-40 right-20 animate-parallax-medium opacity-30">
          <span className="text-4xl">🫘</span>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-parallax-fast opacity-25">
          <span className="text-5xl">🥛</span>
        </div>
      </div>
      
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 animate-parallax-slow"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>
      
      {/* Espresso Pour Animation */}
      <div className="absolute top-1/4 left-1/3 animate-pour">
        <div className="w-2 h-0 bg-gradient-to-b from-amber-800 to-amber-900 rounded-full animate-pour"></div>
      </div>
      
      {/* Steam Effects */}
      <div className="absolute top-1/3 left-1/2 coffee-steam"></div>
      <div className="absolute top-1/4 right-1/3 coffee-steam" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="text-8xl mb-8 animate-latte-heart">☕</div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Koe-The Kafe
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Where AI meets artisan coffee
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Experience the future of coffee with our AI-powered recommendations, 
            immersive ambiance, and artisan quality in every cup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <Link to="/menu" className="btn-gold text-lg px-8 py-4 animate-glow hover:scale-110 transform transition-all duration-500 shadow-2xl group">
              <span className="flex items-center gap-2">
                Explore Menu
                <span className="animate-bounce group-hover:animate-spin">📋</span>
              </span>
            </Link>
            <button 
              onClick={onAIRecommenderOpen}
              className="glass-morphism text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-lg font-medium transition-all duration-500 neon-border hover:scale-105 transform group"
            >
              <span className="flex items-center gap-2">
                AI Recommender 
                <span className="animate-pulse group-hover:animate-bounce">✨</span>
              </span>
            </button>
          </div>
        </div>
        
        {/* Floating Coffee Elements with Enhanced Animations */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer">
            <span className="text-2xl animate-swirl">☕</span>
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer">
            <span className="text-xl animate-bounce-slow">🫘</span>
          </div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer">
            <span className="text-xl animate-pulse-slow">🥛</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator with Enhanced Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToFeatures}
          className="animate-bounce text-white/70 hover:text-white transition-all duration-300 hover:scale-110 transform"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;