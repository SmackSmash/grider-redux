import { configureStore } from '@reduxjs/toolkit';

import moviesSlice from './slices/moviesSlice';
import songsSlice from './slices/songsSlice';

// Export store and hook up to app the same way as vanilla redux
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer
  }
});

export default store;
