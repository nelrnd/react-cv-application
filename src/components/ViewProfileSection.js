import React, { Component } from 'react';

class GeneralViewSection extends Component {
  render() {
    const { fullName, jobTitle, email, phone, location, profile } =
      this.props.data;
    return (
      <div className="view-section">
        <h1>{fullName}</h1>
        <h2>{jobTitle}</h2>

        <div>
          <p className="small">Email</p>
          <p>{email}</p>
        </div>

        <div>
          <p className="small">Phone number</p>
          <p>{phone}</p>
        </div>

        <div>
          <p className="small">Location</p>
          <p>{location}</p>
        </div>

        <div>
          <p className="small">Profile</p>
          <p>{profile}</p>
        </div>
      </div>
    );
  }
}

export default GeneralViewSection;
