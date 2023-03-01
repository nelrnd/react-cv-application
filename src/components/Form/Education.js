import React from 'react';
import EducationUnit from './EducationUnit';

function Education({ education, handleChange, add, remove }) {
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

      <button className="center outline" onClick={add}>
        Add new
      </button>
    </div>
  );
}

export default Education;
