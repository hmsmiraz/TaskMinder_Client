import {
    createBrowserRouter,
  } from "react-router-dom";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="text-red-500 text-center">Hello world!</div>,
    },
  ]);