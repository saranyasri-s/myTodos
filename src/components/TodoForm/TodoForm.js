import React, { useState } from "react";
import classes from "./TodoForm.module.css";
function TodoForm(props) {
  const [newTodo, setNewTodo] = useState("");
  const [isValid, setIsValid] = useState(true);
  const inputHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setNewTodo(e.target.value);
  };
  const todoSubmitHandler = (e) => {
    e.preventDefault();

    const id = Math.random().toString();
    const newlyAddedTodo = { value: newTodo, id: id };
    if (newTodo.trim().length === 0) {
      setIsValid(false);
    } else {
      props.onTodoSubmit(newlyAddedTodo);
      setNewTodo("");
    }
  };
  return (
    <form
      className={`${classes.todoForm} ${!isValid && classes.invalid}`}
      onSubmit={todoSubmitHandler}
    >
      <p> Add New Todo</p>
      <input value={newTodo} type="text" onChange={inputHandler}></input>
      {!isValid ? (
        <p style={{ color: "red", fontWeight: "lighter" }}>
          *Enter the valid input
        </p>
      ) : null}
      <div>
        <button type="submit">ADD TODO</button>
      </div>
    </form>
  );
}

export default TodoForm;
