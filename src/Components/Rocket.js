import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ title, description, image }) => (
  <div className="rocket-container">
    <img src={image} alt="rocket" />
    <div className="content-container">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

Rocket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
