import React, { useEffect, useRef } from "react";

// Redux-Toolkit
import { useDispatch, useSelector } from "react-redux";
import { createTodo, messageControl, updateTodo } from "../redux/slices/TodoSlice";

// Material UI
import { TextField } from "@mui/material";

function TodoInput() {
  const inputRef = useRef();
  const isEdit = useSelector((state) => state.todo.edit.enable);
  const editIndex = useSelector((state) => state.todo.edit.index);
  const editValue = useSelector((state) => state.todo.edit.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEdit) {
      inputRef.current.value = editValue;
    }
  }, [editIndex]);

  const submitHandler = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if (!isEdit) {
      dispatch(createTodo(inputValue));
      dispatch(messageControl({ severity: "success", text: "Todo added successfully!" }));
    } else {
      dispatch(updateTodo({ index: editIndex, value: inputValue }));
      dispatch(messageControl({ severity: "success", text: "Todo edited successfully!" }));
    }
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField required autoFocus inputRef={inputRef} label={isEdit ? "Edit Todo" : "Add Todo"} variant="standard" fullWidth size="medium" />
    </form>
  );
}

export default TodoInput;
