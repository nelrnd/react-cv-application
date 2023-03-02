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

  function positionEducation(index, newIndex) {
    if (index === 0 && newIndex < index) return;
    const educationCopy = [...education];
    const item = educationCopy.splice(index, 1)[0];
    educationCopy.splice(newIndex, 0, item);
    setEducation(educationCopy);
  }

  function positionWork(index, newIndex) {
    if (index === 0 && newIndex < index) return;
    const workCopy = [...work];
    const item = workCopy.splice(index, 1)[0];
    workCopy.splice(newIndex, 0, item);
    setWork(workCopy);
  }

  return (
    <main>
      {stage === 1 && (
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
          positionEducation={positionEducation}
          positionWork={positionWork}
          setStage={setStage}
        />
      )}
      {stage === 2 && (
        <Preview
          general={general}
          education={education}
          work={work}
          setStage={setStage}
        />
      )}
      {stage === 3 && (
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
          positionEducation={positionEducation}
          positionWork={positionWork}
          setStage={setStage}
        />
      )}
    </main>
  );
}

export default Main;
