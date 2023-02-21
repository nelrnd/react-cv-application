import React, { Component } from 'react';

class WorkViewSection extends Component {
  render() {
    const { companyName, positionTitle, dateOfWork, mainTasks } =
      this.props.data;
    return (
      <div className="view-section">
        <h3>Work experience</h3>

        <p className="small">{dateOfWork}</p>
        <p>
          {positionTitle} at <strong>{companyName}</strong>
        </p>
        <ul>
          {mainTasks.split(',').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default WorkViewSection;
