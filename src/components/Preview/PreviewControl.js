import React from 'react';

function PreviewControl({ setStage }) {
  return (
    <div className="preview-control-bar">
      <button className="second" onClick={() => setStage(3)}>
        Edit
      </button>
      <button className="main">Download PDF</button>
    </div>
  );
}

export default PreviewControl;
