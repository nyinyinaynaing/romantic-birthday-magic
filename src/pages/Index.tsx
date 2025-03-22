
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Message from '../components/Message';
import MusicPlayer from '../components/MusicPlayer';
import FallingElements from '../components/FallingElements';

// Replace this with your girlfriend's name
const GIRLFRIEND_NAME = "Sarah";

// Replace this with your custom message
const BIRTHDAY_MESSAGE = [
  "From the moment we met, you've filled my life with joy and meaning. Your smile brightens my darkest days, and your love gives me strength I never knew I had.",
  "On your birthday, I want you to know how deeply you are loved and appreciated. You are not just my partner but my best friend, my confidant, and my greatest inspiration.",
  "Every moment with you is a treasure, and I'm grateful for each day we share. I promise to stand by your side, to love you endlessly, and to build a beautiful future together.",
  "May this birthday bring you all the happiness you deserve. I look forward to celebrating many more birthdays with you, each one more special than the last."
];

// Replace with your photos
const PHOTOS = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1964&auto=format&fit=crop",
    alt: "Our first date",
    date: "January 15, 2022",
    location: "Central Park",
    description: "The day we first met"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1887&auto=format&fit=crop",
    alt: "Summer vacation",
    date: "July 8, 2022",
    location: "Beach",
    description: "Our amazing summer together"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1523439915311-09e659f5db16?q=80&w=1970&auto=format&fit=crop",
    alt: "Winter wonderland",
    date: "December 24, 2022",
    location: "Mountain cabin",
    description: "Christmas together"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1770&auto=format&fit=crop",
    alt: "Anniversary dinner",
    date: "January 15, 2023",
    location: "Fancy Restaurant",
    description: "Celebrating one year together"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1770&auto=format&fit=crop",
    alt: "Road trip",
    date: "June 5, 2023",
    location: "Countryside",
    description: "Exploring new places together"
  },
];

// Replace with your romantic song URL
const SONG_URL = "https://aiusms.com/happy-birthday-254480.mp3";

const Index = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    // Preload images for smoother experience
    PHOTOS.forEach(photo => {
      const img = new Image();
      img.src = photo.src;
    });

    // Set page as loaded
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 500);

    // Show stars animation after page loads
    const starsTimer = setTimeout(() => {
      setShowStars(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(starsTimer);
    };
  }, []);

  if (!pageLoaded) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-romantic-200 border-t-romantic-600 rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-romantic-600 font-playfair text-xl animate-pulse">Loading a special surprise...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-background overflow-hidden relative">
      {showStars && (
        <div className="fixed inset-0 star-field pointer-events-none" style={{ opacity: 0.4 }}></div>
      )}
      
      <FallingElements />
      
      <Hero name={GIRLFRIEND_NAME} subtitle="Happy Birthday, My Love" />
      
      <Gallery 
        photos={PHOTOS}
        title="Our Beautiful Journey"
        subtitle="Cherishing every moment we've shared together"
      />
      
      <Message 
        title={`My Dearest ${GIRLFRIEND_NAME}`}
        message={BIRTHDAY_MESSAGE}
        signature="Forever Yours"
      />
      
      <MusicPlayer songUrl={SONG_URL} />
      
      <div className="fixed bottom-5 right-5 opacity-70 animate-heartbeat">
        <div className="text-romantic-500 text-xs">Made with ❤️</div>
      </div>
    </div>
  );
};

export default Index;
