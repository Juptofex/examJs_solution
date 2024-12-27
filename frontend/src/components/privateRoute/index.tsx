import React from 'react';
import { Navigate } from 'react-router-dom';
import '../App/App.css';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return (
      <div className="access-denied">
        <h1>Access Denied</h1>
        <p>You must be logged in to access this page.</p>
        <button onClick={() => window.location.href = '/'}>Go to Login</button>
      </div>
    );
  }

  return children;
};

export default PrivateRoute;