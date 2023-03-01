import React from 'react';

function EducationUnit() {
  return (
    <div>
      <div>
        <label htmlFor="schoolName">School name</label>
        <input type="text" id="schoolName" placeholder="The Odin Project" />
      </div>

      <div>
        <label htmlFor="titleOfStudy">Title of study</label>
        <input
          type="text"
          id="titleOfStudy"
          placeholder="Full Stack JavaScript"
        />
      </div>

      <div>
        <label htmlFor="dateOfStudy">Date of study</label>
        <input type="text" id="dateOfStudy" placeholder="2022 - 2023" />
      </div>
    </div>
  );
}

export default EducationUnit;
