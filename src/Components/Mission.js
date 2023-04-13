import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../Redux/Missions/missionSlice';
import Missionitem from './MissionItem';
import '../style/Mission.css';

const Mission = () => {
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(fetchMissions());
  }, [Dispatch]);
  const MISSIONS = useSelector((state) => state.missions);
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Description</th>
            <th>Status</th>
            <th aria-label="member" />
          </tr>
        </thead>
        <tbody>
          {MISSIONS.missions.map((mission) => (
            <Missionitem
              name={mission.name}
              key={mission.id}
              id={mission.id}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
