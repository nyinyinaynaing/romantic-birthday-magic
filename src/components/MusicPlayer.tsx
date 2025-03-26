
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, PartyPopper, Ribbon } from 'lucide-react';

interface MusicPlayerProps {
  songUrl?: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  songUrl = "/src/assets/audio/happy-birthday-254480.mp3" // Default song path in your assets folder
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(songUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [songUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (!isInitialized) {
      setIsInitialized(true);
    }
    
    if (isPlaying) {
      audioRef.current.pause();
      setShowCelebration(false);
    } else {
      audioRef.current.play().catch(error => {
        console.error("Audio play failed:", error);
      });
      setShowCelebration(true);
      
      // Hide celebration after 5 seconds
      setTimeout(() => {
        setShowCelebration(false);
      }, 5000);
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110">
      <button
        onClick={togglePlay}
        className="glass flex items-center justify-center p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-romantic-600" />
        ) : (
          <VolumeX className="w-6 h-6 text-romantic-600" />
        )}
      </button>

      {/* Celebration elements that appear when music starts playing */}
      {showCelebration && (
        <div className="absolute bottom-16 right-0 flex flex-col items-end space-y-4">
          {/* Left Ribbon */}
          <div className="absolute -left-20 -top-4 animate-slide-in transform rotate-315 transition-all duration-500">
            <Ribbon className="w-8 h-8 text-romantic-500" fill="#d06780" />
          </div>
          
          {/* Right Ribbon */}
          <div className="absolute -right-20 -top-16 animate-slide-in transform rotate-45 transition-all duration-700 delay-200">
            <Ribbon className="w-10 h-10 text-gold-400" fill="#fcd34d" />
          </div>
          
          {/* Party Popper */}
          <div className="absolute -left-16 -bottom-4 animate-scale-in transition-all duration-500 delay-300">
            <PartyPopper className="w-8 h-8 text-romantic-500" />
          </div>
          
          {/* Animated clapping hands emoji with speech bubble */}
          <div className="glass px-4 py-2 rounded-lg text-sm animate-fade-in transition-all duration-500">
            <p className="flex items-center">
              Let's celebrate! 
              <span className="ml-2 animate-heartbeat">👏</span>
            </p>
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 glass"></div>
          </div>
        </div>
      )}
      
      {!isInitialized && (
        <div className="absolute -top-20 right-0 glass px-4 py-2 rounded-lg text-sm w-40 text-center">
          <p>Click to play music</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 glass"></div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
