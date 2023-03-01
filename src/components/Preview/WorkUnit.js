import React from 'react';

function WorkUnit({ data }) {
  return (
    <div className="unit">
      <p className="small">{data.dateOfWork}</p>
      <p>
        {data.positionTitle} at <strong>{data.companyName}</strong>
      </p>
      <ul>
        {data.mainTasks.split(',').map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkUnit;
