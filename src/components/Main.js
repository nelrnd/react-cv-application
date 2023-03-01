import React, { useState } from 'react';
import Form from './Form/Form';
import MultiStepForm from './Form/MultiStepForm';
import Preview from './Preview/Preview';

const educationModel = {
  schoolName: '',
  titleOfStudy: '',
  dateOfStudy: '',
};
const workModel = {
  companyName: '',
  positionTitle: '',
  dateOfWork: '',
  mainTasks: '',
};

function Main() {
  const [general, setGeneral] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    phoneNumber: '',
    location: '',
    description: '',
    photoUrl: '',
    photoTitle: '',
  });
  const [education, setEducation] = useState([{ ...educationModel }]);
  const [work, setWork] = useState([{ ...workModel }]);
  const [stage, setStage] = useState(1);

  function handleGeneralChange(event, prop) {
    const generalCopy = { ...general };
    generalCopy[prop] = event.target.value;
    setGeneral(generalCopy);
  }

  function handleEducationChange(event, prop, index) {
    const educationCopy = [...education];
    educationCopy[index][prop] = event.target.value;
    setEducation(educationCopy);
  }

  function handleWorkChange(event, prop, index) {
    const workCopy = [...work];
    workCopy[index][prop] = event.target.value;
    setWork(workCopy);
  }

  function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const generalCopy = { ...general };
      generalCopy.photoUrl = URL.createObjectURL(file);
      generalCopy.photoTitle = file.name;
      setGeneral(generalCopy);
    }
  }

  return (
    <main>
      <MultiStepForm
        general={general}
        education={education}
        work={work}
        handleGeneralChange={handleEducationChange}
        handleEducationChange={handleEducationChange}
        handleWorkChange={handleWorkChange}
        handlePhotoUpload={handlePhotoUpload}
      />
      <Form
        general={general}
        education={education}
        work={work}
        handleGeneralChange={handleGeneralChange}
        handleEducationChange={handleEducationChange}
        handleWorkChange={handleWorkChange}
        handlePhotoUpload={handlePhotoUpload}
      />
      <Preview general={general} education={education} work={work} />
    </main>
  );
}

export default Main;
