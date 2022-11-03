import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <h2>Where in the world?</h2>
      </Link>
      <button className='btn'>
        <i className='far fa-moon fa-2x'></i>
        Dark Mode
      </button>
    </div>
  );
};

export default Navbar;
