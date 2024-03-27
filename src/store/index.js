import { configureStore, createSlice, createAction } from '@reduxjs/toolkit';

export const reset = createAction('reset');

const movieSlice = createSlice({
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

// Export store and hook up to app the same way as vanilla redux
export const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movieSlice.reducer
  }
});

// Destructure action creators for reducers to individial exports
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = movieSlice.actions;
