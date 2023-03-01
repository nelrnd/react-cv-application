import React from 'react';

function WorkUnit() {
  return (
    <div>
      <div>
        <label htmlFor="companyName">Company name</label>
        <input type="text" id="companyName" placeholder="Facebook" />
      </div>

      <div>
        <label htmlFor="positionTitle">Position title</label>
        <input
          type="text"
          id="positionTitle"
          placeholder="Junior front-end developer"
        />
      </div>

      <div>
        <label htmlFor="dateOfWork">Date of work</label>
        <input type="text" id="dateOfWork" placeholder="2022 - 2023" />
      </div>

      <div>
        <label htmlFor="mainTasks">
          Main tasks/achievements{' '}
          <span className="details">(separated by commas)</span>
        </label>
        <textarea
          id="mainTasks"
          placeholder="Example 1, Example 2, Example 3"
        />
      </div>
    </div>
  );
}

export default WorkUnit;
