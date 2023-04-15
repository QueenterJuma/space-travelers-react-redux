import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedRockets } from '../Redux/rockets/rocketsSlice';
import Rocket from '../Components/Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchedRockets());
    }
  }, [dispatch, rockets]);

  return (
    <div className="rockets">
      {rockets.map((rocket) => (
        <Rocket
          image={rocket.flickr_images}
          rocket={rocket}
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
