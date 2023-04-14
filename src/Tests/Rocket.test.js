import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import Rocket from '../Components/Rocket';
import store from '../Redux/store';

describe('Jest Snapshot testing suite', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <Rocket />
      </Provider>
    );
    const ele = screen.getByText(/Rockets data loading...!/i);
    expect(ele).toBeInTheDocument();
  });
});
