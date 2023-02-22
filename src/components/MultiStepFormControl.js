import React, { Component } from 'react';

class MultiStepFormControl extends Component {
  render() {
    return (
      <div className='multi-step-form-control'>
        <button className='secondary'>Go back</button>
        <div className='progress-bar'>
          <div className='bar filled'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <button className='primary'>Next step</button>
      </div>
    );
  }
}

export default MultiStepFormControl;
