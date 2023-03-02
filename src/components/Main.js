import React, { useState } from 'react';
import Form from './Form/Form';
import MultiStepForm from './Form/MultiStepForm';
import Preview from './Preview/Preview';
import FillControl from './Form/FillControl';

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

  return (
    <main>
      {stage === 1 && (
        <>
          <FillControl
            setGeneral={setGeneral}
            setEducation={setEducation}
            setWork={setWork}
            educationModel={educationModel}
            workModel={workModel}
          />
          <MultiStepForm
            general={general}
            education={education}
            work={work}
            setGeneral={setGeneral}
            setEducation={setEducation}
            setWork={setWork}
            educationModel={educationModel}
            workModel={workModel}
            setStage={setStage}
          />
        </>
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
        <>
          <FillControl
            setGeneral={setGeneral}
            setEducation={setEducation}
            setWork={setWork}
            educationModel={educationModel}
            workModel={workModel}
          />
          <Form
            general={general}
            education={education}
            work={work}
            setGeneral={setGeneral}
            setEducation={setEducation}
            setWork={setWork}
            educationModel={educationModel}
            workModel={workModel}
            setStage={setStage}
          />
        </>
      )}
    </main>
  );
}

export default Main;
