import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Task } from './types/task';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks(tasks.concat(newTask));
  };

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
    <div className="max-w-lg mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">To-Do List</h1>
      <TaskForm addTask={addTask} />
      <div>Hallo from Home</div>
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
};

export default App;
