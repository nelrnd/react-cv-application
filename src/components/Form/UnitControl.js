import React from 'react';

function UnitControl({ remove, index }) {
  return (
    <div className="control">
      <button className="second small" onClick={() => remove(index)}>
        Remove
      </button>
    </div>
  );
}

export default UnitControl;
