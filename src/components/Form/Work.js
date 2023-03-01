import React from 'react';
import WorkUnit from './WorkUnit';

function Work({ work, handleChange }) {
  return (
    <div className="form-section">
      <h2 className="form-section-heading">Work experience</h2>

      {work.map((item, index) => (
        <WorkUnit
          key={index}
          data={item}
          index={index}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

export default Work;
