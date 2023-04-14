import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Mission from '../Components/Missions';

it('renders Mission correctly', () => {
  const tree = renderer
    .create(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Mission />
          </Router>
        </Provider>
      </React.StrictMode>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
