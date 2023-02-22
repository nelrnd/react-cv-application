import React, { Component } from 'react';
import MultiStepFormControl from './MultiStepFormControl';
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
      <div className='wrapper'>
        <GeneralFormSection
          data={this.props.data.general}
          handleChange={this.props.handleChange}
        />

        <MultiStepFormControl />
      </div>
    );
  }
}

export default MultiStepForm;
