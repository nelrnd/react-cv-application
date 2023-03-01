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
  positionEducation,
  positionWork,
  setStage,
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
          position={positionEducation}
        />
      )}
      {step === 3 && (
        <Work
          work={work}
          handleChange={handleWorkChange}
          add={addWork}
          remove={removeWork}
          position={positionWork}
        />
      )}
      <MultiStepFormControl
        step={step}
        maxStep={3}
        goNextStep={goNextStep}
        goPrevStep={goPrevStep}
        setStage={setStage}
      />
    </div>
  );
}

export default MultiStepForm;
