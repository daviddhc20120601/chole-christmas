export const calculateTimeUntilChristmas = () => {
  const christmas = new Date(new Date().getFullYear(), 11, 25);
  const now = new Date();
  const difference = christmas.getTime() - now.getTime();

  if (difference < 0) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};