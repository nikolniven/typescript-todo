import TaskItem from './TaskItem';
import { Task } from '../types/task';

type Props = {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TaskList = (props: Props) => {
  return (
    <div className="task-list">
      {props.tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={props.toggleTask}
          deleteTask={props.deleteTask}
        />
      ))}
    </div>
  );
};
export default TaskList;
