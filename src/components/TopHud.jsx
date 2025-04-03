import React from 'react';
import MetricItem from './MetricItem';
import '../styles/TopHud.css';

const TopHud = ({ isStopped }) => {
  const batteryLevel = 87; // Example battery level (0-100)
  const hasNotification = true; // Example notification state
  
  return (
    <div className="top-hud">
      <div className="hud-brand">
        <h1>Olnride<sup>®</sup></h1>
        <div className="brand-subtitle">ControlWire<sup>®</sup></div>
      </div>
      
      <div className="hud-metrics">
        <MetricItem label="Distance" value="2.458 m" />
        <MetricItem label="Running" value="2h 34m" />
        <MetricItem label="Latitude" value="60°16'58"/>
        <MetricItem label="STATUS" value={isStopped ? "STOP" : "OK"} highlight={isStopped} />
        <MetricItem label="Longitude" value="25°01'96"/>
        <MetricItem label="Elevation" value="127 m" />
        <MetricItem label="Temp" value="21°C" />
      </div>
      
      <div className="hud-right">
        <div className="battery-container">
          <div className="battery">
            <div 
              className="battery-level" 
              style={{ width: `${batteryLevel}%` }}
              data-level={batteryLevel}
            ></div>
          </div>
          <span className="battery-percent">{batteryLevel}%</span>
        </div>
        <div className="time">
          Wed, 26 Feb 28:54
          {hasNotification && <span className="notification-badge"></span>}
        </div>
      </div>
    </div>
  );
};

export default TopHud;