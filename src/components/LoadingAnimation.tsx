const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative">
        {/* Coffee Cup */}
        <div className="w-32 h-32 bg-gradient-to-b from-secondary to-primary rounded-b-full relative overflow-hidden">
          {/* Coffee Surface */}
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-br from-amber-900 to-amber-950 rounded-b-full">
            {/* Latte Art Heart Animation */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-6 bg-cream animate-latte-heart rounded-t-full relative">
                <div className="absolute -right-3 top-0 w-8 h-6 bg-cream rounded-t-full"></div>
                <div className="absolute top-4 left-1 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-cream transform rotate-45"></div>
              </div>
            </div>
          </div>
          
          {/* Steam */}
          <div className="absolute -top-2 left-1/3 animate-steam">
            <div className="w-1 h-6 bg-white/40 rounded-full blur-sm"></div>
          </div>
          <div className="absolute -top-3 right-1/3 animate-steam" style={{ animationDelay: '0.5s' }}>
            <div className="w-0.5 h-4 bg-white/30 rounded-full blur-sm"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center mt-6">
          <p className="text-primary font-serif text-lg animate-pulse">
            Brewing your experience...
          </p>
          <div className="flex justify-center gap-1 mt-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;