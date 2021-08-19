import React from "react";
import classes from "./Todos.module.css";
function Todos(props) {
  const deleteHandler = () => {
    props.onDeleteTodo(props.id);
  };
  return (
    <div className={classes.Todo} onClick={deleteHandler}>
      <p >{props.value}</p>
    </div>
  );
}

export default Todos;
