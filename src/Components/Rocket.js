import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ name, type, image }) => (
  <div className="rocket-container">
    <img src={image} alt={name} />
    <div className="content-container">
      <h2>{name}</h2>
      <p>{type}</p>
    </div>
  </div>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
