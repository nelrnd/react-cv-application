import React from 'react';
import EducationUnit from './EducationUnit';

function Education({ education, handleChange }) {
  return (
    <div className="form-section">
      <h2 className="form-section-heading">Education</h2>

      {education.map((item, index) => (
        <EducationUnit
          key={index}
          data={item}
          index={index}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

export default Education;
