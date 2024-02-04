import React from 'react';
import './ProgressTimeline.css'; // Make sure to create this CSS file

const ProgressTimeline = () => {
  return (
    <div className="progress-timeline">
      <div className="timeline-item">
        <div className="timeline-marker"></div>
        <div className="timeline-content">Review cycle started</div>
      </div>

      <div className="timeline-item">
        <div className="timeline-marker"></div>
        <div className="timeline-content">Self review completed</div>
      </div>

      <div className="timeline-item">
        <div className="timeline-marker"></div>
        <div className="timeline-content">Hod review completed</div>
      </div>

      <div className="timeline-item">
        <div className="timeline-marker"></div>
        <div className="timeline-content">Review cycle will end</div>
      </div>
    </div>
  );
};

export default ProgressTimeline;
