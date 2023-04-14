import React from 'react';
// import render from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import store from '../Redux/store';
import Missionitem from '../Components/MissionItem';

it('renders MissionItem correctly', () => {
  const tree = render
    .create(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Missionitem />
          </Router>
        </Provider>
      </React.StrictMode>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('join a mission', () => {
  const mockStore = configureMockStore();
  const initialState = {
    missions: {
      missions: [
        {
          id: '2',
          name: 'Telstar',
          description: 'Telstar 19V (Telstar 19 Vantage) is a communication',
        },
      ],
      isLoading: false,
    },
  };
  const store = mockStore(initialState);
  store.clearActions();
  render(
    <Provider>
      <Missionitem />
    </Provider>,
  );
  const joinButton = screen.getByRole('button', { name: /Join Mission/i });
  fireEvent.click(joinButton);

  expect(store.getActions()).toEqual([{ type: 'missions/joinMission' }]);
});
