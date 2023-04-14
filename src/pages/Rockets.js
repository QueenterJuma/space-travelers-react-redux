import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedRockets } from '../Redux/rockets/rocketsSlice';
import Rocket from '../Components/Rocket';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchedRockets());
    }
  }, [dispatch, rockets]);

  return (
    <ul className="rockets">
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
};

export default Rockets;
