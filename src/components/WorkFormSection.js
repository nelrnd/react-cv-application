import React, { Component } from 'react';

class WorkFormSection extends Component {
  render() {
    return (
      <div className="form-section">
        <h2>Work experience</h2>

        <div>
          <label htmlFor="company-name">Company name</label>
          <input type="text" id="company-name" placeholder="Facebook" />
        </div>

        <div>
          <label htmlFor="position-title">Position title</label>
          <input
            type="text"
            id="position-title"
            placeholder="Junior front-end developer"
          />
        </div>

        <div>
          <label htmlFor="date-of-work">Date of work</label>
          <input type="text" id="date-of-work" placeholder="2022 - 2023" />
        </div>

        <div>
          <label htmlFor="main-tasks">
            Main tasks/achievements
            <span className="details"> (separated by commas)</span>
          </label>
          <textarea
            id="main-tasks"
            placeholder="Example 1, Example 2, Example 3"
            rows="3"
          ></textarea>
        </div>
      </div>
    );
  }
}

export default WorkFormSection;
