import React, { Component } from 'react';

class EducationViewSection extends Component {
  render() {
    const { schoolName, titleOfStudy, dateOfStudy } = this.props.data;
    return (
      <div className="view-section">
        <h3>Education</h3>

        <p className="label">{dateOfStudy}</p>
        <p>
          <strong>{schoolName}</strong>
        </p>
        <p>{titleOfStudy}</p>
      </div>
    );
  }
}

export default EducationViewSection;
