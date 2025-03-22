
import { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

interface MessageProps {
  title?: string;
  message?: string[];
  signature?: string;
}

const Message: React.FC<MessageProps> = ({ 
  title = "My Dearest",
  message = [
    "From the moment we met, you've filled my life with joy and meaning. Your smile brightens my darkest days, and your love gives me strength I never knew I had.",
    "On your birthday, I want you to know how deeply you are loved and appreciated. You are not just my partner but my best friend, my confidant, and my greatest inspiration.",
    "Every moment with you is a treasure, and I'm grateful for each day we share. I promise to stand by your side, to love you endlessly, and to build a beautiful future together.",
    "May this birthday bring you all the happiness you deserve. I look forward to celebrating many more birthdays with you, each one more special than the last."
  ],
  signature = "Forever Yours"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<{id: number, x: number, delay: number}[]>([]);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Create floating hearts when message becomes visible
          const hearts = Array.from({length: 12}, (_, i) => ({
            id: i,
            x: Math.random() * 100, // random position
            delay: Math.random() * 5 // random animation delay
          }));
          setFloatingHearts(hearts);
          
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (messageRef.current) {
      observer.observe(messageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="message" ref={messageRef} className="min-h-screen py-20 px-6 bg-gradient-radial from-romantic-950 to-background relative overflow-hidden">
      {floatingHearts.map(heart => (
        <div 
          key={heart.id}
          className="absolute text-romantic-500 animate-floating opacity-20"
          style={{
            left: `${heart.x}%`,
            bottom: '-5%',
            animationDelay: `${heart.delay}s`,
            fontSize: `${Math.random() * 20 + 10}px`
          }}
        >
          ❤️
        </div>
      ))}
      
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Heart className={`w-8 h-8 text-romantic-500 mx-auto mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 animate-heartbeat' : 'opacity-0'}`} fill="#d06780" />
          <h2 className={`text-4xl md:text-5xl font-playfair text-romantic-200 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>{title}</h2>
        </div>
        
        <div className="glass rounded-2xl p-8 md:p-12 shadow-xl mb-12 glow">
          {message.map((paragraph, index) => (
            <p 
              key={index} 
              className={`text-lg md:text-xl text-romantic-100 mb-6 leading-relaxed font-lato transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms` 
              }}
            >
              {paragraph}
            </p>
          ))}
          
          <div 
            className={`text-right font-playfair text-2xl text-romantic-400 mt-8 transition-all duration-1000 delay-1000 sparkle ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            {signature}
          </div>
        </div>
        
        <div 
          className={`flex items-center justify-center transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <Heart className="w-4 h-4 text-romantic-400 mr-2" fill="#d06780" />
          <div className="h-[1px] w-12 bg-romantic-500 mr-2"></div>
          <span className="text-romantic-400 font-lato text-sm uppercase tracking-widest">Happy Birthday</span>
          <div className="h-[1px] w-12 bg-romantic-500 ml-2"></div>
          <Heart className="w-4 h-4 text-romantic-400 ml-2" fill="#d06780" />
        </div>
      </div>
    </div>
  );
};

export default Message;
