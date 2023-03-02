import React from 'react';

function General({ general, setGeneral }) {
  function handleChange(event, prop) {
    const generalCopy = { ...general };
    generalCopy[prop] = event.target.value;
    setGeneral(generalCopy);
  }

  function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const generalCopy = { ...general };
      generalCopy.photoUrl = URL.createObjectURL(file);
      generalCopy.photoTitle = file.name;
      setGeneral(generalCopy);
    }
  }

  return (
    <div className="form-section">
      <h2 className="form-section-heading">General</h2>

      <div className="form-row">
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          id="fullName"
          placeholder="John Doe"
          value={general.fullName}
          onChange={(event) => handleChange(event, 'fullName')}
        />
      </div>

      <div className="form-row">
        <label htmlFor="jobTitle">Job title</label>
        <input
          type="text"
          id="jobTitle"
          placeholder="Web Developer"
          value={general.jobTitle}
          onChange={(event) => handleChange(event, 'jobTitle')}
        />
      </div>

      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@example.com"
          value={general.email}
          onChange={(event) => handleChange(event, 'email')}
        />
      </div>

      <div className="form-row">
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder="754-3010"
          value={general.phoneNumber}
          onChange={(event) => handleChange(event, 'phoneNumber')}
        />
      </div>

      <div className="form-row">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="New York, USA"
          value={general.location}
          onChange={(event) => handleChange(event, 'location')}
        />
      </div>

      <div className="form-row">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="A few sentences about you"
          rows="3"
          value={general.description}
          onChange={(event) => handleChange(event, 'description')}
        />
      </div>

      <div className="form-row">
        <label htmlFor="photo">Photo</label>
        <input
          type="file"
          accept="image/*"
          id="photo"
          onChange={handlePhotoUpload}
        />
        <label htmlFor="photo">Browse...</label>
        <span>{general.photoTitle}</span>
      </div>
    </div>
  );
}

export default General;
