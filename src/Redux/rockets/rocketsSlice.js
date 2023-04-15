import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/rockets';

const FETCH_ROCKETS = 'space-travelers-react-redux/rockets/fetchRockets';

// Action creator
export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newrockets = [];
  data.map((element) => newrockets.push({
    id: element.id,
    rocket_name: element.name,
    description: element.description,
    flickr_image: element.flickr_images[0],
    reserved: false,
  }));
  return newrockets;
});

const initialState = {
  rockets: [],
};

// Add a reducer
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    makeReservation: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: newState,
      };
    },
    cancelReservation: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: newState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => ({
      ...state,
      rockets: action.payload,
    }));
  },
});

export const { cancelReservation, makeReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
