import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const quizs = useLoaderData().data;
  console.log(quizs);
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 text-start justify-center items-center">
          <div className="lg:pr-10">
            <a
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              Build engaging
              <br className="hidden md:block" />
              Online Quizs{" "}
              <span className="inline-block text-deep-purple-accent-400">
                In Minute
              </span>
            </h5>
            <p className="mb-6 text-gray-900">
              Get reward after quiz complete!! Hurry up
            </p>
            <button
              type="button"
              className="px-8 py-3 font-semibold rounded-full dark:bg-purple-500 dark:text-white"
            >
              Start Now
            </button>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="/"
            />
          </div>
        </div>
      </div>
      <div className="divider py-5 my-4 text-2xl font-bold">
        Our Quizs Category
      </div>
      <div className="container justify-center mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12">
        {quizs.map((quiz) => (
          <Quiz quiz={quiz} key={quiz.id}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
