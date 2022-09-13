import React from "react";

const AnswerButton = ({ i, answerText }) => {
  const letter =
    i === 1 ? "A" : i === 2 ? "B" : i === 3 ? "C" : i === 4 ? "D" : "E";
  return (
    <div className="answer-button-wrapper">
      <button className="answer-button">
        <div className="answer-circle">
          <p>{letter}</p>
        </div>
        <p className="answer-button-text">{answerText}</p>
      </button>
    </div>
  );
};

export default AnswerButton;
