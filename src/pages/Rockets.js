import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../Redux/rockets/rocketsSlice';
import Rocket from '../Components/Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const { rockets } = useSelector((store) => store.rockets);

  return (
    <div className="rockets">
      {rockets.map((rocket) => (
        <Rocket
          image={rocket.flickr_images}
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          id={rocket.id}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
