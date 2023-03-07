import { useEffect } from "react";
import data from "../data/questionnaireData.json";
import Slide from "./Slide";
import WelcomeScreen from "./WelcomeScreen";
import BackButton from "../components-buttons/BackButton";
import ThankYouScreen from "./ThankYouScreen";
import FormSlide from "./FormSlide";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setSlideNumber } from "../redux/questionnaire";

const Questionnaire = () => {
  const dispatch = useAppDispatch();
  const slideNumber = useAppSelector(
    (state) => state.questionnaire.slideNumber
  );
  const NUMBER_OF_SLIDES = Object.keys(data).length;

  useEffect(() => {
    const local = localStorage.getItem("questionnaireCompleted");
    if (local && JSON.parse(local) === true)
      dispatch(setSlideNumber({ current: 6 }));
    else localStorage.setItem("questionnaireCompleted", "false");
  }, []);

  return (
    <div className="App">
      {slideNumber.current === 0 && <WelcomeScreen />}
      {slideNumber.current > 0 && slideNumber.current <= NUMBER_OF_SLIDES && (
        <div className="slide-header fade-in-from-right">
          <BackButton
            text="ZURÜCK"
            onClick={() => {
              dispatch(
                setSlideNumber({
                  previous: slideNumber.current,
                  current: slideNumber.current - 1,
                })
              );
            }}
          />
          <p className="page-number">{slideNumber.current}/5</p>
        </div>
      )}
      {Object.values(data).map((slide, i) => (
        <Slide key={i} slide={slide} slideId={i + 1} />
      ))}
      {slideNumber.current === NUMBER_OF_SLIDES && (
        <FormSlide slideId={NUMBER_OF_SLIDES} />
      )}
      {slideNumber.current === NUMBER_OF_SLIDES + 1 && <ThankYouScreen />}
    </div>
  );
};

export default Questionnaire;
