import React from 'react';

function MultiStepFormControl({ step, maxStep, goNextStep, goPrevStep }) {
  const bars = [];

  for (let i = 1; i <= maxStep; i++) {
    bars.push(<li key={i} className={step >= i ? 'bar filled' : 'bar'}></li>);
  }

  return (
    <div className="form-control-bar">
      <button className={step === 1 ? 'hidden' : 'second'} onClick={goPrevStep}>
        Go back
      </button>

      <div className="progress">{bars}</div>

      <button className="main" onClick={goNextStep}>
        {step < maxStep ? 'Next step' : 'Submit'}
      </button>
    </div>
  );
}

export default MultiStepFormControl;
