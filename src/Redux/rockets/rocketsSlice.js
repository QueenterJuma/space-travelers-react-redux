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
    reserveRocket: (state, action) => {
      const id = action.payload;
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return { ...state, rockets: updatedRockets };
    },
    cancelReservation: (state, action) => {
      const id = action.payload;
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      return { ...state, rockets: updatedRockets };
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

export const { cancelReservation, reserveRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
