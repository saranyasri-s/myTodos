import React, { useState } from "react";

function TodoForm(props) {
  const [newTodo, setNewTodo] = useState("");
  const inputHandler = (e) => {
    setNewTodo(e.target.value);
  };
  const todoSubmitHandler = () => {
    const newlyAddedTodo = { value: newTodo, id: Math.random.toString() };
    props.onTodoSubmit(newlyAddedTodo);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <input value={newTodo} type="text" onChange={inputHandler}></input>
      <button type="submit">ADD TODO</button>
    </form>
  );
}

export default TodoForm;
