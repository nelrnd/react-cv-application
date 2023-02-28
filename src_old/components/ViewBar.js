import React, { Component } from 'react';

class ViewBar extends Component {
  render() {
    const { email, phone, location, photoUrl } = this.props.data;
    return (
      <div className="view-bar">
        <div className="photo-wrapper">
          <img src={photoUrl} alt="avatar"></img>
        </div>

        <div className="contact-wrapper">
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
        </div>
      </div>
    );
  }
}

export default ViewBar;
