import React from 'react';

function EducationUnit({ data, index, handleChange }) {
  return (
    <div className="form-unit">
      <div className="form-row">
        <label htmlFor={'schoolName' + index}>School name</label>
        <input
          type="text"
          id={'schoolName' + index}
          placeholder="The Odin Project"
          value={data.schoolName}
          onChange={(event) => handleChange(event, 'schoolName', index)}
        />
      </div>

      <div className="form-row">
        <label htmlFor={'titleOfStudy' + index}>Title of study</label>
        <input
          type="text"
          id={'titleOfStudy' + index}
          placeholder="Full Stack JavaScript"
          value={data.titleOfStudy}
          onChange={(event) => handleChange(event, 'titleOfStudy', index)}
        />
      </div>

      <div className="form-row">
        <label htmlFor={'dateOfStudy'}>Date of study</label>
        <input
          type="text"
          id={'dateOfStudy'}
          placeholder="2022 - 2023"
          value={data.dateOfStudy}
          onChange={(event) => handleChange(event, 'dateOfStudy', index)}
        />
      </div>
    </div>
  );
}

export default EducationUnit;
