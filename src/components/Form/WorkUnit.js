import React from 'react';
import UnitControl from './UnitControl';

function WorkUnit({ data, index, handleChange, remove, position }) {
  return (
    <div className="form-unit">
      <div className="form-row">
        <label htmlFor={'companyName' + index}>Company name</label>
        <input
          type="text"
          id={'companyName' + index}
          placeholder="Facebook"
          value={data.companyName}
          onChange={(event) => handleChange(event, 'companyName', index)}
        />
      </div>

      <div className="form-row">
        <label htmlFor={'positionTitle' + index}>Position title</label>
        <input
          type="text"
          id={'positionTitle' + index}
          placeholder="Junior front-end developer"
          value={data.positionTitle}
          onChange={(event) => handleChange(event, 'positionTitle', index)}
        />
      </div>

      <div className="form-row">
        <label htmlFor={'dateOfWork' + index}>Date of work</label>
        <input
          type="text"
          id={'dateOfWork' + index}
          placeholder="2022 - 2023"
          value={data.dateOfWork}
          onChange={(event) => handleChange(event, 'dateOfWork', index)}
        />
      </div>

      <div className="form-row">
        <label htmlFor={'mainTasks' + index}>
          Main tasks/achievements{' '}
          <span className="details">(separated by commas)</span>
        </label>
        <textarea
          id={'mainTasks' + index}
          placeholder="Example 1, Example 2, Example 3"
          rows="3"
          value={data.mainTasks}
          onChange={(event) => handleChange(event, 'mainTasks', index)}
        />
      </div>

      <UnitControl remove={remove} position={position} index={index} />
    </div>
  );
}

export default WorkUnit;
