import React from 'react';

function MultiStepFormControl({ step, maxStep }) {
  return (
    <div className="form-control-bar">
      <button className={step === 1 && 'hidden'}>Go back</button>
      <button>{step < maxStep ? 'Next step' : 'Submit'}</button>
    </div>
  );
}

export default MultiStepFormControl;
