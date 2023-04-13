import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../Redux/Missions/missionSlice';

const Missionitem = ({
  id, name, description, join,
}) => {
  const Dispatch = useDispatch();
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {join ? <span>Active Member</span> : <span>Not A Member</span>}
      </td>
      <td>
        {join ? (
          <button
            type="button"
            onClick={() => Dispatch(leaveMission(id))}
          >
            Leave Mission
          </button>
        ) : (
          <button type="button" onClick={() => Dispatch(joinMission(id))}>Join Mission</button>
        )}
      </td>
    </tr>
  );
};
Missionitem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  join: PropTypes.bool.isRequired,
};

export default Missionitem;
