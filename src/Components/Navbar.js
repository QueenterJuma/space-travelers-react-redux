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
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {' '}
          Rockets
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="missions"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {' '}
          Missions
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {' '}
          My Profile
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Navbar;
