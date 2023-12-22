import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import AddTask from "../Pages/Dashboard/AddTask";
import AllTask from "../Pages/Dashboard/AllTask";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
      ]
    },
    {
      path: "dashboard",
      element: (
        <PrivateRoutes>
          <Dashboard></Dashboard>
        </PrivateRoutes>
      ),
      children: [
        // normal user route
        {
          path: "addtask",
          element: <AddTask></AddTask>,
        },
        {
          path: "allTask",
          element: <AllTask></AllTask>,
        },
      ]
    }
  ]);