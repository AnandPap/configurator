import React, { useEffect, useState } from "react";
import AnswerButton from "./buttons/AnswerButton";
import ImageCard from "./reusable/ImageCard";
import NextButton from "./buttons/NextButton";
import FormSlide from "./FormSlide";

const Slide = ({
  element,
  questionNumber,
  slideNumber,
  setSlideNumber,
  selectedAnswers,
  setSelectedAnswers,
  formData,
  setFormData,
}) => {
  const [questionClassName, setQuestionClassName] = useState("hide");

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
    }
    // eslint-disable-next-line
  }, [slideNumber]);

  const answerOnClickHandler = (answerText, imageTitle, imagePrice) => {
    setSlideNumber({
      previous: questionNumber,
      current: questionNumber + 1,
    });
    setSelectedAnswers((s) => [
      ...s.slice(0, questionNumber - 1),
      `Question title: ${element.question} ${answerText ? answerText : ""} ${
        imageTitle ? imageTitle : ""
      } ${imagePrice ? imagePrice : ""}`,
      ...s.slice(questionNumber),
    ]);
  };

  return (
    <>
      {slideNumber.current === questionNumber && (
        <div className={`slide ${questionClassName}`}>
          <h1 className="slide-heading">{element.question}</h1>
          <p className="slide-introduction">{element.introduction}</p>
          {element.type === "images" && (
            <div className="answer-images">
              {element.answers.map((answer, i) => (
                <ImageCard
                  key={i}
                  i={i + 1}
                  imageClass={answer.imageURL}
                  imageTitle={answer.imageTitle}
                  imagePrice={answer.imagePrice}
                  selectedAnswer={selectedAnswers[questionNumber - 1]}
                  onClick={() =>
                    answerOnClickHandler(answer.imageTitle, answer.imagePrice)
                  }
                />
              ))}
            </div>
          )}
          {element.type === "buttons" && (
            <div className="answer-buttons">
              {element.answers.map((answer, i) => (
                <AnswerButton
                  key={i}
                  i={i + 1}
                  answerText={answer.answerText}
                  selectedAnswer={selectedAnswers[questionNumber - 1]}
                  onClick={() => answerOnClickHandler(answer.answerText)}
                />
              ))}
            </div>
          )}
          {element.type === "form" ? (
            <FormSlide
              element={element}
              selectedAnswers={selectedAnswers}
              answerOnClickHandler={answerOnClickHandler}
              formData={formData}
              setFormData={setFormData}
            />
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
      )}
    </>
  );
};

export default Slide;
