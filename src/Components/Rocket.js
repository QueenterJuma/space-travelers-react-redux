import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from '../Redux/rockets/rocketsSlice';
import logo from '../assets/logo.png';

const Rocket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  });
  return (
    <div className="rockets-container">
      <img src={logo} alt="rocket" />
      <div className="content-container">
        <h2>Rocket name</h2>
        <p>
          Aliquid expetenda cu qui, quas dolor mucius te eum, per no porro
          equidem. Ex fabellas tacimates vituperata pri. Mei sint everti iisque
          at, ei fabellas liberavisse eum. His te eius erat principes.
        </p>
        <button type="submit">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
