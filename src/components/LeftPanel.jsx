import React from 'react';
import ControlSection from './ControlSection';
import '../styles/LeftPanel.css';

const LeftPanel = ({ driveMode, setDriveMode, speedMode, setSpeedMode }) => {
  return (
    <div className="panel left-panel">
      <button className="panel-button">Menu</button>
      <ControlSection 
        options={['Auto', 'Semi-Auto', 'Manual']} 
        selected={driveMode}
        onSelect={setDriveMode}
      />
      <ControlSection 
        options={['0.5x', '1x', '2x']} 
        selected={speedMode}
        onSelect={setSpeedMode}
      />
      
    </div>
  );
};

export default LeftPanel;