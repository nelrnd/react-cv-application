import React from 'react';

function WorkUnit({ data, index, handleChange }) {
  return (
    <div className="form-unit">
      <div className="form-row">
        <label htmlFor="companyName">Company name</label>
        <input
          type="text"
          id="companyName"
          placeholder="Facebook"
          value={data.companyName}
          onChange={(event) => handleChange(event, 'companyName', index)}
        />
      </div>

      <div className="form-row">
        <label htmlFor="positionTitle">Position title</label>
        <input
          type="text"
          id="positionTitle"
          placeholder="Junior front-end developer"
          value={data.positionTitle}
          onChange={(event) => handleChange(event, 'positionTitle', index)}
        />
      </div>

      <div className="form-row">
        <label htmlFor="dateOfWork">Date of work</label>
        <input
          type="text"
          id="dateOfWork"
          placeholder="2022 - 2023"
          value={data.dateOfWork}
          onChange={(event) => handleChange(event, 'dateOfWork', index)}
        />
      </div>

      <div className="form-row">
        <label htmlFor="mainTasks">
          Main tasks/achievements{' '}
          <span className="details">(separated by commas)</span>
        </label>
        <textarea
          id="mainTasks"
          placeholder="Example 1, Example 2, Example 3"
          rows="3"
          value={data.mainTasks}
          onChange={(event) => handleChange(event, 'mainTasks', index)}
        />
      </div>
    </div>
  );
}

export default WorkUnit;
