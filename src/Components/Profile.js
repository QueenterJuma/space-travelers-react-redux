import React from 'react';
import { useSelector } from 'react-redux';
import '../style/Mission.css';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((store) => store.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="profile-container">
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

      <div className="rockets-list">
        <h2>My Rockets</h2>
        <table>
          <tbody>
            {filteredRockets.map((rocket) => {
              const rocketId = rocket.id;
              return (
                <tr key={rocketId}>
                  <td>{rocket.rocket_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
