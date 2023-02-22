import React, { Component } from 'react';

class GeneralFormSection extends Component {
  render() {
    const { handleChange, data } = this.props;
    const { fullName, jobTitle, email, phone, address } = data;

    return (
      <div className='form-section'>
        <h2>General information</h2>

        <div>
          <label htmlFor='full-name'>Full name</label>
          <input
            type='text'
            id='full-name'
            placeholder='John Doe'
            value={fullName}
            onChange={(event) => handleChange(event, 'fullName', 'general')}
          />
        </div>

        <div>
          <label htmlFor='job-title'>Job title</label>
          <input
            type='text'
            id='job-title'
            placeholder='Web developer'
            value={jobTitle}
            onChange={(event) => handleChange(event, 'jobTitle', 'general')}
          />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='johndoe@example.com'
            value={email}
            onChange={(event) => handleChange(event, 'email', 'general')}
          />
        </div>

        <div>
          <label htmlFor='phone'>Phone number</label>
          <input
            type='tel'
            id='phone'
            placeholder='754-3010'
            value={phone}
            onChange={(event) => handleChange(event, 'phone', 'general')}
          />
        </div>

        <div>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            placeholder='92 MACDOUGAL ST NEW YORK NY 10012-2543 USA'
            value={address}
            onChange={(event) => handleChange(event, 'address', 'general')}
          />
        </div>
      </div>
    );
  }
}

export default GeneralFormSection;
