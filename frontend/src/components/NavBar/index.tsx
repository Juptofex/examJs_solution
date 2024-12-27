import React from 'react';
import { useNavigate } from "react-router-dom";
import '../App/App.css';

const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleHomeClick = () => {
    if (token) {
      navigate("/welcome");
    } else {
      navigate("/");
    }
  };

  return (
    <nav>
      <button onClick={handleHomeClick}>Home</button>
      <button onClick={() => navigate("/books")}>Library</button>
    </nav>
  );
};

export default NavBar;