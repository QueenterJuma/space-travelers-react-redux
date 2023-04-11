import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => (
  <header className="header-container">
    <Link className="brand" to="/">
      <img src={logo} alt="logo" />
      <h2>Space Travelers Hub</h2>
    </Link>
    <ul className="nav-container">
      <li className="nav-item"><Link to="/">Rockets</Link></li>
      <li className="nav-item"><Link to="missions">Missions</Link></li>
      <li className="nav-item"><Link to="profile">My Profile</Link></li>
    </ul>
  </header>
);

export default Navbar;
