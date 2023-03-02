import React from 'react';
import WorkUnit from './WorkUnit';

function Work({ work, setWork, workModel }) {
  function handleChange(event, prop, index) {
    const workCopy = [...work];
    workCopy[index][prop] = event.target.value;
    setWork(workCopy);
  }

  function add() {
    setWork([...work, { ...workModel }]);
  }

  function remove(index) {
    const workCopy = [...work];
    workCopy.splice(index, 1);
    setWork(workCopy);
  }

  function position(index, newIndex) {
    if (index === 0 && newIndex < index) return;
    const workCopy = [...work];
    const item = workCopy.splice(index, 1)[0];
    workCopy.splice(newIndex, 0, item);
    setWork(workCopy);
  }

  return (
    <div className="form-section">
      <h2 className="form-section-heading">Work experience</h2>

      {work.map((item, index) => (
        <WorkUnit
          key={index}
          data={item}
          index={index}
          handleChange={handleChange}
          remove={remove}
          position={position}
        />
      ))}

      <button className="center outline" onClick={add}>
        Add new
      </button>
    </div>
  );
}

export default Work;
