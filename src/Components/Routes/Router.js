import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../../Root/Root";
import About from "../About/About";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import QuizDetails from "../QuizDetails/QuizDetails";
import Statics from "../Statics/Statics";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          loader: () => fetch(" https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: () => fetch(" https://openapi.programming-hero.com/api/quiz"),
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
        {
          path: "/quiz/:id",
          loader: ({ params }) => {
            return fetch(
              ` https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <QuizDetails></QuizDetails>,
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
