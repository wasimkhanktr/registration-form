// src/RegistrationForm.js
import React, { useState } from 'react';
import './Registration.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    id:'',
    name: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiURL = 'https://sheetdb.io/api/v1/obm9ho26255z6';
    
    // Prepare the data to be sent
    const data = {
      data: [formData]
    };

    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          dob: '',
          email: '',
          phone: '',
          address: '',
          username: '',
          password: ''
        });
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error!', error.message);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="Reg">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Date of Birth:
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
