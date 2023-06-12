// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define action types
const initialNewsState = { newsItem: null };

const newsSlice = createSlice({
  name: 'newsItem',
  initialState: initialNewsState,
  reducers: {
    addNewsItem(state, action) {
      state.newsItem = action.payload;
    },
  },
});

// Create the store
const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
});

export const { addNewsItem } = newsSlice.actions;

export default store;
