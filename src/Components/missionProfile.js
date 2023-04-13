import React from 'react';
import { useSelector } from 'react-redux';
import '../style/Mission.css';

const MissionProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  return (
    <div className="mission-list">
      <h2>My Mission</h2>
      <table className="profile-table">
        <tbody>
          {missions
            .filter((mission) => mission.join)
            .map((join) => (
              <tr key={join.id}>
                <td>{join.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionProfile;
