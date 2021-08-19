import React, { useState } from "react";
import classes from "./TodoForm.module.css";
function TodoForm(props) {
  const [newTodo, setNewTodo] = useState("");
  const inputHandler = (e) => {
    setNewTodo(e.target.value);
  };
  const todoSubmitHandler = (e) => {
    e.preventDefault();
    const id = Math.random().toString();
    const newlyAddedTodo = { value: newTodo, id: id };

    props.onTodoSubmit(newlyAddedTodo);
    setNewTodo("");
  };
  return (
    <form className={classes.todoForm} onSubmit={todoSubmitHandler}>
      <p>Add New Todo</p>
      <input
        required
        value={newTodo}
        type="text"
        onChange={inputHandler}
      ></input>
      <div>
        <button type="submit">ADD TODO</button>
      </div>
    </form>
  );
}

export default TodoForm;
