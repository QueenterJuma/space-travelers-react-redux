import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => (
  <header className="header-container">
    <Link className="brand" to="/">
      <img src={logo} alt="logo" />
      <h2>Space Travelers Hub</h2>
    </Link>
    <ul className="nav-container">
      <li className="nav-item"><NavLink to="/">Rockets</NavLink></li>
      <li className="nav-item"><NavLink to="missions">Missions</NavLink></li>
      <li className="nav-item"><NavLink to="profile">My Profile</NavLink></li>
    </ul>
  </header>
);

export default Navbar;
