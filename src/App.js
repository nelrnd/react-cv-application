import React, { Component } from 'react';
import MultiStepForm from './components/MultiStepForm';
import Form from './components/Form';
import View from './components/View';

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
        <MultiStepForm data={this.state} handleChange={this.handleChange} />

        <Form data={this.state} handleChange={this.handleChange} />

        <View data={this.state} />
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
