import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import useNavigate
import '../styles/registration.css';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        phone: '',
        address: '',
        username: '',
        password: ''
    });

    // const navigate = useNavigate(); // Initialize useNavigate

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
        <div className="reg-container">
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                
                <label>Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                
                <label>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                
                <label>Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                
                <button type="submit">Register</button>
            </form>
            <Link to="/">Login</Link>

            {/* <button onClick={() => navigate('/')}>Go to Login</button> */}
        </div>
    );
}

export default RegistrationForm;
