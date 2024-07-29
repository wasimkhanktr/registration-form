import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/welcome.css';

const Welcome = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Logic for logging out (e.g., clearing user session data)
        navigate('/');
    };

    return (
        <div className="welcome-container">
            <h1>Welcome!</h1>
            <p>You have successfully logged in.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Welcome;
