import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  equipment: [],
  type: '',
  transmission: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeLocationFilter(state, action) {
      state.location = action.payload;
    },
    changeEquipmentFilter(state, action) {
      state.equipment = action.payload;
    },
    changeTypeFilter(state, action) {
      state.type = action.payload;
    },
    changeTransmissionFilter(state, action) {
      state.transmission = action.payload;
    },
    resetFilters(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  changeLocationFilter,
  changeEquipmentFilter,
  changeTypeFilter,
  changeTransmissionFilter,
  resetFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
