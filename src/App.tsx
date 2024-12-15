import React, { useState } from 'react';
import { Snowfall } from './components/Snowfall';
import { Header } from './components/Header';
import { CountdownTimer } from './components/CountdownTimer';
import { PersonalMessage } from './components/PersonalMessage';
import { MusicToggle } from './components/MusicToggle';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-green-900 text-white relative overflow-hidden">
      <Snowfall />
      
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        <Header />
        <CountdownTimer />
        <PersonalMessage />
        <MusicToggle isPlaying={isPlaying} onToggle={toggleMusic} />
      </div>
    </div>
  );
}

export default App;