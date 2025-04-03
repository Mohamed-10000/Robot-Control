import React from 'react';
import ControlSection from './ControlSection';
import '../styles/BottomPanel.css';

const BottomPanel = ({mapMode, setMapMode}) => {
  return (
    <div className="bottom-panel">
      <div className="view-mode">
        <span className="view-label"></span>
        {['3D Map', 'Camera', '2D Map'].map(mode => (
          <button
            key={mode}
            className={`view-button ${mapMode === mode ? 'active' : ''}`}
            onClick={() => setMapMode(mode)}
          >
            {mode}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomPanel;