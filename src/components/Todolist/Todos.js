import React from "react";

function Todos(props) {
  const deleteHandler = () => {
    props.onDeleteTodo(props.id);
  };
  return (
    <div>
      <p onClick={deleteHandler}>{props.value}</p>
    </div>
  );
}

export default Todos;
