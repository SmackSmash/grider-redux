import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    // Can mutate state directly due to immer integration
    addSong: (state, action) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      state.splice(state.indexOf(action.payload), 1);
      // Or we can return new data like the old days
      // return state.filter(song => song !== action.payload);
    }
  },
  // Listen for actions meant for other slices
  extraReducers: builder => {
    builder.addCase(reset, state => {
      state.splice(0, state.length);
    });
  }
});

export const { addSong, removeSong } = songsSlice.actions;
export default songsSlice.reducer;
