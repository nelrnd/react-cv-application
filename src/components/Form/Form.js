import React from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';
import '../../styles/Form.css';

function Form({
  general,
  education,
  work,
  handleGeneralChange,
  handleEducationChange,
  handleWorkChange,
  handlePhotoUpload,
}) {
  return (
    <div className="card">
      <h2>Form</h2>
      <General
        general={general}
        handleGeneralChange={handleGeneralChange}
        handlePhotoUpload={handlePhotoUpload}
      />
      <Education
        education={education}
        handleEducationChange={handleEducationChange}
      />
      <Work work={work} handleWorkChange={handleWorkChange} />
    </div>
  );
}

export default Form;
