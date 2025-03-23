
import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Cake, Wind } from 'lucide-react';

const BirthdayCake = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showSmoke, setShowSmoke] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const cakeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleBlowCandles = () => {
    if (candlesLit) {
      setCandlesLit(false);
      
      // Show smoke after candles are blown out
      setTimeout(() => {
        setShowSmoke(true);
        
        // Hide smoke after animation
        setTimeout(() => {
          setShowSmoke(false);
        }, 3000);
      }, 300);
    } else {
      // Relight candles
      setCandlesLit(true);
      setShowSmoke(false);
    }
  };

  return (
    <div id="cake" ref={cakeRef} className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-romantic-300 mr-4"></div>
            <span className="text-romantic-600 font-lato uppercase tracking-widest text-sm">Make a Wish</span>
            <div className="h-[1px] w-12 bg-romantic-300 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair text-romantic-950 mb-4">Birthday Cake</h2>
          <p className="text-xl text-romantic-700 max-w-2xl mx-auto">Make a wish and blow out the candles</p>
        </div>
        
        <div className={`relative max-w-2xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Cake Container */}
          <div className="cake-container aspect-[4/3] relative bg-gradient-to-b from-romantic-950 to-romantic-900 rounded-xl shadow-2xl overflow-hidden">
            {/* Cake base */}
            <div className="absolute bottom-0 left-0 right-0">
              {/* Bottom cake layer */}
              <div className="h-[100px] bg-romantic-300 rounded-lg mx-8"></div>
              
              {/* Middle cake layer */}
              <div className="h-[80px] bg-romantic-400 rounded-lg mx-16 -mb-[70px]"></div>
              
              {/* Top cake layer */}
              <div className="h-[60px] bg-romantic-500 rounded-lg mx-24 -mb-[50px]"></div>
              
              {/* Cake frosting */}
              <div className="cake-frosting"></div>
              
              {/* Decorations on cake */}
              <div className="absolute bottom-[120px] left-1/2 transform -translate-x-1/2 flex justify-center w-[80%]">
                {/* Candles */}
                {Array.from({ length: 7 }).map((_, index) => (
                  <div key={index} className="relative mx-3">
                    {/* Candle */}
                    <div className="w-2 h-20 bg-gradient-to-b from-gold-200 to-gold-400 rounded-sm"></div>
                    
                    {/* Flame */}
                    {candlesLit && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-4 h-8 bg-gradient-to-b from-gold-100 to-romantic-500 rounded-full animate-flame"></div>
                      </div>
                    )}
                    
                    {/* Smoke */}
                    {showSmoke && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="smoke-particle w-3 h-3 bg-white/60"></div>
                        <div className="smoke-particle w-4 h-4 bg-white/60 delay-100"></div>
                        <div className="smoke-particle w-3 h-3 bg-white/60 delay-200"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Action Button */}
          <div className="flex justify-center mt-8">
            <Button 
              onClick={handleBlowCandles}
              className="px-6 py-3 rounded-full bg-romantic-500/80 hover:bg-romantic-600/90 text-white backdrop-blur-sm flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              {candlesLit ? (
                <>
                  <Wind className="w-5 h-5" />
                  Blow Out Candles
                </>
              ) : (
                <>
                  <Cake className="w-5 h-5" />
                  Light Candles Again
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCake;
