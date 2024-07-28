// src/Home.js
import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import Login from './Login';
import './Home.css';

const Home = () => {
  const [showForm, setShowForm] = useState('registration'); // Default to registration form

  return (
    <div className="Home">
      <div className="button-container">
        <button onClick={() => setShowForm('registration')}>Registration</button>
        <button onClick={() => setShowForm('login')}>Login</button>
      </div >
      <h1 className='app'>My App</h1>
      {showForm === 'registration' ? <RegistrationForm /> : <Login />}
    </div>
  );
};

export default Home;
