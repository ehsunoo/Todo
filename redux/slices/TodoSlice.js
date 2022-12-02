import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  edit: { enable: false, index: null, value: "" },
  message: { severity: "info", text: "Please enter your new Todo!" },
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("Todo", JSON.stringify(state.items));
    },
    updateTodo: (state, action) => {
      state.items[action.payload.index] = action.payload.value;
      state.edit.enable = false;
      localStorage.setItem("Todo", JSON.stringify(state.items));
    },
    removeTodo: (state, action) => {
      state.items.splice(action.payload, 1);
      localStorage.setItem("Todo", JSON.stringify(state.items));
    },
    getTodos: (state) => {
      const items = localStorage.getItem("Todo");
      items && (state.items = [...JSON.parse(items)]);
    },
    editEnable: (state, action) => {
      state.edit.enable = true;
      state.edit.index = action.payload.index;
      state.edit.value = action.payload.value;
    },
    messageControl: (state, action) => {
      state.message.severity = action.payload.severity;
      state.message.text = action.payload.text;
    },
  },
});

export const { createTodo, updateTodo, removeTodo, getTodos, editEnable, messageControl } = todoSlice.actions;

export default todoSlice.reducer;
