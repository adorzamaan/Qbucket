import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../../Root/Root";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Statics from "../Statics/Statics";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/statics",
          element: <Statics></Statics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Router;
