import React, { Component } from 'react';
import GeneralFormSection from './components/GeneralFormSection';
import EducationFormSection from './components/EducationFormSection';
import WorkFormSection from './components/WorkFormSection';
import GeneralViewSection from './components/GeneralViewSection';
import EducationViewSection from './components/EducationViewSection';
import WorkViewSection from './components/WorkViewSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {
        fullName: '',
        jobTitle: '',
        email: '',
        phone: '',
        address: '',
      },
      education: {
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: '',
      },
      work: {
        companyName: '',
        positionTitle: '',
        dateOfWork: '',
        mainTasks: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, section) {
    const updatedSection = {
      ...this.state[section],
      [convertIdToProp(event.target.id)]: event.target.value,
    };
    this.setState({
      [section]: updatedSection,
    });
  }

  render() {
    return (
      <div className="App">
        <GeneralFormSection
          data={this.state.general}
          handleChange={this.handleChange}
        />
        <EducationFormSection
          data={this.state.education}
          handleChange={this.handleChange}
        />
        <WorkFormSection
          data={this.state.work}
          handleChange={this.handleChange}
        />

        <GeneralViewSection data={this.state.general} />
        <hr />
        <EducationViewSection data={this.state.education} />
        <hr />
        <WorkViewSection data={this.state.work} />
      </div>
    );
  }
}

export default App;

function convertIdToProp(id) {
  return id.split('-').reduce((prev, curr, id) => {
    if (id === 0) {
      return curr;
    } else {
      return prev + curr.charAt(0).toUpperCase() + curr.slice(1);
    }
  });
}
