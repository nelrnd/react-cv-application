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

  function addEducation() {
    setEducation([...education, { ...educationModel }]);
  }

  function addWork() {
    setWork([...work, { ...workModel }]);
  }

  function removeEducation(index) {
    const educationCopy = [...education];
    educationCopy.splice(index, 1);
    setEducation(educationCopy);
  }

  function removeWork(index) {
    const workCopy = [...work];
    workCopy.splice(index, 1);
    setWork(workCopy);
  }

  return (
    <main>
      <MultiStepForm
        general={general}
        education={education}
        work={work}
        handleGeneralChange={handleGeneralChange}
        handleEducationChange={handleEducationChange}
        handleWorkChange={handleWorkChange}
        handlePhotoUpload={handlePhotoUpload}
        addEducation={addEducation}
        addWork={addWork}
        removeEducation={removeEducation}
        removeWork={removeWork}
      />
      <Form
        general={general}
        education={education}
        work={work}
        handleGeneralChange={handleGeneralChange}
        handleEducationChange={handleEducationChange}
        handleWorkChange={handleWorkChange}
        handlePhotoUpload={handlePhotoUpload}
        addEducation={addEducation}
        addWork={addWork}
        removeEducation={removeEducation}
        removeWork={removeWork}
      />
      <Preview general={general} education={education} work={work} />
    </main>
  );
}

export default Main;
