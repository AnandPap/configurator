import React, { useEffect, useState } from "react";

const Question = ({
  element,
  setEvaluation,
  questionNumber,
  selectedOptions,
  setSelectedOptions,
}) => {
  useEffect(() => {
    if (
      selectedOptions.current === questionNumber &&
      selectedOptions.previous === questionNumber - 1
    )
      setQuestionClassName("fade-in-from-right");
    else if (
      selectedOptions.current === questionNumber &&
      selectedOptions.previous === questionNumber + 1
    ) {
      setQuestionClassName("fade-in-from-left");
    } else if (
      selectedOptions.previous === questionNumber &&
      selectedOptions.current === questionNumber + 1
    ) {
      setQuestionClassName("fade-out-to-left");
    } else if (
      selectedOptions.previous === questionNumber &&
      selectedOptions.current === questionNumber - 1
    ) {
      setQuestionClassName("fade-out-to-right");
    }
    // eslint-disable-next-line
  }, [selectedOptions]);
  const [questionClassName, setQuestionClassName] = useState("hide");
  return (
    <div className={`${questionClassName} absolutely-positioned`}>
      <p>{element.question}</p>
      <div className="answers">
        {element.answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => {
              setEvaluation((s) => s + answer.answerRating);
              console.log(i);
              setSelectedOptions({
                previous: questionNumber,
                current: questionNumber + 1,
              });
            }}
          >
            {answer.answerText}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          setSelectedOptions({
            previous: questionNumber,
            current: questionNumber - 1,
          });
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Question;
