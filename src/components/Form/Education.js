import React from 'react';
import EducationUnit from './EducationUnit';

function Education({ education, setEducation, educationModel }) {
  function handleChange(event, prop, index) {
    const educationCopy = [...education];
    educationCopy[index][prop] = event.target.value;
    setEducation(educationCopy);
  }

  function add() {
    setEducation([...education, { ...educationModel }]);
  }

  function remove(index) {
    const educationCopy = [...education];
    educationCopy.splice(index, 1);
    setEducation(educationCopy);
  }

  function position(index, newIndex) {
    if (index === 0 && newIndex < index) return;
    const educationCopy = [...education];
    const item = educationCopy.splice(index, 1)[0];
    educationCopy.splice(newIndex, 0, item);
    setEducation(educationCopy);
  }

  return (
    <div className="form-section">
      <h2 className="form-section-heading">Education</h2>

      {education.map((item, index) => (
        <EducationUnit
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

export default Education;
