
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  songUrl?: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  songUrl = "https://mp3.chillhop.com/serve.php/?mp3=9272" // Default song - replace with your romantic song
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
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
    } else {
      audioRef.current.play().catch(error => {
        console.error("Audio play failed:", error);
      });
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
      
      {!isInitialized && (
        <div className="absolute -top-20 right-0 glass px-4 py-2 rounded-lg text-sm w-40 text-center">
          <p>Click to play romantic music</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 glass"></div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
