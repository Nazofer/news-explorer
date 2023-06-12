// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define action types
const initialNewsState = { newsItem: null };
const initialSearchState = { date: null };

const newsSlice = createSlice({
  name: 'newsItem',
  initialState: initialNewsState,
  reducers: {
    addNewsItem(state, action) {
      state.newsItem = action.payload;
    },
  },
});

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    setSearchDate(state, action) {
      state.date = action.payload;
    },
  },
});

// Create the store
const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
    search: searchSlice.reducer,
  },
});

export const { addNewsItem } = newsSlice.actions;
export const { setSearchDate } = searchSlice.actions;

export default store;
