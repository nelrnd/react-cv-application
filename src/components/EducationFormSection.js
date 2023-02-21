import React, { Component } from 'react';

class EducationFormSection extends Component {
  render() {
    const { schoolName, titleOfStudy, dateOfStudy } = this.props.data;

    return (
      <div className="form-section">
        <h2>Education</h2>

        <div>
          <label htmlFor="school-name">School name</label>
          <input
            type="text"
            id="school-name"
            placeholder="The Odin Project"
            value={schoolName}
            onChange={(e) => this.props.handleChange(e, 'education')}
          />
        </div>

        <div>
          <label htmlFor="title-of-study">Title of study</label>
          <input
            type="text"
            id="title-of-study"
            placeholder="Full Stack JavaScript"
            value={titleOfStudy}
            onChange={(e) => this.props.handleChange(e, 'education')}
          />
        </div>

        <div>
          <label htmlFor="date-of-study">Date of study</label>
          <input
            type="text"
            id="date-of-study"
            placeholder="2020 - 2022"
            value={dateOfStudy}
            onChange={(e) => this.props.handleChange(e, 'education')}
          />
        </div>
      </div>
    );
  }
}

export default EducationFormSection;
