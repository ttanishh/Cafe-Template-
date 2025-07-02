import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import BrewBot from '@/components/BrewBot';
import AIRecommender from '@/components/AIRecommender';

const Index = () => {
  const [isBrewBotOpen, setIsBrewBotOpen] = useState(false);
  const [isAIRecommenderOpen, setIsAIRecommenderOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onAIRecommenderOpen={() => setIsAIRecommenderOpen(true)} />
      <Features />
      
      {/* Call to Action Section */}
      <section className="py-20 gradient-coffee text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready for Your Coffee Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of coffee enthusiasts experiencing the future of café culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-gold text-lg px-8 py-4">
              Visit Our Menu
            </Link>
            <button 
              onClick={() => setIsAIRecommenderOpen(true)}
              className="glass-morphism text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-lg font-medium transition-all duration-300 neon-border"
            >
              AI Recommender ✨
            </button>
          </div>
        </div>
      </section>
      
      {/* Interactive Components */}
      <BrewBot isOpen={isBrewBotOpen} onClose={() => setIsBrewBotOpen(false)} />
      <AIRecommender isOpen={isAIRecommenderOpen} onClose={() => setIsAIRecommenderOpen(false)} />
    </div>
  );
};

export default Index;
