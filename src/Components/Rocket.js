import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeReservation, cancelReservation } from '../Redux/rockets/rocketsSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  return (
    <div className="rocket-container">
      <img src={rocket.flickr_image} alt="rocket" />
      <div className="content-container">
        <h2>{rocket.name}</h2>
        <p>
          {rocket.reserved && <span className="reservation">Reserved</span>}
          {rocket.description}
        </p>
        {rocket.reserved ? (
          <button className="cancel-button" type="submit" onClick={() => { dispatch(cancelReservation(rocket.id)); }}>Cancel Reservation</button>
        ) : (
          <button
            type="submit"
            className="reserve-button"
            onClick={() => {
              dispatch(makeReservation(rocket.id));
            }}
          >
            Reserve Rocket

          </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    flickr_image: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
