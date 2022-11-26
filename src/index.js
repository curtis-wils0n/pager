import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router
} from "react-router-dom";
import "./styles/index.css";
import Navbar, { loader as rootLoader } from "./routes/navbar";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import User from "./routes/user";
import Shelf from "./routes/user-shelf";
import Reviews from "./routes/user-reviews";
import Lists from "./routes/user-lists";
import Login from "./routes/login";
import Register from "./routes/register";

const router = createBrowserRouter([
<Router>
  <Navbar />

  <Route path='/'
  <Home />
  <Route>

</Router>
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);