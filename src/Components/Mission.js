import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../style/Mission.css';
import { fetchMissions } from '../Redux/Missions/missionSlice';
import Missionitem from './MissionItem';

const Mission = () => {
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(fetchMissions());
  }, [Dispatch]);
  const MISSIONS = useSelector((state) => state.missions);
  // console.log(MISSIONS);
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {MISSIONS.missions.map((mission) => (
              <Missionitem
                name={mission.name}
                key={mission.id}
                id={mission.id}
                description={mission.description}
                reserved={mission.reserved}
              />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
