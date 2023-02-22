import React, { Component } from 'react';
import GeneralFormSection from './GeneralFormSection';
import EducationFormSection from './EducationFormSection';
import WorkFormSection from './WorkFormSection';

class MultiStepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  render() {
    return (
      <div className="wrapper">
        <GeneralFormSection
          data={this.props.data.general}
          handleChange={this.props.handleChange}
        />

        <div className="multi-step-form-control">
          <button className="secondary">Go back</button>
          <div className="progress-bar">
            <div className="bar filled"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <button className="primary">Next step</button>
        </div>
      </div>
    );
  }
}

export default MultiStepForm;
