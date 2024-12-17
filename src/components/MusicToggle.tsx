import React from 'react';
import { Music, Volume2 } from 'lucide-react';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicToggle: React.FC<MusicToggleProps> = ({ isPlaying, onToggle }) => (
  <button
    onClick={onToggle}
    className="fixed bottom-8 right-8 bg-white/20 backdrop-blur-lg p-4 rounded-full hover:bg-white/30 transition-colors"
  >
    {isPlaying ? <Volume2 size={24} /> : <Music size={24} />}
  </button>
);