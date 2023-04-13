import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../Redux/rockets/rocketsSlice';
// import logo from '../assets/logo.png';

const Rocket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const fetchedRockets = useSelector((state) => state.rockets);

  return (
    <div className="rockets-container">
      {fetchedRockets.rockets.map((rocket) => (
        <div key={rocket.id}>
          <img src={rocket.image} alt="rocket" />
          <div className="content-container">
            <h2>{rocket.name}</h2>
            <p>
              Aliquid expetenda cu qui, quas dolor mucius te eum, per no porro
              equidem. Ex fabellas tacimates vituperata pri. Mei sint everti iisque
              at, ei fabellas liberavisse eum. His te eius erat principes.
            </p>
            <button type="submit">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rocket;
