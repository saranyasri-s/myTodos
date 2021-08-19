import React, { useState } from "react";
import classes from "./App.module.css";
import TodoForm from "./components/TodoForm/TodoForm";
import Todolist from "./components/Todolist/Todolist";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (todo) => {
    console.log(todo);
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };
  const DeleteTodoHandler = (idToDelete) => {
    console.log(idToDelete);
    const newTodosArr = [...todos];
    const deleteingTodo = newTodosArr.filter((todo) => todo.id === idToDelete);
    const index = newTodosArr.indexOf(deleteingTodo[0]);
    newTodosArr.splice(index, 1);
    setTodos(newTodosArr);
  };
  return (
    <div className={classes.App}>
      <h3>My Todos </h3>
      <div className={classes.TodoForm}>
        <TodoForm onTodoSubmit={addTodoHandler}></TodoForm>
      </div>
      <div className={classes.TodoList}>
        <Todolist onDeleteTodo={DeleteTodoHandler} todos={todos}></Todolist>
      </div>
    </div>
  );
}

export default App;
