import { useState } from 'react';
import FeatureCard from './FeatureCard';
import LatteArt from './LatteArt';
import AmbientSound from './AmbientSound';
import latteArtImage from '@/assets/latte-art.jpg';
import coffeeBeansImage from '@/assets/coffee-beans.jpg';

const Features = () => {
  const [isLatteArtOpen, setIsLatteArtOpen] = useState(false);
  const [isAmbientSoundOpen, setIsAmbientSoundOpen] = useState(false);
  
  const features = [
    {
      icon: '🤖',
      title: 'AI Recommender',
      description: 'Our intelligent BrewBot analyzes your mood, weather, and preferences to suggest the perfect coffee experience tailored just for you.',
      image: latteArtImage,
    },
    {
      icon: '🎨',
      title: 'Latte Art Studio',
      description: 'Watch our master baristas create edible art in your cup, or preview your custom latte art design before ordering.',
      image: coffeeBeansImage,
    },
    {
      icon: '🎵',
      title: 'Ambient Sound Studio',
      description: 'Craft your perfect café atmosphere by mixing espresso steam, jazz melodies, and gentle rain sounds to enhance your experience.',
      onClick: () => setIsAmbientSoundOpen(true)
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-6">
            The Future of Coffee
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover innovative features that blend cutting-edge technology 
            with the timeless art of coffee crafting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div onClick={feature.onClick} className="cursor-pointer">
                <FeatureCard {...feature} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex gap-4 justify-center flex-wrap">
          <button 
            onClick={() => setIsLatteArtOpen(true)}
            className="btn-coffee text-lg px-8 py-4 animate-glow"
          >
            Try Latte Art Studio 🎨
          </button>
          <button 
            onClick={() => setIsAmbientSoundOpen(true)}
            className="btn-gold text-lg px-8 py-4 animate-glow"
          >
            Open Sound Studio 🎵
          </button>
        </div>
      </div>
      
      {/* Interactive Components */}
      <LatteArt isOpen={isLatteArtOpen} onClose={() => setIsLatteArtOpen(false)} />
      <AmbientSound isOpen={isAmbientSoundOpen} onClose={() => setIsAmbientSoundOpen(false)} />
    </section>
  );
};

export default Features;