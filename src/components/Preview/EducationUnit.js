import React from 'react';

function EducationUnit({ data }) {
  return (
    <div className="unit">
      <p className="small">{data.dateOfStudy}</p>
      <p>
        {data.titleOfStudy} at <strong>{data.companyName}</strong>
      </p>
    </div>
  );
}

export default EducationUnit;
