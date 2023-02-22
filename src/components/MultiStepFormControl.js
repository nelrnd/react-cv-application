import React, { Component } from 'react';

class MultiStepFormControl extends Component {
  render() {
    const { goPrevStep, goNextStep, step } = this.props;
    return (
      <div className='multi-step-form-control'>
        <button
          className={`secondary ${step <= 1 ? 'hidden' : ''}`}
          onClick={goPrevStep}
        >
          Go back
        </button>
        <div className='progress-bar'>
          <div className={`bar ${step > 0 ? 'filled' : ''}`}></div>
          <div className={`bar ${step > 1 ? 'filled' : ''}`}></div>
          <div className={`bar ${step > 2 ? 'filled' : ''}`}></div>
        </div>
        <button className='primary' onClick={goNextStep}>
          Next step
        </button>
      </div>
    );
  }
}

export default MultiStepFormControl;
