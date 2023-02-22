import React, { Component } from 'react';
import GeneralFormSection from './GeneralFormSection';
import EducationFormSection from './EducationFormSection';
import WorkFormSection from './WorkFormSection';

class Form extends Component {
  render() {
    return (
      <div className='wrapper'>
        <GeneralFormSection
          data={this.props.data.general}
          handleChange={this.props.handleChange}
        />
        <EducationFormSection
          data={this.props.data.education}
          handleChange={this.props.handleChange}
          addSchool={this.props.addSchool}
        />
        <WorkFormSection
          data={this.props.data.work}
          handleChange={this.props.handleChange}
          addCompany={this.props.addCompany}
        />
        <div className='form-control'>
          <div></div>
          <button className='primary' onClick={() => this.props.updateStage(2)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
