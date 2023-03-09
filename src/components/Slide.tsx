import { useEffect, useState } from "react";
import AnswerButton from "../components-buttons/AnswerButton";
import ImageCard from "../components-reusable/ImageCard";
import NextButton from "../components-buttons/NextButton";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateSelectedAnswers, setSlideNumber } from "../redux/questionnaire";

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
    slideId: number,
    question: string,
    answer: string
  ) => {
    dispatch(
      setSlideNumber({
        previous: slideId,
        current: slideId + 1,
      })
    );
    dispatch(
      updateSelectedAnswers({
        id: slideId,
        text: `\n${slideId}. Question: ${question}, Answer: ${answer}`,
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
                  onClick={() => {
                    let answerText;
                    if (answer.imagePrice)
                      answerText = answer.imageTitle + " " + answer.imagePrice;
                    else answerText = answer.imageTitle;
                    answerOnClickHandler(slideId, slide.title, answerText);
                  }}
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
                  onClick={() =>
                    answerOnClickHandler(
                      slideId,
                      slide.title,
                      answer.answerText
                    )
                  }
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
