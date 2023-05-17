import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
      <TodoForm addTask={addTask} />
    </div>
  );
}

export default TodoList;
