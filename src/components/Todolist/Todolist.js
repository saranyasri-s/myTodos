import React from "react";
import Todos from "./Todos";
function Todolist(props) {
  return (
    <div>
      {console.log(props.todos)}
      {props.todos.map((todo) => {
        return (
          <Todos
            onDeleteTodo={props.onDeleteTodo}
            value={todo.value}
            key={todo.id}
            id={todo.id}
          ></Todos>
        );
      })}
    </div>
  );
}

export default Todolist;
