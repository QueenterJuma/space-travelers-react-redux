import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/rockets';

const FETCH_ROCKETS = 'space-travelers-react-redux/rockets/fetchRockets';

// Action creator
export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const initialState = {
  rockets: [],
};

// Add a reducer
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    makeReservation(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: true };
      });
    },
    cancelReservation(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload,
      }));
  },
});

export const { cancelReservation, makeReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
