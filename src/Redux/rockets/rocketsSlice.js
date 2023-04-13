/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/rockets';

const FETCH_ROCKETS = 'space-travelers-react-redux/rockets/fetchRockets';

const initialState = [];

// Add a reducer
export default function rocketsReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_ROCKETS}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const {
          rocket_name, description, flickr_images,
        } = action.payload[key][0];
        return {
          id: key,
          name: rocket_name,
          type: description,
          image: flickr_images[0],
        };
      });
    default:
      return state;
  }
}

// Action creator
export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log('Rockets', data);
  return data;
});
