import React, { Component } from 'react';

class ViewWorkSection extends Component {
  render() {
    return (
      <div className="view-section">
        <h3>Work experience</h3>

        {this.props.work.map((item, index) => (
          <ViewWorkUnit data={item} key={index} />
        ))}
      </div>
    );
  }
}

class ViewWorkUnit extends Component {
  render() {
    const { companyName, positionTitle, dateOfWork, mainTasks } =
      this.props.data;
    return (
      <div>
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

export default ViewWorkSection;
