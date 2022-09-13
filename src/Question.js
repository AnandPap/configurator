import React, { useEffect, useState } from "react";
import AnswerButton from "./buttons/AnswerButton";
import BackButton from "./buttons/BackButton";
import ImageCard from "./ImageCard";
import NextButton from "./buttons/NextButton";
import FormField from "./FormField";

const Question = ({ element, questionNumber, slideNumber, setSlideNumber }) => {
  useEffect(() => {
    if (
      slideNumber.current === questionNumber &&
      slideNumber.previous === questionNumber - 1
    )
      setQuestionClassName("fade-in-from-right");
    else if (
      slideNumber.current === questionNumber &&
      slideNumber.previous === questionNumber + 1
    ) {
      setQuestionClassName("fade-in-from-left");
    } else if (
      slideNumber.previous === questionNumber &&
      slideNumber.current === questionNumber + 1
    ) {
      setQuestionClassName("fade-out-to-left");
    } else if (
      slideNumber.previous === questionNumber &&
      slideNumber.current === questionNumber - 1
    ) {
      setQuestionClassName("fade-out-to-right");
    }
    // eslint-disable-next-line
  }, [slideNumber]);
  const [questionClassName, setQuestionClassName] = useState("hide");
  return (
    <div className={`${questionClassName}`}>
      <div className="question-header">
        <BackButton
          onClick={() => {
            setSlideNumber({
              previous: questionNumber,
              current: questionNumber - 1,
            });
          }}
        />
        <p className="page-number">{questionNumber}/5</p>
      </div>
      <h1 className="question-heading">{element.question}</h1>
      <p className="question-introduction">{element.introduction}</p>
      <div className="answer-images">
        {element.answers.map((answer, i) =>
          answer.imageURL ? (
            <ImageCard
              key={i}
              i={i + 1}
              imageURL={answer.imageURL}
              imageTitle={answer.imageTitle}
              imagePrice={answer.imagePrice}
              onClick={() => {
                setSlideNumber({
                  previous: questionNumber,
                  current: questionNumber + 1,
                });
              }}
            />
          ) : null
        )}
      </div>
      <div className="answer-buttons">
        {element.answers.map((answer, i) =>
          answer.answerText ? (
            <AnswerButton
              key={i}
              i={i + 1}
              answerText={answer.answerText}
              onClick={() => {
                setSlideNumber({
                  previous: questionNumber,
                  current: questionNumber + 1,
                });
              }}
            />
          ) : null
        )}
      </div>
      {element.question === "Dein Info" ? (
        <>
          <form className="ending-form" onSubmit={() => console.log(5)}>
            {element.answers.map((answer, i) => (
              <FormField key={i} formFieldTitle={answer.formFieldTitle} />
            ))}
          </form>
          <NextButton text="SENDEN" />
        </>
      ) : (
        <NextButton
          onClick={() => {
            setSlideNumber({
              previous: questionNumber,
              current: questionNumber + 1,
            });
          }}
          text="NÄCHSTE"
        />
      )}
    </div>
  );
};

export default Question;
