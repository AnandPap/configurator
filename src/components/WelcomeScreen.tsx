import { useState, useEffect } from "react";
import Icon from "../components-reusable/Icon";
import StartButton from "../components-buttons/StartButton";
import Icon1 from "../assets/icons/icon1.svg";
import Icon2 from "../assets/icons/icon1.svg";
import Icon3 from "../assets/icons/icon1.svg";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setSlideNumber } from "../redux/questionnaire";

const WelcomeScreen = () => {
  const [className, setClassName] = useState("fade-in-from-center");
  const slideNumber = useAppSelector(
    (state) => state.questionnaire.slideNumber
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (slideNumber.current > 0 && slideNumber.previous === 0)
      setClassName("fade-out-to-left");
    else if (slideNumber.current === 0) setClassName("fade-in-from-center");
  }, [slideNumber]);

  return (
    <div className={`welcome-screen ${className}`}>
      <h1 className="welcome-screen-heading">
        Ermitteln Sie hier Ihren Bedarf für Ihre Fassadenreiningung
      </h1>
      <div className="welcome-screen-icons">
        <Icon iconURL={Icon1} className="welcome-screen-icon" />
        <Icon iconURL={Icon2} className="welcome-screen-icon" />
        <Icon iconURL={Icon3} className="welcome-screen-icon" />
      </div>
      <p className="welcome-screen-introduction">
        Mit dem SC-Tool schnell zur Ihrer sauberen Fassade und Preisfindung.
      </p>
      <p className="welcome-screen-introduction">In 5 Schritten zum Ziel.</p>
      <StartButton
        text="LOSLEGEN"
        onClick={() => dispatch(setSlideNumber({ previous: 0, current: 1 }))}
      />
    </div>
  );
};

export default WelcomeScreen;
