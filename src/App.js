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
    this.addSchool = this.addSchool.bind(this);
    this.addCompany = this.addCompany.bind(this);
    this.removeSchool = this.removeSchool.bind(this);
    this.removeCompany = this.removeCompany.bind(this);
    this.positionSchool = this.positionSchool.bind(this);
    this.positionCompany = this.positionCompany.bind(this);
  }

  handleChange(event, prop, section, index) {
    const newSection =
      section === 'general'
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
            addSchool={this.addSchool}
            addCompany={this.addCompany}
            removeSchool={this.removeSchool}
            removeCompany={this.removeCompany}
            positionSchool={this.positionSchool}
            positionCompany={this.positionCompany}
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
            addSchool={this.addSchool}
            addCompany={this.addCompany}
            removeSchool={this.removeSchool}
            removeCompany={this.removeCompany}
            positionSchool={this.positionSchool}
            positionCompany={this.positionCompany}
          />
        );
      default:
        break;
    }
  }

  addSchool() {
    const newEducation = [...this.state.education, { ...schoolModel }];
    this.setState({
      education: newEducation,
    });
  }

  addCompany() {
    const newWork = [...this.state.work, { ...companyModel }];
    this.setState({
      work: newWork,
    });
  }

  removeSchool(index) {
    const newEducation = [...this.state.education];
    newEducation.splice(index, 1);
    this.setState({
      education: newEducation,
    });
  }

  removeCompany(index) {
    const newWork = [...this.state.work];
    newWork.splice(index, 1);
    this.setState({
      work: newWork,
    });
  }

  positionSchool(index, newIndex) {
    const newEducation = [...this.state.education];
    const school = newEducation.splice(index, 1)[0];
    newEducation.splice(newIndex, 0, school);
    this.setState({
      education: newEducation,
    });
  }

  positionCompany(index, newIndex) {
    const newWork = [...this.state.work];
    const company = newWork.splice(index, 1)[0];
    newWork.splice(newIndex, 0, company);
    this.setState({
      work: newWork,
    });
  }

  render() {
    let currentStage = this.getCurrentStage();
    return <div className="App">{currentStage}</div>;
  }
}

export default App;
