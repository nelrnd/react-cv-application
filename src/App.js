import React, { Component } from 'react';
import MultiStepForm from './components/MultiStepForm';
import Form from './components/Form';
import View from './components/View';
import InfoControl from './components/InfoControl';

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

const filledState = {
  general: {
    fullName: 'John Doe',
    jobTitle: 'Web Developer',
    email: 'johndoe@example.com',
    phone: '754-3010',
    location: 'New York, USA',
    profile:
      'I am a skilled and dedicated web developer with a passion for creating innovative and engaging digital experiences. With several years of experience in both front-end and back-end development, I am well-versed in a variety of programming languages and technologies. I am committed to staying up-to-date with the latest industry trends and best practices, and I am always seeking new challenges to help me grow as a developer.',
    photoUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    photoName: 'random',
  },
  education: [
    {
      schoolName: 'Google',
      titleOfStudy: 'UX Design Certificate',
      dateOfStudy: '2017',
    },
    {
      schoolName: 'The Odin Project',
      titleOfStudy: 'Full Stack JavaScript',
      dateOfStudy: '2018',
    },
  ],
  work: [
    {
      companyName: 'Facebook',
      positionTitle: 'Junior front-end developer',
      dateOfWork: '2018 - 2022',
      mainTasks:
        'Created dynamic and interactive websites, Collaborated with designers, Helped grow a product customer base to 40% in 3 months',
    },
    {
      companyName: 'Google',
      positionTitle: 'Senior full-stack developer',
      dateOfWork: '2022 - now',
      mainTasks:
        'Created dynamic and interactive websites, Collaborated with designers, Helped grow a product customer base to 40% in 3 months',
    },
  ],
  stage: 1,
};

const emptyState = {
  general: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    profile: '',
    photoUrl: '',
    photoName: '',
  },
  education: [{ ...schoolModel }],
  work: [{ ...companyModel }],
  stage: 1,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...emptyState,
    };
    this.fillState = this.fillState.bind(this);
    this.clearState = this.clearState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePhotoUpload = this.handlePhotoUpload.bind(this);
    this.updateStage = this.updateStage.bind(this);
    this.getCurrentStage = this.getCurrentStage.bind(this);
    this.addSchool = this.addSchool.bind(this);
    this.addCompany = this.addCompany.bind(this);
    this.removeSchool = this.removeSchool.bind(this);
    this.removeCompany = this.removeCompany.bind(this);
    this.positionSchool = this.positionSchool.bind(this);
    this.positionCompany = this.positionCompany.bind(this);
  }

  fillState() {
    this.setState({
      ...filledState,
    });
  }

  clearState() {
    const currentStage = this.state.stage;
    this.setState({
      ...emptyState,
      stage: currentStage,
    });
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

  handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const newGeneral = { ...this.state.general };
      newGeneral.photoUrl = URL.createObjectURL(file);
      newGeneral.photoName = file.name;
      this.setState({
        general: newGeneral,
      });
    }
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
          <>
            <MultiStepForm
              data={this.state}
              handleChange={this.handleChange}
              handlePhotoUpload={this.handlePhotoUpload}
              updateStage={this.updateStage}
              addSchool={this.addSchool}
              addCompany={this.addCompany}
              removeSchool={this.removeSchool}
              removeCompany={this.removeCompany}
              positionSchool={this.positionSchool}
              positionCompany={this.positionCompany}
            />
            <InfoControl
              fillState={this.fillState}
              clearState={this.clearState}
            />
          </>
        );
      case 2:
        return <View data={this.state} updateStage={this.updateStage} />;
      case 3:
        return (
          <>
            <Form
              data={this.state}
              handleChange={this.handleChange}
              handlePhotoUpload={this.handlePhotoUpload}
              updateStage={this.updateStage}
              addSchool={this.addSchool}
              addCompany={this.addCompany}
              removeSchool={this.removeSchool}
              removeCompany={this.removeCompany}
              positionSchool={this.positionSchool}
              positionCompany={this.positionCompany}
            />
            <InfoControl
              fillState={this.fillState}
              clearState={this.clearState}
            />
          </>
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
