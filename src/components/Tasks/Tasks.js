import Task from './Task/Task';
import './Tasks.scss';
import { GrClearOption } from "react-icons/gr";

function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTasks }) {

  return (
    <div className='tasks-component'>
      <h2>These are the tasks:</h2>

      {/* Validate if there are tasks to display. */}
      {tasks.length === 0 && (
        <div className='no-task-found'>No tasks found.</div>
      )}

      {/* Renders each task. */}
      {tasks.map(
        (task, index) => (
          <Task
            key={index}
            task={task}
            onStatusChange={onStatusChange}
            onTaskRemove={onTaskRemove}
          />
        )
      )}

      {/* Remove Button */}
      <button className='clear-tasks' onClick={onClearTasks}>
        <GrClearOption />Clear Tasks
        </button>
    </div>
  );

}

export default Tasks;
