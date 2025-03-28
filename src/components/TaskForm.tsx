import { useState } from 'react';

type Props = {
  addTask: (text: string) => void;
  setFilter: (text: string) => void;
  filter: string;
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
        <div className="select">
          <select
            value={props.filter}
            onChange={(e) => props.setFilter(e.target.value)}
            className="p-4 text-[rgba(114,0,106,0.712)] cursor-pointer border-none w-40"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-input"
          placeholder="New task..."
        />
        <button type="submit" className="form-button">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
