import React from 'react';

const TodoItem = ({ todo, handleCompleteTodo, handleDeleteTodo }) => {
    return (
      <li>
        <button onClick={handleCompleteTodo}>Complete</button>
        <p>{todo}</p>
        <button onClick={handleDeleteTodo}>Delete</button>
      </li>
    );
}

export default TodoItem;