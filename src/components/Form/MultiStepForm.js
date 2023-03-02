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
  setGeneral,
  setEducation,
  setWork,
  educationModel,
  workModel,
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
      {step === 1 && <General general={general} setGeneral={setGeneral} />}
      {step === 2 && (
        <Education
          education={education}
          setEducation={setEducation}
          educationModel={educationModel}
        />
      )}
      {step === 3 && (
        <Work work={work} setWork={setWork} workModel={workModel} />
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
