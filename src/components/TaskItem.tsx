import React, { useState } from 'react';
import { Task } from '../types/task';

type Props = {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TaskItem = (props: Props) => {
  const [isExiting, setIsExiting] = useState(false);
  const completed = props.task.completed;
  const text = props.task.text;
  const id = props.task.id;

  const handleToggle = () => {
    props.toggleTask(id);
  };

  const handleDelete = () => {
    setIsExiting(true);
    // Wait for animation to complete before toggling
    setTimeout(() => {
      props.deleteTask(id);
    }, 600); // Match this with transition duration
  };

  return (
    <div
      className={`
        flex items-center space-x-2 p-2 bg-gray-200 rounded
        transform transition-all duration-500 ease-in-out
        mb-2 w-[400px] overflow-hidden
        ${
          isExiting
            ? 'opacity-0 translate-y-32 rotate-6 h-0 m-0 p-0'
            : 'opacity-100 h-auto'
        }
      `}
    >
      <button onClick={handleToggle} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button
        onClick={handleDelete}
        className="bg-[rgba(114,0,106,0.712)] text-white border-none p-4 cursor-pointer text-base"
      >
        <i className="fas fa-trash"></i>
      </button>
      <span className={completed ? 'line-through opacity-50' : ''}>{text}</span>
    </div>
  );
};
export default TaskItem;
