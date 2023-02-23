import React, { Component } from 'react';
import MultiStepFormControl from './MultiStepFormControl';
import GeneralFormSection from './FormGeneralSection';
import EducationFormSection from './FormEducationSection';
import WorkFormSection from './FormWorkSection';

class MultiStepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
    this.goPrevStep = this.goPrevStep.bind(this);
    this.goNextStep = this.goNextStep.bind(this);
    this.getCurrentSection = this.getCurrentSection.bind(this);
  }

  goPrevStep() {
    this.setState({
      step: this.state.step - 1,
    });
  }

  goNextStep() {
    this.setState({
      step: this.state.step + 1,
    });
  }

  getCurrentSection() {
    switch (this.state.step) {
      case 1:
        return (
          <GeneralFormSection
            data={this.props.data.general}
            handleChange={this.props.handleChange}
            handlePhotoUpload={this.props.handlePhotoUpload}
          />
        );
      case 2:
        return (
          <EducationFormSection
            data={this.props.data.education}
            handleChange={this.props.handleChange}
            addSchool={this.props.addSchool}
            removeSchool={this.props.removeSchool}
            positionSchool={this.props.positionSchool}
          />
        );
      case 3:
        return (
          <WorkFormSection
            data={this.props.data.work}
            handleChange={this.props.handleChange}
            addCompany={this.props.addCompany}
            removeCompany={this.props.removeCompany}
            positionCompany={this.props.positionCompany}
          />
        );
      default:
        break;
    }
  }

  render() {
    let currentSection = this.getCurrentSection();
    return (
      <div className="wrapper">
        {currentSection}

        <MultiStepFormControl
          goPrevStep={this.goPrevStep}
          goNextStep={this.goNextStep}
          updateStage={this.props.updateStage}
          step={this.state.step}
        />
      </div>
    );
  }
}

export default MultiStepForm;
