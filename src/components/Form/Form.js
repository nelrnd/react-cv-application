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
  addEducation,
  addWork,
  removeEducation,
  removeWork,
  positionEducation,
  positionWork,
}) {
  return (
    <div className="form">
      <General
        general={general}
        handleChange={handleGeneralChange}
        handlePhotoUpload={handlePhotoUpload}
      />
      <Education
        education={education}
        handleChange={handleEducationChange}
        add={addEducation}
        remove={removeEducation}
        position={positionEducation}
      />
      <Work
        work={work}
        handleChange={handleWorkChange}
        add={addWork}
        remove={removeWork}
        position={positionWork}
      />
      <FormControl />
    </div>
  );
}

export default Form;
