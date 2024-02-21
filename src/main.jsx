import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// components imports
import Login from "./components/Login.jsx";
import Task from "./components/Task.jsx";
import App from "./App";
import "./index.css";
import EditTask from "./components/EditTask.jsx";
import DeleteConfirmationModal from "./components/Delete.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/task",
    element: <Task />,
  },
  {
    path: "/edit/:category/:id/:taskName",
    element: <EditTask />,
  },
  {
    path: "/delete/:category/:id/:taskName",
    element: <DeleteConfirmationModal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
