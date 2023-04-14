import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelBooking, bookRocket } from '../Redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  return (
    <li className="rocket-container">
      <img src={rocket.flickr_image} alt="rocket" />
      <div className="content-container">
        <h2>{rocket.rocket_name}</h2>
        <p>
          {rocket.reserved && <span className="rocket-badge">Reserved</span>}
          {' '}
          {rocket.description}
        </p>
        {rocket.reserved && (
          <button
            type="button"
            onClick={() => dispatch(cancelBooking(rocket.id))}
            className="cancel-btn"
          >
            Cancel Reservation
          </button>
        )}
        {!rocket.reserved && (
          <button
            type="button"
            onClick={() => dispatch(bookRocket(rocket.id))}
            className="rocketreseved-btn"
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_image: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
