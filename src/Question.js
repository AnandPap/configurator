import React, { useEffect, useState } from "react";
import AnswerButton from "./AnswerButton";
import BackButton from "./BackButton";
import ImageCard from "./ImageCard";
import NextButton from "./NextButton";

const Question = ({
  element,
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
      <div className="question-header">
        <BackButton
          onClick={() => {
            setSelectedOptions({
              previous: questionNumber,
              current: questionNumber - 1,
            });
          }}
        />
        <p className="page-number">{questionNumber}/5</p>
      </div>
      <h1 className="question-heading">{element.question}</h1>
      <p className="question-introduction">{element.introduction}</p>
      <div className="answers">
        {element.answers.map((answer, i) =>
          answer.image ? (
            <ImageCard
              key={i}
              i={i + 1}
              imageURL={answer.imageURL}
              imageTitle={answer.imageTitle}
              imagePrice={answer.imagePrice}
              onClick={() => {
                setSelectedOptions({
                  previous: questionNumber,
                  current: questionNumber + 1,
                });
              }}
            />
          ) : (
            <AnswerButton key={i} />
          )
        )}
      </div>
      <NextButton
        onClick={() => {
          setSelectedOptions({
            previous: questionNumber,
            current: questionNumber + 1,
          });
        }}
      />
    </div>
  );
};

export default Question;
