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
}) {
  const [step, setStep] = useState(1);

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
        <Education education={education} handleChange={handleEducationChange} />
      )}
      {step === 3 && <Work work={work} handleChange={handleWorkChange} />}
      <MultiStepFormControl step={step} maxStep={3} />
    </div>
  );
}

export default MultiStepForm;
