import { useContext, useState } from "react";
import { TaskDispatchContext } from "../context/TasksContext";

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TaskDispatchContext);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="border p-2 mr-2"
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            })
          }
        />
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 mr-2"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 mr-2"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <li className="flex items-center mb-2">
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={task.done}
          onChange={(e) =>
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            })
          }
        />
        {taskContent}
        <button
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
          onClick={() =>
            dispatch({
              type: "deleted",
              id: task.id,
            })
          }
        >
          Delete
        </button>
      </label>
    </li>
  );
}

export default Task;
