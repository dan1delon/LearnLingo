import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../constants';
import { fetchTeachers } from './operations';

const handlePending = state => {
  state.loading = true;
  state.error = false;
};

const handleRejected = state => {
  state.loading = false;
  state.error = true;
};

const teachersSlice = createSlice({
  name: 'teachers',

  initialState: INITIAL_STATE.teachers,

  extraReducers: builder => {
    builder
      // fetchAds
      .addCase(fetchTeachers.pending, handlePending)
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTeachers.rejected, handleRejected);
  },
});

export const teachersReducer = teachersSlice.reducer;
