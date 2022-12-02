import React, { useEffect } from "react";

// Redux-Toolkit
import { useDispatch, useSelector } from "react-redux";
import { editEnable, getTodos, messageControl, removeTodo } from "../redux/slices/TodoSlice";

// Material UI
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// Styles
import styles from "../styles/TodoList.module.css";

function TodoList() {
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const items = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  const editHandler = (index, value) => {
    dispatch(editEnable({ index, value }));
    dispatch(messageControl({ severity: "warning", text: "Please edit your todo!" }));
  };

  const deleteHandler = (id) => {
    dispatch(removeTodo(id));
    dispatch(messageControl({ severity: "success", text: "Todo removed successfully!" }));
  };

  return (
    <div className={styles.container}>
      <List>
        {items?.map((value, index) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="edit" onClick={() => editHandler(index, value)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteHandler(index)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemText id={labelId} primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default TodoList;
