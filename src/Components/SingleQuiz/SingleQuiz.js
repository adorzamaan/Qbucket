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
              <div className="flex card relative border m-3 items-center py-5 px-2 hover:border-purple-900 hover:border-2 hover:duration-75 hover:bg-gray-600 hover:text-white">
                <input type="radio" name="" id="" className="" />
                <p className="px-5" style={{ fontSize: "13px" }}>
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleQuiz;
