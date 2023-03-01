import React from 'react';

function Main({ general, education, work }) {
  return (
    <div className="preview-main">
      <div className="preview-main-section">
        <h3>Profile</h3>
        <p>{general.description}</p>
      </div>

      <hr />

      <div className="preview-main-section">
        <h3>Education</h3>
      </div>

      <hr />

      <div className="preview-main-section">
        <h3>Work experience</h3>
      </div>
    </div>
  );
}

export default Main;
