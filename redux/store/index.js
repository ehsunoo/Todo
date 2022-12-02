import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../slices/TodoSlice";

export default configureStore({
  reducer: { todo: todoReducer },
});
