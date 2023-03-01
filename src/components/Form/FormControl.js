import React from 'react';

function FormControl({ setStage }) {
  return (
    <div className="form-control-bar">
      <button
        className="main"
        style={{ marginLeft: 'auto' }}
        onClick={() => setStage(2)}
      >
        Submit
      </button>
    </div>
  );
}

export default FormControl;
