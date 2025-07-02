import { useState } from 'react';

interface AmbientSoundProps {
  isOpen: boolean;
  onClose: () => void;
}

const AmbientSound = ({ isOpen, onClose }: AmbientSoundProps) => {
  const [volumes, setVolumes] = useState({
    espresso: 0,
    grinder: 0,
    chatter: 0,
    jazz: 0,
    rain: 0,
    fireplace: 0
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const soundElements = [
    { id: 'espresso', name: 'Espresso Machine', icon: '☕', color: 'bg-amber-600' },
    { id: 'grinder', name: 'Coffee Grinder', icon: '⚙️', color: 'bg-gray-600' },
    { id: 'chatter', name: 'Café Chatter', icon: '👥', color: 'bg-blue-500' },
    { id: 'jazz', name: 'Smooth Jazz', icon: '🎷', color: 'bg-purple-500' },
    { id: 'rain', name: 'Gentle Rain', icon: '🌧️', color: 'bg-cyan-500' },
    { id: 'fireplace', name: 'Cozy Fire', icon: '🔥', color: 'bg-orange-500' }
  ];

  const handleVolumeChange = (soundId: string, volume: number) => {
    setVolumes(prev => ({ ...prev, [soundId]: volume }));
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const resetAll = () => {
    setVolumes({
      espresso: 0,
      grinder: 0,
      chatter: 0,
      jazz: 0,
      rain: 0,
      fireplace: 0
    });
    setIsPlaying(false);
  };

  const presets = [
    { name: 'Morning Rush', settings: { espresso: 80, grinder: 60, chatter: 40, jazz: 20, rain: 0, fireplace: 0 } },
    { name: 'Cozy Evening', settings: { espresso: 30, grinder: 0, chatter: 20, jazz: 70, rain: 50, fireplace: 60 } },
    { name: 'Focus Mode', settings: { espresso: 40, grinder: 20, chatter: 10, jazz: 60, rain: 30, fireplace: 0 } },
    { name: 'Rainy Day', settings: { espresso: 50, grinder: 30, chatter: 30, jazz: 80, rain: 90, fireplace: 70 } }
  ];

  const applyPreset = (preset: any) => {
    setVolumes(preset.settings);
    setIsPlaying(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-6xl h-[700px] flex overflow-hidden border border-accent/20">
        
        {/* Sound Mixing Board */}
        <div className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-2">Ambient Sound Studio</h2>
              <p className="text-muted-foreground">Craft your perfect café atmosphere</p>
            </div>
            <button 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors text-xl"
            >
              ✕
            </button>
          </div>

          {/* Sound Controls Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {soundElements.map((sound) => (
              <div key={sound.id} className="card-coffee text-center">
                <div className={`w-16 h-16 ${sound.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl`}>
                  {sound.icon}
                </div>
                <h3 className="font-semibold text-primary mb-4">{sound.name}</h3>
                
                {/* Volume Slider */}
                <div className="relative mb-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volumes[sound.id as keyof typeof volumes]}
                    onChange={(e) => handleVolumeChange(sound.id, parseInt(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, hsl(var(--accent)) 0%, hsl(var(--accent)) ${volumes[sound.id as keyof typeof volumes]}%, hsl(var(--secondary)) ${volumes[sound.id as keyof typeof volumes]}%, hsl(var(--secondary)) 100%)`
                    }}
                  />
                </div>
                
                {/* Volume Display */}
                <div className="text-sm text-muted-foreground">
                  {volumes[sound.id as keyof typeof volumes]}%
                </div>
              </div>
            ))}
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button 
              onClick={togglePlayback}
              className={`text-6xl transition-all duration-300 ${
                isPlaying 
                  ? 'text-accent animate-pulse' 
                  : 'text-muted-foreground hover:text-accent'
              }`}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button 
              onClick={resetAll}
              className="btn-gold px-6 py-3"
            >
              Reset All
            </button>
          </div>

          {/* Audio Visualizer */}
          {isPlaying && (
            <div className="flex items-end justify-center gap-1 h-20 bg-secondary rounded-lg p-4">
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-accent rounded-t-lg animate-pulse"
                  style={{
                    width: '8px',
                    height: `${Math.random() * 60 + 10}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${0.5 + Math.random()}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Presets Panel */}
        <div className="w-80 p-6 bg-secondary border-l border-border">
          <h3 className="font-serif text-xl font-bold text-primary mb-6">Atmosphere Presets</h3>
          
          <div className="space-y-4 mb-8">
            {presets.map((preset, index) => (
              <button
                key={index}
                onClick={() => applyPreset(preset)}
                className="w-full p-4 bg-background rounded-lg hover:bg-accent/10 transition-all duration-200 text-left border border-border hover:border-accent"
              >
                <h4 className="font-semibold text-primary">{preset.name}</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {Object.entries(preset.settings).map(([key, value]) => 
                    value > 0 && (
                      <span key={key} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                        {soundElements.find(s => s.id === key)?.icon} {value}%
                      </span>
                    )
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Status */}
          <div className="bg-background rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Status</h4>
            <p className="text-sm text-muted-foreground mb-2">
              {isPlaying ? '🎵 Playing ambient sounds' : '⏸️ Sounds paused'}
            </p>
            <p className="text-xs text-muted-foreground">
              Active layers: {Object.values(volumes).filter(v => v > 0).length}/6
            </p>
          </div>

          <button className="w-full btn-coffee mt-6">
            Save My Mix 💾
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmbientSound;