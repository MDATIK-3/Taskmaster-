import { useState } from "react";

function AddTasks({ onAdd }) {
  const [text, setText] = useState("");

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
            onAdd(text);
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
