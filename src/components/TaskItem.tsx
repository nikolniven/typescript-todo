import React, { useState } from 'react';
import { Task } from '../types/task';

type Props = {
  task: Task;
  toggleTask: (id: number) => void;
};

const TaskItem = (props: Props) => {
  const [isExiting, setIsExiting] = useState(false);
  const completed = props.task.completed;
  const text = props.task.text;
  const id = props.task.id;
  const toggleTaskFunction = props.toggleTask;

  const handleToggle = () => {
    setIsExiting(true);
    // Wait for animation to complete before toggling
    setTimeout(() => {
      toggleTaskFunction(id);
    }, 500); // Match this with transition duration
  };

  return (
    <div
      className={`
        flex items-center space-x-2 p-2 bg-gray-200 rounded
        transform transition-all duration-500 ease-in-out
        ${isExiting ? 'opacity-0 translate-y-2' : 'opacity-100'}
      `}
    >
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <span className={completed ? 'line-through' : ''}>{text}</span>
    </div>
  );
};

export default TaskItem;
