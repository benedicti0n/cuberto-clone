import React, { useEffect, useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoCursorProps {
  isHovering: boolean;
  isPlaying: boolean;
}

const VideoCursor = ({ isHovering, isPlaying }: VideoCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [wobble, setWobble] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Add wobble effect by generating small random offsets
      const randomX = (Math.random() - 0.5) * 3;
      const randomY = (Math.random() - 0.5) * 3;

      setPosition({ x: e.clientX, y: e.clientY });
      setWobble({ x: randomX, y: randomY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isHovering) return null;

  return (
    <div
      className={`fixed pointer-events-none z-100 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out`}
      style={{
        left: `${position.x + wobble.x}px`,
        top: `${position.y + wobble.y}px`,
      }}
    >
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full ${isPlaying ? 'bg-black' : 'bg-white'
          } transition-colors duration-300`}
      >
        {isPlaying ? (
          <Pause className={`w-6 h-6 text-white`} />
        ) : (
          <Play className={`w-6 h-6 text-black`} />
        )}
      </div>
    </div>
  );
};

export default VideoCursor;