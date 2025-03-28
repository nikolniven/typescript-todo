import TaskItem from './TaskItem';
import { Task } from '../types/task';

type Props = {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TaskList = (props: Props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list min-w-[30%] list-none">
        {props.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={props.toggleTask}
            deleteTask={props.deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
