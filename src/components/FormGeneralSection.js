import React, { Component } from 'react';

class FormGeneralSection extends Component {
  render() {
    return (
      <div className="form-section">
        <h2>General information</h2>

        <div>
          <label htmlFor="full-name">Full name</label>
          <input type="text" id="full-name" placeholder="John Doe" />
        </div>

        <div>
          <label htmlFor="job-title">Job title</label>
          <input type="text" id="job-title" placeholder="Web developer" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="johndoe@example.com" />
        </div>

        <div>
          <label htmlFor="phone-number">Phone number</label>
          <input type="tel" id="phone-number" placeholder="754-3010" />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="92 MACDOUGAL ST NEW YORK NY 10012-2543 USA"
          />
        </div>
      </div>
    );
  }
}

export default FormGeneralSection;
