import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  isTransitioning?: boolean;
}

const PageTransition = ({ children, isTransitioning = false }: PageTransitionProps) => {
  const [showTransition, setShowTransition] = useState(isTransitioning);

  useEffect(() => {
    if (isTransitioning) {
      setShowTransition(true);
      const timer = setTimeout(() => setShowTransition(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="relative">
      {/* Coffee Swirl Transition */}
      {showTransition && (
        <div className="fixed inset-0 z-[10000] pointer-events-none">
          <div className="absolute inset-0 bg-primary/90">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 border-4 border-cream animate-swirl opacity-80">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-cream/30 to-transparent animate-spin"></div>
              </div>
            </div>
            
            {/* Milk Foam Dissolve Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-cream/10 to-cream/30 animate-fade-out"></div>
            
            {/* Coffee Beans Flying */}
            <div className="absolute top-1/4 left-1/4 animate-bounce text-4xl opacity-60">🫘</div>
            <div className="absolute top-3/4 right-1/4 animate-bounce text-3xl opacity-40" style={{ animationDelay: '0.2s' }}>☕</div>
            <div className="absolute top-1/2 right-1/3 animate-bounce text-2xl opacity-50" style={{ animationDelay: '0.4s' }}>🥛</div>
          </div>
        </div>
      )}
      
      {/* Page Content */}
      <div className={`transition-all duration-500 ${showTransition ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {children}
      </div>
    </div>
  );
};

export default PageTransition;