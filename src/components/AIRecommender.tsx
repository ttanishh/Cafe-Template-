import { useState, useEffect } from 'react';
import aiInterface from '@/assets/ai-interface.jpg';

interface AIRecommenderProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UserPreferences {
  mood: string;
  temperature: string;
  caffeine: string;
  flavor: string;
  sweetness: string;
}

const AIRecommender = ({ isOpen, onClose }: AIRecommenderProps) => {
  const [step, setStep] = useState(0);
  const [preferences, setPreferences] = useState<UserPreferences>({
    mood: '',
    temperature: '',
    caffeine: '',
    flavor: '',
    sweetness: ''
  });
  const [recommendation, setRecommendation] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [weather, setWeather] = useState('Partly cloudy, 72°F');

  const questions = [
    {
      question: "How are you feeling today?",
      key: 'mood' as keyof UserPreferences,
      options: [
        { value: 'energetic', label: 'Energetic ⚡', color: 'bg-yellow-500' },
        { value: 'focused', label: 'Focused 🎯', color: 'bg-blue-500' },
        { value: 'relaxed', label: 'Relaxed 😌', color: 'bg-green-500' },
        { value: 'creative', label: 'Creative 🎨', color: 'bg-purple-500' },
        { value: 'social', label: 'Social 👥', color: 'bg-pink-500' }
      ]
    },
    {
      question: "What's your temperature preference?",
      key: 'temperature' as keyof UserPreferences,
      options: [
        { value: 'hot', label: 'Hot ☕', color: 'bg-red-500' },
        { value: 'warm', label: 'Warm 🌡️', color: 'bg-orange-500' },
        { value: 'iced', label: 'Iced ❄️', color: 'bg-blue-400' },
        { value: 'cold', label: 'Cold Brew 🧊', color: 'bg-cyan-500' }
      ]
    },
    {
      question: "How much caffeine do you need?",
      key: 'caffeine' as keyof UserPreferences,
      options: [
        { value: 'low', label: 'Gentle boost 🌱', color: 'bg-green-400' },
        { value: 'medium', label: 'Moderate kick ⚡', color: 'bg-yellow-500' },
        { value: 'high', label: 'Strong power 💪', color: 'bg-red-500' },
        { value: 'extra', label: 'Maximum fuel 🚀', color: 'bg-purple-600' }
      ]
    },
    {
      question: "What flavors appeal to you?",
      key: 'flavor' as keyof UserPreferences,
      options: [
        { value: 'fruity', label: 'Fruity & Bright 🍓', color: 'bg-pink-400' },
        { value: 'nutty', label: 'Nutty & Rich 🌰', color: 'bg-amber-600' },
        { value: 'chocolate', label: 'Chocolate & Deep 🍫', color: 'bg-amber-800' },
        { value: 'spicy', label: 'Spiced & Warm 🌶️', color: 'bg-orange-600' }
      ]
    },
    {
      question: "How do you like your sweetness?",
      key: 'sweetness' as keyof UserPreferences,
      options: [
        { value: 'none', label: 'Pure & Black ⚫', color: 'bg-gray-800' },
        { value: 'light', label: 'Lightly Sweet 🍯', color: 'bg-yellow-300' },
        { value: 'medium', label: 'Balanced Sweet 🍮', color: 'bg-amber-400' },
        { value: 'sweet', label: 'Very Sweet 🧁', color: 'bg-pink-400' }
      ]
    }
  ];

  const generateRecommendation = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const recommendations = [
        {
          name: "AI-Crafted Signature Blend",
          confidence: 94,
          description: "A personalized blend crafted specifically for your current mood and preferences.",
          details: [
            "Medium roast with chocolate undertones",
            "Perfect caffeine level for focus",
            "Complemented by the current weather",
            "Optimized for your taste profile"
          ],
          price: "$5.50",
          ingredients: ["Ethiopian beans", "Oat milk", "Raw honey", "Cinnamon"],
          preparationTime: "3 minutes"
        }
      ];
      
      setRecommendation(recommendations[0]);
      setIsAnalyzing(false);
      setStep(questions.length);
    }, 3000);
  };

  const handleAnswer = (value: string) => {
    const currentQuestion = questions[step];
    setPreferences(prev => ({
      ...prev,
      [currentQuestion.key]: value
    }));
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      generateRecommendation();
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setPreferences({
      mood: '',
      temperature: '',
      caffeine: '',
      flavor: '',
      sweetness: ''
    });
    setRecommendation(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-4xl h-[600px] flex overflow-hidden border border-accent/20">
        
        {/* Left Panel - AI Interface */}
        <div className="w-1/3 relative overflow-hidden">
          <img 
            src={aiInterface} 
            alt="AI Interface"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-coffee/80 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="font-serif text-xl font-bold mb-2">AI Analysis</h3>
              <div className="text-sm opacity-90">
                <p>Weather: {weather}</p>
                <p>Time: {new Date().toLocaleTimeString()}</p>
                <p className="mt-2">Analyzing preferences...</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Panel - Content */}
        <div className="flex-1 p-8 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-primary">AI Coffee Recommender</h2>
            <button 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors text-xl"
            >
              ✕
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {Math.min(step + 1, questions.length)} of {questions.length}</span>
              <span>{Math.round((step / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Questions */}
          {step < questions.length && !isAnalyzing && !recommendation && (
            <div className="flex-1">
              <h3 className="font-serif text-xl font-semibold text-primary mb-6">
                {questions[step].question}
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {questions[step].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-accent hover:bg-secondary transition-all duration-200 text-left"
                  >
                    <div className={`w-4 h-4 rounded-full ${option.color}`}></div>
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Analyzing */}
          {isAnalyzing && (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin w-16 h-16 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4"></div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                  Analyzing Your Preferences
                </h3>
                <p className="text-muted-foreground">
                  AI is processing your answers with current weather data...
                </p>
              </div>
            </div>
          )}
          
          {/* Recommendation */}
          {recommendation && (
            <div className="flex-1">
              <div className="bg-secondary rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl font-semibold text-primary">
                    {recommendation.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{recommendation.confidence}%</div>
                    <div className="text-sm text-muted-foreground">Match</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{recommendation.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Why this works:</h4>
                    <ul className="space-y-1">
                      {recommendation.details.map((detail: string, idx: number) => (
                        <li key={idx} className="text-muted-foreground">• {detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Details:</h4>
                    <p className="text-muted-foreground">Price: {recommendation.price}</p>
                    <p className="text-muted-foreground">Ready in: {recommendation.preparationTime}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="btn-coffee flex-1">Order Now</button>
                <button 
                  onClick={resetQuiz}
                  className="btn-gold px-6"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIRecommender;