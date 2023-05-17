import React from 'react';

function TodoItem({ task, index, completeTask, deleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => completeTask(index)}
      />
      <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </p>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
