import React, { useState, useEffect } from "react";

const AnswerButton = ({ i, answerText, onClick, selectedAnswer }) => {
  const [border, setBorder] = useState("no-border");
  const letter =
    i === 1 ? "A" : i === 2 ? "B" : i === 3 ? "C" : i === 4 ? "D" : "E";

  useEffect(() => {
    if (selectedAnswer.includes(answerText)) setBorder("border");
    console.log(selectedAnswer.includes(answerText), answerText);
    //eslint-disable-next-line
  }, []);

  return (
    <div
      className="answer-button-wrapper"
      onClick={() => {
        setBorder("border");
        onClick();
      }}
    >
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
