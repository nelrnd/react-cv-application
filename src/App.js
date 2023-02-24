import React, { Component } from 'react';
import MultiStepForm from './components/MultiStepForm';
import Form from './components/Form';
import View from './components/View';
import { PDFViewer } from '@react-pdf/renderer';
import CVDocument from './components/CVDocument';

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
    phone: '+63 1234 4231',
    location: 'New York, USA',
    profile:
      'Lorem ipsum dolor sit amet consectetur. Ut eget non arcu massa iaculis pharetra consectetur gravida. Gravida neque a sollicitudin purus cursus ornare aliquet. Odio quis commodo eu risus morbi sit.',
    photoUrl:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  education: [
    {
      schoolName: 'Google',
      titleOfStudy: 'UX Design Certificate',
      dateOfStudy: '2021',
    },
    {
      schoolName: 'The Odin Project',
      titleOfStudy: 'Full Stack JavaScript',
      dateOfStudy: '2022 - 2023',
    },
  ],
  work: [
    {
      companyName: 'Wahoo',
      positionTitle: 'Junior front-end developer',
      dateOfWork: '2015 - 2017',
      mainTasks:
        'Created highly interactive websites, Collaborated with awesome designers, Helped to increase customer base by 40% in 3 months',
    },
    {
      companyName: 'Facebook',
      positionTitle: 'Senior full-stack developer',
      dateOfWork: '2017 - now',
      mainTasks:
        'Created highly interactive websites, Collaborated with awesome designers, Helped to increase customer base by 40% in 3 months',
    },
  ],
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
        location: '',
        profile: '',
        photoUrl: '',
        photoName: '',
      },
      education: [{ ...schoolModel }],
      work: [{ ...companyModel }],
      stage: 2,
    };
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

  componentDidMount() {
    this.setState({
      ...filledState,
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
        );
      case 2:
        return <View data={this.state} updateStage={this.updateStage} />;
      case 3:
        return (
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
    return (
      <div className="App">
        {currentStage}
        <PDFViewer className="pdf-viewer">
          <CVDocument
            general={this.state.general}
            education={this.state.education}
            work={this.state.work}
          />
        </PDFViewer>
      </div>
    );
  }
}

export default App;
