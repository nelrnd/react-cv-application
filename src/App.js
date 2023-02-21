import React, { Component } from 'react';
import GeneralFormSection from './components/GeneralFormSection';
import EducationFormSection from './components/EducationFormSection';
import WorkFormSection from './components/WorkFormSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeneralFormSection />
        <EducationFormSection />
        <WorkFormSection />
      </div>
    );
  }
}

export default App;
