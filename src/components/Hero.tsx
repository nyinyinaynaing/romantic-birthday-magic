
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
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-romantic-50/80 to-white/95 -z-10"></div>
      
      <div className={`max-w-3xl w-full text-center transition-all duration-2000 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-[1px] w-12 bg-romantic-300 mr-4"></div>
          <span className="text-romantic-600 font-lato uppercase tracking-widest text-sm">With all my love</span>
          <div className="h-[1px] w-12 bg-romantic-300 ml-4"></div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-playfair font-medium text-romantic-950 tracking-tight leading-none mb-6">
          {subtitle}
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-lato font-light text-romantic-700 mb-10">
          On this special day, I celebrate the most wonderful person in my life.
        </h2>
        
        <div className="flex items-center justify-center mb-10">
          <Heart className="w-6 h-6 text-romantic-500 mr-2 animate-pulse-subtle" />
          <span className="text-2xl font-playfair text-romantic-600">{name}</span>
          <Heart className="w-6 h-6 text-romantic-500 ml-2 animate-pulse-subtle" />
        </div>
        
        <a 
          href="#gallery" 
          className="inline-block glass px-8 py-4 rounded-full text-romantic-600 font-medium transition-all hover:shadow-lg hover:text-romantic-700 hover:scale-105 animate-fade-in"
        >
          Our Journey Together
        </a>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-romantic-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-romantic-300 rounded-full mt-1 animate-float-reverse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
