
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  date?: string;
  location?: string;
  description?: string;
}

// These are the default photos - you will replace them with your own
const defaultPhotos: Photo[] = [
  {
    id: 1,
    src: "/src/assets/images/first-date.jpg", // Will be replaced with your actual images
    alt: "Our first date",
    date: "January 15, 2022",
    location: "Central Park",
    description: "The day we first met"
  },
  {
    id: 2,
    src: "/src/assets/images/summer-vacation.jpg", // Will be replaced with your actual images
    alt: "Summer vacation",
    date: "July 8, 2022",
    location: "Beach",
    description: "Our amazing summer together"
  },
  {
    id: 3,
    src: "/src/assets/images/winter-wonderland.jpg", // Will be replaced with your actual images
    alt: "Winter wonderland",
    date: "December 24, 2022",
    location: "Mountain cabin",
    description: "Christmas together"
  },
  {
    id: 4,
    src: "/src/assets/images/anniversary.jpg", // Will be replaced with your actual images
    alt: "Anniversary dinner",
    date: "January 15, 2023",
    location: "Fancy Restaurant",
    description: "Celebrating one year together"
  },
  {
    id: 5,
    src: "/src/assets/images/road-trip.jpg", // Will be replaced with your actual images
    alt: "Road trip",
    date: "June 5, 2023",
    location: "Countryside",
    description: "Exploring new places together"
  },
];

interface GalleryProps {
  photos?: Photo[];
  title?: string;
  subtitle?: string;
}

const Gallery: React.FC<GalleryProps> = ({ 
  photos = defaultPhotos,
  title = "Our Memories",
  subtitle = "A journey of love and joy"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === 0 ? photos.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === photos.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPhoto = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div id="gallery" ref={galleryRef} className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-romantic-300 mr-4"></div>
            <span className="text-romantic-600 font-lato uppercase tracking-widest text-sm">Together</span>
            <div className="h-[1px] w-12 bg-romantic-300 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair text-romantic-950 mb-4">{title}</h2>
          <p className="text-xl text-romantic-700 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className={`relative aspect-[16/9] max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          
          <img 
            src={photos[currentIndex].src} 
            alt={photos[currentIndex].alt}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isAnimating ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl md:text-2xl font-playfair mb-1">{photos[currentIndex].alt}</h3>
                <div className="flex items-center text-sm opacity-80">
                  {photos[currentIndex].date && (
                    <span className="mr-4">{photos[currentIndex].date}</span>
                  )}
                  {photos[currentIndex].location && (
                    <span>{photos[currentIndex].location}</span>
                  )}
                </div>
                {photos[currentIndex].description && (
                  <p className="mt-2 max-w-lg">{photos[currentIndex].description}</p>
                )}
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full flex items-center justify-center glass backdrop-blur-md bg-white/30 hover:bg-white/50 transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full flex items-center justify-center glass backdrop-blur-md bg-white/30 hover:bg-white/50 transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`flex justify-center mt-8 space-x-2 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => goToPhoto(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-romantic-600 scale-125' 
                  : 'bg-romantic-200 hover:bg-romantic-300'
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
