import React from "react";

const SingleQuiz = ({ question }) => {
  const answerOption = question.options;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl p-5">
        <div className="card-body">
          <h2 className="card-title my-4 py-2 font-medium">
            {question.question}
          </h2>
          <div className="text-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {answerOption.map((answer) => (
              <div className="flex justify-between">
                <li className="flex items-center bg-purple-600 rounded-sm m-4 px-12 list-inside py-2">
                  <input type="radio" name="" id="" />
                  <p className="text-white py-2 px-2">{answer}</p>
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleQuiz;