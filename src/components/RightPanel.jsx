import React from 'react';
import ControlSection from './ControlSection';
import '../styles/RightPanel.css';

const RightPanel = ({  isStopped, setIsStopped, lightMode, setLightMode, zoomMode, setZoomMode }) => {
  return (
    <div className="panel right-panel">
      <button 
        className={`button ${isStopped ? '' : 'danger'}`}
        onClick={() => setIsStopped(!isStopped)}
      >
        {isStopped ? 'RESUME' : 'EMERGENCY STOP'}
      </button>
      
      <ControlSection 
        options={['Light', 'Spot Light', 'Laser']} 
        selected={lightMode}
        onSelect={setLightMode}
      />

      <ControlSection 
        options={['🔍', '➕', '➖']} 
        selected={zoomMode}
        onSelect={setZoomMode}
      />

    </div>
  );
};

export default RightPanel;