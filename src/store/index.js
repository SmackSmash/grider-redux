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
    }
  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movieSlice.reducer
  }
});

store.dispatch({ type: 'song/addSong', payload: 'Holy Wars' });
store.dispatch({ type: 'movie/addMovie', payload: 'Jurrasic Park' });
store.dispatch({ type: 'song/addSong', payload: "Don't let the sun go down on me" });
store.dispatch({ type: 'song/addSong', payload: 'One' });

console.log(store.getState());

store.dispatch({ type: 'song/removeSong', payload: 'Holy Wars' });

console.log(store.getState());
