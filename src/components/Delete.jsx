import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import socketIO from "socket.io-client";
import { useParams } from "react-router-dom";
import { useRef } from "react";

const socket = socketIO.connect("http://localhost:5000");

const DeleteConfirmationModal = () => {
  const navigate = useNavigate();
  const todoRef = useRef(null);
  const { taskName } = useParams();
  const { category, id } = useParams();
  const [task, setTask] = useState("");

  useEffect(() => {
    const lastWord = taskName.split(" ").pop() || "";
    setTask(lastWord);
  }, [taskName]);

  const handleConfirm = (e) => {
    console.log("eeee", e, todoRef);
    e.preventDefault();
    socket.emit("deleteTask", id);
    navigate("/task");
  };

  return (
    <div className="delete-modal">
      <div className="delete-modal-content">
        <div className="delete-modal-header">
          <h2>Are you sure you want to delete the task?</h2>
        </div>
        <div className="delete-modal-footer">
          <Link to={`/task`}>
            <button className="cancel-delete-btn">Cancel</button>
          </Link>

          <button className="confirm-delete-btn" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
