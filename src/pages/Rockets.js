import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../Redux/rockets/rocketsSlice';
import Rocket from '../Components/Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((store) => store.rockets);
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRockets());
    }
  }, [dispatch]);

  return (
    <div className="rockets">
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

export default Rockets;
