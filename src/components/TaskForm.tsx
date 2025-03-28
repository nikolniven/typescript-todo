import { useState } from 'react';

type Props = {
  addTask: (text: string) => void;
};

const TaskForm = (props: Props) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    props.addTask(text);
    setText('');
  };

  return (
    <div className="min-h-[20vh] flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="select mr-4">
          <select className="w-40 p-4 text-[rgba(114,0,106,0.712)] cursor-pointer border-none">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 text-2xl border-none bg-white"
          placeholder="New task..."
        />

        <button
          type="submit"
          className="text-custom-purple 
            bg-white 
            p-2 
            text-2xl
            border-none
            cursor-pointer 
            transition-all 
            duration-300 
            hover:bg-custom-purple 
            hover:text-white"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
