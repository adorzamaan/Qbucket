import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const SingleQuiz = ({ question }) => {
  const { options, id, correctAnswer } = question;
  // const answerOption = options;

  const noftiy = () => toast(correctAnswer, { autoClose: 500 });
  const handleCorrectAnswer = (answer) => {
    if (answer === correctAnswer) {
      return toast.success("Good job,Correct Answer", { autoClose: 1000 });
    } else {
      return toast.error("Failed,try again!!", { autoClose: 500 });
    }
  };

  return (
    <div className="container">
      <div className="card  bg-base-100 shadow-xl p-5">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2
              className="card-title my-4 py-2 font-medium text-purple-700"
              style={{ fontSize: "15px" }}
            >
              {question.question}
            </h2>
            <p>
              <FontAwesomeIcon icon={faEye} onClick={noftiy}></FontAwesomeIcon>
            </p>
          </div>
          <div className="text-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {options.map((answer) => (
              <div
                onClick={() => handleCorrectAnswer(answer)}
                className="flex card relative border m-3 items-center py-5 px-2 hover:border-purple-900 hover:border-2 hover:duration-75 hover:bg-gray-600 hover:text-white"
              >
                <input type="radio" name="" className="" />
                <p className="px-5" style={{ fontSize: "13px" }}>
                  {answer}
                </p>
                <p>{answer.id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleQuiz;
