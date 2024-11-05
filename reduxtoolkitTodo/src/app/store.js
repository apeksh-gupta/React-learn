// procees to make store
// first of all import configurestore to make store 

import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../features/todo/todoSlice.js";

export const store = configureStore({
  reducer: todoReducer
})

// next step is to make reducers

