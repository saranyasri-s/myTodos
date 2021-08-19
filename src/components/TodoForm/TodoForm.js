import React, { useState } from "react";

function TodoForm(props) {
  const [newTodo, setNewTodo] = useState("");
  const inputHandler = (e) => {
    setNewTodo(e.target.value);
  };
  const todoSubmitHandler = (e) => {
    e.preventDefault();
    const id = Math.random().toString();
    const newlyAddedTodo = { value: newTodo, id: id };

    console.log(newlyAddedTodo);
    props.onTodoSubmit(newlyAddedTodo);
    setNewTodo("");
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <input value={newTodo} type="text" onChange={inputHandler}></input>
      <button type="submit">ADD TODO</button>
    </form>
  );
}

export default TodoForm;
