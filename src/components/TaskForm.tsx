import { useState } from 'react';

type Props = {
  addTask: (text: string) => void;
  setFilter: (text: string) => void;
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
