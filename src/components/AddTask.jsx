import { useRef } from "react";

const AddTask = ({ socket }) => {
  const todoRef = useRef(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    socket.emit("createTask", todoRef.current.value);
    todoRef.current.value = "";
  };
  return (
    <form className="form__input" onSubmit={handleAddTodo}>
      <label htmlFor="task">Add Task</label>
      <input
        type="text"
        name="task"
        id="task"
        className="input"
        ref={todoRef}
        required
      />
      <button className="addTodoBtn">ADD</button>
    </form>
  );
};

export default AddTask;
