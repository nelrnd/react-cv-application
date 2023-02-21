import React, { Component } from 'react';
import GeneralFormSection from './GeneralFormSection';
import EducationFormSection from './EducationFormSection';
import WorkFormSection from './WorkFormSection';

class Form extends Component {
  render() {
    return (
      <div className="wrapper">
        <GeneralFormSection data={this.props.data.general} />
        <EducationFormSection data={this.props.data.education} />
        <WorkFormSection data={this.props.data.work} />
      </div>
    );
  }
}

export default Form;
