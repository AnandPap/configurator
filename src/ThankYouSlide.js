import React, { useState, useEffect } from "react";
import RestartButton from "./buttons/RestartButton";

const ThankYouSlide = ({
  slideNumber,
  setSlideNumber,
  setSelectedAnswers,
  setFormData,
}) => {
  const [thankYouSlideClassName, setThankYouSlideClassName] = useState("hide");

  useEffect(() => {
    if (slideNumber.current === 6)
      setThankYouSlideClassName("fade-in-from-right");
  }, [slideNumber]);

  const handleRestart = () => {
    localStorage.setItem("questionnaireCompleted", "false");
    setSlideNumber((s) => ({ previous: 0, current: 0 }));
    setSelectedAnswers(Array(5).fill(""));
    setFormData({
      address: "",
      telefon: "",
      email: "",
    });
  };

  return (
    <div className={`thank-you-screen ${thankYouSlideClassName}`}>
      <p>Vielen Dank für Ihre Antwort!</p>
      <RestartButton onClick={handleRestart} text="Gehen Sie wieder" />
    </div>
  );
};

export default ThankYouSlide;
