import React, { Component } from 'react';

class ViewEducationSection extends Component {
  render() {
    return (
      <div className="view-section">
        <h3>Education</h3>

        {this.props.education.map((item, index) => (
          <ViewEducationUnit data={item} key={index} />
        ))}
      </div>
    );
  }
}

class ViewEducationUnit extends Component {
  render() {
    const { schoolName, titleOfStudy, dateOfStudy } = this.props.data;
    return (
      <div>
        <p className="small">{dateOfStudy}</p>
        <p>
          <strong>{schoolName}</strong>
        </p>
        <p>{titleOfStudy}</p>
      </div>
    );
  }
}

export default ViewEducationSection;
