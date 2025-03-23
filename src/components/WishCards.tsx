
import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Heart, Star, Gift, Sparkles, PartyPopper, Smile, Cake } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel';

interface Wish {
  id: number;
  icon: JSX.Element;
  title: string;
  message: string;
  accent: string; // Changed from color to accent
}

const wishes: Wish[] = [
  {
    id: 1,
    icon: <Heart className="h-8 w-8" />,
    title: "My Love",
    message: "Every day with you is a celebration. You make my heart skip a beat every time I see you.",
    accent: "romantic-400"
  },
  {
    id: 2,
    icon: <Star className="h-8 w-8" />,
    title: "My Star",
    message: "You shine brighter than all the stars in the universe. You light up my darkest days.",
    accent: "gold-300"
  },
  {
    id: 3,
    icon: <Gift className="h-8 w-8" />,
    title: "My Gift",
    message: "You are the greatest gift life has given me. I cherish every moment with you.",
    accent: "romantic-500"
  },
  {
    id: 4,
    icon: <Sparkles className="h-8 w-8" />,
    title: "My Magic",
    message: "You bring magic into my life with your smile, your laugh, and your love.",
    accent: "gold-400"
  },
  {
    id: 5,
    icon: <PartyPopper className="h-8 w-8" />,
    title: "My Joy",
    message: "Your happiness is my happiness. May your special day be filled with laughter and joy.",
    accent: "gold-200"
  },
  {
    id: 6,
    icon: <Smile className="h-8 w-8" />,
    title: "My Smile",
    message: "Your smile is the reason for mine. Thank you for bringing so much happiness into my life.",
    accent: "romantic-300"
  },
  {
    id: 7,
    icon: <Cake className="h-8 w-8" />,
    title: "My Wish",
    message: "May all your wishes come true, not just today but every day. You deserve the world.",
    accent: "gold-300"
  }
];

const WishCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  return (
    <div id="wishes" className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-romantic-200 mb-3 animate-fade-in">My Wishes For You</h2>
          <p className="text-romantic-300 max-w-2xl mx-auto">Each card holds a special wish from me to you on this magical day</p>
        </div>
        
        <Carousel
          className="w-full max-w-4xl mx-auto"
          opts={{
            align: "center",
            loop: true
          }}
        >
          <CarouselContent>
            {wishes.map((wish, index) => (
              <CarouselItem key={wish.id} className="md:basis-1/2 lg:basis-1/3 pl-6">
                <div 
                  className="perspective-500"
                  onMouseEnter={() => setHoveredCard(wish.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: `translateY(${Math.sin(index * 0.5) * 10}px)`
                  }}
                >
                  <Card 
                    className={`
                      h-64 glass backdrop-blur-lg border border-white/20 shadow-xl overflow-hidden
                      ${hoveredCard === wish.id ? 'animate-float' : 'animate-float-reverse'}
                      transition-all duration-500 ease-in-out
                    `}
                  >
                    <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center relative">
                      {/* Glass effect inner highlight */}
                      <div className={`
                        absolute inset-0 opacity-5 bg-white rounded-lg
                        ${hoveredCard === wish.id ? 'animate-pulse-subtle' : ''}
                      `}></div>
                      
                      {/* Accent color circle behind icon */}
                      <div className={`
                        absolute w-16 h-16 rounded-full bg-${wish.accent}/20 backdrop-blur-sm
                        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        ${hoveredCard === wish.id ? 'scale-150' : 'scale-100'}
                        transition-transform duration-500 ease-in-out
                      `}></div>
                      
                      <div className={`
                        text-${wish.accent} mb-4 transform transition-transform duration-500 relative z-10
                        ${hoveredCard === wish.id ? 'scale-110' : 'scale-100'}
                      `}>
                        {wish.icon}
                      </div>
                      
                      <h3 className={`
                        text-2xl font-playfair text-white mb-2 relative z-10
                        transition-all duration-500
                        ${hoveredCard === wish.id ? 'text-glow scale-105' : ''}
                      `}>
                        {wish.title}
                      </h3>
                      
                      <p className="text-white/90 text-sm font-light leading-relaxed relative z-10">
                        {wish.message}
                      </p>
                      
                      {/* Bottom decorative element */}
                      <div className={`
                        absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10
                        transition-transform duration-500 ease-in-out
                        ${hoveredCard === wish.id ? 'scale-150' : 'scale-100'}
                      `}></div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex items-center justify-center mt-8 gap-4">
            <CarouselPrevious 
              variant="outline"
              size="default"
              className="relative -left-0 h-10 w-10 bg-background/50 backdrop-blur border border-white/10 text-white hover:bg-romantic-500/50"
            />
            <CarouselNext 
              variant="outline"
              size="default" 
              className="relative -right-0 h-10 w-10 bg-background/50 backdrop-blur border border-white/10 text-white hover:bg-romantic-500/50"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default WishCards;
