import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      return state.filter(song => song !== action.payload);
    }
  }
});

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      return state.filter(movie => movie !== action.payload);
    }
  }
});

// Export store and hook up to app the same way as vanilla redux
export const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movieSlice.reducer
  }
});

// Destructure reducers to individial exports
export const { addSong } = songsSlice.actions;
