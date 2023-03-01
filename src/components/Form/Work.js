import React from 'react';
import WorkUnit from './WorkUnit';

function Work({ work, handleChange, add, remove }) {
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

      <button className="center outline" onClick={add}>
        Add new
      </button>
    </div>
  );
}

export default Work;
