import React from 'react';
import { useSelector } from 'react-redux';
import '../style/Mission.css';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  // const { rockets } = useSelector((state) => state.rockets);
  return (
    <div>
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
      {/* <div className="rocket-list">
        <h2>My Rockets</h2>
        <table className="profile-table">
          <tbody>
            {rockets
              .filter((rocket) => rocket.reserved)
              .map((reserved) => (
                <tr key={reserved.id}>
                  <td>{reserved.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Profile;
