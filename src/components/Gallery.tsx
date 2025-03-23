
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
          <div className="cake-container aspect-[4/3] relative bg-gradient-to-b from-romantic-950 to-romantic-900 rounded-xl shadow-2xl overflow-hidden flex items-center justify-center">
            {/* Cake Plate */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[85%] h-6 bg-silver-300 rounded-full shadow-lg" style={{ backgroundColor: '#C8C8C9' }}></div>
            
            {/* Cake Stand */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[30%] h-8 bg-silver-400" style={{ backgroundColor: '#9F9EA1' }}></div>
            
            {/* Cake base */}
            <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-[80%]">
              {/* Bottom cake layer - vanilla cake */}
              <div className="h-[80px] relative overflow-hidden rounded-b-lg rounded-t-sm mx-auto">
                <div className="absolute inset-0 bg-[#FEF7CD]"></div>
                {/* Cake texture - horizontal lines for layers */}
                <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-[#FDE1D3]/30"></div>
                <div className="absolute top-2/4 left-0 right-0 h-[1px] bg-[#FDE1D3]/30"></div>
                <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-[#FDE1D3]/30"></div>
              </div>
              
              {/* Bottom frosting between layers */}
              <div className="h-6 bg-[#FEC6A1] rounded-sm mx-auto -mt-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FEC6A1]/50 via-[#FEC6A1] to-[#FEC6A1]/50"></div>
              </div>
              
              {/* Middle cake layer - chocolate cake */}
              <div className="h-[60px] relative overflow-hidden rounded-sm mx-auto -mt-1">
                <div className="absolute inset-0 bg-[#8A898C]"></div>
                {/* Cake texture */}
                <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-[#9F9EA1]/30"></div>
                <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-[#9F9EA1]/30"></div>
              </div>
              
              {/* Top frosting between layers */}
              <div className="h-6 bg-[#FFDEE2] rounded-sm mx-auto -mt-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFDEE2]/50 via-[#FFDEE2] to-[#FFDEE2]/50"></div>
              </div>
              
              {/* Top cake layer - strawberry cake */}
              <div className="h-[40px] relative overflow-hidden rounded-t-lg rounded-b-sm mx-auto -mt-1">
                <div className="absolute inset-0 bg-[#FFDEE2]"></div>
                {/* Cake texture */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#FEC6A1]/30"></div>
              </div>
              
              {/* Top frosting */}
              <div className="h-8 bg-[#FFDEE2] rounded-t-lg mx-auto -mt-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFDEE2]/50 via-[#FFDEE2] to-[#FFDEE2]/50"></div>
                
                {/* Frosting swirls */}
                <div className="absolute top-0 left-[10%] w-4 h-4 rounded-full bg-[#FFDEE2] shadow-inner"></div>
                <div className="absolute top-0 left-[30%] w-4 h-4 rounded-full bg-[#FFDEE2] shadow-inner"></div>
                <div className="absolute top-0 left-[50%] w-4 h-4 rounded-full bg-[#FFDEE2] shadow-inner"></div>
                <div className="absolute top-0 left-[70%] w-4 h-4 rounded-full bg-[#FFDEE2] shadow-inner"></div>
                <div className="absolute top-0 left-[90%] w-4 h-4 rounded-full bg-[#FFDEE2] shadow-inner"></div>
              </div>
              
              {/* Side frosting decoration */}
              <div className="absolute -left-2 top-0 bottom-0 w-4">
                <div className="h-full w-full flex flex-col items-center justify-between py-2">
                  {Array.from({ length: 10 }).map((_, idx) => (
                    <div key={`left-${idx}`} className="w-3 h-3 rounded-full bg-[#FFDEE2] shadow-sm"></div>
                  ))}
                </div>
              </div>
              
              <div className="absolute -right-2 top-0 bottom-0 w-4">
                <div className="h-full w-full flex flex-col items-center justify-between py-2">
                  {Array.from({ length: 10 }).map((_, idx) => (
                    <div key={`right-${idx}`} className="w-3 h-3 rounded-full bg-[#FFDEE2] shadow-sm"></div>
                  ))}
                </div>
              </div>
              
              {/* Birthday sprinkles */}
              {Array.from({ length: 30 }).map((_, idx) => (
                <div 
                  key={`sprinkle-${idx}`} 
                  className="absolute rounded-full w-1 h-1"
                  style={{
                    backgroundColor: ['#e73f8c', '#f066a1', '#fcd34d', '#d61e7a'][Math.floor(Math.random() * 4)],
                    top: `${Math.random() * 35}px`,
                    left: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                ></div>
              ))}
              
              {/* Candles */}
              <div className="absolute top-[-40px] left-0 right-0 flex justify-center items-end">
                {Array.from({ length: 7 }).map((_, index) => (
                  <div key={index} className="relative mx-3 mb-1">
                    {/* Candle */}
                    <div className="w-2 h-16 bg-gradient-to-b from-gold-400 to-gold-200 rounded-sm shadow-md"></div>
                    
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
              
              {/* Happy Birthday Text */}
              <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 text-center w-full">
                <div className="text-sm font-bold text-romantic-600" style={{ fontFamily: 'cursive' }}>Happy Birthday!</div>
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
