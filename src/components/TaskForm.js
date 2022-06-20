import React from "react";
import { useGlobalContext } from "../context";

const TaskForm = () => {
  const { handleSubmit, isEditing, name, setName } = useGlobalContext();

  return (
    <form className="create-to-do" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-text"
        placeholder="Create a new todo..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className="btn">
        {isEditing ? "Edit" : "submit"}
      </button>
    </form>
  );
};

export default TaskForm;
