import { useReducer, useState } from "react";
import AddTasks from "./components/AddTasks";
import TaskList from "./components/TaskList";
import { initialTasks } from "./components/data/tasks";
import taskReducer from "./components/reducers/taskRedurcer";

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const highestId = tasks.reduce((prev, current) =>
    (prev.id && prev) > current.id ? prev.id : current.id
  );

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text,
      id: highestId + 1,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Prague itinerary</h1>

      <AddTasks onAdd={handleAddTask} />

      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
