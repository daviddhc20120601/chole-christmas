import React from 'react';
import { Snowflake } from 'lucide-react';
import { getSnowflakeStyles } from '../utils/animations';

export const Snowfall: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <Snowflake
        key={i}
        className="absolute animate-fall"
        style={getSnowflakeStyles()}
      />
    ))}
  </div>
);