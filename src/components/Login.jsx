import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://sheetdb.io/api/v1/obm9ho26255z6');
            const data = await response.json();
            
            const user = data.find(user => user.username === username && user.password === password);
            
            if (user) {
                alert('Login successful');
                navigate('/welcome');
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('An error occurred while logging in');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Enter your username" 
                        required 
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter your password" 
                        required 
                    />
                    <button type="submit">Login</button>
                    {error && <p className="error">{error}</p>}
                </form>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
};

export default Login;
