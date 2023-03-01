import React from 'react';
import EducationUnit from './EducationUnit';
import WorkUnit from './WorkUnit';

function Main({ general, education, work }) {
  return (
    <div className="preview-main">
      <div className="preview-main-section">
        <h3>Profile</h3>
        <p>{general.description}</p>
      </div>

      <hr />

      <div className="preview-main-section">
        <h3>Education</h3>
        {education.map((item, index) => (
          <EducationUnit key={index} data={item} />
        ))}
      </div>

      <hr />

      <div className="preview-main-section">
        <h3>Work experience</h3>
        {work.map((item, index) => (
          <WorkUnit key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Main;
