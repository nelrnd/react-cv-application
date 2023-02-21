import React, { Component } from 'react';
import GeneralFormSection from './components/GeneralFormSection';
import EducationFormSection from './components/EducationFormSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeneralFormSection />
        <EducationFormSection />
      </div>
    );
  }
}

export default App;
