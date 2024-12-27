import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App/App.css';

const Welcome = () => {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <div className="welcome-container">
      <h1>Welcome, {username}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;