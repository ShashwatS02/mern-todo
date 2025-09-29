// frontend/src/components/TodoItem.js
import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
        <div className="todo-item" style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
            <span onClick={() => toggleComplete(todo._id)}>
                {todo.task}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>X</button>
        </div>
    );
}

export default TodoItem;