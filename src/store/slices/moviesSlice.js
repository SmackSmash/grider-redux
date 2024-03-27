import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.splice(state.indexOf(action.payload), 1);
    }
  },
  // Listen for actions meant for other slices
  extraReducers: builder => {
    builder.addCase(reset, state => {
      state.splice(0, state.length);
    });
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
