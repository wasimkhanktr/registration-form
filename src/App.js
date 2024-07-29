import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import Welcome from './components/Welcome';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<RegistrationForm />} />
                    <Route path="/welcome" element={<Welcome />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
