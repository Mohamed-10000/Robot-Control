import React from 'react';
import '../styles/Joysticks.css';

const Joysticks = ({ position, setPosition }) => {
  const handleJoystickMove = (joystick, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = (e.clientX - rect.left - centerX) / centerX;
    const y = (e.clientY - rect.top - centerY) / centerY;
    
    const distance = Math.sqrt(x * x + y * y);
    const limitedX = distance > 1 ? x / distance : x;
    const limitedY = distance > 1 ? y / distance : y;

    setPosition(prev => ({
      ...prev,
      [joystick]: { 
        x: limitedX, 
        y: limitedY 
      }
    }));
  };

  return (
    <div className="joysticks-container">
      <div 
        className="joystick left-joystick"
        onMouseMove={(e) => {
          if (e.buttons === 1) handleJoystickMove('left', e);
        }}
        onMouseDown={(e) => handleJoystickMove('left', e)}
        onTouchMove={(e) => handleJoystickMove('left', e.touches[0])}
        onTouchStart={(e) => handleJoystickMove('left', e.touches[0])}
      >
        <div 
          className="joystick-handle"
          style={{
            transform: `translate(calc(-50% + ${position.left.x * 40}px), calc(-50% + ${position.left.y * 40}px))`
          }}
        ></div>
        <span className="joystick-label"></span>
      </div>
      
      <div 
        className="joystick right-joystick"
        onMouseMove={(e) => {
          if (e.buttons === 1) handleJoystickMove('right', e);
        }}
        onMouseDown={(e) => handleJoystickMove('right', e)}
        onTouchMove={(e) => handleJoystickMove('right', e.touches[0])}
        onTouchStart={(e) => handleJoystickMove('right', e.touches[0])}
      >
        <div 
          className="joystick-handle"
          style={{
            transform: `translate(calc(-50% + ${position.right.x * 40}px), calc(-50% + ${position.right.y * 40}px)`
          }}
        ></div>
        <span className="joystick-label"></span>
      </div>
    </div>
  );
};

export default Joysticks;