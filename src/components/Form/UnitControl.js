import React from 'react';

function UnitControl({ remove, position, index }) {
  return (
    <div className="control">
      <button className="second small" onClick={() => remove(index)}>
        Remove
      </button>
      <button
        className="second small"
        onClick={() => position(index, index - 1)}
      >
        ▲ Go up
      </button>
      <button
        className="second small"
        onClick={() => position(index, index + 1)}
      >
        ▼ Go down
      </button>
    </div>
  );
}

export default UnitControl;
