import { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import tour360 from '@/assets/360-tour.jpg';

interface VirtualTourProps {
  isOpen: boolean;
  onClose: () => void;
}

const VirtualTour = ({ isOpen, onClose }: VirtualTourProps) => {
  const [currentView, setCurrentView] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);

  const tourPoints = [
    { name: 'Main Entrance', description: 'Welcome to Koe-The Kafe' },
    { name: 'Coffee Bar', description: 'Where the magic happens' },
    { name: 'Seating Area', description: 'Comfortable spaces to enjoy' },
    { name: 'AI Station', description: 'Interactive coffee experience' },
    { name: 'Private Booths', description: 'Quiet corners for work' }
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const mouseX = e.clientX - rect.left;
    const deltaX = mouseX - centerX;
    setRotation(prev => prev + deltaX * 0.5);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      
      {/* Header */}
      <div className="bg-gradient-coffee text-white p-4 flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold">360° Virtual Tour</h2>
          <p className="text-white/80">Explore Koe-The Kafe from every angle</p>
        </div>
        <button 
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors text-2xl bg-white/10 rounded-full w-10 h-10 flex items-center justify-center"
        >
          ✕
        </button>
      </div>
      
      {/* Main Tour View */}
      <div className="flex-1 relative overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-300 cursor-grab active:cursor-grabbing"
          style={{ 
            backgroundImage: `url(${tour360})`,
            transform: `translateX(${rotation}px) scale(1.2)`,
            backgroundPosition: `${50 + rotation * 0.1}% center`
          }}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
        >
          {/* Interactive Hotspots */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-accent rounded-full flex items-center justify-center cursor-pointer animate-pulse">
            <span className="text-accent-foreground text-xs font-bold">1</span>
          </div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-accent rounded-full flex items-center justify-center cursor-pointer animate-pulse">
            <span className="text-accent-foreground text-xs font-bold">2</span>
          </div>
          <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center cursor-pointer animate-pulse">
            <span className="text-accent-foreground text-xs font-bold">3</span>
          </div>
          
          {/* Navigation Hint */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-black/50 text-white p-4 rounded-lg backdrop-blur-sm">
            <p className="text-sm mb-2">🖱️ Drag to look around</p>
            <p className="text-xs opacity-75">Click hotspots to explore</p>
          </div>
        </div>
        
        {/* Controls */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
          <button 
            onClick={() => setRotation(prev => prev - 50)}
            className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
          >
            <ArrowUp className="w-5 h-5 transform rotate-[-90deg]" />
          </button>
          <button 
            onClick={() => setRotation(prev => prev + 50)}
            className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
          >
            <ArrowDown className="w-5 h-5 transform rotate-90" />
          </button>
        </div>
      </div>
      
      {/* Bottom Panel */}
      <div className="bg-background border-t border-border p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-xl font-bold text-primary">
              {tourPoints[currentView].name}
            </h3>
            <span className="text-sm text-muted-foreground">
              {currentView + 1} of {tourPoints.length}
            </span>
          </div>
          
          <p className="text-muted-foreground mb-4">
            {tourPoints[currentView].description}
          </p>
          
          {/* Tour Navigation */}
          <div className="flex gap-2">
            {tourPoints.map((point, index) => (
              <button
                key={index}
                onClick={() => setCurrentView(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentView === index
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {point.name}
              </button>
            ))}
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-secondary rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-semibold text-primary">Interactive Hotspots</h4>
              <p className="text-sm text-muted-foreground">Click to explore details</p>
            </div>
            <div className="bg-secondary rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="font-semibold text-primary">360° Movement</h4>
              <p className="text-sm text-muted-foreground">Drag and explore freely</p>
            </div>
            <div className="bg-secondary rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">📱</div>
              <h4 className="font-semibold text-primary">VR Compatible</h4>
              <p className="text-sm text-muted-foreground">Enhanced on VR devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;