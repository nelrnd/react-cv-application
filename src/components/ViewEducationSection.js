import React, { Component } from 'react';

class EducationViewSection extends Component {
  render() {
    return (
      <div className='view-section'>
        <h3>Education</h3>

        {this.props.data.map((item, index) => (
          <EducationViewUnit data={item} key={index} />
        ))}
      </div>
    );
  }
}

class EducationViewUnit extends Component {
  render() {
    const { schoolName, titleOfStudy, dateOfStudy } = this.props.data;
    return (
      <div>
        <p className='small'>{dateOfStudy}</p>
        <p>
          <strong>{schoolName}</strong>
        </p>
        <p>{titleOfStudy}</p>
      </div>
    );
  }
}

export default EducationViewSection;
