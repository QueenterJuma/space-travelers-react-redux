import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { BrowserRouter as BrowserRoute } from 'react-router-dom';
import { Provider } from 'react-redux';
import Profile from '../Components/Profile';
import store from '../Redux/store';

describe('Jest Snapshot testing suite', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRoute>
          <Profile />
        </BrowserRoute>
      </Provider>
    );
    const ele = screen.getByText(/My Missions/i);
    expect(ele).toBeInTheDocument();
  });
});
