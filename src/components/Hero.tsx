
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface HeroProps {
  name: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  name = "Sarah", // Replace with your girlfriend's name
  subtitle = "Happy Birthday, My Love" 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    const heartTimer = setTimeout(() => {
      setAnimateHeart(true);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(heartTimer);
    };
  }, []);

  return (
    <div className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-romantic-950/80 to-background/95 -z-10"></div>
      
      <div className={`max-w-3xl w-full text-center transition-all duration-2000 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-[1px] w-12 bg-romantic-500 mr-4"></div>
          <span className="text-romantic-400 font-lato uppercase tracking-widest text-sm">With all my love</span>
          <div className="h-[1px] w-12 bg-romantic-500 ml-4"></div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-playfair font-medium text-romantic-200 tracking-tight leading-none mb-6 text-glow">
          {subtitle}
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-lato font-light text-romantic-300 mb-10">
          On this special day, I celebrate the most wonderful person in my life.
        </h2>
        
        <div className={`flex items-center justify-center mb-10 transition-all duration-1000 ${animateHeart ? 'scale-110' : 'scale-100'}`}>
          <Heart className="w-8 h-8 text-romantic-500 mr-2 animate-heartbeat" fill="#d06780" />
          <span className="text-3xl font-playfair text-romantic-300 sparkle">{name}</span>
          <Heart className="w-8 h-8 text-romantic-500 ml-2 animate-heartbeat" fill="#d06780" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
