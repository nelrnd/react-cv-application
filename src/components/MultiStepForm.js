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
    this.goPrevStep = this.goPrevStep.bind(this);
    this.goNextStep = this.goNextStep.bind(this);
  }

  goPrevStep() {
    this.setState((state) => {
      return { step: state.step - 1 };
    });
  }

  goNextStep() {
    this.setState((state) => {
      return { step: state.step + 1 };
    });
  }

  render() {
    let currentSection;
    if (this.state.step === 1)
      currentSection = (
        <GeneralFormSection
          data={this.props.data.general}
          handleChange={this.props.handleChange}
        />
      );
    if (this.state.step === 2)
      currentSection = (
        <EducationFormSection
          data={this.props.data.education}
          handleChange={this.props.handleChange}
        />
      );
    if (this.state.step === 3)
      currentSection = (
        <WorkFormSection
          data={this.props.data.work}
          handleChange={this.props.handleChange}
        />
      );

    return (
      <div className='wrapper'>
        {currentSection}

        <MultiStepFormControl
          step={this.state.step}
          goPrevStep={this.goPrevStep}
          goNextStep={this.goNextStep}
          changeStage={this.props.changeStage}
        />
      </div>
    );
  }
}

export default MultiStepForm;
