import React from 'react';
import '../styles/SpeedDisplay.css';

const SpeedDisplay = ({ speed = 0.0 }) => {
  return (
    <div className="speed-display">
      <div className="speed-value">{speed.toFixed(1)} m/s</div>
      <div className="speed-label"></div>
    </div>
  );
};

export default SpeedDisplay;