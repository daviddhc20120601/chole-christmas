import React from 'react';
import { Star, Triangle } from 'lucide-react';

export const PersonalMessage: React.FC = () => (
  <div className="max-w-2xl text-center mb-12 bg-white/10 backdrop-blur-lg rounded-xl p-8">
    <div className="relative inline-block mb-4">
      <div className="relative">
        <Triangle 
          className="mx-auto text-green-400 transform rotate-180 scale-y-125" 
          size={48}
          fill="currentColor"
        />
        <Star 
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-yellow-300 animate-twinkle" 
          size={20} 
          fill="currentColor"
        />
      </div>
    </div>
    <p className="text-xl leading-relaxed">
      Chloe, you light up my life like the brightest star on the Christmas tree.
      Every moment with you is a gift I cherish deeply.
      Here's a little digital celebration of our love during this magical season.
    </p>
  </div>
);