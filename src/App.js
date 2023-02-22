import React, { Component } from 'react';
import MultiStepForm from './components/MultiStepForm';
import Form from './components/Form';
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
    this.getCurrentStage = this.getCurrentStage.bind(this);
  }

  handleChange(event, prop, section, index) {
    const newSection =
      section == 'general'
        ? { ...this.state.general }
        : [...this.state[section]];
    if (index !== undefined) {
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

  getCurrentStage() {
    switch (this.state.stage) {
      case 1:
        return (
          <MultiStepForm
            data={this.state}
            handleChange={this.handleChange}
            updateStage={this.updateStage}
          />
        );
      case 2:
        return <View data={this.state} updateStage={this.updateStage} />;
      case 3:
        return (
          <Form
            data={this.state}
            handleChange={this.handleChange}
            updateStage={this.updateStage}
          />
        );
      default:
        break;
    }
  }

  render() {
    let currentStage = this.getCurrentStage();
    return <div className='App'>{currentStage}</div>;
  }
}

export default App;
