import React, { Component } from 'react';
import MultiStepForm from './components/MultiStepForm';
import Form from './components/Form';
import ViewTopBar from './components/ViewTopBar';
import View from './components/View';

const schoolModel = {
  schoolName: '',
  titleOfStudy: '',
  dateOfStudy: '',
};

const companyModel = {
  companyName: '',
  positionTitle: '',
  dateOfWork: '',
  mainTasks: '',
};

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
      education: [{ ...schoolModel }],
      work: [{ ...companyModel }],
      stage: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateStage = this.updateStage.bind(this);
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

  updateStage(number) {
    this.setState({
      stage: number,
    });
  }

  render() {
    let currentStage;
    if (this.state.stage === 0) {
      currentStage = (
        <MultiStepForm
          data={this.state}
          handleChange={this.handleChange}
          changeStage={this.changeStage}
        />
      );
    }
    if (this.state.stage === 1) {
      currentStage = (
        <>
          <ViewTopBar changeStage={this.changeStage} />
          <View data={this.state} />
        </>
      );
    }
    if (this.state.stage === 2) {
      currentStage = (
        <Form
          data={this.state}
          handleChange={this.handleChange}
          changeStage={this.changeStage}
        />
      );
    }
    return <div className='App'>{currentStage}</div>;
  }
}

export default App;
