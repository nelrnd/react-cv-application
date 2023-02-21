import React, { Component } from 'react';

class GeneralViewSection extends Component {
  render() {
    const { fullName, jobTitle, email, phone, address } = this.props.data;
    return (
      <div className="view-section">
        <h1>{fullName}</h1>
        <h2>{jobTitle}</h2>

        <p className="label">Email</p>
        <p>{email}</p>

        <p className="label">Phone number</p>
        <p>{phone}</p>

        <p className="label">Address</p>
        <p>{address}</p>
      </div>
    );
  }
}

export default GeneralViewSection;
