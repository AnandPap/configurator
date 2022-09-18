import React, { useState } from "react";
import data from "./data/questionnaireData.json";
import Slide from "./Slide";
import WelcomeScreen from "./WelcomeScreen";
import BackButton from "./buttons/BackButton";
import ThankYouSlide from "./ThankYouSlide";

const Slider = () => {
  const [slideNumber, setSlideNumber] = useState({
    previous: 0,
    current: 0,
  });
  const [selectedAnswers, setSelectedAnswers] = useState(Array(6));
  console.log(selectedAnswers);
  return (
    <div className="App">
      <WelcomeScreen
        slideNumber={slideNumber}
        setSlideNumber={setSlideNumber}
      />
      <div className="slider-wrapper">
        {slideNumber.current > 0 && slideNumber.current < 5 && (
          <div className="slide-header fade-in-from-right">
            <BackButton
              text="ZURÜCK"
              onClick={() => {
                setSlideNumber((s) => ({
                  previous: s.current,
                  current: s.current - 1,
                }));
              }}
            />
            <p className="page-number">{slideNumber.current}/5</p>
          </div>
        )}
        {Object.values(data).map((element, i) => (
          <Slide
            element={element}
            key={i}
            slideNumber={slideNumber}
            setSlideNumber={setSlideNumber}
            questionNumber={i + 1}
          />
        ))}
        <ThankYouSlide slideNumber={slideNumber} />
      </div>
    </div>
  );
};

export default Slider;
