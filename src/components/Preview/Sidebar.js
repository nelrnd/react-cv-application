import React from 'react';
import DefaultPhoto from '../../assets/default-photo.png';

function Sidebar({ general }) {
  return (
    <div className="preview-sidebar">
      <div className="photo-wrapper">
        <img src={general.photoUrl || DefaultPhoto} alt="Profile" />
      </div>

      <div className="preview-sidebar-tab">
        <p className="small">Email</p>
        <p>{general.email}</p>
      </div>

      <div className="preview-sidebar-tab">
        <p className="small">Phone</p>
        <p>{general.phoneNumber}</p>
      </div>

      <div className="preview-sidebar-tab">
        <p className="small">Location</p>
        <p>{general.location}</p>
      </div>
    </div>
  );
}

export default Sidebar;
