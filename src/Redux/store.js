import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default store;
