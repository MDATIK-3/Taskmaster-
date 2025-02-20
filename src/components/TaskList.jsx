import { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "../context/TasksContext";

function TaskList() {
  const tasks = useContext(TasksContext);

  return (
    <>
      <ul className="list-disc pl-5">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
