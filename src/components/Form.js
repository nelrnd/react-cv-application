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
        />
        <WorkFormSection
          data={this.props.data.work}
          handleChange={this.props.handleChange}
        />
        <div className='form-control'>
          <button className='secondary'>Cancel</button>
          <button className='primary'>Submit</button>
        </div>
      </div>
    );
  }
}

export default Form;
