import React, { useState } from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';
import MultiStepFormControl from './MultiStepFormControl';
import '../../styles/Form.css';

function MultiStepForm({
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
}) {
  const [step, setStep] = useState(1);

  function goNextStep() {
    setStep(step + 1);
  }

  function goPrevStep() {
    setStep(step - 1);
  }

  return (
    <div className="form">
      {step === 1 && (
        <General
          general={general}
          handleChange={handleGeneralChange}
          handlePhotoUpload={handlePhotoUpload}
        />
      )}
      {step === 2 && (
        <Education
          education={education}
          handleChange={handleEducationChange}
          add={addEducation}
          remove={removeEducation}
        />
      )}
      {step === 3 && (
        <Work
          work={work}
          handleChange={handleWorkChange}
          add={addWork}
          remove={removeWork}
        />
      )}
      <MultiStepFormControl
        step={step}
        maxStep={3}
        goNextStep={goNextStep}
        goPrevStep={goPrevStep}
      />
    </div>
  );
}

export default MultiStepForm;
