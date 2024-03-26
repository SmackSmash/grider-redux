import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
    }
  }
});

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    }
  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movieSlice.reducer
  }
});

const startingState = store.getState();
console.log(startingState);

store.dispatch({ type: 'song/addSong', payload: 'Holy Wars' });
store.dispatch({ type: 'movie/addMovie', payload: 'Jurrasic Park' });

console.log(store.getState());
