import { useState } from 'react';

interface LatteArtProps {
  isOpen: boolean;
  onClose: () => void;
}

const LatteArt = ({ isOpen, onClose }: LatteArtProps) => {
  const [selectedDesign, setSelectedDesign] = useState('heart');
  const [isGenerating, setIsGenerating] = useState(false);

  const artDesigns = [
    { id: 'heart', name: 'Classic Heart', emoji: '💖', difficulty: 'Beginner' },
    { id: 'leaf', name: 'Rosetta Leaf', emoji: '🍃', difficulty: 'Intermediate' },
    { id: 'swan', name: 'Elegant Swan', emoji: '🦢', difficulty: 'Advanced' },
    { id: 'mandala', name: 'Sacred Mandala', emoji: '🕸️', difficulty: 'Master' },
    { id: 'custom', name: 'AI Generated', emoji: '🤖', difficulty: 'Futuristic' }
  ];

  const generateArt = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-5xl h-[700px] flex overflow-hidden border border-accent/20">
        
        {/* Art Canvas */}
        <div className="flex-1 p-8 bg-gradient-to-br from-secondary to-background">
          <div className="text-center mb-6">
            <h2 className="font-serif text-3xl font-bold text-primary mb-2">Latte Art Studio</h2>
            <p className="text-muted-foreground">Create beautiful art in your coffee</p>
          </div>
          
          {/* Coffee Cup Canvas */}
          <div className="relative mx-auto w-80 h-80 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full border-8 border-amber-800 shadow-2xl overflow-hidden">
            
            {/* Coffee Surface */}
            <div className="absolute inset-4 bg-gradient-to-br from-amber-900 to-amber-950 rounded-full flex items-center justify-center overflow-hidden">
              
              {/* Latte Art Patterns */}
              {!isGenerating ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  {selectedDesign === 'heart' && (
                    <div className="relative">
                      <div className="w-20 h-16 bg-amber-100 rounded-t-full transform rotate-45 relative">
                        <div className="absolute -right-8 top-0 w-20 h-16 bg-amber-100 rounded-t-full"></div>
                        <div className="absolute top-12 left-2 w-0 h-0 border-l-8 border-r-8 border-t-16 border-l-transparent border-r-transparent border-t-amber-100 transform rotate-45"></div>
                      </div>
                    </div>
                  )}
                  {selectedDesign === 'leaf' && (
                    <div className="w-24 h-40 bg-amber-100 rounded-full relative transform -rotate-12">
                      <div className="absolute top-2 left-1/2 w-0.5 h-36 bg-amber-200 transform -translate-x-1/2"></div>
                      <div className="absolute top-8 left-2 w-8 h-0.5 bg-amber-200 transform rotate-45"></div>
                      <div className="absolute top-12 right-2 w-8 h-0.5 bg-amber-200 transform -rotate-45"></div>
                      <div className="absolute top-16 left-2 w-6 h-0.5 bg-amber-200 transform rotate-45"></div>
                      <div className="absolute top-20 right-2 w-6 h-0.5 bg-amber-200 transform -rotate-45"></div>
                    </div>
                  )}
                  {selectedDesign === 'swan' && (
                    <div className="relative">
                      <div className="w-16 h-20 bg-amber-100 rounded-full transform rotate-12"></div>
                      <div className="absolute -top-2 right-2 w-8 h-12 bg-amber-100 rounded-t-full transform rotate-45"></div>
                      <div className="absolute top-4 -left-4 w-12 h-8 bg-amber-100 rounded-l-full"></div>
                      <div className="absolute top-1 right-6 w-2 h-2 bg-amber-800 rounded-full"></div>
                    </div>
                  )}
                  {selectedDesign === 'mandala' && (
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 border-2 border-amber-100 rounded-full"></div>
                      <div className="absolute inset-4 border-2 border-amber-100 rounded-full"></div>
                      <div className="absolute inset-8 border-2 border-amber-100 rounded-full"></div>
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-amber-100"></div>
                      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-amber-100"></div>
                      <div className="absolute inset-0 border-2 border-amber-100 rounded-full transform rotate-45"></div>
                    </div>
                  )}
                  {selectedDesign === 'custom' && (
                    <div className="relative">
                      <div className="w-24 h-24 border-4 border-amber-100 rounded-full animate-spin"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-100 text-xs">
                        AI
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative">
                  <div className="w-32 h-32 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm">
                    Creating...
                  </div>
                </div>
              )}
              
              {/* Foam texture overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-full pointer-events-none"></div>
            </div>
            
            {/* Steam Animation */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="animate-steam opacity-60">
                <div className="w-1 h-12 bg-white/40 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Generate Button */}
          <div className="text-center mt-8">
            <button 
              onClick={generateArt}
              disabled={isGenerating}
              className="btn-coffee text-lg px-8 py-4 disabled:opacity-50"
            >
              {isGenerating ? 'Creating Art...' : 'Generate Art ✨'}
            </button>
          </div>
        </div>
        
        {/* Control Panel */}
        <div className="w-80 p-6 bg-secondary border-l border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-xl font-bold text-primary">Art Selector</h3>
            <button 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors text-xl"
            >
              ✕
            </button>
          </div>
          
          {/* Design Options */}
          <div className="space-y-3 mb-8">
            {artDesigns.map((design) => (
              <button
                key={design.id}
                onClick={() => setSelectedDesign(design.id)}
                className={`w-full p-4 rounded-lg text-left transition-all duration-200 border-2 ${
                  selectedDesign === design.id 
                    ? 'border-accent bg-accent/10 shadow-[var(--shadow-neon)]' 
                    : 'border-border hover:border-accent/50 bg-background'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{design.emoji}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    design.difficulty === 'Futuristic' ? 'bg-neon-blue text-white' :
                    design.difficulty === 'Master' ? 'bg-purple-500 text-white' :
                    design.difficulty === 'Advanced' ? 'bg-red-500 text-white' :
                    design.difficulty === 'Intermediate' ? 'bg-yellow-500 text-black' :
                    'bg-green-500 text-white'
                  }`}>
                    {design.difficulty}
                  </span>
                </div>
                <h4 className="font-semibold text-primary">{design.name}</h4>
              </button>
            ))}
          </div>
          
          {/* Art Info */}
          <div className="bg-background rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-primary mb-2">Smart Features</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• AI-powered art generation</li>
              <li>• Precision foam control</li>
              <li>• Temperature optimization</li>
              <li>• Instagram-ready designs</li>
            </ul>
          </div>
          
          {/* Preview Button */}
          <button className="w-full btn-gold">
            Order with This Art 🎨
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatteArt;