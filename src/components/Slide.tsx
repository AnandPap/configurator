import { useEffect, useState } from "react";
import AnswerButton from "../components-buttons/AnswerButton";
import ImageCard from "../components-reusable/ImageCard";
import NextButton from "../components-buttons/NextButton";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setSelectedAnswers, setSlideNumber } from "../redux/questionnaire";

type SlideProps = {
  slide: any;
  slideId: number;
};

const Slide = ({ slide, slideId }: SlideProps) => {
  const [className, setClassName] = useState("hide");
  const selectedAnswers = useAppSelector(
    (state) => state.questionnaire.selectedAnswers
  );
  const slideNumber = useAppSelector(
    (state) => state.questionnaire.slideNumber
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (slideNumber.current === slideId && slideNumber.previous === slideId - 1)
      setClassName("fade-in-from-right");
    else if (
      slideNumber.current === slideId &&
      slideNumber.previous === slideId + 1
    ) {
      setClassName("fade-in-from-left");
    }
  }, [slideNumber]);

  const answerOnClickHandler = (
    text?: string,
    imageTitle?: string,
    imagePrice?: number
  ) => {
    dispatch(
      setSlideNumber({
        previous: slideId,
        current: slideId + 1,
      })
    );
    dispatch(
      setSelectedAnswers({
        type: "update",
        id: slideId,
        text: `Question title: ${slide.title} ${text ? text : ""} ${
          imageTitle ? imageTitle : ""
        } ${imagePrice ? imagePrice : ""}`,
      })
    );
  };

  return (
    <>
      {slideNumber.current === slideId && (
        <div className={`slide ${className}`}>
          <h1 className="slide-heading">{slide.title}</h1>
          <p className="slide-introduction">{slide.introduction}</p>
          {slide.type === "images" && (
            <div className="answer-images">
              {slide.answers.map((answer: any, i: number) => (
                <ImageCard
                  key={i}
                  i={i + 1}
                  imageClass={answer.imageURL}
                  imageTitle={answer.imageTitle}
                  imagePrice={answer.imagePrice}
                  selectedAnswer={selectedAnswers[slideId - 1]}
                  onClick={() =>
                    answerOnClickHandler(answer.imageTitle, answer.imagePrice)
                  }
                />
              ))}
            </div>
          )}
          {slide.type === "buttons" && (
            <div className="answer-buttons">
              {slide.answers.map((answer: any, i: number) => (
                <AnswerButton
                  key={i}
                  i={i + 1}
                  text={answer.answerText}
                  selectedAnswer={selectedAnswers[slideId - 1]}
                  onClick={() => answerOnClickHandler(answer.answerText)}
                />
              ))}
            </div>
          )}
          <NextButton
            text="NÄCHSTE"
            onClick={() => {
              dispatch(
                setSlideNumber({
                  previous: slideId,
                  current: slideId + 1,
                })
              );
            }}
          />
        </div>
      )}
    </>
  );
};

export default Slide;