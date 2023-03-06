import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';

function MultiStepFormControl({ step, maxStep, goNextStep, goPrevStep }) {
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

        {step < maxStep ? (
          <button className="main" onClick={goNextStep}>
            Next <HiChevronRight />
          </button>
        ) : (
          <Link to="/preview" className="button main">
            Submit
          </Link>
        )}
      </div>
    </IconContext.Provider>
  );
}

export default MultiStepFormControl;
