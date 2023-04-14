import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  isLoading: true,
};
export const fetchedRockets = createAsyncThunk('rockets/fetchedRockets', async () => {
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    return error;
  }
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, action) => {
      const newArr = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: newArr,
      };
    },
    cancelBooking: (state, action) => {
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
          rocket_name: item.rocket_name,
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

// const FETCH_ROCKETS = 'space-travelers-react-redux/rockets/fetchRockets';

// const initialState = [];

// // Add a reducer
// export default function rocketsReducer(state = initialState, action) {
//   switch (action.type) {
//     case `${FETCH_ROCKETS}/fulfilled`:
//       return Object.keys(action.payload).map((key) => {
//         const {
//           rocket_name, description, flickr_images,
//         } = action.payload[key][0];
//         return {
//           id: key,
//           name: rocket_name,
//           description,
//           flickr_images,
//         };
//       });
//     default:
//       return state;
//   }
// }

// // Action creator
// export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log('Rockets', data);
//   return data;
// });

export const { bookRocket, cancelBooking } = rocketsSlice.actions;
export default rocketsSlice.reducer;
