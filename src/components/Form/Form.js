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
  setGeneral,
  setEducation,
  setWork,
  educationModel,
  workModel,
}) {
  return (
    <div className="form">
      <General general={general} setGeneral={setGeneral} />
      <Education
        education={education}
        setEducation={setEducation}
        educationModel={educationModel}
      />
      <Work work={work} setWork={setWork} workModel={workModel} />
      <FormControl />
    </div>
  );
}

export default Form;
