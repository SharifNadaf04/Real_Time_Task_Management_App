import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import socketIO from "socket.io-client";
import { useParams } from "react-router-dom";

const socket = socketIO.connect("http://localhost:5000");

const EditTask = () => {
  const navigate = useNavigate();
  const todoRef = useRef(null);
  const { taskName } = useParams();
  const { category, id } = useParams();

  const [task, setTask] = useState("");

  useEffect(() => {
    const lastWord = taskName.split("/").pop() || "";
    setTask(lastWord);
  }, [taskName]);

  const handleEditSave = (e) => {
    console.log("eeee", e, todoRef);
    const data = [
      { value: todoRef.current.value },
      { category: category },
      { id: id },
    ];
    e.preventDefault();
    socket.emit("editTask", data);
    navigate("/task");
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Task</h2>
        </div>
        <div className="modal-body">
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            ref={todoRef}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button className="save-btn" onClick={handleEditSave}>
            Save
          </button>
          <Link to={`/task`}>
            <button className="cancel-btn">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
