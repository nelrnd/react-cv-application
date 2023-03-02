import React from 'react';
import { IconContext } from 'react-icons';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';

function MultiStepFormControl({
  step,
  maxStep,
  goNextStep,
  goPrevStep,
  setStage,
}) {
  const bars = [];

  for (let i = 1; i <= maxStep; i++) {
    bars.push(<li key={i} className={step >= i ? 'bar filled' : 'bar'}></li>);
  }

  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <div className="form-control-bar">
        <button
          className={step === 1 ? 'hidden' : 'second'}
          onClick={goPrevStep}
        >
          <HiChevronLeft /> Go back
        </button>

        <div className="progress">{bars}</div>

        <button
          className="main"
          onClick={step < maxStep ? goNextStep : () => setStage(2)}
        >
          {step < maxStep ? (
            <>
              Next <HiChevronRight />
            </>
          ) : (
            'Submit'
          )}
        </button>
      </div>
    </IconContext.Provider>
  );
}

export default MultiStepFormControl;
