import React from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';
import FormControl from './FormControl';
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
    <div className="form">
      <General
        general={general}
        handleChange={handleGeneralChange}
        handlePhotoUpload={handlePhotoUpload}
      />
      <Education education={education} handleChange={handleEducationChange} />
      <Work work={work} handleChange={handleWorkChange} />
      <FormControl />
    </div>
  );
}

export default Form;
