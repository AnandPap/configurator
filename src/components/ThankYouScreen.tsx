import { useState, useEffect } from "react";
import RestartButton from "../components-buttons/RestartButton";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  resetSelectedAnswers,
  setFormData,
  setSlideNumber,
} from "../redux/questionnaire";

const ThankYouScreen = () => {
  const [className, setClassName] = useState("hide");
  const slideNumber = useAppSelector(
    (state) => state.questionnaire.slideNumber
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (slideNumber.current === 6) setClassName("fade-in-from-right");
  }, [slideNumber]);

  const handleRestart = () => {
    localStorage.setItem("questionnaireCompleted", "false");
    dispatch(setSlideNumber({ previous: 0, current: 0 }));
    dispatch(resetSelectedAnswers(Array(5).fill("")));
    dispatch(
      setFormData({
        address: "",
        telefon: "",
        email: "",
      })
    );
  };

  return (
    <div className={`thank-you-screen ${className}`}>
      <p>Vielen Dank für Ihre Antwort!</p>
      <RestartButton text="Gehen Sie wieder" onClick={handleRestart} />
    </div>
  );
};

export default ThankYouScreen;
