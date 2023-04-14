import React from 'react';
import rendered from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import store from '../redux/store';
import Missionitem from '../components/MissionItem';

it('renders MissionItem correctly', () => {
  const tree = render.create(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Missionitem />
        </Router>
      </Provider>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('join a mission', () => {
  const mockStore = configureMockStore();
  const initialState = {
    missions: {
      missions: [
        {
          id: '2'
          name: 'Telstar'
          description: 'Telstar 19V (Telstar 19 Vantage) is a communication'
        }
      ]
    }
  }
})