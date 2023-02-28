import React, { Component } from 'react';

class MultiStepFormControl extends Component {
  render() {
    const { goPrevStep, goNextStep, updateStage, step } = this.props;
    return (
      <div className='multi-step-form-control'>
        <button
          className={step <= 1 ? 'hidden secondary' : 'secondary'}
          onClick={goPrevStep}
        >
          Go back
        </button>

        <div className='progress-bar'>
          <div className={step > 0 ? 'bar filled' : 'bar'}></div>
          <div className={step > 1 ? 'bar filled' : 'bar'}></div>
          <div className={step > 2 ? 'bar filled' : 'bar'}></div>
        </div>

        <button
          className='primary'
          onClick={step < 3 ? goNextStep : () => updateStage(2)}
        >
          {step < 3 ? 'Next step' : 'Submit'}
        </button>
      </div>
    );
  }
}

export default MultiStepFormControl;
