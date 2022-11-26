import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./styles/index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import User from "./routes/user";
import Shelf from "./routes/user-shelf";
import Reviews from "./routes/user-reviews";
import Lists from "./routes/user-lists";
import Login from "./routes/login";
import Register from "./routes/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "user",
    element: <User />,
  },
  {
    path: "user/shelf",
    element: <Shelf />,
  },
  {
    path: "user/reviews",
    element: <Reviews />,
  },
  {
    path: "user/lists",
    element: <Lists />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);