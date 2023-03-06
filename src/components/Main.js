import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
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
                />
              </>
            }
          />
          <Route
            path="/preview"
            element={
              <Preview general={general} education={education} work={work} />
            }
          />
          <Route
            path="/edit"
            element={
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
                />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default Main;
