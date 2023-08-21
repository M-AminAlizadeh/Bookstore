import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "../books/booksSlice";
import categoriesSlice from "../categories/categoriesSlice";

export default configureStore({
  reducer:{
    books: booksSlice,
    category: categoriesSlice
  }
})