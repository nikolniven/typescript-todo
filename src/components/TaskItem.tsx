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

  const handleDelete = () => {
    setIsExiting(true);
    // Wait for animation to complete before toggling
    setTimeout(() => {
      props.deleteTask(id);
    }, 500); // Match this with transition duration
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`
        flex items-center space-x-2 p-2 bg-gray-200 rounded
        transform transition-all duration-500 ease-in-out break-words w-[400px]
        ${isExiting ? 'translate-y-32 rotate-6 opacity-0' : 'opacity-100'}
      `}
      >
        <input type="checkbox" checked={completed} />
        <span>
          <button
            onClick={handleDelete}
            className="bg-[rgba(114,0,106,0.712)] 
              text-white 
              border-none 
              p-4 
              cursor-pointer 
              text-base"
          >
            <i className="fas fa-trash px-2 whitespace-normal"></i>
          </button>
          {text}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
