import React, { useState } from "react";

const Input = ({ handleCreateTodo, handleCompleteEverything }) => {
  const [todo, setTodo] = useState("");
  handleChangeTodo = e => {
    setTodo(e.target.value);
  };
  return (
    <form onSubmit={handleCreateTodo}>
      <button onClick={handleCompleteEverything}>Clear</button>
      <input value={todo} onChange={handleChangeTodo} type="text" placeholder="What needs to be done?" />
    </form>
  );
};

export default Input;
