import { useState, useEffect } from 'react';
import { TimeUntilChristmas } from '../types/christmas';
import { calculateTimeUntilChristmas } from '../utils/dateCalculations';

export const useChristmasCountdown = (): TimeUntilChristmas => {
  const [timeUntilChristmas, setTimeUntilChristmas] = useState<TimeUntilChristmas>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateTime = () => {
      setTimeUntilChristmas(calculateTimeUntilChristmas());
    };

    const timer = setInterval(updateTime, 1000);
    updateTime(); // Initial calculation
    return () => clearInterval(timer);
  }, []);

  return timeUntilChristmas;
};