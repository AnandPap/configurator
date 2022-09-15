import React, { useState, useEffect } from "react";
import Icon from "./reusable/Icon";
import StartButton from "./buttons/StartButton";

const WelcomeScreen = ({ slideNumber, setSlideNumber }) => {
  const [welcomeScreenClassName, setWelcomeScreenClassName] = useState(
    "fade-in-from-center"
  );
  useEffect(() => {
    if (slideNumber.current > 0 && slideNumber.previous === 0)
      setWelcomeScreenClassName("fade-out-to-left");
    else if (slideNumber.current === 0 && slideNumber.previous > 0) {
      setWelcomeScreenClassName("fade-in-from-center");
    }
  }, [slideNumber]);
  return (
    <div className={`welcome-screen ${welcomeScreenClassName}`}>
      <h1 className="welcome-screen-heading">
        Ermitteln Sie hier Ihren Bedarf für Ihre Fassadenreiningung
      </h1>
      <div className="welcome-screen-icons">
        <Icon
          iconURL={`${process.env.PUBLIC_URL}/icons/icon1.svg`}
          className="welcome-screen-icon"
        />
        <Icon
          iconURL={`${process.env.PUBLIC_URL}/icons/icon2.svg`}
          className="welcome-screen-icon"
        />
        <Icon
          iconURL={`${process.env.PUBLIC_URL}/icons/icon3.svg`}
          className="welcome-screen-icon"
        />
      </div>
      <p className="welcome-screen-introduction">
        Mit dem SC-Tool schnell zur Ihrer sauberen Fassade und Preisfindung.
      </p>
      <p className="welcome-screen-introduction">In 5 Schritten zum Ziel.</p>
      <StartButton
        text="LOSLEGEN"
        onClick={() => setSlideNumber({ previous: 0, current: 1 })}
      />
    </div>
  );
};

export default WelcomeScreen;
