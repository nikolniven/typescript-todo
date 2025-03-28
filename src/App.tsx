import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Task } from './types/task';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState('all');

  const addTask = (text: string) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks(tasks.concat(newTask));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'uncompleted') return !task.completed;
    return true;
  });

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            id: task.id,
            text: task.text,
            completed: !task.completed,
          };
        }
        return task;
      }),
    );
  };

  return (
    <div className="w-full min-h-screen max-w-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#d492ee] to-[#d93fe7]">
      <header className="header">
        <h1>Nik's To do List</h1>
        <h2>what needs to be done, needs to be done!</h2>
      </header>
      <TaskForm addTask={addTask} filter={filter} setFilter={setFilter} />
      {/* <div className="select-container">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div> */}
      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
