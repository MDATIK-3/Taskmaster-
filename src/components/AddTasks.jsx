import { useContext, useState } from "react";
import { TaskDispatchContext, TasksContext } from "../context/TasksContext";
import { getNextId } from "../utils/getNextId.js";

function AddTasks() {
  const [text, setText] = useState("");
  const dispatch = useContext(TaskDispatchContext);
  const tasks = useContext(TasksContext);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="flex mb-4">
        <input
          className="border p-2 mr-2"
          placeholder="Add Task"
          value={text}
          onChange={handleChangeText}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={() => {
            dispatch({
              type: "added",
              text,
              id: getNextId(tasks) + 1,
            });
            setText("");
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default AddTasks;
