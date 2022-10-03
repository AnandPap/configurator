import React, { useState, useEffect } from "react";
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
  const [selectedAnswers, setSelectedAnswers] = useState(Array(5).fill(""));
  const [formData, setFormData] = useState({
    address: "",
    telefon: "",
    email: "",
  });

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("questionnaireCompleted")) === true)
      setSlideNumber((s) => ({ ...s, current: 6 }));
    else localStorage.setItem("questionnaireCompleted", "false");
  }, []);

  console.log(selectedAnswers);

  return (
    <div className="App">
      {slideNumber.current === 0 && (
        <WelcomeScreen
          slideNumber={slideNumber}
          setSlideNumber={setSlideNumber}
        />
      )}
      {slideNumber.current > 0 && slideNumber.current < 6 && (
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
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          formData={formData}
          setFormData={setFormData}
        />
      ))}
      {slideNumber.current === 6 && (
        <ThankYouSlide
          slideNumber={slideNumber}
          setSlideNumber={setSlideNumber}
          setSelectedAnswers={setSelectedAnswers}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default Slider;
