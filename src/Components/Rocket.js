import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeReservation, cancelReservation } from '../Redux/rockets/rocketsSlice';

const Rocket = ({
  name, description, image, id, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="rocket-container">
      <img src={image} alt="rocket" />
      <div className="content-container">
        <h2>{name}</h2>
        <p>
          {reserved && <span className="reservation">Reserved</span>}
          {description}
        </p>
        {reserved ? (
          <button className="cancel-button" type="submit" onClick={() => { dispatch(cancelReservation(id)); }}>Cancel Reservation</button>
        ) : (
          <button
            type="submit"
            className="reserve-button"
            onClick={() => {
              dispatch(makeReservation(id));
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
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
