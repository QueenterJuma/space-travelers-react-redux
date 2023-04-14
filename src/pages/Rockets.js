import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../Redux/rockets/rocketsSlice';
import Rocket from '../Components/Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const fetchedRockets = useSelector((state) => state.rockets || {});

  return (
    <div className="rockets">
      {fetchedRockets.map((rocket) => (
        <Rocket
          image={rocket.flickr_images}
          key={rocket.id}
          title={rocket.rocket_name}
          description={rocket.description}
          id={rocket.id}
        />
      ))}
    </div>
  );
};

export default Rockets;
