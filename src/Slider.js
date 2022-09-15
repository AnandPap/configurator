import React, { useState } from "react";
import data from "./data/questionnaireData.json";
import Slide from "./Slide";
import WelcomeScreen from "./WelcomeScreen";

const Slider = () => {
  const [slideNumber, setSlideNumber] = useState({
    previous: 0,
    current: 0,
  });
  return (
    <div className="App">
      <WelcomeScreen
        slideNumber={slideNumber}
        setSlideNumber={setSlideNumber}
      />
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
  );
};

export default Slider;
