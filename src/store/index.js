import { configureStore } from '@reduxjs/toolkit';

import movies, { addMovie, removeMovie } from './slices/moviesSlice';
import songs, { addSong, removeSong } from './slices/songsSlice';

// Export store and hook up to app the same way as vanilla redux
const store = configureStore({
  reducer: {
    songs,
    movies
  }
});

// Pipe these functions through the index.js file so
// all external components will import everything from
// ./store directly
export { addMovie, removeMovie, addSong, removeSong };
export default store;
