import React from "react";

// Material UI
import Alert from "@mui/material/Alert";

// Redux-Toolkit
import { useSelector } from "react-redux";

// Components
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

// Styles
import styles from "../styles/TodoApp.module.css";

function TodoApp() {
  const messageSeverity = useSelector((state) => state.todo.message.severity);
  const messageText = useSelector((state) => state.todo.message.text);

  return (
    <div className={styles.container}>
      <TodoInput />
      <Alert severity={messageSeverity}>{messageText}</Alert>
      <TodoList />
    </div>
  );
}

export default TodoApp;
