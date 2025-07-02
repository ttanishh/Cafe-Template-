import { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuCard from '@/components/MenuCard';
import BrewBot from '@/components/BrewBot';
import latteArtImage from '@/assets/latte-art.jpg';
import coffeeBeansImage from '@/assets/coffee-beans.jpg';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isBrewBotOpen, setIsBrewBotOpen] = useState(false);

  const categories = ['All', 'Espresso', 'Cold Brew', 'Seasonal', 'Specialty'];

  const menuItems = [
    {
      name: 'Signature Espresso',
      description: 'Our house blend with rich chocolate undertones and a smooth finish. Crafted from single-origin beans.',
      price: '$4.50',
      image: latteArtImage,
      category: 'Espresso',
      flavorNotes: ['Chocolate', 'Smooth', 'Rich'],
      mood: 'Energizing'
    },
    {
      name: 'AI-Crafted Americano',
      description: 'Personalized strength and flavor profile based on your taste preferences and current mood.',
      price: '$5.00',
      image: coffeeBeansImage,
      category: 'Specialty',
      flavorNotes: ['Customized', 'Bold', 'Personal'],
      mood: 'Focused'
    },
    {
      name: 'Golden Honey Latte',
      description: 'Creamy steamed milk with our signature espresso, sweetened with local wildflower honey.',
      price: '$5.75',
      image: latteArtImage,
      category: 'Specialty',
      flavorNotes: ['Sweet', 'Creamy', 'Floral'],
      mood: 'Comforting'
    },
    {
      name: 'Nitro Cold Brew',
      description: 'Smooth, cascading cold brew infused with nitrogen for a creamy texture without dairy.',
      price: '$4.25',
      image: coffeeBeansImage,
      category: 'Cold Brew',
      flavorNotes: ['Smooth', 'Creamy', 'Bold'],
      mood: 'Refreshing'
    },
    {
      name: 'Seasonal Spice Blend',
      description: 'Limited edition blend featuring warming spices and seasonal flavors, changes monthly.',
      price: '$6.00',
      image: latteArtImage,
      category: 'Seasonal',
      flavorNotes: ['Spiced', 'Warm', 'Limited'],
      mood: 'Cozy'
    },
    {
      name: 'Caramel Cloud Macchiato',
      description: 'Layers of steamed milk, vanilla syrup, espresso shots, and caramel drizzle.',
      price: '$5.50',
      image: coffeeBeansImage,
      category: 'Specialty',
      flavorNotes: ['Sweet', 'Layered', 'Indulgent'],
      mood: 'Treat'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-6">
            Our Coffee Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated selection of artisan coffees, 
            each crafted with precision and passion.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-[var(--shadow-coffee)]'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <MenuCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Recommender CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 card-coffee">
            <div className="text-6xl mb-4">🤖</div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              Not Sure What to Order?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Let BrewBot analyze your preferences and recommend the perfect coffee for your mood and the current weather.
            </p>
            <button 
              onClick={() => setIsBrewBotOpen(true)}
              className="btn-coffee text-lg px-8 py-4 animate-pulse-slow"
            >
              Ask BrewBot ☕
            </button>
          </div>
        </div>
      </section>
      
      {/* BrewBot Component */}
      <BrewBot isOpen={isBrewBotOpen} onClose={() => setIsBrewBotOpen(false)} />
    </div>
  );
};

export default Menu;