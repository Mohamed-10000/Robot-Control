import React from 'react';
import '../styles/ControlSection.css';

const ControlSection = ({ title, options, selected, onSelect }) => {
  return (
    <div className="control-section">
      <h3 className="control-title">{title}</h3>
      {options.map(option => (
        <button
          key={option}
          className={`button ${selected === option ? 'active' : ''}`}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ControlSection;