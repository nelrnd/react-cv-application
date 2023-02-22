import React, { Component } from 'react';
import MultiStepForm from './components/MultiStepForm';
import Form from './components/Form';
import ViewTopBar from './components/ViewTopBar';
import View from './components/View';

class App extends Component {
  constructor(props) {
    super(props);
    this.schoolModel = {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
    };
    this.companyModel = {
      companyName: '',
      positionTitle: '',
      dateOfWork: '',
      mainTasks: '',
    };
    this.state = {
      general: {
        fullName: '',
        jobTitle: '',
        email: '',
        phone: '',
        address: '',
      },
      education: [{ ...this.schoolModel }],
      work: [{ ...this.companyModel }],
      stage: 1,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, prop, section, index) {
    const newSection =
      section == 'general'
        ? { ...this.state.general }
        : [...this.state[section]];
    if (index) {
      newSection[index][prop] = event.target.value;
    } else {
      newSection[prop] = event.target.value;
    }
    this.setState({
      [section]: newSection,
    });
  }
}

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
      education: [{ ...this.educationModel }],
      work: [{ ...this.workModel }],
      stage: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeStage = this.changeStage.bind(this);
    this.educationModel = {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
    };
    this.workModel = {
      companyName: '',
      positionTitle: '',
      dateOfWork: '',
      mainTasks: '',
    };
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

  changeStage(nb) {
    this.setState({
      stage: nb,
    });
  }

  render() {
    return (
      <div className='App'>
        {this.state.stage === 1 && (
          <MultiStepForm
            data={this.state}
            handleChange={this.handleChange}
            changeStage={this.changeStage}
          />
        )}
        {this.state.stage === 2 && (
          <>
            <ViewTopBar changeStage={this.changeStage} />
            <View data={this.state} />
          </>
        )}
        {this.state.stage === 3 && (
          <Form
            data={this.state}
            handleChange={this.handleChange}
            changeStage={this.changeStage}
          />
        )}
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
