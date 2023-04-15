import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  isLoading: true,
};
export const fetchedRockets = createAsyncThunk(
  'rockets/fetchedRockets',
  async () => {
    try {
      const res = await fetch(url);
      const data = res.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    makeReservation: (state, action) => {
      const newArr = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: newArr,
      };
    },
    cancelReservation: (state, action) => {
      const newArr = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: newArr,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchedRockets.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchedRockets.fulfilled, (state, action) => {
        const newArr = [];
        action.payload.map((item) => newArr.push({
          id: item.id,
          name: item.name,
          description: item.description,
          flickr_image: item.flickr_images[0],
          reserved: false,
        }));
        return {
          ...state,
          isLoading: false,
          rockets: newArr,
        };
      })
      .addCase(fetchedRockets.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { makeReservation, cancelReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
