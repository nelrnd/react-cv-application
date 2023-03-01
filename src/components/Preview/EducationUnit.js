import React from 'react';

function EducationUnit({ data }) {
  return (
    <div className="unit">
      <p className="small">{data.dateOfStudy}</p>
      <p>
        <strong>{data.schoolName}</strong>
      </p>
      <p>{data.titleOfStudy}</p>
    </div>
  );
}

export default EducationUnit;
