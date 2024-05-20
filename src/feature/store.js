import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";
import quoteReducer from "./quote/quoteSlice"

const store = configureStore({
  reducer: {
    todos: todoReducer,
    quotes : quoteReducer,
  },
});

export default store;
