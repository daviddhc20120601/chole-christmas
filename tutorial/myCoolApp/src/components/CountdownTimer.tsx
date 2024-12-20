import React from 'react';
import { useChristmasCountdown } from '../hooks/useChristmasCountdown';

export const CountdownTimer: React.FC = () => {
  const timeUntilChristmas = useChristmasCountdown();

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-12">
      <h2 className="text-2xl mb-4 text-center">Time Until Christmas</h2>
      <div className="grid grid-cols-4 gap-4 text-center">
        <TimeBox value={timeUntilChristmas.days} label="Days" />
        <TimeBox value={timeUntilChristmas.hours} label="Hours" />
        <TimeBox value={timeUntilChristmas.minutes} label="Minutes" />
        <TimeBox value={timeUntilChristmas.seconds} label="Seconds" />
      </div>
    </div>
  );
};

const TimeBox: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="bg-white/20 rounded-lg p-4">
    <span className="text-3xl font-bold">{value}</span>
    <p>{label}</p>
  </div>
);