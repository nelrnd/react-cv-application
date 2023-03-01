import React from 'react';

function WorkUnit({ data }) {
  return (
    <div className="unit">
      <p className="small">{data.dateOfWork}</p>
      <p>
        <strong>{data.companyName}</strong>
      </p>
      <p>{data.jobTitle}</p>
    </div>
  );
}

export default WorkUnit;
