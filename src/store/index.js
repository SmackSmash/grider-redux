import { configureStore } from '@reduxjs/toolkit';

import moviesSlice from './slices/moviesSlice';
import { addMovie, removeMovie } from './slices/moviesSlice';

import songsSlice from './slices/songsSlice';
import { addSong, removeSong } from './slices/songsSlice';

// Export store and hook up to app the same way as vanilla redux
const store = configureStore({
  reducer: {
    songs: songsSlice,
    movies: moviesSlice
  }
});

// Pipe these functions through the index.js file so
// all external components will import everything from
// ./store directly
export { addMovie, removeMovie, addSong, removeSong };
export default store;
