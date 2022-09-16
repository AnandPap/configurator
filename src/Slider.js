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
  return (
    <div className="App">
      {slideNumber.current === 0 ? (
        <WelcomeScreen
          slideNumber={slideNumber}
          setSlideNumber={setSlideNumber}
        />
      ) : slideNumber.current === 6 ? (
        <ThankYouSlide />
      ) : (
        <div className="slider-wrapper">
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
          {Object.values(data).map((element, i) => (
            <Slide
              element={element}
              key={i}
              slideNumber={slideNumber}
              setSlideNumber={setSlideNumber}
              questionNumber={i + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
