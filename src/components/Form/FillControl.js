import React from 'react';

const filledGeneral = {
  fullName: 'John Doe',
  jobTitle: 'Web Developer',
  email: 'johndoe@example.com',
  phoneNumber: '754-3010',
  location: 'New York, USA',
  description:
    'I am a skilled and dedicated web developer with a passion for creating innovative and engaging digital experiences. With several years of experience in both front-end and back-end development, I am well-versed in a variety of programming languages and technologies. I am committed to staying up-to-date with the latest industry trends and best practices, and I am always seeking new challenges to help me grow as a developer.',
  photoUrl:
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  photoTitle: 'my-photo.jpg',
};

const emptyGeneral = {
  fullName: '',
  jobTitle: '',
  email: '',
  phoneNumber: '',
  location: '',
  description: '',
  photoUrl: '',
  photoTitle: '',
};

const filledEducation = [
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
];

const filledWork = [
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
];

// Component to handle pre-filling a clearing form inputs

function FillControl({
  setGeneral,
  setEducation,
  setWork,
  educationModel,
  workModel,
}) {
  function prefill() {
    setGeneral(filledGeneral);
    setEducation(filledEducation);
    setWork(filledWork);
  }

  function clear() {
    setGeneral(emptyGeneral);
    setEducation([{ ...educationModel }]);
    setWork([{ ...workModel }]);
  }

  return (
    <div className="fill-control-bar">
      <button onClick={prefill}>Pre-fill info</button>
      <button onClick={clear}>Clear info</button>
    </div>
  );
}

export default FillControl;
