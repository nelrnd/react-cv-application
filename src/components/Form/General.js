import React from 'react';

function General() {
  return (
    <div>
      <h3>General</h3>
      <div>
        <label htmlFor="fullName">Full name</label>
        <input type="text" id="fullName" placeholder="John Doe" />
      </div>

      <div>
        <label htmlFor="jobTitle">Job title</label>
        <input type="text" id="jobTitle" placeholder="Web Developer" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="johndoe@example.com" />
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone number</label>
        <input type="tel" id="phoneNumber" placeholder="754-3010" />
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="New York, USA" />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="A few sentences about you"
          rows="3"
        />
      </div>

      <div>
        <label htmlFor="photo">Photo</label>
        <input type="file" accept="image/*" id="photo" />
      </div>
    </div>
  );
}

export default General;
