import { useState } from 'react';
import aiBarista from '@/assets/ai-barista.jpg';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface BrewBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrewBot = ({ isOpen, onClose }: BrewBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm BrewBot ☕ Your AI coffee companion. I can recommend the perfect coffee based on your mood, the weather, and your taste preferences. What can I help you discover today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showApiInput, setShowApiInput] = useState(true);

  const predefinedResponses = [
    "Based on your preferences, I'd recommend our Signature Espresso! It has rich chocolate undertones that pair perfectly with a focused mood. ☕",
    "For a rainy day like today, try our Golden Honey Latte! The warm, comforting flavors will brighten your spirits. 🍯",
    "Feeling adventurous? Our AI-Crafted Americano adapts to your exact taste profile. It's like having a personal barista! 🤖",
    "I sense you need something refreshing! Our Nitro Cold Brew has that smooth, energizing kick without being too heavy. ❄️",
    "Perfect timing for our Seasonal Spice Blend! The warming spices will complement the cozy atmosphere you're seeking. 🌿"
  ];

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: predefinedResponses[Math.floor(Math.random() * predefinedResponses.length)],
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-2xl h-[600px] flex flex-col overflow-hidden border border-accent/20">
        
        {/* Header */}
        <div className="bg-gradient-coffee text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
              <img src={aiBarista} alt="BrewBot" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold">BrewBot</h2>
              <p className="text-white/80 text-sm">Your AI Coffee Companion</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors text-2xl"
          >
            ✕
          </button>
        </div>

        {/* API Key Input (if needed) */}
        {showApiInput && (
          <div className="p-4 bg-secondary border-b border-border">
            <p className="text-sm text-muted-foreground mb-2">
              For enhanced AI responses, enter your Perplexity API key (optional):
            </p>
            <div className="flex gap-2">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter API key..."
                className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background"
              />
              <button 
                onClick={() => setShowApiInput(false)}
                className="btn-coffee text-sm px-4 py-2"
              >
                {apiKey ? 'Save' : 'Skip'}
              </button>
            </div>
          </div>
        )}
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.isBot 
                  ? 'bg-secondary text-secondary-foreground rounded-bl-sm' 
                  : 'bg-primary text-primary-foreground rounded-br-sm'
              }`}>
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 opacity-70 ${
                  message.isBot ? 'text-muted-foreground' : 'text-primary-foreground/70'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-secondary rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Input */}
        <div className="p-4 border-t border-border bg-background">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about coffee recommendations..."
              className="flex-1 px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent"
              disabled={isLoading}
            />
            <button 
              onClick={sendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="btn-coffee px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrewBot;