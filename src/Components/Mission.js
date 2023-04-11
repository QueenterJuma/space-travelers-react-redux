import React from 'react';
import '../style/Mission.css';

const Mission = () => (
  <div className="table">
    <table>
      <thead>
        <tr>
          <th>Mission Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mission id</td>
          <td>Mission Description</td>
          <td>Mission Reserved</td>
          <td>
            <button type="button">Leave Mission</button>
            <button type="button">Join Mission</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Mission;
