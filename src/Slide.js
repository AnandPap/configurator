import React, { useEffect, useState } from "react";
import AnswerButton from "./buttons/AnswerButton";
import BackButton from "./buttons/BackButton";
import ImageCard from "./reusable/ImageCard";
import NextButton from "./buttons/NextButton";
import FormField from "./reusable/FormField";

const Slide = ({ element, questionNumber, slideNumber, setSlideNumber }) => {
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
      <div className="slide-header">
        <BackButton
          text="ZURÜCK"
          onClick={() => {
            setSlideNumber({
              previous: questionNumber,
              current: questionNumber - 1,
            });
          }}
        />
        <p className="page-number">{questionNumber}/5</p>
      </div>
      <h1 className="slide-heading">{element.question}</h1>
      <p className="slide-introduction">{element.introduction}</p>
      <div className="answer-images">
        {element.answers.map((answer, i) =>
          answer.imageURL ? (
            <ImageCard
              key={i}
              i={i + 1}
              imageClass={answer.imageURL}
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
          <NextButton text="SENDEN" onClick={() => console.log(5)} />
        </>
      ) : (
        <NextButton
          text="NÄCHSTE"
          onClick={() => {
            setSlideNumber({
              previous: questionNumber,
              current: questionNumber + 1,
            });
          }}
        />
      )}
    </div>
  );
};

export default Slide;
