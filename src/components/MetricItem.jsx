import React from 'react';
import '../styles/MetricItem.css';

const MetricItem = ({ label, value, highlight = false }) => (
  <div className={`metric-item ${highlight ? 'highlight' : ''}`}>
    <div className="metric-label">{label}</div>
    <div className="metric-value">
      {typeof value === 'string' ? value : value}
    </div>
  </div>
);

export default MetricItem;