import React from "react";

const AnswerButton = ({ i, answerText, onClick, selectedAnswer }) => {
  const border =
    selectedAnswer.answerText === answerText ? "border" : "no-border";
  const letter =
    i === 1 ? "A" : i === 2 ? "B" : i === 3 ? "C" : i === 4 ? "D" : "E";
  return (
    <div className="answer-button-wrapper" onClick={onClick}>
      <button className={`answer-button ${border}`}>
        <div className="answer-circle">
          <p>{letter}</p>
        </div>
        <p className="answer-button-text">{answerText}</p>
      </button>
    </div>
  );
};

export default AnswerButton;
