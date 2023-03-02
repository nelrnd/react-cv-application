import React from 'react';
import { IconContext } from 'react-icons';
import { HiOutlineTrash, HiChevronUp, HiChevronDown } from 'react-icons/hi2';

function UnitControl({ remove, position, index }) {
  return (
    <IconContext.Provider
      value={{
        style: { position: 'relative', top: '1.5px' },
      }}
    >
      <div className="control">
        <button className="second small" onClick={() => remove(index)}>
          <HiOutlineTrash /> Remove
        </button>
        <button
          className="second small"
          onClick={() => position(index, index - 1)}
        >
          <HiChevronUp /> Go up
        </button>
        <button
          className="second small"
          onClick={() => position(index, index + 1)}
        >
          <HiChevronDown /> Go down
        </button>
      </div>
    </IconContext.Provider>
  );
}

export default UnitControl;
