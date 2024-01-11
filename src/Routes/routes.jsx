import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTask from "../Pages/AddTask/AddTask";
import AllTask from "../Pages/AllTask/AllTask";

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
        {
          path: "addTask",
          element: <AddTask></AddTask>,
        },
        {
          path: "allTask",
          element: <AllTask></AllTask>,
        },
      ]
    },
  ]);