import { useReducer } from "react";
import AddTasks from "./components/AddTasks";
import TaskList from "./components/TaskList";
import { initialTasks } from "./components/data/tasks";
import taskReducer from "./components/reducers/taskRedurcer";
import { TasksContext, TaskDispatchContext } from "./context/TasksContext";

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <h1 className="text-2xl font-bold mb-4">Prague itinerary</h1>

        <AddTasks />
        <TaskList />
      </TaskDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
