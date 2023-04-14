import React from 'react';
import PropTypes from 'prop-types';
import { reserveRocket, cancelReservation } from '../Redux/rockets/rocketsSlice';

const Rocket = ({ name, description, image }) => (
  <div className="rocket-container">
    <img src={image} alt="rocket" />
    <div className="content-container">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  </div>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
