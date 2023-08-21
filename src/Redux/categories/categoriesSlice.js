import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
  value: 'Under construction',
  },
  reducers: {
    check: (state) => state.value,
  },
});

export const { check } = categoriesSlice.actions;
