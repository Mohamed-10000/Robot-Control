import React, { useState } from 'react';
import './App.css';
import TopHud from './components/TopHud';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import BottomPanel from './components/BottomPanel';
import VideoFeed from './components/VideoFeed';
import Joysticks from './components/Joysticks';
import SpeedDisplay from './components/SpeedDisplay';


function App() {
  const [driveMode, setDriveMode] = useState('Manual');
  const [speedMode, setSpeedMode] = useState('1x');
  const [mapMode, setMapMode] = useState('2D Map');
  const [lightMode,setLightMode] = useState ('Spot Light');
  const [zoomMode,setZoomMode] = useState ('➕');
  const [isStopped, setIsStopped] = useState(false);
  const [currentSpeed] = useState(0.5);
  const [joystickPosition, setJoystickPosition] = useState({
    left: { x: 0, y: 0 },
    right: { x: 0, y: 0 }
  });

  return (
    <div className="app">
      <TopHud isStopped={isStopped} />
      
      <div className="main-content">
        <LeftPanel 
          driveMode={driveMode}
          setDriveMode={setDriveMode}
          speedMode={speedMode}
          setSpeedMode={setSpeedMode}
        />
        
        <div className="center-content">
          <VideoFeed mapMode={mapMode} />

          <SpeedDisplay speed={currentSpeed} />

          <Joysticks 
            position={joystickPosition}
            setPosition={setJoystickPosition}
          />
        </div>
        
        <RightPanel zoomMode={zoomMode} setZoomMode={setZoomMode} lightMode={lightMode} setLightMode={setLightMode} isStopped={isStopped} setIsStopped={setIsStopped} />
      </div>
      
      <BottomPanel mapMode={mapMode} setMapMode={setMapMode} />
    </div>
  );
}

export default App;