import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  missions: [],
  isLoading: false,
};

export const fetchMissions = createAsyncThunk(
  'missions/FETCHMISSION',
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    const newArr = await data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      join: false,
    }));
    return newArr;
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const mission = state.missions.find((mision) => mision.id === action.payload);
      if (mission) {
        mission.join = !mission.join;
      }
    },
    leaveMission: (state, action) => {
      const mission = state.missions.find(
        (mision) => mision.id === action.payload,
      );
      if (mission) {
        mission.join = !mission.join;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      const isLoading = true;
      return {
        ...state,
        isLoading,
      };
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const missions = action.payload;
      return {
        ...state,
        missions,
        isLoading: false,
      };
    });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
