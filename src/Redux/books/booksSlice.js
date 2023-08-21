import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    value: []
  },
  reducers: {
    add: (state,action)=>{
      const {title} = action.payload;
      state.value.push({title});
    },
    remove: (state,action)=>{
      const {id} = action.payload;
      state.value = state.value.filter((book)=>book.id !== id);
    }
  }
})

export const {add , remove} = booksSlice.actions;
