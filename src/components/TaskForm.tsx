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
    <form
      onSubmit={handleSubmit}
      className=" flex 
      justify-between 
      items-center 
      m-2 
      bg-white 
      text-black 
      text-2xl 
      transition-all 
      duration-300 
      ease-in-out
      space-x-2"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 text-4xl border-none bg-white"
        placeholder="New task..."
      />
      <button
        className="
    text-custom-purple 
    bg-white 
    cursor-pointer 
    transition-all 
    duration-300 
    ease-in-out 
    hover:bg-custom-purple 
    hover:text-white 
    font-awesome font-[900]"
      >
        <i className="fas fa-plus-square text-2xl font-awesome font-[900]"></i>
      </button>
    </form>
  );
};

export default TaskForm;
