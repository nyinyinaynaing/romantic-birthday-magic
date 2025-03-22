
import React, { useEffect, useRef, useState } from 'react';
import { Heart } from 'lucide-react';

interface FallingElement {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  type: 'heart' | 'petal';
}

const FallingElements: React.FC = () => {
  const [elements, setElements] = useState<FallingElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const createElements = () => {
    if (!containerRef.current) return;
    
    const width = containerRef.current.clientWidth;
    const newElements: FallingElement[] = [];
    
    for (let i = 0; i < 20; i++) {
      newElements.push({
        id: i,
        left: Math.random() * width,
        delay: Math.random() * 10,
        duration: 7 + Math.random() * 10,
        size: 16 + Math.random() * 20,
        rotation: Math.random() * 360,
        type: Math.random() > 0.5 ? 'heart' : 'petal'
      });
    }
    
    setElements(newElements);
  };

  const addElement = () => {
    if (!containerRef.current) return;
    
    const width = containerRef.current.clientWidth;
    
    setElements(prev => [
      ...prev,
      {
        id: Date.now(),
        left: Math.random() * width,
        delay: 0,
        duration: 7 + Math.random() * 10,
        size: 16 + Math.random() * 20,
        rotation: Math.random() * 360,
        type: Math.random() > 0.5 ? 'heart' : 'petal'
      }
    ]);
  };

  const animate = () => {
    addElement();
    animationRef.current = window.setTimeout(() => {
      animate();
    }, 1000);
  };

  useEffect(() => {
    createElements();
    
    const handleResize = () => {
      createElements();
    };
    
    window.addEventListener('resize', handleResize);
    
    animationRef.current = window.setTimeout(() => {
      animate();
    }, 1000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-fall"
          style={{
            left: `${element.left}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
            top: '-20px',
          }}
        >
          {element.type === 'heart' ? (
            <Heart 
              style={{
                width: `${element.size}px`,
                height: `${element.size}px`,
                transform: `rotate(${element.rotation}deg)`,
                color: '#d06780',
                opacity: 0.7,
              }}
            />
          ) : (
            <div 
              className="rounded-full"
              style={{ 
                width: `${element.size / 2}px`, 
                height: `${element.size}px`,
                background: 'linear-gradient(135deg, #f5d7de 0%, #eedb98 100%)',
                transform: `rotate(${element.rotation}deg)`,
                opacity: 0.6,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FallingElements;
