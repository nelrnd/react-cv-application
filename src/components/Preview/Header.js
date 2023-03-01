import React from 'react';

function Header({ general }) {
  return (
    <div className="preview-header">
      <h1>{general.fullName}</h1>
      <h2>{general.jobTitle}</h2>
    </div>
  );
}

export default Header;
