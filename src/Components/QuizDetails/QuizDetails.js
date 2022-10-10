import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const QuizDetails = () => {
  const quizDetails = useLoaderData().data;
  console.log(quizDetails);
  const { name } = quizDetails;
  const questions = quizDetails.questions;
  console.log(questions);
  return (
    <div>
      <h3 className="font-bold text-2xl py-4">Quiz of {name}</h3>
      <p className="font-medium">{questions.question}</p>
      <div className="container mx-auto justify-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12">
        {questions.map((question) => (
          <SingleQuiz question={question} key={question.id}></SingleQuiz>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
