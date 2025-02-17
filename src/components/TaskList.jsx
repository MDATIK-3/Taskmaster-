import Task from "./Task";

function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <>
      <ul className="list-disc pl-5">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} />    
        ))}
      </ul>
    </>
  );
}

export default TaskList;
